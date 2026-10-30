import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export type Property = {
  id: string;
  name: string;
  image?: string;
  location: string;
  price: string;
  beds?: number;
  baths?: number;
  lot: string;
  tag: string;
  type: "Lot" | "House and Lot" | "Condominium" | "Commercial Space";
  category?: "house" | "condo" | "resort" | "lot";
  details?: string;
};

export const properties: Property[] = [
  // LOTS - Sta. Lucia Land
  {
    id: "orchard-estate-lot",
    name: "Orchard Residential Estate",
    image: property1,
    location: "Dasmariñas, Cavite",
    price: "₱4,800,000",
    lot: "240 sqm",
    tag: "Sta. Lucia Land",
    type: "Lot",
    category: "lot",
  },
  {
    id: "lake-charbel-lot",
    name: "The Lake at St. Charbel",
    image: property5,
    location: "Dasmariñas, Cavite",
    price: "₱3,800,000",
    lot: "120 - 328 sqm",
    tag: "Sta. Lucia Land",
    type: "Lot",
    category: "lot",
  },
  // LOTS - Rockwell Land
  {
    id: "molinillo-rockwell",
    name: "Molinillo at Rockwell Center Lipa",
    image: property4,
    location: "Lipa, Batangas",
    price: "₱6,200,000",
    lot: "247 - 450 sqm",
    tag: "Rockwell Land",
    type: "Lot",
    category: "lot",
  },
  {
    id: "lauan-ridges-rockwell",
    name: "Lauan Ridges",
    image: property2,
    location: "Lipa, Batangas",
    price: "₱8,800,000",
    lot: "250 - 600 sqm",
    tag: "Rockwell Land",
    type: "Lot",
    category: "lot",
  },
  {
    id: "rockwell-south-carmelray-lot",
    name: "Rockwell South at Carmelray (Lots)",
    image: property1,
    location: "Carmelray, Laguna",
    price: "₱14,500,000",
    lot: "250 - 468 sqm",
    tag: "Rockwell Land",
    type: "Lot",
    category: "lot",
  },
  // HOUSE & LOT - Rockwell Land
  {
    id: "rockwell-south-carmelray-house",
    name: "Rockwell South at Carmelray (House & Lot)",
    image: property2,
    location: "Carmelray, Laguna",
    price: "₱28,500,000",
    beds: 4,
    baths: 4,
    lot: "250 - 468 sqm",
    tag: "Rockwell Land",
    type: "House and Lot",
    category: "house",
  },
  // CONDOMINIUM - Rockwell Land
  {
    id: "arton-rockwell",
    name: "The Arton by Rockwell",
    image: property3,
    location: "Katipunan, Quezon City",
    price: "₱8,500,000",
    beds: 2,
    baths: 2,
    lot: "27 - 130 sqm",
    tag: "Rockwell Land",
    type: "Condominium",
    category: "condo",
  },
  {
    id: "edades-west-rockwell",
    name: "Edades West by Rockwell",
    image: property6,
    location: "Rockwell Center, Makati",
    price: "₱45,000,000",
    beds: 3,
    baths: 3.5,
    lot: "100 - 248 sqm",
    tag: "Rockwell Land",
    type: "Condominium",
    category: "condo",
  },
  {
    id: "bencab-rockwell-nepo",
    name: "The BenCab",
    image: property3,
    location: "Angeles, Pampanga",
    price: "₱9,500,000",
    beds: 2,
    baths: 2,
    lot: "32 - 126 sqm",
    tag: "Rockwell Land",
    type: "Condominium",
    category: "condo",
  },
];

// Always resolves to an array: stored listings when the API returns them,
// otherwise the bundled defaults above.
export async function getStoredProperties(): Promise<Property[]> {
  try {
    const res = await fetch("/api/properties", { headers: { Accept: "application/json" } });
    const contentType = res.headers.get("content-type") ?? "";
    if (!res.ok || !contentType.includes("application/json")) {
      throw new Error(`Unexpected response: ${res.status} ${contentType}`);
    }
    const data: unknown = await res.json();
    return Array.isArray(data) ? (data as Property[]) : properties;
  } catch (e) {
    console.warn("Failed to fetch properties from API, falling back to defaults", e);
    return properties;
  }
}

// Throws with a user-facing message when the save did not go through.
export async function saveStoredProperties(props: Property[]): Promise<void> {
  const res = await fetch("/api/properties", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(props),
  });
  if (res.ok) return;
  if (res.status === 401) throw new Error("Your admin session has expired. Please sign in again.");
  let message = `Save failed (HTTP ${res.status}).`;
  try {
    const body = (await res.json()) as { error?: string };
    if (body.error) message = `Save failed: ${body.error}.`;
  } catch {
    // keep the generic message
  }
  throw new Error(message);
}
