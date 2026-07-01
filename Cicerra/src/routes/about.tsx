import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import ryanImg from "@/assets/ryan-arms-crossed.png";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cicerra Real Estate Service" },
      {
        name: "description",
        content:
          "Learn about Cicerra Real Estate Service — a decade of trusted real estate guidance for Filipino families and investors.",
      },
      { property: "og:title", content: "About Cicerra Real Estate Service" },
      {
        property: "og:description",
        content: "More than real estate. Helping families find home.",
      },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2014", title: "A quiet beginning", body: "Cicerra opens with a single conviction: real estate done with care, never pressure." },
  { year: "2017", title: "Trusted across the metro", body: "Our family of clients grows organically — referral by referral." },
  { year: "2021", title: "Investment advisory", body: "We expand into yield-focused advisory for clients building long-term portfolios." },
  { year: "2025", title: "A new chapter", body: "Today we serve hundreds of families across Luzon — and we're just getting started." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-background pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container-rail">
          <Reveal className="max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground hover:text-gold mb-6 transition cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">About Cicerra</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-balance sm:text-7xl">
              More than real estate.<br />
              <span className="italic text-muted-foreground">Helping families find home.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 sm:pb-32">
        <div className="container-rail grid gap-12 lg:grid-cols-12 items-center max-w-5xl mx-auto w-full">
          {/* Side Image */}
          <Reveal className="lg:col-span-5 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl border-2 border-gold/30 bg-white p-2 shadow-md w-fit">
              <img
                src={ryanImg}
                alt="Ryan John Ciceron"
                loading="lazy"
                width={600}
                height={800}
                className="h-[55vh] min-h-[360px] w-auto max-w-full rounded-2xl object-contain"
              />
            </div>
          </Reveal>

          {/* Visual Story Blocks */}
          <div className="lg:col-span-7 space-y-10 pl-0 lg:pl-6">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">WHO WE ARE</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl text-[#1B365D]">
                A decade of patient, local expertise.
              </h2>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2">
              {[
                {
                  title: "Founded in Care",
                  bold: "A promise of calm.",
                  text: "Cicerra Realty Services was established with a focus on care over pressure. We believe real estate moves should feel clear, considered, and calm.",
                },
                {
                  title: "Broker Credentials",
                  bold: "RYAN JOHN S. CICERON, REB, REA.",
                  text: "Licensed Real Estate Broker (PRC No. 35705), Licensed Appraiser (PRC No. 13309), and DHSUD Registered Broker (No. 10178) providing fully secure legal transactions.",
                },
                {
                  title: "Direct Access",
                  bold: "Bespoke service by design.",
                  text: "Our team is selectively small. Instead of automated responses, every client works directly with an experienced senior broker.",
                },
                {
                  title: "Yield Advisory",
                  bold: "Long-term asset growth.",
                  text: "We specialize in identifying yield-producing properties and high-value opportunities for professionals building real estate portfolios.",
                },
              ].map((item, idx) => (
                <Reveal key={item.title} delay={0.1 + idx * 0.05}>
                  <div className="space-y-2 border-l-2 border-gold/45 pl-5 py-1">
                    <p className="text-xs uppercase tracking-wider text-gold font-bold">{item.title}</p>
                    <h3 className="font-semibold text-foreground text-sm">{item.bold}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-rail">
          <Reveal className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Our journey</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Milestones, lightly told.</h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-8">
                  <p className="font-display text-3xl text-gold">{m.year}</p>
                  <h3 className="mt-4 font-display text-xl text-foreground">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="container-rail text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl text-balance sm:text-5xl">
              Let's find the right property — together.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-primary/90"
            >
              Talk to us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
