import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cicerra Real Estate Service" },
      {
        name: "description",
        content:
          "Residential sales, investment advisory, brokerage, consultation, documentation, and marketing — handled end-to-end by Cicerra.",
      },
      { property: "og:title", content: "Services — Cicerra Real Estate Service" },
      {
        property: "og:description",
        content: "Every step of the real estate journey, beautifully handled.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-background pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container-rail">
          <Reveal className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">What we do</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-balance sm:text-7xl">
              Every step,<br />
              <span className="italic text-muted-foreground">beautifully handled.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="container-rail">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col bg-background p-10 transition hover:bg-surface">
                  <s.icon className="h-8 w-8 text-gold transition-transform group-hover:-translate-y-1" />
                  <h3 className="mt-6 font-display text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige/40 py-24 sm:py-32">
        <div className="container-rail text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl text-balance sm:text-5xl">
              Not sure where to start? We'll walk you through it.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-primary/90"
            >
              Book a consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
