import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PropertyCard } from "./PropertyCard";
import { getStoredProperties, type Property } from "@/data/properties";
import { motion, AnimatePresence } from "framer-motion";

export function PropertySlider() {
  const [activeCategory, setActiveCategory] = useState<"all" | "lot" | "house" | "condo">("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [allProps, setAllProps] = useState<Property[]>([]);

  useEffect(() => {
    (async () => {
      const stored = await getStoredProperties();
      setAllProps(stored);
    })();
  }, []);

  const categories = [
    { value: "all", label: "All Properties" },
    { value: "lot", label: "Lots Only" },
    { value: "house", label: "Houses" },
    { value: "condo", label: "Condominiums" },
  ] as const;

  const filteredProperties = allProps.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 444; // Card width 420px + gap 24px
      const currentScroll = container.scrollLeft;
      const targetScroll =
        direction === "left" ? currentScroll - cardWidth : currentScroll + cardWidth;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Slider Header: Categories & Navigation Controls */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  // Reset scroll position on category change
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollLeft = 0;
                  }
                }}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#1B365D] text-white dark:bg-gold dark:text-primary shadow-sm"
                    : "border border-border bg-background text-foreground/80 hover:border-gold hover:text-gold"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Next/Prev Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Previous properties"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-200 hover:border-gold hover:text-gold hover:shadow-sm active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            aria-label="Next properties"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-200 hover:border-gold hover:text-gold hover:shadow-sm active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Properties Slider Area */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
                layout
                className="w-[85vw] sm:w-[420px] shrink-0 snap-start"
              >
                <PropertyCard property={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
