import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Search } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import ryanImg from "@/assets/ryan-arms-crossed.png";
import ctaImg from "@/assets/cta.jpg";

import bdoLogo from "@/assets/bdo.png";
import bpiLogo from "@/assets/bpi.png";
import secBankLogo from "@/assets/security-bank.png";
import rcbcLogo from "@/assets/rcbc.png";

import staLuciaLogo from "@/assets/sta-lucia.png";
import rockwellLogo from "@/assets/rockwell.png";
import megaworldLogo from "@/assets/megaworld.png";
import avidaLogo from "@/assets/avida.png";
import alveoLogo from "@/assets/alveo.png";

import { Intro } from "@/components/Intro";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Testimonials } from "@/components/Testimonials";
import { PropertySearch } from "@/components/PropertySearch";
import { services } from "@/data/services";





export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cicerra Realty Services — Luxury Homes. Smart Investments." },
      {
        name: "description",
        content:
          "Discover premium homes, smart investments, and trusted real estate guidance with Cicerra Realty Services.",
      },
      { property: "og:title", content: "Cicerra Realty Services" },
      {
        property: "og:description",
        content: "Luxury homes. Smart investments. Trusted real estate experts.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

let globalIntroDone = false;

function Index() {
  const [introDone, setIntroDone] = useState(globalIntroDone);

  const handleIntroDone = () => {
    globalIntroDone = true;
    setIntroDone(true);
  };

  return (
    <>
      {!introDone && <Intro onDone={handleIntroDone} />}

      {/* HERO */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] w-full bg-[#051C3F] text-white flex flex-col justify-center pt-24 pb-20 sm:pt-32 sm:pb-28 z-30">
        {/* Static Background Wrapper containing all video/image backgrounds */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          {/* Fallback Image with Cinematic Pan */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={heroImg}
              alt="Luxury home at dusk fallback"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
              animate={{
                scale: [1.05, 1.12, 1.05],
                x: ["-1%", "1%", "-1%"],
                y: ["-0.5%", "0.5%", "-0.5%"]
              }}
              transition={{
                duration: 24,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          {/* Cinematic Video Background */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-70"
              src="https://assets.mixkit.co/videos/preview/mixkit-luxury-home-with-swimming-pool-at-dusk-32884-large.mp4"
            />
          </div>

          <div 
            className="absolute inset-0 z-10 pointer-events-none" 
            style={{ 
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(5, 28, 63, 0.45) 50%, #051C3F 100%)' 
            }} 
          />
        </div>

        <div className="container-rail relative z-10 flex flex-col justify-center gap-8 mt-12 sm:mt-16">
          <div className="w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="w-full max-w-5xl"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
                Cicerra Realty Services
              </p>
              <h1 className="mt-3 font-display text-4xl leading-[1.08] text-balance text-white sm:text-6xl md:text-7xl">
                Luxury Homes.<br />
                Smart Investments.<br />
                <span className="italic text-gold-soft">Trusted Experts.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-white/70">
                Advising families, professionals, and investors in secure property acquisitions.
              </p>
            </motion.div>
          </div>

          {/* Overlapping Property Search Card */}
          <div className="w-full flex justify-center relative z-25 mt-4 -mb-16 sm:-mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={introDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="w-full max-w-5xl animate-fade-in-up"
            >
              <PropertySearch />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. OUR SERVICES (ON TOP OF WEBSITE CONTENT) */}
      <section id="services" className="bg-white py-20 border-b border-border/40 relative z-20">
        <div className="container-rail">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Our Services</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-[#1B365D]">
              Every step of the journey, beautifully handled.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We guide Filipino families and professionals with absolute transparency, verified documentation, and secure transactions.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const isDark = i % 2 !== 0;
              return (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div
                    className={`group flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                      isDark
                        ? "bg-[#1B365D] text-white border-none shadow-[0_20px_40px_rgba(27,54,93,0.1)]"
                        : "bg-[#FAF9F6] border border-border/80 text-foreground shadow-[0_20px_40px_rgba(0,0,0,0.02)]"
                    }`}
                  >
                    <s.icon className="h-7 w-7 text-gold transition-transform duration-300 group-hover:-translate-y-1 shrink-0" />
                    <h3 className={`mt-6 font-display text-xl sm:text-2xl ${isDark ? "text-white" : "text-[#1B365D]"}`}>
                      {s.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-white/80" : "text-muted-foreground"}`}>
                      {s.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. ACCREDITED DEVELOPERS & BANKS */}
      <section id="partners" className="bg-[#FAF9F6] py-20 border-b border-border/40 relative z-20">
        <div className="container-rail">
          <Reveal className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Accredited Partners</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-[#1B365D]">
              Builders & Financial Partners
            </h2>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Developers Column */}
            <Reveal className="rounded-3xl border border-border/60 bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg text-[#1B365D] border-b border-border/40 pb-3 mb-6 uppercase tracking-wider text-center lg:text-left font-bold">
                Accredited Developers
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
                {[
                  { name: "STA. LUCIA INC", logo: staLuciaLogo, className: "max-h-16" },
                  { name: "ROCKWELL", logo: rockwellLogo, className: "max-h-20" },
                  { name: "MEGAWORLD", logo: megaworldLogo, className: "max-h-20 scale-[1.25]" },
                  { name: "AVIDA", logo: avidaLogo, className: "max-h-16 scale-125" },
                  { name: "ALVEO", logo: alveoLogo, className: "max-h-7" }
                ].map((d) => (
                  <div key={d.name} className="flex h-20 items-center justify-center px-3 text-center transition-all hover:scale-105 duration-200">
                    <img
                      src={d.logo}
                      alt={`${d.name} logo`}
                      className={`${d.className} object-contain select-none`}
                    />
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Banks Column */}
            <Reveal delay={0.1} className="rounded-3xl border border-border/60 bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg text-[#1B365D] border-b border-border/40 pb-3 mb-6 uppercase tracking-wider text-center lg:text-left font-bold">
                Accredited Banks
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                {[
                  { name: "BDO", logo: bdoLogo, className: "max-h-8" },
                  { name: "BPI", logo: bpiLogo, className: "max-h-14 scale-115" },
                  { name: "SECURITY BANK", logo: secBankLogo, className: "max-h-14" },
                  { name: "RCBC", logo: rcbcLogo, className: "max-h-11" }
                ].map((b) => (
                  <div key={b.name} className="flex h-20 items-center justify-center px-4 py-2 text-center transition-all hover:scale-105 duration-200">
                    <img
                      src={b.logo}
                      alt={`${b.name} logo`}
                      className={`${b.className} object-contain select-none`}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & BROKER CREDENTIALS */}
      <section id="about" className="bg-white py-20 relative z-20">
        <div className="container-rail">
          <div className="grid items-center gap-12 lg:grid-cols-12 mb-16 max-w-5xl mx-auto w-full">
            <Reveal className="lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Our Story</p>
              <h2 className="mt-4 font-display text-4xl text-balance leading-[1.1] sm:text-5xl">
                More than real estate.<br />
                <span className="italic text-muted-foreground">Helping families find home.</span>
              </h2>
              <span className="mt-6 block h-px w-12 bg-gold" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Cicerra Realty Services was built around a quiet conviction: a home is more than
                square meters and paperwork — it's where futures take shape. We guide Filipino families, professionals, and investors through honest, certified property decisions under licensed legal frameworks.
              </p>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground hover:text-gold"
              >
                Read our story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            <Reveal delay={0.15} className="relative lg:col-span-5 flex justify-center">
              <div className="relative overflow-hidden rounded-[2rem] border-2 border-gold/30 bg-white p-2 shadow-md w-fit">
                <img
                  src={ryanImg}
                  alt="Ryan John Ciceron"
                  loading="lazy"
                  width={600}
                  height={800}
                  className="h-[400px] w-auto max-w-full rounded-2xl object-contain"
                />
              </div>
            </Reveal>
          </div>

          {/* Compact Trust Stats row */}
          <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center py-8 border-t border-border/50">
            {[
              { n: 250, suf: "+", label: "Properties Listed" },
              { n: 150, suf: "+", label: "Successful Transactions" },
              { n: 10, suf: "+", label: "Years Experience" },
              { n: 99, suf: "%", label: "Client Satisfaction" },
            ].map((s, idx) => (
              <Reveal key={s.label} delay={idx * 0.05}>
                <div className="text-center px-4">
                  <p className="font-display text-3xl sm:text-4xl text-[#1B365D] font-bold">
                    <CountUp to={s.n} suffix={s.suf} />
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIALS */}
      <section className="bg-[#FAF9F6] py-20 border-t border-border/40 relative z-20">
        <div className="container-rail">
          <Reveal className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Client Testimonials</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">In their own words.</h2>
          </Reveal>
          <Testimonials />
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="relative overflow-hidden">
        <img
          src={ctaImg}
          alt="Luxury home at dusk"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
        <div className="container-rail relative z-10 py-24 text-center sm:py-28">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">LET'S BEGIN</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl text-balance text-white sm:text-5xl">
              Ready to find your next property?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/70">
              Tell us what you're looking for. We'll bring you the homes — and the honest advice — worth your time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/properties"
                className="rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1B365D] transition hover:bg-gold-soft hover:shadow-lg active:scale-95"
              >
                Search Listings
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-white/10 hover:border-white/60 active:scale-95"
              >
                Contact Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
