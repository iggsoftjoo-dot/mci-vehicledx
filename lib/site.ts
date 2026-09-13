export const site = {
  name: "MCI",
  legalName: "MCI — My Car Inspection",
  taglineKo: "마이 카 인스펙션",
  domain: "vehicledx.com",
  url: "https://vehicledx.com",
  inquiryEmail: "inquiries@vehicledx.com",
  description:
    "MCI (My Car Inspection) delivers objective, real-time used-car evaluation reports from Korea to overseas B2B buyers and importers.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/contact", label: "Contact" },
] as const;
