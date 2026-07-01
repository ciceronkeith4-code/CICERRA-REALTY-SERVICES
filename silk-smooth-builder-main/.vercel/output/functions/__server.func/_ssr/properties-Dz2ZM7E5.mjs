//#region node_modules/.nitro/vite/services/ssr/assets/properties-Dz2ZM7E5.js
var property_1_default = "/assets/property-1-JrOWlfk3.jpg";
var property_2_default = "/assets/property-2-iAvTJgWd.jpg";
var property_3_default = "/assets/property-3-CTlwu6oG.jpg";
var properties = [
	{
		id: "orchard-estate-lot",
		name: "Orchard Residential Estate",
		image: property_1_default,
		location: "Dasmariñas, Cavite",
		price: "₱4,800,000",
		lot: "240 sqm",
		tag: "Sta. Lucia Land",
		type: "Lot",
		category: "lot"
	},
	{
		id: "lake-charbel-lot",
		name: "The Lake at St. Charbel",
		image: "/assets/property-5-BkRuihBW.jpg",
		location: "Dasmariñas, Cavite",
		price: "₱3,800,000",
		lot: "120 - 328 sqm",
		tag: "Sta. Lucia Land",
		type: "Lot",
		category: "lot"
	},
	{
		id: "molinillo-rockwell",
		name: "Molinillo at Rockwell Center Lipa",
		image: "/assets/property-4-BS6RCebc.jpg",
		location: "Lipa, Batangas",
		price: "₱6,200,000",
		lot: "247 - 450 sqm",
		tag: "Rockwell Land",
		type: "Lot",
		category: "lot"
	},
	{
		id: "lauan-ridges-rockwell",
		name: "Lauan Ridges",
		image: property_2_default,
		location: "Lipa, Batangas",
		price: "₱8,800,000",
		lot: "250 - 600 sqm",
		tag: "Rockwell Land",
		type: "Lot",
		category: "lot"
	},
	{
		id: "rockwell-south-carmelray-lot",
		name: "Rockwell South at Carmelray (Lots)",
		image: property_1_default,
		location: "Carmelray, Laguna",
		price: "₱14,500,000",
		lot: "250 - 468 sqm",
		tag: "Rockwell Land",
		type: "Lot",
		category: "lot"
	},
	{
		id: "rockwell-south-carmelray-house",
		name: "Rockwell South at Carmelray (House & Lot)",
		image: property_2_default,
		location: "Carmelray, Laguna",
		price: "₱28,500,000",
		beds: 4,
		baths: 4,
		lot: "250 - 468 sqm",
		tag: "Rockwell Land",
		type: "House and Lot",
		category: "house"
	},
	{
		id: "arton-rockwell",
		name: "The Arton by Rockwell",
		image: property_3_default,
		location: "Katipunan, Quezon City",
		price: "₱8,500,000",
		beds: 2,
		baths: 2,
		lot: "27 - 130 sqm",
		tag: "Rockwell Land",
		type: "Condominium",
		category: "condo"
	},
	{
		id: "edades-west-rockwell",
		name: "Edades West by Rockwell",
		image: "/assets/property-6-p0sDhP67.jpg",
		location: "Rockwell Center, Makati",
		price: "₱45,000,000",
		beds: 3,
		baths: 3.5,
		lot: "100 - 248 sqm",
		tag: "Rockwell Land",
		type: "Condominium",
		category: "condo"
	},
	{
		id: "bencab-rockwell-nepo",
		name: "The BenCab",
		image: property_3_default,
		location: "Angeles, Pampanga",
		price: "₱9,500,000",
		beds: 2,
		baths: 2,
		lot: "32 - 126 sqm",
		tag: "Rockwell Land",
		type: "Condominium",
		category: "condo"
	}
];
function getStoredProperties() {
	if (typeof window !== "undefined") {
		const saved = localStorage.getItem("cicerra_properties");
		if (saved) try {
			return JSON.parse(saved);
		} catch (e) {
			console.error("Failed to parse stored properties", e);
		}
	}
	return properties;
}
function saveStoredProperties(props) {
	if (typeof window !== "undefined") localStorage.setItem("cicerra_properties", JSON.stringify(props));
}
//#endregion
export { saveStoredProperties as n, getStoredProperties as t };
