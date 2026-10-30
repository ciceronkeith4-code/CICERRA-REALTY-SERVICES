import { createClient, type VercelKV } from "@vercel/kv";

// Server-only. Vercel KV (now Upstash) exposes either the legacy KV_* or the
// UPSTASH_REDIS_* variable names depending on how the store was connected.
// Returns null when no store is configured so callers can degrade gracefully
// instead of throwing (the old `kv` proxy throws on first use when unset).
let client: VercelKV | null | undefined;

export function getKv(): VercelKV | null {
  if (client !== undefined) return client;
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  client = url && token ? createClient({ url, token }) : null;
  return client;
}
