# Nexify — Premium 3D Software Agency Website

A modern, premium, fully responsive agency website built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, **React Three Fiber**, and **Three.js**. Dark theme with blue/purple/cyan gradients, glassmorphism, 3D hero, parallax, animated counters, and micro-interactions throughout.

## Quick Start

```bash
npm install      # install dependencies (already done)
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Tech Stack

- **Next.js 14** (App Router) — SSR, metadata, sitemap, robots, manifest
- **TypeScript** — fully typed
- **Tailwind CSS** — custom design system (`tailwind.config.ts`)
- **Framer Motion** — page/scroll animations, reveals, sliders, modals
- **React Three Fiber + drei + Three.js** — 3D hero scene (`src/components/three/HeroScene.tsx`)
- **lucide-react** — icons

## Pages (13)

| Route | Page |
|---|---|
| `/` | Home — 3D hero, trusted-by marquee, about preview, services, stats counters, portfolio preview, process, testimonials slider, tech stack, FAQ, CTA |
| `/about` | Story, mission/vision, values, stats, team, timeline, awards, gallery |
| `/services` | All 12 service categories with detail sections (features, tech, benefits) |
| `/portfolio` | Category filtering + case-study modal (live/GitHub buttons, tags) |
| `/pricing` | 4 plans, monthly/yearly toggle, comparison table |
| `/blog` | Search, category filter, featured posts, sidebar, newsletter |
| `/faq` | Searchable, category-filtered accordion |
| `/testimonials` | Review grid + video testimonials section |
| `/careers` | Open roles, benefits, culture, validated application form |
| `/contact` | Validated contact form, info cards, WhatsApp, embedded map |
| `/privacy-policy` | Legal page |
| `/terms` | Legal page |
| `*` (not-found) | Animated 404 |

## Project Structure

```
src/
  app/              # routes (App Router) + sitemap/robots/manifest
  components/
    layout/         # Navbar, Footer
    sections/       # Hero, CTA, PageHero, ServiceDetail, LegalContent
    three/          # HeroScene (3D)
    ui/             # Button, Reveal, Counter, Marquee, Accordion,
                    # ServiceCard, TestimonialSlider, Newsletter, Cursor, etc.
  lib/
    site.ts         # site config: name, contact, nav, footer links
    utils.ts        # cn() helper
    icons.tsx       # service icon map
    data/           # services, portfolio, blog, pricing, content
```

## Editing Content

All copy/data lives in `src/lib/`:
- **Company name, contact info, nav, socials** → `src/lib/site.ts`
- **Services** → `src/lib/data/services.ts`
- **Portfolio projects** → `src/lib/data/portfolio.ts`
- **Blog posts** → `src/lib/data/blog.ts`
- **Pricing plans & comparison** → `src/lib/data/pricing.ts`
- **Stats, team, testimonials, FAQ, timeline, awards, jobs** → `src/lib/data/content.ts`

## Forms & Email

Contact, careers, and newsletter forms POST to Next.js API routes (`src/app/api/*`) which send email via **Resend**:

- They validate on both the client and the server, with loading and error states.
- **Demo mode:** with no `RESEND_API_KEY` set, the routes still succeed (forms show success) but no email is sent — handy for previewing.
- **Live mode:** add your key + addresses in `.env.local` (copy from `.env.example`) and submissions are emailed to `EMAIL_TO`.

```env
RESEND_API_KEY=re_xxxxx          # https://resend.com/api-keys
EMAIL_FROM=onboarding@resend.dev # or a verified domain sender
EMAIL_TO=you@yourdomain.com
```

Email logic lives in `src/lib/email.ts`.

## Blog Articles

Blog cards link to full article pages at `/blog/[slug]` (statically generated). Article bodies live in `src/lib/data/blog.ts` — add a `body` array to any post, or it falls back to a generated template.

## Deploying

See **DEPLOY.md** for step-by-step Vercel instructions (push to GitHub → import → add env vars).

## SEO

- Per-page `metadata` (title, description, Open Graph, Twitter cards)
- `Organization` JSON-LD schema in the root layout
- Auto-generated `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`

> Update `site.url` in `src/lib/site.ts` to your real domain before deploying.

## Notes

- Remote images are loaded from `images.unsplash.com` (allowed in `next.config.mjs`). Swap for your own assets in the data files.
- The custom cursor and 3D scene are pointer/desktop-enhanced and degrade gracefully on touch devices.
