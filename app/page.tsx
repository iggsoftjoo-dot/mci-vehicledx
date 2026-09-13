import Image from "next/image";
import Link from "next/link";
import {
  ClipboardCheck,
  Globe2,
  Radio,
  ScanSearch,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { BookingButton } from "@/components/contact-channels";
import { CredentialNote } from "@/components/credential-note";
import { CtaBand } from "@/components/cta-band";
import { HeroAtmosphere } from "@/components/hero-atmosphere";
import { ReportPreview } from "@/components/report-preview";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: ShieldCheck,
    title: "Objectivity first",
    body: "We evaluate vehicles. We do not sell them. A report is written so an importer can decide — not so a lot can close.",
  },
  {
    icon: ScanSearch,
    title: "Professional diagnostic evaluators",
    body: "Inspections are performed by professionals who treat condition as evidence: visible defects, mechanical findings, and structured notes.",
  },
  {
    icon: Timer,
    title: "Real-time delivery",
    body: "When an evaluation is complete, materials go directly to the overseas buyer who requested them — not into a local listing.",
  },
  {
    icon: Globe2,
    title: "Korea-registered inventory",
    body: "Coverage is for used cars already in Korea: vehicles produced in Korea, and vehicles that were imported into Korea and driven there.",
  },
];

const steps = [
  {
    step: "01",
    title: "Request access",
    body: "Tell us who you are, your destination market, and the vehicles or lots you need evaluated.",
  },
  {
    step: "02",
    title: "On-ground inspection",
    body: "An MCI evaluator inspects the unit in Korea with a diagnostic, evidence-first approach.",
  },
  {
    step: "03",
    title: "Structured report",
    body: "Photos, findings, and condition notes are compiled as a standard package. Video materials can be added on request as a paid extra.",
  },
  {
    step: "04",
    title: "Decide with evidence",
    body: "You receive the materials in real time and make the purchase call with a clearer picture.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-paper">
        <HeroAtmosphere />
        <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Image
              src="/brand/mci-emblem.png"
              alt="MCI emblem"
              width={96}
              height={96}
              className="mb-6 size-16 rounded-full bg-navy-deep object-cover shadow-lg ring-1 ring-white/15 sm:size-20"
              priority
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              객관적인 진단 평가 · Objective inspection
            </p>
            <h1 className="mt-5 font-heading text-4xl leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-[3.35rem]">
              Objective inspection reports for Korean used cars, built for
              overseas buyers.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
              MCI — My Car Inspection — works with professional diagnostic
              evaluators in Korea. We inspect used vehicles produced in
              Korea, and used vehicles that were imported into Korea and
              driven there, then deliver evaluation materials to the
              importers who need them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookingButton inverted />
              <Link
                href="/service"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 border-paper/25 bg-transparent px-5 text-sm text-paper hover:bg-white/10 hover:text-paper"
                )}
              >
                See what we evaluate
              </Link>
            </div>
          </div>
          <ReportPreview />
        </div>
      </section>

      <section className="border-b border-navy/10 bg-navy-mist">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Independent of the sale",
            "Prepared for overseas B2B buyers",
            "Real-time report delivery",
            "Produced in Korea, or imported and used in Korea",
          ].map((item) => (
            <p
              key={item}
              className="text-sm font-medium tracking-tight text-navy"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Why MCI
            </p>
            <h2 className="mt-3 font-heading text-3xl tracking-tight text-balance md:text-4xl">
              Inspection written for the buyer who is not in the yard.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Distance is the problem. Local descriptions are written for a
              local sale. MCI exists so overseas buyers receive an objective
              evaluation they can actually use.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-navy/10 bg-card p-6 shadow-sm"
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

      <section className="section-space bg-navy-mist/60">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              How it works
            </p>
            <h2 className="mt-3 font-heading text-3xl tracking-tight md:text-4xl">
              From request to a usable report.
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl bg-card p-6 ring-1 ring-navy/10"
              >
                <span className="font-heading text-2xl text-teal">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space bg-navy text-paper">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            How materials are handled
          </p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight md:text-4xl">
            Inspection workflow and secure storage, already in place.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/75">
            MCI already runs the inspection workflow and stores photo and
            video evaluation materials on a secure server, so overseas buyers
            receive files through a controlled channel — not a public listing.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              What you can expect
            </p>
            <h2 className="mt-3 font-heading text-3xl tracking-tight text-balance md:text-4xl">
              Trust, stated plainly. No invented scores.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We do not publish customer logos, inspection volumes, or
              company-level government endorsements we cannot stand behind.
              What we will stand behind is who does the work, and how it is
              done.
            </p>
            <div className="mt-6">
              <CredentialNote />
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex text-sm font-medium text-navy underline underline-offset-4"
            >
              Read the brand story
            </Link>
          </div>
          <ul className="space-y-4">
            {[
              {
                icon: ClipboardCheck,
                title: "A named contact for your inquiry",
                body: "You hear from a person who can discuss scope, timing, and how reports will be delivered.",
              },
              {
                icon: ScanSearch,
                title: "A clear scope before work starts",
                body: "We agree what will be inspected, photographed, and written — and whether paid video materials are needed.",
              },
              {
                icon: ShieldCheck,
                title: "Observed condition, not marketing copy",
                body: "Reports distinguish what the evaluator saw from history that remains unverified.",
              },
              {
                icon: Radio,
                title: "A refusal if we cannot inspect a unit",
                body: "If access, identification, or timing makes a proper evaluation impossible, we will say so.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <item.icon className="mt-0.5 size-5 shrink-0 text-teal" />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Need evaluation access for your next Korea buy?"
        body="Tell us about your importing program. We will reply with how MCI reports are scoped and delivered."
      />
    </>
  );
}
