import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: [site.name, "My Car Inspection"],
    url: site.url,
    email: site.email,
    telephone: "+82-10-9124-2805",
    description: site.description,
    areaServed: "Worldwide",
    employee: {
      "@type": "Person",
      name: site.contactName,
      alternateName: site.contactNameKo,
      jobTitle: site.title,
      email: site.email,
      telephone: "+82-10-9124-2805",
    },
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
