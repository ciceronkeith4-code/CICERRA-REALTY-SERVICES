import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getKv } from "@/lib/kv-store";
import { isAdminRequest } from "@/lib/admin-session";
import type { Property } from "@/data/properties";

const KV_KEY = "cicerra_properties";
const MAX_BODY_BYTES = 5 * 1024 * 1024;

const propertySchema = z.object({
  id: z.string().min(1).max(200),
  name: z.string().min(1).max(300),
  image: z.string().max(4_000_000).optional(),
  location: z.string().max(300),
  price: z.string().max(100),
  beds: z.number().nonnegative().optional(),
  baths: z.number().nonnegative().optional(),
  lot: z.string().max(100),
  tag: z.string().max(100),
  type: z.enum(["Lot", "House and Lot", "Condominium", "Commercial Space"]),
  category: z.enum(["house", "condo", "resort", "lot"]).optional(),
  details: z.string().max(10_000).optional(),
});

const noStore = { "cache-control": "no-store" };

export const Route = createFileRoute("/api/properties")({
  server: {
    handlers: {
      // Returns the stored listings, or `null` when nothing has been saved yet
      // (the client then uses the bundled defaults).
      GET: async () => {
        const kv = getKv();
        if (!kv) return Response.json(null, { headers: noStore });
        try {
          const stored = await kv.get<Property[]>(KV_KEY);
          return Response.json(Array.isArray(stored) ? stored : null, { headers: noStore });
        } catch (error) {
          console.error("Failed to read properties from KV", error);
          return Response.json({ error: "Storage unavailable" }, { status: 503, headers: noStore });
        }
      },

      POST: async ({ request }) => {
        if (!(await isAdminRequest(request))) {
          return Response.json({ error: "Unauthorized" }, { status: 401, headers: noStore });
        }
        if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
          return Response.json({ error: "Payload too large" }, { status: 413, headers: noStore });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400, headers: noStore });
        }
        const parsed = z.array(propertySchema).max(500).safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid listings payload", issues: parsed.error.issues.slice(0, 5) },
            { status: 400, headers: noStore },
          );
        }

        const kv = getKv();
        if (!kv) {
          return Response.json(
            { error: "Listing storage is not configured" },
            { status: 503, headers: noStore },
          );
        }
        try {
          await kv.set(KV_KEY, parsed.data);
          return Response.json({ success: true }, { headers: noStore });
        } catch (error) {
          console.error("Failed to write properties to KV", error);
          return Response.json({ error: "Storage unavailable" }, { status: 503, headers: noStore });
        }
      },
    },
  },
});
