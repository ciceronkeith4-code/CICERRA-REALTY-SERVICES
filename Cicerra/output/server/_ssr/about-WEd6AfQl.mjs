import { t as ryan_arms_crossed_default } from "./ryan-arms-crossed-jkJvhvl1.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B4hrv8d7.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-WEd6AfQl.js
var import_jsx_runtime = require_jsx_runtime();
var milestones = [
	{
		year: "2014",
		title: "A quiet beginning",
		body: "Cicerra opens with a single conviction: real estate done with care, never pressure."
	},
	{
		year: "2017",
		title: "Trusted across the metro",
		body: "Our family of clients grows organically — referral by referral."
	},
	{
		year: "2021",
		title: "Investment advisory",
		body: "We expand into yield-focused advisory for clients building long-term portfolios."
	},
	{
		year: "2025",
		title: "A new chapter",
		body: "Today we serve hundreds of families across Luzon — and we're just getting started."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background pt-32 pb-16 sm:pt-40 sm:pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-rail",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground hover:text-gold mb-6 transition cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to Home"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.4em] text-gold",
							children: "About Cicerra"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-5xl leading-[1.05] text-balance sm:text-7xl",
							children: [
								"More than real estate.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-muted-foreground",
									children: "Helping families find home."
								})
							]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background pb-24 sm:pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-rail grid gap-12 lg:grid-cols-12 items-center max-w-5xl mx-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "lg:col-span-5 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-3xl border-2 border-gold/30 bg-white p-2 shadow-md w-fit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ryan_arms_crossed_default,
							alt: "Ryan John Ciceron",
							loading: "lazy",
							width: 600,
							height: 800,
							className: "h-[55vh] min-h-[360px] w-auto max-w-full rounded-2xl object-contain"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-10 pl-0 lg:pl-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.4em] text-gold font-bold",
						children: "WHO WE ARE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl sm:text-4xl text-[#1B365D]",
						children: "A decade of patient, local expertise."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 sm:grid-cols-2",
						children: [
							{
								title: "Founded in Care",
								bold: "A promise of calm.",
								text: "Cicerra Realty Services was established with a focus on care over pressure. We believe real estate moves should feel clear, considered, and calm."
							},
							{
								title: "Broker Credentials",
								bold: "RYAN JOHN S. CICERON, REB, REA.",
								text: "Licensed Real Estate Broker (PRC No. 35705), Licensed Appraiser (PRC No. 13309), and DHSUD Registered Broker (No. 10178) providing fully secure legal transactions."
							},
							{
								title: "Direct Access",
								bold: "Bespoke service by design.",
								text: "Our team is selectively small. Instead of automated responses, every client works directly with an experienced senior broker."
							},
							{
								title: "Yield Advisory",
								bold: "Long-term asset growth.",
								text: "We specialize in identifying yield-producing properties and high-value opportunities for professionals building real estate portfolios."
							}
						].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1 + idx * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 border-l-2 border-gold/45 pl-5 py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-wider text-gold font-bold",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-foreground text-sm",
										children: item.bold
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: item.text
									})
								]
							})
						}, item.title))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-24 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-rail",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.4em] text-gold",
						children: "Our journey"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl sm:text-4xl",
						children: "Milestones, lightly told."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-3xl border border-border bg-card p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl text-gold",
									children: m.year
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl text-foreground",
									children: m.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: m.body
								})
							]
						})
					}, m.year))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-rail text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto max-w-2xl font-display text-3xl text-balance sm:text-5xl",
					children: "Let's find the right property — together."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-primary/90",
					children: "Talk to us"
				})] })
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
