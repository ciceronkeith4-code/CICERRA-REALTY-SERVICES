import { createFileRoute } from "@tanstack/react-router";
import { kv } from "@vercel/kv";
import type { Property } from "@/data/properties";

export const Route = createFileRoute("/api/properties")({
  async loader() {
    const stored = await kv.get<Property[]>("cicerra_properties");
    return stored ?? [];
  },
  async action({ request }) {
    const payload: Property[] = await request.json();
    await kv.set("cicerra_properties", payload);
    return { success: true };
  },
});
