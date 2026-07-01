import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import ryanImg from "@/assets/ryan-arms-crossed.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cicerra Realty Services" },
      {
        name: "description",
        content:
          "Book a consultation, ask a question, or schedule a viewing. The Cicerra Realty Services team is here to help.",
      },
      { property: "og:title", content: "Contact Cicerra Realty Services" },
      {
        property: "og:description",
        content: "Schedule a consultation with our team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch shortly.");
    }, 700);
  };

  return (
    <section className="bg-background pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="container-rail grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Get in touch</p>
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
                <img
                  src={ryanImg}
                  alt="Ryan John Ciceron"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-sans text-base font-bold text-[#1B365D] dark:text-gold leading-tight">
                  Ryan John Ciceron, REB, REA
                </h3>
                <p className="text-xs text-muted-foreground font-semibold">
                  Licensed Real Estate Broker & Appraiser
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-neutral-200/60 dark:border-neutral-800/80 pt-5 text-xs text-neutral-600 dark:text-neutral-300 font-medium">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground uppercase tracking-widest text-[9px] font-bold">REB PRC License</span>
                <span className="font-mono font-bold text-sm text-[#1B365D] dark:text-gold">35705</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground uppercase tracking-widest text-[9px] font-bold">REA PRC License</span>
                <span className="font-mono font-bold text-sm text-[#1B365D] dark:text-gold">13309</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground uppercase tracking-widest text-[9px] font-bold">DHSUD Reg No.</span>
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
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-gold transition"
              >
                <Facebook className="h-4 w-4 text-gold shrink-0" />
                <span className="text-sm">facebook.com/cicerrarealestateservice</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-8 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="I'm interested in" name="interest" placeholder="Buying, selling, investing…" />
            </div>
            <div className="mt-6">
              <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold"
                placeholder="Tell us a little about what you're looking for."
              />
            </div>
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

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold"
      />
    </div>
  );
}
