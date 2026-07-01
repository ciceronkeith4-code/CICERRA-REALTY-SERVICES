import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Cicerra made buying our first home feel calm and clear. They were patient, transparent, and felt like family by closing day.",
    name: "Marisol R.",
    role: "Homeowner, Quezon City",
    avatar: client1,
  },
  {
    quote:
      "I came in looking for a rental yield. I left with three properties and a long-term plan. The market insight is unmatched.",
    name: "Karl D.",
    role: "Investor, Makati",
    avatar: client2,
  },
  {
    quote:
      "From documents to handover, everything was effortless. We never felt like clients — we felt looked after.",
    name: "The Aranetas",
    role: "Family of four",
    avatar: client3,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const handlePrev = () => {
    setI((v) => (v === 0 ? testimonials.length - 1 : v - 1));
  };

  const handleNext = () => {
    setI((v) => (v + 1) % testimonials.length);
  };

  const t = testimonials[i];

  return (
    <div className="relative mx-auto max-w-4xl px-4 md:px-12 text-center">
      {/* 5 Stars */}
      <div className="flex justify-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, n) => (
          <Star key={n} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <div className="relative mt-8 flex items-center justify-center min-h-[220px]">
        {/* Prev Button (Hidden on Mobile) */}
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="absolute left-0 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/80 transition hover:border-gold hover:text-gold active:scale-95 z-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Testimonial Card */}
        <div className="w-full max-w-2xl px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl md:text-3xl italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/40"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button (Hidden on Mobile) */}
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="absolute right-0 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/80 transition hover:border-gold hover:text-gold active:scale-95 z-10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="mt-10 flex justify-center gap-2">
        {testimonials.map((_, n) => (
          <button
            key={n}
            aria-label={`Show testimonial ${n + 1}`}
            onClick={() => setI(n)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              n === i ? "w-8 bg-gold" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
