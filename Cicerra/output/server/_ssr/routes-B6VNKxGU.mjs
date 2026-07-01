import { a as __toESM } from "../_runtime.mjs";
import { i as performance_default, n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as ryan_arms_crossed_default } from "./ryan-arms-crossed-jkJvhvl1.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B4hrv8d7.mjs";
import { P as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Check, D as ArrowUpRight, O as ArrowRight, S as ChevronDown, a as Search, b as ChevronRight, f as MapPin, i as Star, j as House, x as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as hero_default, t as Logo } from "./hero-Tu0HMFbe.mjs";
import { t as services } from "./services-CjjJVR42.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B6VNKxGU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cta_default = "/assets/cta-C3PfduO0.jpg";
var bdo_default = "/assets/bdo-BBnciTDa.png";
var bpi_default = "/assets/bpi-abLcQ7dU.png";
var security_bank_default = "/assets/security-bank-C-tKdCGP.png";
var rcbc_default = "/assets/rcbc-qKKHz8VG.png";
var sta_lucia_default = "/assets/sta-lucia-Cc9UP8Nd.png";
var rockwell_default = "/assets/rockwell-DZzftB1S.png";
var megaworld_default = "/assets/megaworld-aXPpkdAN.png";
var avida_default = "/assets/avida-BPfWKIST.png";
var alveo_default = "/assets/alveo-BykhZO8b.png";
function Intro({ onDone }) {
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [phase, setPhase] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t1 = setTimeout(() => setPhase(1), 1100);
		const t2 = setTimeout(() => setPhase(2), 2400);
		const t3 = setTimeout(() => setPhase(3), 3600);
		const t4 = setTimeout(() => setVisible(false), 4400);
		const t5 = setTimeout(() => onDone(), 4900);
		return () => [
			t1,
			t2,
			t3,
			t4,
			t5
		].forEach(clearTimeout);
	}, [onDone]);
	const skip = () => {
		setVisible(false);
		setTimeout(onDone, 400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			transition: {
				duration: .5,
				ease: "easeInOut"
			}
		},
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#00142A] via-[#051C3F] to-[#0A2855] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { scaleX: 0 },
					animate: { scaleX: 1 },
					transition: {
						duration: 1,
						ease: [
							.65,
							0,
							.35,
							1
						]
					},
					style: { originX: .5 },
					className: "h-px w-48 bg-gradient-to-r from-transparent via-gold to-transparent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 16,
						filter: "blur(8px)"
					},
					animate: phase >= 1 ? {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					} : {
						opacity: 0,
						y: 16,
						filter: "blur(8px)"
					},
					transition: {
						duration: 1,
						ease: "easeOut"
					},
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { showScrolledStyle: false })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 h-[2px] w-48 bg-white/10 rounded-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: "0%" },
						animate: { width: "100%" },
						transition: {
							duration: 4,
							ease: "easeInOut"
						},
						className: "h-full bg-gold"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-8 h-7 w-full max-w-md overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
						mode: "wait",
						children: [phase === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -16
							},
							transition: { duration: .6 },
							className: "font-display text-base italic text-gold sm:text-lg",
							children: "Finding More Than Homes"
						}, "t1"), phase === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -16
							},
							transition: { duration: .6 },
							className: "font-display text-base italic text-gold sm:text-lg",
							children: "Creating Better Futures"
						}, "t2")]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: skip,
			className: "absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.3em] text-white/40 transition hover:text-gold",
			children: "Skip intro →"
		})]
	}) });
}
function CountUp({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-30px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance_default.now();
		const duration = 1600;
		let raf = 0;
		const step = (now) => {
			const p = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(to * eased));
			if (p < 1) raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
		ref,
		children: [n, suffix]
	});
}
var testimonials = [
	{
		quote: "Cicerra made buying our first home feel calm and clear. They were patient, transparent, and felt like family by closing day.",
		name: "Marisol R.",
		role: "Homeowner, Quezon City",
		avatar: "/assets/client-1-9g4PzXB-.jpg"
	},
	{
		quote: "I came in looking for a rental yield. I left with three properties and a long-term plan. The market insight is unmatched.",
		name: "Karl D.",
		role: "Investor, Makati",
		avatar: "/assets/client-2-CKQHSweL.jpg"
	},
	{
		quote: "From documents to handover, everything was effortless. We never felt like clients — we felt looked after.",
		name: "The Aranetas",
		role: "Family of four",
		avatar: "/assets/client-3-CQyQcdkE.jpg"
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6e3);
		return () => clearInterval(t);
	}, []);
	const handlePrev = () => {
		setI((v) => v === 0 ? testimonials.length - 1 : v - 1);
	};
	const handleNext = () => {
		setI((v) => (v + 1) % testimonials.length);
	};
	const t = testimonials[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto max-w-4xl px-4 md:px-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center gap-1 text-gold",
				children: Array.from({ length: 5 }).map((_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-8 flex items-center justify-center min-h-[220px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handlePrev,
						"aria-label": "Previous testimonial",
						className: "absolute left-0 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/80 transition hover:border-gold hover:text-gold active:scale-95 z-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full max-w-2xl px-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -16
								},
								transition: {
									duration: .5,
									ease: "easeInOut"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-xl leading-relaxed text-foreground sm:text-2xl md:text-3xl italic",
									children: [
										"“",
										t.quote,
										"”"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center justify-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: t.avatar,
										alt: t.name,
										loading: "lazy",
										width: 56,
										height: 56,
										className: "h-14 w-14 rounded-full object-cover ring-1 ring-gold/40"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-foreground",
											children: t.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
											children: t.role
										})]
									})]
								})]
							}, i)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleNext,
						"aria-label": "Next testimonial",
						className: "absolute right-0 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/80 transition hover:border-gold hover:text-gold active:scale-95 z-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex justify-center gap-2",
				children: testimonials.map((_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": `Show testimonial ${n + 1}`,
					onClick: () => setI(n),
					className: `h-1.5 rounded-full transition-all duration-300 ${n === i ? "w-8 bg-gold" : "w-1.5 bg-border"}`
				}, n))
			})
		]
	});
}
var PesoIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	className: "text-gold font-bold text-base leading-none shrink-0 w-4 h-4 flex items-center justify-center select-none text-center",
	children: "₱"
});
function PropertySearch({ className = "" }) {
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = (0, import_react.useState)("Buy");
	const [location, setLocation] = (0, import_react.useState)("");
	const [propertyType, setPropertyType] = (0, import_react.useState)("");
	const [priceRange, setPriceRange] = (0, import_react.useState)("");
	const [isLocOpen, setIsLocOpen] = (0, import_react.useState)(false);
	const [isTypeOpen, setIsTypeOpen] = (0, import_react.useState)(false);
	const [isPriceOpen, setIsPriceOpen] = (0, import_react.useState)(false);
	const locRef = (0, import_react.useRef)(null);
	const typeRef = (0, import_react.useRef)(null);
	const priceRef = (0, import_react.useRef)(null);
	const locationsList = [
		{
			value: "",
			label: "Select City / Area"
		},
		{
			value: "BGC, Taguig",
			label: "BGC, Taguig"
		},
		{
			value: "Dasmariñas, Cavite",
			label: "Dasmariñas, Cavite"
		},
		{
			value: "Lipa, Batangas",
			label: "Lipa, Batangas"
		},
		{
			value: "Makati",
			label: "Makati"
		},
		{
			value: "Quezon City",
			label: "Quezon City"
		},
		{
			value: "Ayala Alabang, Muntinlupa",
			label: "Ayala Alabang, Muntinlupa"
		},
		{
			value: "Tagaytay, Cavite",
			label: "Tagaytay, Cavite"
		},
		{
			value: "Angeles, Pampanga",
			label: "Angeles, Pampanga"
		},
		{
			value: "Carmelray, Laguna",
			label: "Carmelray, Laguna"
		},
		{
			value: "San Juan, Batangas",
			label: "San Juan, Batangas"
		}
	];
	const typesList = [
		{
			value: "",
			label: "All"
		},
		{
			value: "Lot",
			label: "Lot"
		},
		{
			value: "House and Lot",
			label: "House and Lot"
		},
		{
			value: "Condominium",
			label: "Condominium"
		},
		{
			value: "Commercial Space",
			label: "Commercial Space"
		}
	];
	const pricesList = [
		{
			value: "",
			label: "Any Price"
		},
		{
			value: "under-5m",
			label: "Under ₱5M"
		},
		{
			value: "5m-10m",
			label: "₱5M - ₱10M"
		},
		{
			value: "over-10m",
			label: "Over ₱10M"
		}
	];
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (locRef.current && !locRef.current.contains(event.target)) setIsLocOpen(false);
			if (typeRef.current && !typeRef.current.contains(event.target)) setIsTypeOpen(false);
			if (priceRef.current && !priceRef.current.contains(event.target)) setIsPriceOpen(false);
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const handleSearch = () => {
		navigate({
			to: "/properties",
			search: {
				tab: activeTab.toLowerCase(),
				location: location || void 0,
				type: propertyType || void 0,
				price: priceRange || void 0
			}
		});
	};
	const currentLocLabel = locationsList.find((l) => l.value === location)?.label || "Select City / Area";
	const currentTypeLabel = typesList.find((t) => t.value === propertyType)?.label || "All";
	const currentPriceLabel = pricesList.find((p) => p.value === priceRange)?.label || "Any Price";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative w-full max-w-5xl rounded-[2.5rem] border border-border/70 bg-[#FAF9F6] p-8 sm:p-10 pt-16 shadow-[0_24px_50px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-black/90 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex p-1 bg-[#FAF9F6] border border-neutral-200/50 dark:border-neutral-800 dark:bg-[#121212] rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.04)]",
				children: [
					"Buy",
					"Rent",
					"Sell"
				].map((tab) => {
					const isActive = activeTab === tab;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setActiveTab(tab);
						},
						className: `relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 select-none ${isActive ? "bg-[#1B365D] dark:bg-gold text-white dark:text-primary border border-gold/30 shadow-md" : "text-muted-foreground hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab }), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "activeTabDot",
							className: "h-1.5 w-1.5 rounded-full bg-gold shrink-0",
							transition: {
								type: "spring",
								stiffness: 300,
								damping: 25
							}
						})]
					}, tab);
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1.2fr_0.8fr] items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: locRef,
					className: `relative ${isLocOpen ? "z-30" : "z-10"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => {
							setIsLocOpen(!isLocOpen);
							setIsTypeOpen(false);
							setIsPriceOpen(false);
						},
						className: `w-full h-16 sm:h-[72px] rounded-2xl border bg-white dark:bg-neutral-900/60 px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${isLocOpen ? "border-gold ring-4 ring-gold/5 shadow-sm" : "border-neutral-100 hover:border-gold/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col text-left truncate",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-bold uppercase tracking-[0.15em] text-gold select-none leading-none mb-1.5",
									children: "LOCATION"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[13px] font-semibold truncate leading-none ${location ? "text-foreground" : "text-muted-foreground/80"}`,
									children: currentLocLabel
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-1 ${isLocOpen ? "rotate-180 text-gold" : ""}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isLocOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 8,
							scale: .98
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						exit: {
							opacity: 0,
							y: 8,
							scale: .98
						},
						transition: {
							duration: .15,
							ease: "easeOut"
						},
						className: "absolute z-50 left-0 right-0 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-border bg-background p-2 shadow-xl dark:border-white/10 dark:bg-black/95",
						children: locationsList.map((locOption) => {
							const isSelected = location === locOption.value;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setLocation(locOption.value);
									setIsLocOpen(false);
								},
								className: `w-full px-4 py-3 text-left text-xs font-semibold rounded-xl flex items-center justify-between transition-colors ${isSelected ? "bg-gold/10 text-gold font-bold" : "text-foreground/90 hover:bg-neutral-50 dark:hover:bg-neutral-900"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locOption.label }), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-gold" })]
							}, locOption.value);
						})
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: typeRef,
					className: `relative ${isTypeOpen ? "z-30" : "z-10"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => {
							setIsTypeOpen(!isTypeOpen);
							setIsLocOpen(false);
							setIsPriceOpen(false);
						},
						className: `w-full h-16 sm:h-[72px] rounded-2xl border bg-white dark:bg-neutral-900/60 px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${isTypeOpen ? "border-gold ring-4 ring-gold/5 shadow-sm" : "border-neutral-100 hover:border-gold/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col text-left truncate",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-bold uppercase tracking-[0.15em] text-gold select-none leading-none mb-1.5",
									children: "PROPERTY TYPE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[13px] font-semibold truncate leading-none ${propertyType ? "text-foreground" : "text-muted-foreground/80"}`,
									children: currentTypeLabel
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-1 ${isTypeOpen ? "rotate-180 text-gold" : ""}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isTypeOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 8,
							scale: .98
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						exit: {
							opacity: 0,
							y: 8,
							scale: .98
						},
						transition: {
							duration: .15,
							ease: "easeOut"
						},
						className: "absolute z-50 left-0 right-0 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-border bg-background p-2 shadow-xl dark:border-white/10 dark:bg-black/95",
						children: typesList.map((typeOption) => {
							const isSelected = propertyType === typeOption.value;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setPropertyType(typeOption.value);
									setIsTypeOpen(false);
								},
								className: `w-full px-4 py-3 text-left text-xs font-semibold rounded-xl flex items-center justify-between transition-colors ${isSelected ? "bg-gold/10 text-gold font-bold" : "text-foreground/90 hover:bg-neutral-50 dark:hover:bg-neutral-900"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: typeOption.label }), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-gold" })]
							}, typeOption.value);
						})
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: priceRef,
					className: `relative ${isPriceOpen ? "z-30" : "z-10"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => {
							setIsPriceOpen(!isPriceOpen);
							setIsLocOpen(false);
							setIsTypeOpen(false);
						},
						className: `w-full h-16 sm:h-[72px] rounded-2xl border bg-white dark:bg-neutral-900/60 px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${isPriceOpen ? "border-gold ring-4 ring-gold/5 shadow-sm" : "border-neutral-100 hover:border-gold/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PesoIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col text-left truncate",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-bold uppercase tracking-[0.15em] text-gold select-none leading-none mb-1.5",
									children: "PRICE RANGE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[13px] font-semibold truncate leading-none ${priceRange ? "text-foreground" : "text-muted-foreground/80"}`,
									children: currentPriceLabel
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-1 ${isPriceOpen ? "rotate-180 text-gold" : ""}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isPriceOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 8,
							scale: .98
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						exit: {
							opacity: 0,
							y: 8,
							scale: .98
						},
						transition: {
							duration: .15,
							ease: "easeOut"
						},
						className: "absolute z-50 left-0 right-0 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-border bg-background p-2 shadow-xl dark:border-white/10 dark:bg-black/95",
						children: pricesList.map((priceOption) => {
							const isSelected = priceRange === priceOption.value;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setPriceRange(priceOption.value);
									setIsPriceOpen(false);
								},
								className: `w-full px-4 py-3 text-left text-xs font-semibold rounded-xl flex items-center justify-between transition-colors ${isSelected ? "bg-gold/10 text-gold font-bold" : "text-foreground/90 hover:bg-neutral-50 dark:hover:bg-neutral-900"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: priceOption.label }), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-gold" })]
							}, priceOption.value);
						})
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleSearch,
					className: "group w-full lg:w-auto lg:px-12 h-14 sm:h-16 lg:h-[58px] rounded-2xl bg-[#1B365D] hover:bg-[#12284C] dark:bg-gold dark:hover:bg-gold-soft text-white dark:text-primary flex items-center justify-center gap-2.5 font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] justify-self-center lg:justify-self-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-gold shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Search" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" })
					]
				})
			]
		})]
	});
}
var globalIntroDone = false;
function Index() {
	const [introDone, setIntroDone] = (0, import_react.useState)(globalIntroDone);
	const handleIntroDone = () => {
		globalIntroDone = true;
		setIntroDone(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		!introDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, { onDone: handleIntroDone }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[85vh] sm:min-h-[90vh] w-full bg-[#051C3F] text-white flex flex-col justify-center pt-24 pb-20 sm:pt-32 sm:pb-28 z-30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 overflow-hidden z-0 pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: hero_default,
							alt: "Luxury home at dusk fallback",
							width: 1920,
							height: 1280,
							className: "h-full w-full object-cover",
							animate: {
								scale: [
									1.05,
									1.12,
									1.05
								],
								x: [
									"-1%",
									"1%",
									"-1%"
								],
								y: [
									"-0.5%",
									"0.5%",
									"-0.5%"
								]
							},
							transition: {
								duration: 24,
								ease: "easeInOut",
								repeat: Infinity,
								repeatType: "reverse"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							autoPlay: true,
							loop: true,
							muted: true,
							playsInline: true,
							className: "h-full w-full object-cover opacity-70",
							src: "https://assets.mixkit.co/videos/preview/mixkit-luxury-home-with-swimming-pool-at-dusk-32884-large.mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 z-10 pointer-events-none",
						style: { background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(5, 28, 63, 0.45) 50%, #051C3F 100%)" }
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-rail relative z-10 flex flex-col justify-center gap-8 mt-12 sm:mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: introDone ? {
							opacity: 1,
							y: 0
						} : {},
						transition: {
							duration: .9,
							ease: [
								.22,
								1,
								.36,
								1
							],
							delay: .2
						},
						className: "w-full max-w-5xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.4em] text-gold font-bold",
								children: "Cicerra Realty Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-3 font-display text-4xl leading-[1.08] text-balance text-white sm:text-6xl md:text-7xl",
								children: [
									"Luxury Homes.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Smart Investments.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold-soft",
										children: "Trusted Experts."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-sm sm:text-base text-white/70",
								children: "Advising families, professionals, and investors in secure property acquisitions."
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full flex justify-center relative z-25 mt-4 -mb-16 sm:-mb-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: introDone ? {
							opacity: 1,
							y: 0
						} : {},
						transition: {
							duration: .9,
							ease: [
								.22,
								1,
								.36,
								1
							],
							delay: .4
						},
						className: "w-full max-w-5xl animate-fade-in-up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertySearch, {})
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "bg-white py-20 border-b border-border/40 relative z-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-rail",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.4em] text-gold font-bold",
							children: "Our Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl sm:text-4xl text-[#1B365D]",
							children: "Every step of the journey, beautifully handled."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground leading-relaxed",
							children: "We guide Filipino families and professionals with absolute transparency, verified documentation, and secure transactions."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: services.map((s, i) => {
						const isDark = i % 2 !== 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `group flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${isDark ? "bg-[#1B365D] text-white border-none shadow-[0_20px_40px_rgba(27,54,93,0.1)]" : "bg-[#FAF9F6] border border-border/80 text-foreground shadow-[0_20px_40px_rgba(0,0,0,0.02)]"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7 text-gold transition-transform duration-300 group-hover:-translate-y-1 shrink-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `mt-6 font-display text-xl sm:text-2xl ${isDark ? "text-white" : "text-[#1B365D]"}`,
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-3 text-sm leading-relaxed ${isDark ? "text-white/80" : "text-muted-foreground"}`,
										children: s.description
									})
								]
							})
						}, s.title);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "partners",
			className: "bg-[#FAF9F6] py-20 border-b border-border/40 relative z-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-rail",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-2xl text-center mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.4em] text-gold font-bold",
						children: "Accredited Partners"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl sm:text-4xl text-[#1B365D]",
						children: "Builders & Financial Partners"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-2 items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "rounded-3xl border border-border/60 bg-white p-8 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-[#1B365D] border-b border-border/40 pb-3 mb-6 uppercase tracking-wider text-center lg:text-left font-bold",
							children: "Accredited Developers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10",
							children: [
								{
									name: "STA. LUCIA INC",
									logo: sta_lucia_default,
									className: "max-h-16"
								},
								{
									name: "ROCKWELL",
									logo: rockwell_default,
									className: "max-h-20"
								},
								{
									name: "MEGAWORLD",
									logo: megaworld_default,
									className: "max-h-20 scale-[1.25]"
								},
								{
									name: "AVIDA",
									logo: avida_default,
									className: "max-h-16 scale-125"
								},
								{
									name: "ALVEO",
									logo: alveo_default,
									className: "max-h-7"
								}
							].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-20 items-center justify-center px-3 text-center transition-all hover:scale-105 duration-200",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.logo,
									alt: `${d.name} logo`,
									className: `${d.className} object-contain select-none`
								})
							}, d.name))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .1,
						className: "rounded-3xl border border-border/60 bg-white p-8 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-[#1B365D] border-b border-border/40 pb-3 mb-6 uppercase tracking-wider text-center lg:text-left font-bold",
							children: "Accredited Banks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-x-6 gap-y-10",
							children: [
								{
									name: "BDO",
									logo: bdo_default,
									className: "max-h-8"
								},
								{
									name: "BPI",
									logo: bpi_default,
									className: "max-h-14 scale-115"
								},
								{
									name: "SECURITY BANK",
									logo: security_bank_default,
									className: "max-h-14"
								},
								{
									name: "RCBC",
									logo: rcbc_default,
									className: "max-h-11"
								}
							].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-20 items-center justify-center px-4 py-2 text-center transition-all hover:scale-105 duration-200",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: b.logo,
									alt: `${b.name} logo`,
									className: `${b.className} object-contain select-none`
								})
							}, b.name))
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "about",
			className: "bg-white py-20 relative z-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-rail",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 lg:grid-cols-12 mb-16 max-w-5xl mx-auto w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.4em] text-gold",
								children: "Our Story"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-display text-4xl text-balance leading-[1.1] sm:text-5xl",
								children: [
									"More than real estate.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-muted-foreground",
										children: "Helping families find home."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-6 block h-px w-12 bg-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
								children: "Cicerra Realty Services was built around a quiet conviction: a home is more than square meters and paperwork — it's where futures take shape. We guide Filipino families, professionals, and investors through honest, certified property decisions under licensed legal frameworks."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/about",
								className: "group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground hover:text-gold",
								children: ["Read our story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						className: "relative lg:col-span-5 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[2rem] border-2 border-gold/30 bg-white p-2 shadow-md w-fit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ryan_arms_crossed_default,
								alt: "Ryan John Ciceron",
								loading: "lazy",
								width: 600,
								height: 800,
								className: "h-[400px] w-auto max-w-full rounded-2xl object-contain"
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center py-8 border-t border-border/50",
					children: [
						{
							n: 250,
							suf: "+",
							label: "Properties Listed"
						},
						{
							n: 150,
							suf: "+",
							label: "Successful Transactions"
						},
						{
							n: 10,
							suf: "+",
							label: "Years Experience"
						},
						{
							n: 99,
							suf: "%",
							label: "Client Satisfaction"
						}
					].map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: idx * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center px-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl sm:text-4xl text-[#1B365D] font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
									to: s.n,
									suffix: s.suf
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold",
								children: s.label
							})]
						})
					}, s.label))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[#FAF9F6] py-20 border-t border-border/40 relative z-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-rail",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "text-center mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.4em] text-gold",
						children: "Client Testimonials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl sm:text-4xl",
						children: "In their own words."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cta_default,
					alt: "Luxury home at dusk",
					loading: "lazy",
					width: 1920,
					height: 1080,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-rail relative z-10 py-24 text-center sm:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.4em] text-gold font-bold",
							children: "LET'S BEGIN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto mt-4 max-w-3xl font-display text-4xl text-balance text-white sm:text-5xl",
							children: "Ready to find your next property?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/70",
							children: "Tell us what you're looking for. We'll bring you the homes — and the honest advice — worth your time."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/properties",
								className: "rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1B365D] transition hover:bg-gold-soft hover:shadow-lg active:scale-95",
								children: "Search Listings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "rounded-full border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-white/10 hover:border-white/60 active:scale-95",
								children: "Contact Our Team"
							})]
						})
					] })
				})
			]
		})
	] });
}
//#endregion
export { Index as component };
