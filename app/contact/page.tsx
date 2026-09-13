import type { Metadata } from "next";
import { BookingButton, ContactChannels } from "@/components/contact-channels";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an MCI inspection or reach Guny J by phone, email, KakaoTalk, or WhatsApp for Korean used-car evaluation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a report. Talk to MCI. Get evaluation access."
        lede="Book an inspection online, or reach the appraiser directly. English-first for overseas buyers."
      />

      <section className="section-space">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl tracking-tight">
                How to reach us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Phone, email, KakaoTalk, and WhatsApp all reach the same
                person. Use the booking link if you already know the vehicle
                you need inspected.
              </p>
            </div>
            <ContactChannels />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookingButton />
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-medium text-navy underline underline-offset-4"
              >
                Email {site.email}
              </a>
            </div>
          </aside>
          <div className="rounded-2xl border border-navy/10 bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl tracking-tight">
              Inquiry form
            </h2>
            <p className="mt-2 mb-8 text-sm text-muted-foreground">
              Required fields: name, company, email, country, and a short
              message. Submitting opens a draft to {site.email}.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
