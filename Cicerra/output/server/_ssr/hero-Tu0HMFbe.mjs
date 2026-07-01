import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hero-Tu0HMFbe.js
var import_jsx_runtime = require_jsx_runtime();
var cicerra_logo_default = "/assets/cicerra-logo-BJHS7ZqX.png";
function Logo({ className = "", showScrolledStyle = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center justify-center select-none ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: cicerra_logo_default,
			alt: "Cicerra Realty Services Logo",
			className: "h-10 sm:h-12 w-auto object-contain select-none pointer-events-none transition-transform duration-300 group-hover:scale-102"
		})
	});
}
var hero_default = "/assets/hero-B8731I9T.jpg";
//#endregion
export { hero_default as n, Logo as t };
