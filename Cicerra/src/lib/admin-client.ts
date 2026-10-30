// Client helpers for the server-side admin session (see /api/admin/session).
// The sessionStorage flag only drives UI (navbar badge); the server cookie is
// what actually authorizes writes.
const UI_FLAG = "cicerra_admin_auth";

function setUiFlag(on: boolean) {
  if (on) sessionStorage.setItem(UI_FLAG, "true");
  else sessionStorage.removeItem(UI_FLAG);
  window.dispatchEvent(new Event("cicerra_auth_change"));
}

export async function checkAdminSession(): Promise<boolean> {
  try {
    const res = await fetch("/api/admin/session", { credentials: "same-origin" });
    const body = (await res.json()) as { authenticated?: boolean };
    const ok = res.ok && body.authenticated === true;
    setUiFlag(ok);
    return ok;
  } catch {
    setUiFlag(false);
    return false;
  }
}

export async function adminLogin(password: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/admin/session", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setUiFlag(true);
      return { ok: true };
    }
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    return { ok: false, error: body.error ?? `Sign-in failed (HTTP ${res.status}).` };
  } catch {
    return { ok: false, error: "Could not reach the server." };
  }
}

export async function adminLogout(): Promise<void> {
  try {
    await fetch("/api/admin/session", { method: "DELETE", credentials: "same-origin" });
  } finally {
    setUiFlag(false);
  }
}
