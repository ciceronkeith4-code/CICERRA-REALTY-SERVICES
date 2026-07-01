import { useState, useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Home, ChevronDown, Check, ArrowRight } from "lucide-react";

interface PropertySearchProps {
  className?: string;
}

// Custom Peso Icon to match the design screenshot
const PesoIcon = () => (
  <span className="text-gold font-bold text-base leading-none shrink-0 w-4 h-4 flex items-center justify-center select-none text-center">
    ₱
  </span>
);

export function PropertySearch({ className = "" }: PropertySearchProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"Buy" | "Rent" | "Sell">("Buy");

  // Search parameters state
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Dropdown open states
  const [isLocOpen, setIsLocOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  // Refs for click outside handling
  const locRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  // Options lists
  const locationsList = [
    { value: "", label: "Select City / Area" },
    { value: "BGC, Taguig", label: "BGC, Taguig" },
    { value: "Dasmariñas, Cavite", label: "Dasmariñas, Cavite" },
    { value: "Lipa, Batangas", label: "Lipa, Batangas" },
    { value: "Makati", label: "Makati" },
    { value: "Quezon City", label: "Quezon City" },
    { value: "Ayala Alabang, Muntinlupa", label: "Ayala Alabang, Muntinlupa" },
    { value: "Tagaytay, Cavite", label: "Tagaytay, Cavite" },
    { value: "Angeles, Pampanga", label: "Angeles, Pampanga" },
    { value: "Carmelray, Laguna", label: "Carmelray, Laguna" },
    { value: "San Juan, Batangas", label: "San Juan, Batangas" },
  ];

  const typesList = [
    { value: "", label: "All" },
    { value: "Lot", label: "Lot" },
    { value: "House and Lot", label: "House and Lot" },
    { value: "Condominium", label: "Condominium" },
    { value: "Commercial Space", label: "Commercial Space" },
  ];

  const pricesList = [
    { value: "", label: "Any Price" },
    { value: "under-5m", label: "Under ₱5M" },
    { value: "5m-10m", label: "₱5M - ₱10M" },
    { value: "over-10m", label: "Over ₱10M" },
  ];

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locRef.current && !locRef.current.contains(event.target as Node)) {
        setIsLocOpen(false);
      }
      if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
        setIsTypeOpen(false);
      }
      if (priceRef.current && !priceRef.current.contains(event.target as Node)) {
        setIsPriceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    navigate({
      to: "/properties",
      search: {
        tab: activeTab.toLowerCase(),
        location: location || undefined,
        type: propertyType || undefined,
        price: priceRange || undefined,
      },
    });
  };

  // Helper labels
  const currentLocLabel = locationsList.find((l) => l.value === location)?.label || "Select City / Area";
  const currentTypeLabel = typesList.find((t) => t.value === propertyType)?.label || "All";
  const currentPriceLabel = pricesList.find((p) => p.value === priceRange)?.label || "Any Price";

  return (
    <div
      className={`relative w-full max-w-5xl rounded-[2.5rem] border border-border/70 bg-[#FAF9F6] p-8 sm:p-10 pt-16 shadow-[0_24px_50px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-black/90 ${className}`}
    >
      {/* Overlapping Top-Center Tab Control */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex p-1 bg-[#FAF9F6] border border-neutral-200/50 dark:border-neutral-800 dark:bg-[#121212] rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
          {(["Buy", "Rent", "Sell"] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  // Trigger search immediately if desired, or keep as tabs switch
                }}
                className={`relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 select-none ${
                  isActive
                    ? "bg-[#1B365D] dark:bg-gold text-white dark:text-primary border border-gold/30 shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{tab}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeTabDot"
                    className="h-1.5 w-1.5 rounded-full bg-gold shrink-0"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Inner Input Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1.2fr_0.8fr] items-center">
        {/* Custom Location Field */}
        <div ref={locRef} className={`relative ${isLocOpen ? "z-30" : "z-10"}`}>
          <div
            onClick={() => {
              setIsLocOpen(!isLocOpen);
              setIsTypeOpen(false);
              setIsPriceOpen(false);
            }}
            className={`w-full h-16 sm:h-[72px] rounded-2xl border bg-white dark:bg-neutral-900/60 px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${
              isLocOpen
                ? "border-gold ring-4 ring-gold/5 shadow-sm"
                : "border-neutral-100 hover:border-gold/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
            }`}
          >
            <div className="flex items-center gap-3 truncate">
              <MapPin className="h-4 w-4 text-gold shrink-0" />
              <div className="flex flex-col text-left truncate">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gold select-none leading-none mb-1.5">
                  LOCATION
                </span>
                <span className={`text-[13px] font-semibold truncate leading-none ${location ? "text-foreground" : "text-muted-foreground/80"}`}>
                  {currentLocLabel}
                </span>
              </div>
            </div>
            <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-1 ${isLocOpen ? "rotate-180 text-gold" : ""}`} />
          </div>

          <AnimatePresence>
            {isLocOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute z-50 left-0 right-0 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-border bg-background p-2 shadow-xl dark:border-white/10 dark:bg-black/95"
              >
                {locationsList.map((locOption) => {
                  const isSelected = location === locOption.value;
                  return (
                    <button
                      key={locOption.value}
                      onClick={() => {
                        setLocation(locOption.value);
                        setIsLocOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-xs font-semibold rounded-xl flex items-center justify-between transition-colors ${
                        isSelected
                          ? "bg-gold/10 text-gold font-bold"
                          : "text-foreground/90 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                      }`}
                    >
                      <span>{locOption.label}</span>
                      {isSelected && <Check className="h-4 w-4 text-gold" />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Custom Property Type Field */}
        <div ref={typeRef} className={`relative ${isTypeOpen ? "z-30" : "z-10"}`}>
          <div
            onClick={() => {
              setIsTypeOpen(!isTypeOpen);
              setIsLocOpen(false);
              setIsPriceOpen(false);
            }}
            className={`w-full h-16 sm:h-[72px] rounded-2xl border bg-white dark:bg-neutral-900/60 px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${
              isTypeOpen
                ? "border-gold ring-4 ring-gold/5 shadow-sm"
                : "border-neutral-100 hover:border-gold/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
            }`}
          >
            <div className="flex items-center gap-3 truncate">
              <Home className="h-4 w-4 text-gold shrink-0" />
              <div className="flex flex-col text-left truncate">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gold select-none leading-none mb-1.5">
                  PROPERTY TYPE
                </span>
                <span className={`text-[13px] font-semibold truncate leading-none ${propertyType ? "text-foreground" : "text-muted-foreground/80"}`}>
                  {currentTypeLabel}
                </span>
              </div>
            </div>
            <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-1 ${isTypeOpen ? "rotate-180 text-gold" : ""}`} />
          </div>

          <AnimatePresence>
            {isTypeOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute z-50 left-0 right-0 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-border bg-background p-2 shadow-xl dark:border-white/10 dark:bg-black/95"
              >
                {typesList.map((typeOption) => {
                  const isSelected = propertyType === typeOption.value;
                  return (
                    <button
                      key={typeOption.value}
                      onClick={() => {
                        setPropertyType(typeOption.value);
                        setIsTypeOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-xs font-semibold rounded-xl flex items-center justify-between transition-colors ${
                        isSelected
                          ? "bg-gold/10 text-gold font-bold"
                          : "text-foreground/90 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                      }`}
                    >
                      <span>{typeOption.label}</span>
                      {isSelected && <Check className="h-4 w-4 text-gold" />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Custom Price Range Field */}
        <div ref={priceRef} className={`relative ${isPriceOpen ? "z-30" : "z-10"}`}>
          <div
            onClick={() => {
              setIsPriceOpen(!isPriceOpen);
              setIsLocOpen(false);
              setIsTypeOpen(false);
            }}
            className={`w-full h-16 sm:h-[72px] rounded-2xl border bg-white dark:bg-neutral-900/60 px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${
              isPriceOpen
                ? "border-gold ring-4 ring-gold/5 shadow-sm"
                : "border-neutral-100 hover:border-gold/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
            }`}
          >
            <div className="flex items-center gap-3 truncate">
              <PesoIcon />
              <div className="flex flex-col text-left truncate">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gold select-none leading-none mb-1.5">
                  PRICE RANGE
                </span>
                <span className={`text-[13px] font-semibold truncate leading-none ${priceRange ? "text-foreground" : "text-muted-foreground/80"}`}>
                  {currentPriceLabel}
                </span>
              </div>
            </div>
            <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-1 ${isPriceOpen ? "rotate-180 text-gold" : ""}`} />
          </div>

          <AnimatePresence>
            {isPriceOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute z-50 left-0 right-0 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-border bg-background p-2 shadow-xl dark:border-white/10 dark:bg-black/95"
              >
                {pricesList.map((priceOption) => {
                  const isSelected = priceRange === priceOption.value;
                  return (
                    <button
                      key={priceOption.value}
                      onClick={() => {
                        setPriceRange(priceOption.value);
                        setIsPriceOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-xs font-semibold rounded-xl flex items-center justify-between transition-colors ${
                        isSelected
                          ? "bg-gold/10 text-gold font-bold"
                          : "text-foreground/90 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                      }`}
                    >
                      <span>{priceOption.label}</span>
                      {isSelected && <Check className="h-4 w-4 text-gold" />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Premium Large Search Button (Dark Navy card style) */}
        <button
          onClick={handleSearch}
          className="group w-full lg:w-auto lg:px-12 h-14 sm:h-16 lg:h-[58px] rounded-2xl bg-[#1B365D] hover:bg-[#12284C] dark:bg-gold dark:hover:bg-gold-soft text-white dark:text-primary flex items-center justify-center gap-2.5 font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] justify-self-center lg:justify-self-end"
        >
          <Search className="h-4 w-4 text-gold shrink-0" />
          <span>Search</span>
          <ArrowRight className="h-4 w-4 text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
