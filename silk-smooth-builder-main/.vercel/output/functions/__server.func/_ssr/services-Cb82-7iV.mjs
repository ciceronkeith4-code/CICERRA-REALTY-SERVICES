import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B4hrv8d7.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as services } from "./services-CjjJVR42.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Cb82-7iV.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background pt-32 pb-16 sm:pt-40 sm:pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-rail",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.4em] text-gold",
						children: "What we do"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-5xl leading-[1.05] text-balance sm:text-7xl",
						children: [
							"Every step,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-muted-foreground",
								children: "beautifully handled."
							})
						]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-rail",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
					children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex h-full flex-col bg-background p-10 transition hover:bg-surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-8 w-8 text-gold transition-transform group-hover:-translate-y-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-2xl text-foreground",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: s.description
								})
							]
						})
					}, s.title))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-beige/40 py-24 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-rail text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto max-w-2xl font-display text-3xl text-balance sm:text-5xl",
					children: "Not sure where to start? We'll walk you through it."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-primary/90",
					children: "Book a consultation"
				})] })
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
