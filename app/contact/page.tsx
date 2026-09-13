import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request an MCI evaluation report or talk to the team about access for your Korean used-car buying program.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a report. Talk to MCI. Get evaluation access."
        lede="Tell us about your importing program and the vehicles you need evaluated. We will reply with how inspection work is scoped and delivered."
      />

      <section className="section-space">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl tracking-tight">
                How to reach us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The form prepares an email to our inquiry address. Use it for
                first contact, standing evaluation access, or a specific
                vehicle you need inspected in Korea.
              </p>
            </div>
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                  Inquiry email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.inquiryEmail}`}
                    className="font-medium text-navy underline underline-offset-4"
                  >
                    {site.inquiryEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                  Canonical domain
                </dt>
                <dd className="mt-2 text-navy">{site.domain}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                  Audience
                </dt>
                <dd className="mt-2 text-muted-foreground">
                  Overseas B2B buyers and importers of Korean used cars —
                  English-first correspondence.
                </dd>
              </div>
            </dl>
          </aside>
          <div className="rounded-2xl border border-navy/10 bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl tracking-tight">
              Inquiry form
            </h2>
            <p className="mt-2 mb-8 text-sm text-muted-foreground">
              Required fields: name, company, email, country, and a short
              message.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
