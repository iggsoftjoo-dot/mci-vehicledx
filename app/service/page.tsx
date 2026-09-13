import type { Metadata } from "next";
import {
  Camera,
  Car,
  FileSearch,
  Gauge,
  Send,
  Server,
  Video,
  Wrench,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Service",
  description:
    "What MCI used-car inspections cover in Korea, and how evaluation reports are delivered in real time to overseas buyers.",
  alternates: { canonical: "/service" },
};

const coverage = [
  {
    icon: Car,
    title: "Exterior body and paint",
    body: "Panel condition, visible collision clues, rust, glass, lamps, and finish quality — recorded so a remote team can see what the evaluator saw.",
  },
  {
    icon: Gauge,
    title: "Interior and equipment",
    body: "Wear, controls, seats, electronics, and option presence. Notes flag what is working, worn, missing, or not verified in the time available.",
  },
  {
    icon: Wrench,
    title: "Mechanical and diagnostic findings",
    body: "Professional diagnostic evaluators review running condition and observable mechanical issues. This is an inspection, not a workshop rebuild plan.",
  },
  {
    icon: FileSearch,
    title: "History review where records exist",
    body: "Accident or repair history is included when documentation is available. Unverified claims stay labeled as unverified.",
  },
  {
    icon: Camera,
    title: "Photo set and structured notes",
    body: "Photographs and written findings are standard. They are packaged so the report can travel without a salesperson in the room.",
  },
  {
    icon: Video,
    title: "Video materials (paid add-on)",
    body: "Video is available on request as an additional paid service. It is extra work after you ask for it — not part of the standard photo package. Pricing is quoted per job; we do not list a rate here.",
  },
  {
    icon: Send,
    title: "Buyer delivery",
    body: "Completed materials are sent to the overseas buyer who requested the evaluation — the person who needs them to decide.",
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Inspection that is usable on the other side of the shipment."
        lede="MCI evaluations are scoped for overseas B2B buyers: what the car is, what we observed, and what we could not confirm — delivered when the report is ready."
      />

      <section className="section-space">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl tracking-tight md:text-4xl">
              What an evaluation covers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Scope is agreed before work starts. The items below are the
              usual frame for a Korea-registered used vehicle — produced in
              Korea, or imported into Korea and driven there.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {coverage.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-navy/10 bg-card p-6"
              >
                <item.icon className="size-5 text-teal" aria-hidden />
                <h3 className="mt-4 font-heading text-xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-navy text-paper">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Delivery
            </p>
            <h2 className="mt-3 font-heading text-3xl tracking-tight md:text-4xl">
              Real-time, to the buyer — not a public feed.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paper/75">
              MCI is optimized for delivering inspection and evaluation
              materials directly to overseas buyers. When the evaluation is
              complete, the package is sent to the requesting company. That
              is the product: timely evidence for a purchase decision.
            </p>
          </div>
          <ol className="space-y-6">
            {[
              {
                title: "Identify the unit",
                body: "You provide identifiers, lot references, or a shortlist. We confirm we can access and inspect it.",
              },
              {
                title: "Inspect in Korea",
                body: "A professional evaluator completes the agreed scope on the ground.",
              },
              {
                title: "Compile the package",
                body: "Standard photos and notes are structured for a remote buying team. Requested video is produced as extra paid work.",
              },
              {
                title: "Deliver when ready",
                body: "The evaluation goes to you in real time — as soon as it is complete, not when a listing happens to refresh.",
              },
            ].map((item, index) => (
              <li key={item.title} className="flex gap-4">
                <span className="font-heading text-xl text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-paper/70">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space bg-navy-mist/60">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Already in place
            </p>
            <h2 className="mt-3 font-heading text-3xl tracking-tight">
              Workflow and secure storage for photos and video
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              MCI already runs an inspection workflow and stores evaluation
              photos and videos on a secure server. That is how materials
              reach the overseas buyer who requested them — as a controlled
              delivery, not a public listing.
            </p>
          </div>
          <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <Server className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden />
              Inspection steps are handled in a single workflow, from request
              through delivery.
            </li>
            <li className="flex gap-3">
              <Camera className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden />
              Photo materials are stored securely as part of the standard
              evaluation package.
            </li>
            <li className="flex gap-3">
              <Video className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden />
              Video files, when requested as a paid add-on, use the same
              secure storage.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl tracking-tight">
              What we need from you
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>Company name and destination market</li>
              <li>Vehicle identifiers or lot references</li>
              <li>Whether you need a standing arrangement or a one-off report</li>
              <li>Whether you want paid video materials in addition to the standard photo set</li>
              <li>The decision you are trying to make with the evaluation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-3xl tracking-tight">
              What a report will not do
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>Guarantee future mechanical life or destination-market approval</li>
              <li>Replace your own commercial, shipping, or compliance review</li>
              <li>Invent history that documentation does not support</li>
              <li>Pretend every unit can be inspected on the timeline you prefer</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Request a report, or get evaluation access."
        body="If you already have units in mind, include identifiers. If you are setting up a buying program, tell us the market and volume you expect to discuss."
      />
    </>
  );
}
