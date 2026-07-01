import { Home, TrendingUp, Handshake, Compass, FileSignature, Megaphone } from "lucide-react";

export const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description:
      "From first homes to forever homes — curated listings matched to your family's life and pace.",
  },
  {
    icon: TrendingUp,
    title: "Property Investment",
    description:
      "Build long-term wealth with vetted opportunities, market intelligence, and yield analysis.",
  },
  {
    icon: Compass,
    title: "Property Consultation",
    description:
      "Honest, tailored advice on valuation, positioning, and timing — before you commit.",
  },
  {
    icon: FileSignature,
    title: "Documentation Assistance",
    description:
      "Title transfers, taxes, permits — handled end-to-end so closing day stays effortless.",
  },
  {
    icon: Megaphone,
    title: "Real Estate Marketing",
    description:
      "Editorial-grade photography, storytelling, and exposure that sells the right way.",
  },
  {
    icon: Handshake,
    title: "Property Management",
    description:
      "Licensed management of your assets, ensuring steady leasing yields and hands-off oversight.",
  },
] as const;

export const reasons = [
  {
    title: "Trusted Real Estate Professionals",
    description: "Licensed brokers with a decade of local market mastery and integrity.",
  },
  {
    title: "Verified Property Listings",
    description: "Every property is vetted personally for title clarity, condition, and market value.",
  },
  {
    title: "Investment Guidance",
    description: "Data-led property recommendations that yield long-term asset growth.",
  },
  {
    title: "Personalized Client Support",
    description: "Attentive, custom care that stays with you long after the keys change hands.",
  },
  {
    title: "Fast and Secure Transactions",
    description: "Streamlined title transfers and paperwork via fully secure legal procedures.",
  },
  {
    title: "Local Market Expertise",
    description: "Deep, yield-focused intelligence on high-value Philippine properties.",
  },
] as const;
