import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-B4hrv8d7.js
var import_jsx_runtime = require_jsx_runtime();
var variants = {
	hidden: {
		opacity: 0,
		y: 28,
		filter: "blur(6px)"
	},
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)"
	}
};
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants,
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay
		},
		className,
		children
	});
}
//#endregion
export { Reveal as t };
