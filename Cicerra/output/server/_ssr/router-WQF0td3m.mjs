import { a as __toESM } from "../_runtime.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { F as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowUp, S as ChevronDown, c as Phone, f as MapPin, g as Facebook, l as Menu, p as Mail, t as X } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$6 } from "./properties-DG_zKlWt.mjs";
import { n as hero_default, t as Logo } from "./hero-Tu0HMFbe.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-WQF0td3m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CgEKiHgk.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var links = [
	{
		to: "/",
		hash: void 0,
		label: "Home"
	},
	{
		to: "/",
		hash: "about",
		label: "About"
	},
	{
		to: "/",
		hash: "services",
		label: "Services"
	},
	{
		to: "/",
		hash: "partners",
		label: "Partners"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [dropdownOpen, setDropdownOpen] = (0, import_react.useState)(false);
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const checkAuth = () => {
			if (typeof window !== "undefined") setIsAdmin(sessionStorage.getItem("cicerra_admin_auth") === "true");
		};
		checkAuth();
		window.addEventListener("storage", checkAuth);
		window.addEventListener("cicerra_auth_change", checkAuth);
		return () => {
			window.removeEventListener("storage", checkAuth);
			window.removeEventListener("cicerra_auth_change", checkAuth);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!dropdownOpen) return;
		const handleClose = () => setDropdownOpen(false);
		window.addEventListener("click", handleClose);
		return () => window.removeEventListener("click", handleClose);
	}, [dropdownOpen]);
	const handleNavbarLogout = () => {
		sessionStorage.removeItem("cicerra_admin_auth");
		window.dispatchEvent(new Event("cicerra_auth_change"));
		window.location.href = "/";
	};
	const isHomepage = location.pathname === "/";
	const showScrolledStyle = scrolled || !isHomepage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 transition-all duration-500 ${open ? "z-[100]" : "z-40"} ${showScrolledStyle && !open ? "bg-[#051C3F]/95 backdrop-blur-lg border-b border-white/10" : "bg-transparent border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-rail flex h-16 items-center justify-between sm:h-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "group",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { showScrolledStyle })
			}), isAdmin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: (e) => {
						e.stopPropagation();
						setDropdownOpen(!dropdownOpen);
					},
					className: "flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1 pl-2.5 pr-3 shadow-sm hover:bg-white/10 active:scale-95 transition-all duration-200 text-left cursor-pointer select-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-gold/15 text-gold text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 border border-gold/30",
							children: "Admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-primary font-bold font-sans text-[9px]",
							children: "R"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider font-bold text-white whitespace-nowrap",
							children: "RYAN CICERON"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3 w-3 text-white/60 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}` })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: dropdownOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 8
					},
					transition: { duration: .15 },
					className: "absolute right-0 mt-1.5 w-36 rounded-xl border border-white/10 bg-[#051C3F] p-1 shadow-lg z-50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleNavbarLogout,
						className: "w-full rounded-lg py-2 text-center text-[10px] font-bold uppercase tracking-widest text-red-400 hover:bg-white/5 transition-colors cursor-pointer",
						children: "Logout"
					})
				}) })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						hash: l.hash,
						className: "group relative text-sm tracking-wide transition-colors text-white/85 hover:text-white",
						activeProps: { className: "text-white font-semibold" },
						activeOptions: {
							exact: true,
							includeHash: true
						},
						children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" })]
					}, l.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "rounded-full border border-gold/70 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur transition hover:bg-gold hover:text-primary-foreground",
						children: "Book a Viewing"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Open menu",
					onClick: () => setOpen(true),
					className: "md:hidden text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { y: "-100%" },
			animate: { y: 0 },
			exit: { y: "-100%" },
			transition: {
				type: "tween",
				ease: [
					.16,
					1,
					.3,
					1
				],
				duration: .38
			},
			className: "fixed inset-0 z-50 bg-[#051C3F]/98 backdrop-blur-xl md:hidden flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-6 py-5 border-b border-white/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close menu",
					onClick: () => setOpen(false),
					className: "text-white hover:text-gold transition-colors duration-200",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
				initial: "hidden",
				animate: "show",
				variants: { show: { transition: { staggerChildren: .04 } } },
				className: "mt-16 flex flex-col items-start gap-8 px-10",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: {
						hidden: {
							opacity: 0,
							y: 15
						},
						show: {
							opacity: 1,
							y: 0
						}
					},
					transition: {
						ease: "easeOut",
						duration: .25
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						hash: l.hash,
						onClick: () => setOpen(false),
						className: "font-sans text-xl uppercase tracking-[0.25em] text-white/80 hover:text-gold transition-colors duration-200",
						children: l.label
					})
				}, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: {
						hidden: {
							opacity: 0,
							y: 15
						},
						show: {
							opacity: 1,
							y: 0
						}
					},
					transition: {
						ease: "easeOut",
						duration: .25
					},
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "inline-block rounded-full border border-gold bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white",
						children: "Book Consultation"
					})
				})]
			})]
		}) })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-rail py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { showScrolledStyle: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70",
							children: "Helping families and investors discover homes and opportunities worth coming back to — with trusted guidance from contract to keys."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-lg",
							children: "Quick Links"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-3 block h-px w-6 bg-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-primary-foreground/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-gold",
									children: "About"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/properties",
									className: "hover:text-gold",
									children: "Properties"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "hover:text-gold",
									children: "Services"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-gold",
									children: "Contact"
								}) })
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-lg",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-3 block h-px w-6 bg-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-primary-foreground/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Imus, Cavite, Philippines" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+63 960 350 3659" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "cicerra.realty@gmail.com" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://facebook.com/cicerrarealestateservice",
										target: "_blank",
										rel: "noreferrer",
										className: "hover:text-gold transition-colors duration-200",
										children: "facebook.com/cicerrarealestateservice"
									})]
								})
							]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Cicerra Realty Services. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-primary-foreground/45 font-semibold tracking-wider uppercase",
						children: "RYAN JOHN S. CICERON, REB, REA | Broker PRC No. 35705 | Appraiser PRC No. 13309 | DHSUD Reg. No. 10178"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display italic text-gold/80",
					children: "Finding more than homes."
				})]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function BackToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) setShow(true);
			else setShow(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
		initial: {
			opacity: 0,
			scale: .8,
			y: 10
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .8,
			y: 10
		},
		transition: {
			duration: .25,
			ease: "easeOut"
		},
		href: "viber://chat?number=%2B639603503659",
		className: "fixed bottom-24 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#7360F2] shadow-[0_8px_30px_rgba(115,96,242,0.3)] hover:bg-[#5E4CD8] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-[#7360F2]",
		"aria-label": "Chat on Viber",
		title: "Chat on Viber",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/assets/viber-icon-U7U_eLqn.png",
			alt: "Viber",
			className: "h-full w-full object-contain rounded-full scale-105"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		initial: {
			opacity: 0,
			scale: .8,
			y: 10
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .8,
			y: 10
		},
		transition: {
			duration: .25,
			ease: "easeOut",
			delay: .05
		},
		onClick: scrollToTop,
		"aria-label": "Back to top",
		className: "fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-[#1B365D]/95 hover:bg-[#12284C] dark:bg-gold dark:hover:bg-gold-soft text-white dark:text-primary shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5 animate-pulse" })
	})] }) });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-gold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-5xl text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition hover:bg-primary/90",
					children: "Return home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-input bg-background px-6 py-3 text-sm transition hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Cicerra Realty Services — Luxury Homes. Smart Investments." },
			{
				name: "description",
				content: "Cicerra Realty Services helps Filipino families and investors find premium properties with accredited broker and appraiser guidance."
			},
			{
				name: "author",
				content: "Cicerra Realty Services"
			},
			{
				property: "og:title",
				content: "Cicerra Realty Services"
			},
			{
				property: "og:description",
				content: "Luxury homes. Smart investments. Trusted real estate experts."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico"
			},
			{
				rel: "shortcut icon",
				type: "image/x-icon",
				href: "/favicon.ico"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	const location = useLocation();
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const checkAuth = () => {
			if (typeof window !== "undefined") setIsAdmin(sessionStorage.getItem("cicerra_admin_auth") === "true");
		};
		checkAuth();
		window.addEventListener("storage", checkAuth);
		window.addEventListener("cicerra_auth_change", checkAuth);
		return () => {
			window.removeEventListener("storage", checkAuth);
			window.removeEventListener("cicerra_auth_change", checkAuth);
		};
	}, []);
	const hideNavbar = location.pathname === "/admin" && !isAdmin;
	const hideFooter = location.pathname === "/admin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col bg-background text-foreground",
				children: [
					!hideNavbar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					!hideFooter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })
		]
	});
}
var $$splitComponentImporter$4 = () => import("./services-Cb82-7iV.mjs");
var Route$4 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Cicerra Real Estate Service" },
		{
			name: "description",
			content: "Residential sales, investment advisory, brokerage, consultation, documentation, and marketing — handled end-to-end by Cicerra."
		},
		{
			property: "og:title",
			content: "Services — Cicerra Real Estate Service"
		},
		{
			property: "og:description",
			content: "Every step of the real estate journey, beautifully handled."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-D7E2zK_x.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Cicerra Realty Services" },
		{
			name: "description",
			content: "Book a consultation, ask a question, or schedule a viewing. The Cicerra Realty Services team is here to help."
		},
		{
			property: "og:title",
			content: "Contact Cicerra Realty Services"
		},
		{
			property: "og:description",
			content: "Schedule a consultation with our team."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./admin-CmfQCGqM.mjs");
var Route$2 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var about_default = "/assets/about-DhulbWnH.jpg";
var $$splitComponentImporter$1 = () => import("./about-WEd6AfQl.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Cicerra Real Estate Service" },
		{
			name: "description",
			content: "Learn about Cicerra Real Estate Service — a decade of trusted real estate guidance for Filipino families and investors."
		},
		{
			property: "og:title",
			content: "About Cicerra Real Estate Service"
		},
		{
			property: "og:description",
			content: "More than real estate. Helping families find home."
		},
		{
			property: "og:image",
			content: about_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-B6VNKxGU.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Cicerra Realty Services — Luxury Homes. Smart Investments." },
		{
			name: "description",
			content: "Discover premium homes, smart investments, and trusted real estate guidance with Cicerra Realty Services."
		},
		{
			property: "og:title",
			content: "Cicerra Realty Services"
		},
		{
			property: "og:description",
			content: "Luxury homes. Smart investments. Trusted real estate experts."
		},
		{
			property: "og:image",
			content: hero_default
		},
		{
			name: "twitter:image",
			content: hero_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$5
});
var PropertiesRoute = Route$6.update({
	id: "/properties",
	path: "/properties",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute,
	AdminRoute,
	ContactRoute,
	PropertiesRoute,
	ServicesRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
