import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type HTMLAttributes } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { INTEREST_OPTIONS } from "@/data/contact";
import { seo } from "@/lib/seo";
import { Facebook, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import ryanImg from "@/assets/ryan-arms-crossed.jpg";
import ryanWebp from "@/assets/ryan-arms-crossed.webp";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact — Cicerra Realty Services",
      description:
        "Book a consultation, ask a question, or schedule a viewing. The Cicerra Realty Services team is here to help.",
      path: "/contact",
    }),
  component: ContactPage,
});

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "interest" | "message", string>>;

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    setFormError(null);
    setFieldErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const isJson = (res.headers.get("content-type") ?? "").includes("application/json");
      const body = (isJson ? await res.json() : {}) as {
        error?: string;
        fieldErrors?: Record<string, string[] | undefined>;
      };

      if (!res.ok) {
        const errors: FieldErrors = {};
        for (const [key, messages] of Object.entries(body.fieldErrors ?? {})) {
          if (messages?.[0]) errors[key as keyof FieldErrors] = messages[0];
        }
        setFieldErrors(errors);
        const firstInvalid = Object.keys(errors)[0];
        if (firstInvalid) form.querySelector<HTMLElement>(`#contact-${firstInvalid}`)?.focus();
        throw new Error(body.error ?? "We couldn't send your message.");
      }

      form.reset();
      toast.success("Thanks — we'll be in touch shortly.");
    } catch (err) {
      const message =
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : "We couldn't send your message.";
      setFormError(`${message} Please try again, or email cicerra.realty@gmail.com directly.`);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="container-rail grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep font-bold">Get in touch</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-balance sm:text-6xl text-[#1B365D]">
            Let's find the<br />
            <span className="italic text-muted-foreground">right property.</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground">
            Tell us a little about what you're looking for and a member of our team will reach
            out within one business day.
          </p>

          <div className="mt-10 rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-6 sm:p-7">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-gold/40 shadow-sm bg-neutral-100">
                <picture>
                  <source srcSet={ryanWebp} type="image/webp" />
                  <img
                    src={ryanImg}
                    alt="Ryan John Ciceron"
                    width={673}
                    height={1000}
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                </picture>
              </div>
              <div>
                <h2 className="font-sans text-base font-bold text-[#1B365D] dark:text-gold leading-tight">
                  Ryan John Ciceron, REB, REA
                </h2>
                <p className="text-xs text-muted-foreground font-semibold">
                  Licensed Real Estate Broker & Appraiser
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-neutral-200/60 dark:border-neutral-800/80 pt-5 text-xs text-neutral-600 dark:text-neutral-300 font-medium">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground uppercase tracking-widest text-[11px] font-bold">REB PRC License</span>
                <span className="font-mono font-bold text-sm text-[#1B365D] dark:text-gold">35705</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground uppercase tracking-widest text-[11px] font-bold">REA PRC License</span>
                <span className="font-mono font-bold text-sm text-[#1B365D] dark:text-gold">13309</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground uppercase tracking-widest text-[11px] font-bold">DHSUD Reg No.</span>
                <span className="font-mono font-bold text-sm text-[#1B365D] dark:text-gold">10178</span>
              </div>
            </div>

            <div className="mt-6 space-y-3.5 border-t border-neutral-200/60 dark:border-neutral-800/80 pt-5 text-xs">
              <a href="tel:09603503659" className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-gold transition">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <span className="font-sans font-semibold text-sm">09603503659</span>
              </a>
              <a href="mailto:cicerra.realty@gmail.com" className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-gold transition">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <span className="font-sans font-semibold text-sm">cicerra.realty@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span className="text-sm">Imus, Cavite, Philippines</span>
              </div>
              <a
                href="https://facebook.com/cicerrarealestateservice"
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-gold transition"
              >
                <Facebook className="h-4 w-4 text-gold shrink-0" />
                <span className="min-w-0 break-words text-sm">
                  Cicerra Realty Services
                  <span className="sr-only"> on Facebook (opens in a new tab)</span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            noValidate
            aria-describedby={formError ? "contact-form-error" : undefined}
            className="relative rounded-3xl border border-border bg-card p-8 sm:p-10"
          >
            {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="Full name"
                name="name"
                autoComplete="name"
                required
                error={fieldErrors.name}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                required
                error={fieldErrors.email}
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                error={fieldErrors.phone}
              />
              <div>
                <label htmlFor="contact-interest" className={labelClass}>
                  I'm interested in
                </label>
                <div className="relative">
                  <select
                    id="contact-interest"
                    name="interest"
                    defaultValue=""
                    aria-invalid={fieldErrors.interest ? true : undefined}
                    aria-describedby={fieldErrors.interest ? "contact-interest-error" : undefined}
                    className={`${controlClass} appearance-none pr-10`}
                  >
                    <option value="">Select one (optional)</option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  />
                </div>
                <FieldError id="contact-interest-error" message={fieldErrors.interest} />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="contact-message" className={labelClass}>
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                aria-required="true"
                aria-invalid={fieldErrors.message ? true : undefined}
                aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                className={`${controlClass} resize-none`}
                placeholder="Tell us a little about what you're looking for."
              />
              <FieldError id="contact-message-error" message={fieldErrors.message} />
            </div>
            {formError && (
              <p
                id="contact-form-error"
                role="alert"
                className="mt-6 rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive"
              >
                {formError}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
            >
              {loading ? "Sending…" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const labelClass = "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground";
const controlClass =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition focus:border-gold aria-[invalid=true]:border-destructive";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-destructive">
      {message}
    </p>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
  inputMode,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  error?: string;
}) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={controlClass}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}
