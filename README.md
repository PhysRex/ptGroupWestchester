# Physical Therapy Group of Westchester

Modern website for Physical Therapy Group of Westchester — a professional physical therapy office in Rye Brook, NY.

## Tech Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** (build tool)
- **TypeScript**
- **Tailwind CSS v4**
- **Vue Router** (client-side SPA routing)
- **Pinia** (state management for admin panel)
- **@unhead/vue** (per-page SEO meta tags)

## Setup

```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # production build to dist/
npm run preview   # preview production build
```

Requires Node 18+ (current LTS).

## Project Structure

```
src/
├── content/          # Editable JSON content files
│   ├── site.json     # Business info, hours, contact, links
│   ├── home.json     # Home page copy
│   ├── team.json     # Staff bios
│   ├── services.json # Services list (30 conditions)
│   ├── forms.json    # Patient form download metadata
│   └── testimonials.json  # Patient testimonials (32)
├── pages/            # Route-level page components
├── components/
│   ├── layout/       # SiteNavbar, SiteFooter, AppointmentCTA
│   ├── ui/           # HeroSection, BrandMark, GoldRule, etc.
│   └── admin/        # AdminBar, AdminPanel, EditableText
├── composables/      # useContent, useScrollReveal
├── stores/           # Pinia admin store
├── assets/images/    # Staff photos, office, logos
└── router/           # Vue Router config
public/
└── forms/            # 11 downloadable patient PDF forms
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, philosophy, feature panels, testimonials, contact/map |
| `/team` | Our Team — staff bios with photos |
| `/services` | Services — searchable grid of 30+ conditions |
| `/testimonials` | Patient Stories — masonry testimonial grid |
| `/forms` | Patient Resources — PDF download cards |
| `/*` | 404 |

## Admin Panel

Activate via triple-click on footer copyright text, or append `?admin=true` to any URL.

- Enables inline text editing across all pages
- Tracks changes in Pinia store
- Export updated JSON files via "Export JSON" button
- Commit exported files back to `src/content/` to apply changes

## Content Editing

All user-facing copy lives in `src/content/*.json`. To update content:

1. Edit the JSON files directly, **or**
2. Use the admin panel to edit inline and export

## Deployment

Includes `public/_redirects` for Netlify SPA fallback. For other platforms, configure a catch-all redirect to `index.html`.

## Design

- **Palette**: Navy (#0D1B2A) + Burnished Gold (#B8860B) + Warm Ivory (#FAF8F5)
- **Typography**: Playfair Display (headlines) + DM Sans (body) + Cormorant Garamond (quotes)
- **Features**: Scroll-reveal animations, grain texture overlay, asymmetric layouts, gold rule dividers

## Migrated From

Rewrite of the legacy `ptg-westchester/` CRA React 16 app. See `REWRITE_HANDOFF.md` for migration context.
