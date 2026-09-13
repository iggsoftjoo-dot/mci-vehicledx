# MCI — My Car Inspection

Marketing site for **MCI (My Car Inspection)**: objective used-car inspection and evaluation reports from Korea, prepared for overseas B2B buyers and importers.

Marketing site URL in copy and metadata: **https://mci.vehicledx.com**. Inspection booking stays on **https://vehicledx.com/client?b=VEHICL5M**.

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

This is a Next.js 16 App Router site. Netlify runs it through the OpenNext adapter (`@netlify/plugin-nextjs` in `netlify.toml`). The plugin is **not** pinned in `package.json`; Netlify installs the latest compatible adapter on each build.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node | `22` (see `netlify.toml` and `.nvmrc`) |
| Environment variables | **None required** (no Supabase yet) |
| Marketing URL | `https://mci.vehicledx.com` |
| Booking / app | leave on `https://vehicledx.com/client?b=VEHICL5M` |

**Create a new Netlify site.** Do not deploy this repo onto the existing `vehicledx-inspection` site. That site stays the inspection product. This repo is the brand marketing site only.

### Before you start

1. A Netlify account that already has `vehicledx-inspection` (or similar) is fine — you will add a **second** site.
2. This Git repository, branch `main`.
3. Optional: [Netlify CLI](https://docs.netlify.com/cli/get-started/) if you prefer command-line deploys.
4. Access to DNS for `vehicledx.com` only when you are ready to attach `mci.vehicledx.com`. This repo does not change DNS.

Local check (optional):

```bash
npm install
npm run build
```

### A) Recommended: Git-connected site (dashboard)

1. Open [app.netlify.com](https://app.netlify.com/) and sign in.
2. **Add new site → Import an existing project** (or **Import from Git**).
3. Pick the Git provider and **this marketing repository**.
4. Confirm it is a **new** site. Do not open `vehicledx-inspection` and change its repo or publish directory.
5. Branch: `main`.
6. Build settings (should match `netlify.toml`; override only if the UI is blank):
   - Base directory: *(leave empty — repo root)*
   - Build command: `npm run build`
   - Publish directory: `.next`
7. **Add environment variables:** skip. None are needed.
8. Deploy the site. Wait for a green build.
9. Open the generated URL (`https://<something>.netlify.app`). Check `/`, `/about`, `/service`, `/contact`. Confirm **Book an inspection** still opens `https://vehicledx.com/client?b=VEHICL5M`.
10. Later pushes to `main` redeploy automatically. Branch / deploy-preview settings are in **Site configuration → Build & deploy**.

If the UI asks to “link an existing site,” cancel and use **Add new site** instead.

### B) Netlify CLI (new site, then production deploy)

From this repo:

```bash
npm install -g netlify-cli
netlify login
```

Create and select a **new** site (do not choose `vehicledx-inspection` in the list):

```bash
netlify sites:create --name mci-vehicledx-marketing
netlify link
```

If `mci-vehicledx-marketing` is taken, pick another unused name. Then:

```bash
# preview (draft URL, not production)
netlify deploy --build

# production
netlify deploy --prod --build
```

`--build` runs `npm run build` plus the Next.js plugin from `netlify.toml`, then publishes.

`netlify link` must show the new marketing site ID, not `vehicledx-inspection`. Check with `netlify status`.

### Custom domain: mci.vehicledx.com

Do this only **after** the new site is live on `*.netlify.app`.

1. In the **new** marketing site: **Domain management → Add a domain → mci.vehicledx.com**.
2. Netlify will show the DNS record to create. For a subdomain it is usually:
   - Type: `CNAME`
   - Name: `mci`
   - Value: `<your-new-site>.netlify.app` (copy the exact host from the Netlify UI)
3. Add that record at the DNS host for `vehicledx.com`. Do **not** change the apex `vehicledx.com` records that serve the inspection product unless you intend to.
4. Wait for DNS. In Netlify, wait until HTTPS shows as provisioned (Let’s Encrypt).
5. Visit `https://mci.vehicledx.com` and re-check the four pages plus the booking button.

This repo does not apply DNS changes. Netlify HTTPS is issued after the hostname points at the new site.

### After launch (quick checklist)

- [ ] Site is a **new** Netlify project, not `vehicledx-inspection`
- [ ] `https://mci.vehicledx.com` (or the temp `.netlify.app` URL) loads Home, About, Service, Contact
- [ ] Booking still goes to `https://vehicledx.com/client?b=VEHICL5M`
- [ ] Contact still shows `joo@vehicledx.com`, phone, KakaoTalk, WhatsApp
- [ ] Inquiry form still opens a mailto draft (no server inbox yet)
- [ ] `vehicledx.com` inspection product is unchanged

### Common problems

| Symptom | What to check |
| --- | --- |
| Build cannot find Next.js plugin | `netlify.toml` includes `[[plugins]] package = "@netlify/plugin-nextjs"`. Do not pin it in `package.json`. |
| Publish folder wrong | Must be `.next`, not `out` or `dist`. This is not a static export. |
| Old inspection site changed | You deployed onto `vehicledx-inspection`. Create a new site and leave that one alone. |
| Domain SSL pending | DNS `CNAME` for `mci` is not pointing at the **new** `*.netlify.app` host yet. |
| Form “does not send email” | Expected. The form only opens a mail draft to `joo@vehicledx.com`. |

## Honest copy

This site does not invent customer logos, inspection volumes, or certifications.
