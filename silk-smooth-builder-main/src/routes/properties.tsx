import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PropertyCard } from "@/components/PropertyCard";
import { getStoredProperties, type Property } from "@/data/properties";
import { z } from "zod";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const searchSchema = z.object({
  tab: z.string().optional().catch("buy"),
  location: z.string().optional(),
  type: z.string().optional(),
  price: z.string().optional(),
});

export const Route = createFileRoute("/properties")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Properties — Cicerra Real Estate Service" },
      {
        name: "description",
        content:
          "Browse a curated selection of luxury homes, beachfront estates, and city residences from Cicerra Real Estate Service.",
      },
      { property: "og:title", content: "Featured Properties — Cicerra" },
      {
        property: "og:description",
        content: "Hand-picked homes and investment opportunities across the Philippines.",
      },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const { location, type, price } = Route.useSearch();
  const navigate = useNavigate();
  const [allProps, setAllProps] = useState<Property[]>([]);

  useEffect(() => {
    setAllProps(getStoredProperties());
  }, []);

  // Filter properties dynamically
  const filteredProperties = allProps.filter((p) => {
    // 1. Filter by location
    if (location) {
      const locKey = location.split(",")[0].trim().toLowerCase();
      if (!p.location.toLowerCase().includes(locKey)) {
        return false;
      }
    }
    
    // 2. Filter by property type
    if (type) {
      const typeLower = type.toLowerCase().replace(/[^a-z]/g, "");
      const pTypeLower = p.type.toLowerCase().replace(/[^a-z]/g, "");
      if (typeLower !== pTypeLower) {
        return false;
      }
    }
    
    // 3. Filter by price range
    if (price) {
      const numericPrice = parseInt(p.price.replace(/[^\d]/g, ""), 10);
      if (price === "under-5m") {
        if (numericPrice >= 5000000) return false;
      } else if (price === "5m-10m") {
        if (numericPrice < 5000000 || numericPrice > 10000000) return false;
      } else if (price === "over-10m") {
        if (numericPrice <= 10000000) return false;
      }
    }
    
    return true;
  });

  return (
    <>
      <section className="bg-background pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container-rail">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#1B365D] dark:text-gold hover:text-gold transition-colors duration-200 mb-6 font-bold"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
          <Reveal className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Featured Properties</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-balance sm:text-7xl">
              Homes worth<br />
              <span className="italic text-muted-foreground">coming home to.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              A small, considered selection of homes and investments — updated regularly,
              vetted personally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-32">
        <div className="container-rail">
          {filteredProperties.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 0.08}>
                  <PropertyCard property={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No properties match your search criteria.</p>
              <button 
                onClick={() => navigate({ to: "/properties", search: {} })}
                className="mt-6 rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-wider text-primary hover:bg-gold-soft transition font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
