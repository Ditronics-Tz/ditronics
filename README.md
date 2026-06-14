# Ditronics — Marketing Website

A modern, production-ready marketing website for **Ditronics**, a Tanzanian technology
company. Built to build trust, showcase services and generate leads, with a premium
enterprise aesthetic and a strong local identity.

**Tagline:** _Transforming Ideas into Technology Solutions_

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with a custom design-token theme
- **shadcn/ui** (Radix primitives)
- **Framer Motion** — animations, micro-interactions, reveal-on-scroll
- **next-themes** — dark / light / system mode
- **react-hook-form** + **zod** — typed, validated forms

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project Structure

```
src/
  app/                 # routes (App Router)
    page.tsx           # Home
    about/             # About Us
    services/          # Services overview + [slug] detail (8 services, SSG)
    portfolio/         # Portfolio grid + [slug] case studies (SSG)
    industries/        # 8 industry solution blocks
    blog/              # Blog list (search + filter) + [slug] articles (SSG)
    contact/           # Contact form, info, map
    api/               # contact + newsletter route handlers (validated)
    sitemap.ts robots.ts manifest.ts icon.svg not-found.tsx
  components/
    layout/            # navbar (mega menu), mobile nav, footer, theme toggle,
                       # WhatsApp button, command search (⌘K)
    sections/          # page sections (hero, services, projects, faq, cta, …)
    shared/            # reusable building blocks (cards, animations, decor, icon)
    ui/                # shadcn/ui components
  content/             # all site copy & data (edit here)
    site.ts            # company details, contact info, socials, nav
    services.ts industries.ts projects.ts posts.ts company.ts
  lib/                 # cn, zod schemas, SEO + JSON-LD helpers
```

## Editing Content

Almost all copy lives in `src/content/`. To update company details (address, phone,
email, social links), edit **`src/content/site.ts`** — it is the single source of truth
used across the header, footer, contact page and structured data.

## Features

- Sticky navigation with a services **mega menu** and a mobile drawer
- **Command palette** site search (`⌘K` / `Ctrl+K`)
- **Dark / light mode** (system-aware, no flash)
- **WhatsApp** floating button, **newsletter** signup, **FAQ** accordions
- Conversion-focused CTAs on every page
- **SEO:** per-page metadata, Open Graph & Twitter cards, canonical URLs,
  JSON-LD (Organization, WebSite, Service, Article, BreadcrumbList), sitemap & robots
- **Accessibility:** skip link, semantic landmarks, focus states, reduced-motion support
- Fully responsive (mobile → tablet → desktop)

## Production Notes / Next Steps

These are intentionally isolated so they're easy to wire up for launch:

- **Contact & newsletter forms** validate client- and server-side, then log the
  submission in `src/app/api/contact/route.ts` and `.../newsletter/route.ts`.
  Swap the `console.info` for an email/CRM provider (e.g. Resend, Mailchimp).
- **Brand details** in `src/content/site.ts` are realistic placeholders — replace with
  verified address, phone numbers, emails and social URLs before launch.
- **Map** uses a keyless OpenStreetMap embed; swap for Google Maps if you add a key.
- **Blog** content is static data in `src/content/posts.ts`; can migrate to MDX/a CMS.
- Add a real `opengraph-image` for richer social link previews.
