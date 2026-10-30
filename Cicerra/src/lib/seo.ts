// Per-route <head> tags: title, description, canonical, Open Graph and Twitter.
// Child-route meta overrides the root's (TanStack keeps the deepest match).
export const SITE_URL = "https://cicerra-realty-services.vercel.app";
export const SITE_NAME = "Cicerra Realty Services";

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function seo({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(image
        ? [
            { property: "og:image", content: absoluteUrl(image) },
            { name: "twitter:image", content: absoluteUrl(image) },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  image: `${SITE_URL}/favicon.png`,
  telephone: "+63 960 350 3659",
  email: "cicerra.realty@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Imus",
    addressRegion: "Cavite",
    addressCountry: "PH",
  },
  areaServed: [
    { "@type": "City", name: "Imus, Cavite" },
    { "@type": "Place", name: "Cavite" },
    { "@type": "Place", name: "Metro Manila" },
  ],
  sameAs: ["https://facebook.com/cicerrarealestateservice"],
  founder: {
    "@type": "Person",
    name: "Ryan John S. Ciceron",
    jobTitle: "Licensed Real Estate Broker and Appraiser",
  },
  identifier: [
    { "@type": "PropertyValue", propertyID: "PRC Real Estate Broker License", value: "35705" },
    { "@type": "PropertyValue", propertyID: "PRC Real Estate Appraiser License", value: "13309" },
    { "@type": "PropertyValue", propertyID: "DHSUD Registration", value: "10178" },
  ],
};
