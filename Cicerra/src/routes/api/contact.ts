import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { INTEREST_OPTIONS } from "@/data/contact";

// Contact form delivery via Resend (https://resend.com).
// Env: RESEND_API_KEY (required), CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (optional).
const DEFAULT_TO = "cicerra.realty@gmail.com";
const DEFAULT_FROM = "Cicerra Website <onboarding@resend.dev>";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[0-9+()\-\s]*$/, "Please enter a valid phone number.")
    .optional()
    .default(""),
  interest: z.enum(INTEREST_OPTIONS).optional().or(z.literal("")).default(""),
  message: z.string().trim().min(1, "Please enter a message.").max(5000),
  // Honeypot: hidden from people, filled in by naive bots.
  website: z.string().optional().default(""),
});

const noStore = { "cache-control": "no-store" };

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!rateLimit(`contact:${clientIp(request)}`, 5, 10 * 60 * 1000)) {
          return Response.json(
            { error: "Too many messages. Please try again in a few minutes." },
            { status: 429, headers: noStore },
          );
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400, headers: noStore });
        }

        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            {
              error: "Please check the highlighted fields.",
              fieldErrors: parsed.error.flatten().fieldErrors,
            },
            { status: 400, headers: noStore },
          );
        }
        const data = parsed.data;

        // Pretend success to bots so they don't retry; nothing is sent.
        if (data.website) return Response.json({ ok: true }, { headers: noStore });

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          console.error("RESEND_API_KEY is not set; contact form submission was not delivered.");
          return Response.json(
            { error: "Our contact form is temporarily unavailable." },
            { status: 503, headers: noStore },
          );
        }

        const text = [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone || "—"}`,
          `Interested in: ${data.interest || "—"}`,
          "",
          data.message,
        ].join("\n");

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
            body: JSON.stringify({
              from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
              to: [process.env.CONTACT_TO_EMAIL || DEFAULT_TO],
              reply_to: data.email,
              subject: `New website inquiry from ${data.name}`,
              text,
            }),
          });
          if (!res.ok) {
            console.error("Resend rejected contact email", res.status, await res.text());
            return Response.json(
              { error: "We couldn't send your message." },
              { status: 502, headers: noStore },
            );
          }
        } catch (error) {
          console.error("Failed to reach Resend", error);
          return Response.json(
            { error: "We couldn't send your message." },
            { status: 502, headers: noStore },
          );
        }

        return Response.json({ ok: true }, { headers: noStore });
      },
    },
  },
});
