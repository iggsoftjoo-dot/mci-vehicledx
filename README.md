# MCI — My Car Inspection

Marketing site for **MCI (My Car Inspection)**: objective used-car inspection and evaluation reports from Korea, prepared for overseas B2B buyers and importers.

Canonical domain in copy and metadata: **vehicledx.com**.

## Pages

- `/` — Home: hero, value, how it works, trust, CTA
- `/about` — Brand story and mission
- `/service` — Inspection coverage, photo standard / video add-on, delivery
- `/contact` — Phone, email, KakaoTalk, WhatsApp, booking link, and inquiry form

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

## Contact

- Guny J (주형건), Certified Chief Diagnostic Appraiser / 대표공인진단평가사
- Phone: 010-9124-2805
- Email: joo@vehicledx.com (inquiry form mailto)
- KakaoTalk: https://open.kakao.com/o/sXzX9mNi
- WhatsApp: https://wa.me/821091242805
- Booking: https://vehicledx.com/client?b=VEHICL5M

## Deploy (Netlify)

This is a Next.js 16 App Router site. Netlify runs it through the OpenNext Next.js adapter (`@netlify/plugin-nextjs`). The adapter version is not pinned in `package.json`; Netlify installs the latest compatible adapter on each build (see `netlify.toml`).

No environment variables are required for this marketing site. Supabase is not wired yet.

Node 22 is set in `netlify.toml` and `.nvmrc`.

### A) Netlify CLI

Install the CLI once, then from this repo:

```bash
npm install -g netlify-cli
netlify login
netlify link
netlify deploy --prod --build
```

`netlify link` attaches this folder to an existing Netlify site (or creates one). `--build` runs `npm run build` from `netlify.toml` and the Next.js plugin, then publishes.

Draft (preview) deploy without promoting to production:

```bash
netlify deploy --build
```

### B) Git-connected continuous deploy

1. In the [Netlify dashboard](https://app.netlify.com/), add a new site from Git and select this repository / `main`.
2. Confirm build settings match `netlify.toml`: command `npm run build`, publish directory `.next`, Node 22.
3. Push to `main` to trigger production deploys. Pull-request / branch deploys follow your Netlify branch settings.

### Custom domain

After the site is live on a Netlify URL, add `vehicledx.com` (or a subdomain) in **Domain management**. Point DNS at Netlify only when you are ready; this repo does not change DNS.

## Honest copy

This site does not invent customer logos, inspection volumes, or certifications.
