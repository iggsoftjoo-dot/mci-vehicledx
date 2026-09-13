# MCI — My Car Inspection

Marketing site for **MCI (My Car Inspection)**: objective used-car inspection and evaluation reports from Korea, prepared for overseas B2B buyers and importers.

Canonical domain in copy and metadata: **vehicledx.com**. This repository is the brand site; it does not imply that the domain is already live.

## Pages

- `/` — Home: hero, value, how it works, trust, CTA
- `/about` — Brand story and mission
- `/service` — Inspection coverage and real-time report delivery
- `/contact` — Inquiry form (front-end / mailto; backend intake not wired)

## Local development

```bash
npm install
npm run dev
```

The app runs at [http://127.0.0.1:43127](http://127.0.0.1:43127).

```bash
npm run build
npm run start
```

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui primitives

## Deploy

The site is static-friendly (no database, no auth). Deploy on [Vercel](https://vercel.com): import the repository, keep the default Next.js build (`npm run build`), and set the production domain when `vehicledx.com` is ready.

The contact form currently opens a `mailto:` draft to `inquiries@vehicledx.com`. Replace that with a server action, form endpoint, or CRM webhook when intake is available (see the TODO in `components/inquiry-form.tsx`).

## Honest copy

This site does not invent customer logos, inspection volumes, or certifications.
