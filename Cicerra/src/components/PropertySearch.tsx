import { useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, MapPin, Home, ChevronDown, ArrowRight } from "lucide-react";

interface PropertySearchProps {
  className?: string;
}

// Custom Peso Icon to match the design screenshot
const PesoIcon = () => (
  <span
    aria-hidden="true"
    className="text-gold font-bold text-base leading-none shrink-0 w-4 h-4 flex items-center justify-center select-none text-center"
  >
    ₱
  </span>
);

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

export function PropertySearch({ className = "" }: PropertySearchProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"Buy" | "Rent" | "Sell">("Buy");

  // Search parameters state
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

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

  return (
    <div
      className={`relative w-full max-w-5xl rounded-[2.5rem] border border-border/70 bg-[#FAF9F6] p-8 sm:p-10 pt-16 shadow-[0_24px_50px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-black/90 ${className}`}
    >
      {/* Overlapping Top-Center Tab Control */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div
          role="group"
          aria-label="Search for properties to"
          className="flex p-1 bg-[#FAF9F6] border border-neutral-200/50 dark:border-neutral-800 dark:bg-[#121212] rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.04)]"
        >
          {(["Buy", "Rent", "Sell"] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTab(tab)}
                className={`relative flex min-h-11 items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 select-none ${
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
        <SelectField
          id="search-location"
          label="Location"
          icon={<MapPin aria-hidden="true" className="h-4 w-4 text-gold shrink-0" />}
          value={location}
          onChange={setLocation}
          options={locationsList}
        />
        <SelectField
          id="search-type"
          label="Property Type"
          icon={<Home aria-hidden="true" className="h-4 w-4 text-gold shrink-0" />}
          value={propertyType}
          onChange={setPropertyType}
          options={typesList}
        />
        <SelectField
          id="search-price"
          label="Price Range"
          icon={<PesoIcon />}
          value={priceRange}
          onChange={setPriceRange}
          options={pricesList}
        />

        {/* Premium Large Search Button (Dark Navy card style) */}
        <button
          type="button"
          onClick={handleSearch}
          className="group w-full lg:w-auto lg:px-12 h-14 sm:h-16 lg:h-[58px] rounded-2xl bg-[#1B365D] hover:bg-[#12284C] dark:bg-gold dark:hover:bg-gold-soft text-white dark:text-primary flex items-center justify-center gap-2.5 font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] justify-self-center lg:justify-self-end"
        >
          <Search aria-hidden="true" className="h-4 w-4 text-gold shrink-0" />
          <span>Search</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4 text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

// Native <select> laid over a styled card: keyboard, screen reader and mobile
// pickers all come from the platform; the card just mirrors the current value.
function SelectField({
  id,
  label,
  icon,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  const currentLabel = options.find((o) => o.value === value)?.label ?? options[0].label;

  return (
    <div className="relative w-full h-16 sm:h-[72px] rounded-2xl border border-neutral-200 bg-white dark:bg-neutral-900/60 px-5 flex items-center justify-between transition-all duration-300 hover:border-gold/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)] has-[select:focus-visible]:border-gold has-[select:focus-visible]:ring-2 has-[select:focus-visible]:ring-gold has-[select:focus-visible]:ring-offset-2">
      <div className="flex items-center gap-3 min-w-0">
        {icon}
        <div className="flex flex-col text-left min-w-0">
          <label
            htmlFor={id}
            className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold-deep select-none leading-none mb-1.5"
          >
            {label}
          </label>
          <span
            aria-hidden="true"
            className={`text-[13px] font-semibold truncate leading-none ${value ? "text-foreground" : "text-muted-foreground"}`}
          >
            {currentLabel}
          </span>
        </div>
      </div>
      <ChevronDown aria-hidden="true" className="h-4 w-4 text-muted-foreground shrink-0 ml-1" />
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-2xl opacity-0"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
