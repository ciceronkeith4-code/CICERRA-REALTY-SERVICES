import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B4hrv8d7.mjs";
import { c as Phone, f as MapPin, g as Facebook, p as Mail } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D7E2zK_x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ryan_card_default = "/assets/ryan-card-B2mrRAmU.png";
function ContactPage() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			e.target.reset();
			toast.success("Thanks — we'll be in touch shortly.");
		}, 700);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background pt-32 pb-24 sm:pt-40 sm:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-rail grid gap-16 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.4em] text-gold font-bold",
						children: "Get in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-5xl leading-[1.05] text-balance sm:text-6xl text-[#1B365D]",
						children: [
							"Let's find the",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-muted-foreground",
								children: "right property."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-base text-muted-foreground",
						children: "Tell us a little about what you're looking for and a member of our team will reach out within one business day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-6 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-gold/40 shadow-sm bg-neutral-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ryan_card_default,
										alt: "Ryan John Ciceron",
										className: "h-full w-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-sans text-base font-bold text-[#1B365D] dark:text-gold leading-tight",
									children: "Ryan John Ciceron, REB, REA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground font-semibold",
									children: "Licensed Real Estate Broker & Appraiser"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-3 border-t border-neutral-200/60 dark:border-neutral-800/80 pt-5 text-xs text-neutral-600 dark:text-neutral-300 font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground uppercase tracking-widest text-[9px] font-bold",
											children: "REB PRC License"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono font-bold text-sm text-[#1B365D] dark:text-gold",
											children: "35705"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground uppercase tracking-widest text-[9px] font-bold",
											children: "REA PRC License"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono font-bold text-sm text-[#1B365D] dark:text-gold",
											children: "13309"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground uppercase tracking-widest text-[9px] font-bold",
											children: "DHSUD Reg No."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono font-bold text-sm text-[#1B365D] dark:text-gold",
											children: "10178"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-3.5 border-t border-neutral-200/60 dark:border-neutral-800/80 pt-5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:09603503659",
										className: "flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-gold transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans font-semibold text-sm",
											children: "09603503659"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "mailto:cicerra.realty@gmail.com",
										className: "flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-gold transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans font-semibold text-sm",
											children: "cicerra.realty@gmail.com"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3 text-neutral-700 dark:text-neutral-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: "Imus, Cavite, Philippines"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://facebook.com/cicerrarealestateservice",
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-gold transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: "facebook.com/cicerrarealestateservice"
										})]
									})
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "rounded-3xl border border-border bg-card p-8 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									name: "name",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									name: "email",
									type: "email",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									name: "phone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "I'm interested in",
									name: "interest",
									placeholder: "Buying, selling, investing…"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 5,
								required: true,
								className: "mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold",
								placeholder: "Tell us a little about what you're looking for."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60 sm:w-auto",
							children: loading ? "Sending…" : "Send Message"
						})
					]
				})
			})]
		})
	});
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		placeholder,
		className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold"
	})] });
}
//#endregion
export { ContactPage as component };
