import { Fragment, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  Search,
  MapPin,
  Home,
  House,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
  Compass,
  Layers,
  LandPlot,
  Building2,
  Store,
  Wallet,
  type LucideIcon,
} from "lucide-react";

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

type Option = { value: string; label: string; icon?: LucideIcon; hint?: string };
type OptionGroup = { heading?: string; options: Option[] };

// Radix Select reserves "" for "no value", so the "any" choice uses a sentinel.
const ANY = "__any";

const locationGroups: OptionGroup[] = [
  { options: [{ value: ANY, label: "Any location", icon: Compass }] },
  {
    heading: "Metro Manila",
    options: [
      { value: "BGC, Taguig", label: "BGC, Taguig" },
      { value: "Makati", label: "Makati" },
      { value: "Quezon City", label: "Quezon City" },
      { value: "Ayala Alabang, Muntinlupa", label: "Ayala Alabang, Muntinlupa" },
    ],
  },
  {
    heading: "Cavite",
    options: [
      { value: "Dasmariñas, Cavite", label: "Dasmariñas, Cavite" },
      { value: "Tagaytay, Cavite", label: "Tagaytay, Cavite" },
    ],
  },
  {
    heading: "Batangas",
    options: [
      { value: "Lipa, Batangas", label: "Lipa, Batangas" },
      { value: "San Juan, Batangas", label: "San Juan, Batangas" },
    ],
  },
  { heading: "Laguna", options: [{ value: "Carmelray, Laguna", label: "Carmelray, Laguna" }] },
  { heading: "Pampanga", options: [{ value: "Angeles, Pampanga", label: "Angeles, Pampanga" }] },
];

const typeGroups: OptionGroup[] = [
  { options: [{ value: ANY, label: "All types", icon: Layers }] },
  {
    options: [
      { value: "Lot", label: "Lot", icon: LandPlot },
      { value: "House and Lot", label: "House and Lot", icon: House },
      { value: "Condominium", label: "Condominium", icon: Building2 },
      { value: "Commercial Space", label: "Commercial Space", icon: Store },
    ],
  },
];

const priceGroups: OptionGroup[] = [
  { options: [{ value: ANY, label: "Any price", icon: Wallet }] },
  {
    options: [
      { value: "under-5m", label: "Under ₱5M", hint: "₱" },
      { value: "5m-10m", label: "₱5M – ₱10M", hint: "₱₱" },
      { value: "over-10m", label: "Over ₱10M", hint: "₱₱₱" },
    ],
  },
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
          groups={locationGroups}
        />
        <SelectField
          id="search-type"
          label="Property Type"
          icon={<Home aria-hidden="true" className="h-4 w-4 text-gold shrink-0" />}
          value={propertyType}
          onChange={setPropertyType}
          groups={typeGroups}
        />
        <SelectField
          id="search-price"
          label="Price Range"
          icon={<PesoIcon />}
          value={priceRange}
          onChange={setPriceRange}
          groups={priceGroups}
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

// Styled dropdown built on Radix Select: listbox semantics, arrow/Home/End,
// type-ahead, Escape and outside-click dismissal and focus return come from Radix.
function SelectField({
  id,
  label,
  icon,
  value,
  onChange,
  groups,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  value: string;
  onChange: (value: string) => void;
  groups: OptionGroup[];
}) {
  const labelId = `${id}-label`;

  return (
    <SelectPrimitive.Root value={value || ANY} onValueChange={(v) => onChange(v === ANY ? "" : v)}>
      <SelectPrimitive.Trigger
        id={id}
        aria-labelledby={`${labelId} ${id}`}
        className="group relative w-full h-16 sm:h-[72px] rounded-2xl border border-neutral-200 bg-white dark:bg-neutral-900/60 px-5 flex items-center justify-between gap-2 text-left cursor-pointer transition-all duration-300 hover:border-gold/50 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] data-[state=open]:border-gold data-[state=open]:shadow-[0_0_0_4px_rgba(201,167,74,0.14)]"
      >
        <span className="flex items-center gap-3 min-w-0">
          {icon}
          <span className="flex flex-col min-w-0">
            <span
              id={labelId}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold-deep select-none leading-none mb-1.5"
            >
              {label}
            </span>
            <span
              className={`text-[13px] font-semibold truncate leading-none ${value ? "text-foreground" : "text-muted-foreground"}`}
            >
              <SelectPrimitive.Value />
            </span>
          </span>
        </span>
        <SelectPrimitive.Icon asChild>
          <ChevronDown
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-gold-deep"
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={10}
          collisionPadding={16}
          className="z-[70] w-[var(--radix-select-trigger-width)] min-w-[260px] max-h-[min(22rem,var(--radix-select-content-available-height))] overflow-hidden rounded-2xl border border-neutral-200/80 bg-white text-neutral-900 shadow-[0_24px_60px_-15px_rgba(5,28,63,0.35)] origin-[var(--radix-select-content-transform-origin)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 motion-reduce:animate-none"
        >
          <SelectPrimitive.ScrollUpButton className="flex h-7 items-center justify-center text-muted-foreground">
            <ChevronUp aria-hidden="true" className="h-4 w-4" />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="p-2">
            {groups.map((group, gi) => (
              <Fragment key={group.heading ?? gi}>
                <SelectPrimitive.Group>
                  {group.heading && (
                    <SelectPrimitive.Label className="px-3 pb-1.5 pt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                      {group.heading}
                    </SelectPrimitive.Label>
                  )}
                  {group.options.map((option) => (
                    <SelectOption key={option.value} option={option} />
                  ))}
                </SelectPrimitive.Group>
                {gi === 0 && groups.length > 1 && (
                  <SelectPrimitive.Separator className="mx-3 my-1.5 h-px bg-neutral-100" />
                )}
              </Fragment>
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex h-7 items-center justify-center text-muted-foreground">
            <ChevronDown aria-hidden="true" className="h-4 w-4" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

function SelectOption({ option }: { option: Option }) {
  const Icon = option.icon;
  return (
    <SelectPrimitive.Item
      value={option.value}
      className="group/item relative flex min-h-11 cursor-pointer select-none items-center gap-3 rounded-xl px-3 py-2 text-sm text-neutral-700 outline-none transition-colors duration-150 data-[highlighted]:bg-[#F6F2E9] data-[highlighted]:text-[#1B365D] data-[state=checked]:font-semibold data-[state=checked]:text-[#1B365D]"
    >
      {Icon && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-neutral-500 transition-colors group-data-[highlighted]/item:bg-white group-data-[highlighted]/item:text-gold-deep group-data-[state=checked]/item:bg-gold/15 group-data-[state=checked]/item:text-gold-deep">
          <Icon aria-hidden="true" className="h-4 w-4" />
        </span>
      )}
      <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
      <span className="ml-auto flex items-center gap-2 pl-2">
        {option.hint && (
          <span aria-hidden="true" className="text-xs font-bold tracking-wider text-gold-deep/70">
            {option.hint}
          </span>
        )}
        <SelectPrimitive.ItemIndicator className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[#1B365D]">
          <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}
