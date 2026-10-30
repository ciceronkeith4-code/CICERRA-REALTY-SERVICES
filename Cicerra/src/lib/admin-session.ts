// Server-only admin session: a signed, HttpOnly cookie holding an expiry time.
// Requires ADMIN_PASSWORD; ADMIN_SESSION_SECRET is used for signing when set
// (otherwise the password doubles as the signing key).
const COOKIE_NAME = "cicerra_admin";
const MAX_AGE_SECONDS = 60 * 60 * 8;

const encoder = new TextEncoder();

function signingSecret(): string {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

async function hmac(value: string, key: string): Promise<string> {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(value)));
  let bin = "";
  for (const byte of sig) bin += String.fromCharCode(byte);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function verifyAdminPassword(candidate: string): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  // Compare fixed-length digests so the comparison doesn't leak the password length.
  const [a, b] = await Promise.all([hmac(candidate, "pw"), hmac(expected, "pw")]);
  return safeEqual(a, b);
}

function cookieAttributes(maxAge: number): string {
  return `Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

export async function createSessionCookie(): Promise<string> {
  const expires = String(Date.now() + MAX_AGE_SECONDS * 1000);
  const sig = await hmac(expires, signingSecret());
  return `${COOKIE_NAME}=${expires}.${sig}; ${cookieAttributes(MAX_AGE_SECONDS)}`;
}

export function clearSessionCookie(): string {
  return `${COOKIE_NAME}=; ${cookieAttributes(0)}`;
}

export async function isAdminRequest(request: Request): Promise<boolean> {
  const secret = signingSecret();
  if (!secret) return false;

  const cookie = request.headers
    .get("cookie")
    ?.split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!cookie) return false;

  const [expires, sig] = cookie.slice(COOKIE_NAME.length + 1).split(".");
  if (!expires || !sig || Number(expires) < Date.now()) return false;
  return safeEqual(sig, await hmac(expires, secret));
}
