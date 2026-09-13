import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: [site.name, "My Car Inspection"],
    url: site.url,
    email: site.inquiryEmail,
    description: site.description,
    areaServed: "Worldwide",
    knowsAbout: [
      "Used car inspection",
      "Vehicle evaluation reports",
      "Korean used car exports",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
