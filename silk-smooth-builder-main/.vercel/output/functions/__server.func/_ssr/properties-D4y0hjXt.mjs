import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-B4hrv8d7.mjs";
import { P as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowUpRight, T as Bath, d as Maximize2, k as ArrowLeft, t as X, w as BedDouble } from "../_libs/lucide-react.mjs";
import { t as getStoredProperties } from "./properties-Dz2ZM7E5.mjs";
import { t as Route } from "./properties-DG_zKlWt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties-D4y0hjXt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PropertyCard({ property }) {
	const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		whileHover: { y: -10 },
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 22
		},
		className: "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-gold/45 hover:shadow-[0_30px_60px_-20px_rgba(201,167,74,0.15)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#051C3F] to-[#1B365D] flex items-center justify-center",
			children: [
				property.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: property.image,
					alt: property.name,
					loading: "lazy",
					width: 1280,
					height: 1024,
					className: "h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-90" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-[#051C3F] to-[#1B365D]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl text-gold/30 tracking-widest mb-1 uppercase font-bold",
						children: "CICERRA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[8px] uppercase tracking-[0.3em] text-white/40 font-semibold",
						children: "Realty Services"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-5 top-5 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur",
					children: property.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-5 right-5 font-display text-2xl text-white",
					children: property.price
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
					children: property.location
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl text-foreground",
					children: property.name
				}),
				property.details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted-foreground line-clamp-3 leading-relaxed",
					children: property.details
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto pt-6 flex items-center gap-5 text-xs text-muted-foreground",
					children: [
						property.beds !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-4 w-4 text-gold" }),
								" ",
								property.beds,
								" Beds"
							]
						}),
						property.baths !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bath, { className: "h-4 w-4 text-gold" }),
								" ",
								property.baths,
								" Baths"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-4 w-4 text-gold" }),
								" ",
								property.lot
							]
						})
					]
				}),
				property.details ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setModalOpen(true),
					className: "mt-6 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.25em] text-foreground transition hover:text-gold cursor-pointer font-bold",
					children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-6 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.25em] text-foreground transition hover:text-gold font-bold",
					children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				})
			]
		})]
	}), modalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#051C3F] p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setModalOpen(false),
					className: "absolute right-6 top-6 rounded-full bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white transition cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-gold/15 text-gold text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-gold/30",
					children: property.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl sm:text-4xl text-white",
					children: property.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs uppercase tracking-[0.2em] text-gold/80",
					children: property.location
				}),
				property.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: property.image,
						alt: property.name,
						className: "h-full w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-white/10 py-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white/40 text-[9px] block uppercase tracking-wider",
							children: "Price"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg text-gold font-bold",
							children: property.price
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white/40 text-[9px] block uppercase tracking-wider",
							children: "Size / Lot"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: property.lot
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white/40 text-[9px] block uppercase tracking-wider",
							children: "Type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: property.type
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-wider text-gold font-bold mb-2",
						children: "Description & Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/80 leading-relaxed whitespace-pre-line font-sans",
						children: property.details
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModalOpen(false),
						className: "rounded-full border border-white/20 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition cursor-pointer",
						children: "Close"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setModalOpen(false),
						className: "rounded-full bg-gold text-primary px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gold-soft hover:scale-[1.02] transition",
						children: "Inquire Now"
					})]
				})
			]
		})
	})] });
}
function PropertiesPage() {
	const { location, type, price } = Route.useSearch();
	const navigate = useNavigate();
	const [allProps, setAllProps] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setAllProps(getStoredProperties());
	}, []);
	const filteredProperties = allProps.filter((p) => {
		if (location) {
			const locKey = location.split(",")[0].trim().toLowerCase();
			if (!p.location.toLowerCase().includes(locKey)) return false;
		}
		if (type) {
			if (type.toLowerCase().replace(/[^a-z]/g, "") !== p.type.toLowerCase().replace(/[^a-z]/g, "")) return false;
		}
		if (price) {
			const numericPrice = parseInt(p.price.replace(/[^\d]/g, ""), 10);
			if (price === "under-5m") {
				if (numericPrice >= 5e6) return false;
			} else if (price === "5m-10m") {
				if (numericPrice < 5e6 || numericPrice > 1e7) return false;
			} else if (price === "over-10m") {
				if (numericPrice <= 1e7) return false;
			}
		}
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background pt-32 pb-16 sm:pt-40 sm:pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-rail",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#1B365D] dark:text-gold hover:text-gold transition-colors duration-200 mb-6 font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4 transition-transform group-hover:-translate-x-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to Home" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.4em] text-gold font-bold",
						children: "Featured Properties"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-5xl leading-[1.05] text-balance sm:text-7xl",
						children: [
							"Homes worth",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-muted-foreground",
								children: "coming home to."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base text-muted-foreground",
						children: "A small, considered selection of homes and investments — updated regularly, vetted personally."
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-rail",
			children: filteredProperties.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: filteredProperties.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p })
				}, p.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted-foreground",
					children: "No properties match your search criteria."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate({
						to: "/properties",
						search: {}
					}),
					className: "mt-6 rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-wider text-primary hover:bg-gold-soft transition font-medium",
					children: "Clear Filters"
				})]
			})
		})
	})] });
}
//#endregion
export { PropertiesPage as component };
