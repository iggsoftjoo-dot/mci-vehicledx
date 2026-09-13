import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "MCI exists to give overseas buyers a factual picture of Korean used cars — professional, objective inspection rather than a sales description.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MCI · 마이 카 인스펙션"
        title="A factual picture of the car, for the buyer who cannot stand next to it."
        lede="Overseas importers cannot walk every Korean lot. MCI was built so they do not have to rely on a description written for someone else."
      />

      <section className="section-space">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl tracking-tight md:text-4xl">
              Why this company exists
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Buying used cars from Korea is a distance problem as much as a
                vehicle problem. The inventory is real: used vehicles produced
                in Korea, and used vehicles that were imported into Korea and
                driven there. The people who need a reliable read on those
                cars often are not.
              </p>
              <p>
                Local remarks are usually written for a local transaction.
                They can be useful, and they can also omit what an overseas
                buyer would have asked if they had been on the ground.
              </p>
              <p>
                MCI — My Car Inspection — sits on that gap. Professional
                diagnostic evaluators inspect the vehicle in Korea. The
                resulting evaluation materials are prepared for the overseas
                buyer who requested them, and delivered in real time.
              </p>
            </div>
          </div>
          <blockquote className="self-start rounded-2xl bg-navy p-8 text-paper md:p-10">
            <p className="font-heading text-2xl leading-snug tracking-tight md:text-3xl">
              “We evaluate vehicles. We do not sell them.”
            </p>
            <p className="mt-5 text-sm leading-relaxed text-paper/70">
              That is the whole brief. Objectivity is the product. If a unit
              cannot be inspected properly, the honest answer is to say so.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="section-space bg-navy-mist/60">
        <div className="container-page">
          <h2 className="font-heading text-3xl tracking-tight">
            What we are — and are not
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-card p-6 ring-1 ring-navy/10">
              <h3 className="text-lg font-semibold">MCI is</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  An inspection and evaluation partner for overseas B2B buyers
                  and importers of Korean used cars.
                </li>
                <li>
                  A channel for professional diagnostic work performed in
                  Korea, written in language a remote buying team can use.
                </li>
                <li>
                  Optimized to deliver reports to the people who actually
                  need them, not to fill a public inventory page.
                </li>
              </ul>
            </article>
            <article className="rounded-2xl bg-card p-6 ring-1 ring-navy/10">
              <h3 className="text-lg font-semibold">MCI is not</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  A used-car dealer. We do not represent a lot’s stock as our
                  own inventory.
                </li>
                <li>
                  A substitute for your own commercial judgment, shipping
                  terms, or destination-market compliance.
                </li>
                <li>
                  A scoreboard of invented ratings, partner logos, or
                  inspection counts. If a number is not here, we have not
                  claimed it.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space bg-navy text-paper">
        <div className="container-page max-w-3xl">
          <h2 className="font-heading text-3xl tracking-tight">
            The delivery system is already running
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper/75">
            MCI already operates an inspection workflow and secure server
            storage for photo and video materials. Evaluation files are
            prepared and held for the overseas buyer who requested them —
            not published as a public lot feed.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page max-w-3xl">
          <h2 className="font-heading text-3xl tracking-tight">Mission</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/85">
            Give overseas buyers the same factual picture a careful inspector
            would have standing next to the car — then get that picture to
            them while the decision still matters.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            English is our primary language because the audience is global.
            The work itself stays in Korea, on used vehicles produced there
            and on used vehicles imported into Korea and driven there.
          </p>
        </div>
      </section>

      <CtaBand
        title="Talk to MCI about your buying program."
        body="Share your market and the kinds of vehicles you source. We will explain how evaluation access works."
      />
    </>
  );
}
