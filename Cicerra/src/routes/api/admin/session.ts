import { createFileRoute } from "@tanstack/react-router";
import {
  clearSessionCookie,
  createSessionCookie,
  isAdminConfigured,
  isAdminRequest,
  verifyAdminPassword,
} from "@/lib/admin-session";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const noStore = { "cache-control": "no-store" };

export const Route = createFileRoute("/api/admin/session")({
  server: {
    handlers: {
      GET: async ({ request }) =>
        Response.json({ authenticated: await isAdminRequest(request) }, { headers: noStore }),

      POST: async ({ request }) => {
        if (!isAdminConfigured()) {
          return Response.json(
            { error: "Admin login is not configured" },
            { status: 503, headers: noStore },
          );
        }
        if (!rateLimit(`login:${clientIp(request)}`, 5, 15 * 60 * 1000)) {
          return Response.json(
            { error: "Too many attempts. Try again later." },
            { status: 429, headers: noStore },
          );
        }

        let password = "";
        try {
          const body = (await request.json()) as { password?: unknown };
          if (typeof body.password === "string") password = body.password;
        } catch {
          // fall through with an empty password
        }

        if (!(await verifyAdminPassword(password))) {
          return Response.json({ error: "Incorrect password" }, { status: 401, headers: noStore });
        }
        return Response.json(
          { authenticated: true },
          { headers: { ...noStore, "set-cookie": await createSessionCookie() } },
        );
      },

      DELETE: async () =>
        Response.json(
          { authenticated: false },
          { headers: { ...noStore, "set-cookie": clearSessionCookie() } },
        ),
    },
  },
});
