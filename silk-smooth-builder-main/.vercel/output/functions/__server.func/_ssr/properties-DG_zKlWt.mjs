import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties-DG_zKlWt.js
var $$splitComponentImporter = () => import("./properties-D4y0hjXt.mjs");
var searchSchema = objectType({
	tab: stringType().optional().catch("buy"),
	location: stringType().optional(),
	type: stringType().optional(),
	price: stringType().optional()
});
var Route = createFileRoute("/properties")({
	validateSearch: searchSchema,
	head: () => ({ meta: [
		{ title: "Properties — Cicerra Real Estate Service" },
		{
			name: "description",
			content: "Browse a curated selection of luxury homes, beachfront estates, and city residences from Cicerra Real Estate Service."
		},
		{
			property: "og:title",
			content: "Featured Properties — Cicerra"
		},
		{
			property: "og:description",
			content: "Hand-picked homes and investment opportunities across the Philippines."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
