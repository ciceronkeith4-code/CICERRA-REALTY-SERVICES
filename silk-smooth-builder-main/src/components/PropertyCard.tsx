import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BedDouble, Bath, Maximize2, ArrowUpRight, X } from "lucide-react";
import type { Property } from "@/data/properties";
import { useState } from "react";

export function PropertyCard({ property }: { property: Property }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.article
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-gold/45 hover:shadow-[0_30px_60px_-20px_rgba(201,167,74,0.15)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#051C3F] to-[#1B365D] flex items-center justify-center">
          {property.image ? (
            <>
              <img
                src={property.image}
                alt={property.name}
                loading="lazy"
                width={1280}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-90" />
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-[#051C3F] to-[#1B365D]">
              <span className="font-display text-3xl text-gold/30 tracking-widest mb-1 uppercase font-bold">CICERRA</span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/40 font-semibold">Realty Services</span>
            </div>
          )}
          <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur">
            {property.tag}
          </span>
          <span className="absolute bottom-5 right-5 font-display text-2xl text-white">
            {property.price}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {property.location}
          </p>
          <h3 className="mt-2 font-display text-2xl text-foreground">{property.name}</h3>

          {property.details && (
            <p className="mt-3 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
              {property.details}
            </p>
          )}

          <div className="mt-auto pt-6 flex items-center gap-5 text-xs text-muted-foreground">
            {property.beds !== undefined && (
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="h-4 w-4 text-gold" /> {property.beds} Beds
              </span>
            )}
            {property.baths !== undefined && (
              <span className="inline-flex items-center gap-1.5">
                <Bath className="h-4 w-4 text-gold" /> {property.baths} Baths
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Maximize2 className="h-4 w-4 text-gold" /> {property.lot}
            </span>
          </div>

          {property.details ? (
            <button
              onClick={() => setModalOpen(true)}
              className="mt-6 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.25em] text-foreground transition hover:text-gold cursor-pointer font-bold"
            >
              View Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ) : (
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.25em] text-foreground transition hover:text-gold font-bold"
            >
              View Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </motion.article>

      {/* Luxury Detail Modal Overlay */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#051C3F] p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-in">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-6 top-6 rounded-full bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            
            <span className="rounded-full bg-gold/15 text-gold text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-gold/30">
              {property.tag}
            </span>
            
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-white">{property.name}</h2>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold/80">{property.location}</p>
            
            {property.image && (
              <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-md">
                <img src={property.image} alt={property.name} className="h-full w-full object-cover" />
              </div>
            )}
            
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-white/10 py-5 text-sm">
              <div>
                <span className="text-white/40 text-[9px] block uppercase tracking-wider">Price</span>
                <span className="font-display text-lg text-gold font-bold">{property.price}</span>
              </div>
              <div>
                <span className="text-white/40 text-[9px] block uppercase tracking-wider">Size / Lot</span>
                <span className="font-semibold">{property.lot}</span>
              </div>
              <div>
                <span className="text-white/40 text-[9px] block uppercase tracking-wider">Type</span>
                <span className="font-semibold">{property.type}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-wider text-gold font-bold mb-2">Description & Details</h4>
              <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line font-sans">{property.details}</p>
            </div>
            
            <div className="mt-8 flex items-center justify-end gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition cursor-pointer"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setModalOpen(false)}
                className="rounded-full bg-gold text-primary px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gold-soft hover:scale-[1.02] transition"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
