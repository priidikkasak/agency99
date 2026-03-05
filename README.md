# Agency 99

Production-ready bilingual (EN/ET) service website for an AI automation + systems + web studio.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · next-intl

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en` by default.

## Build

```bash
npm run build
npm run start
```

## Site structure

```
/en          → Home
/en/work     → Case studies grid
/en/work/:slug → Case detail
/en/services → Services
/en/process  → Process
/en/contact  → Contact (front-end only)
/en/legal    → Privacy + Terms
```

All routes are mirrored under `/et`.

---

## Adding translations

1. Open `src/messages/en.json` and `src/messages/et.json`
2. Add your key in both files under the relevant namespace (e.g., `home`, `work`, `services`)
3. Use `useTranslations('namespace')` in client components or `getTranslations` in server components

**Key structure:**
```
meta        → page titles & descriptions
nav         → navigation labels
footer      → footer copy
home.*      → all home page sections
work        → work page + case detail labels
services    → services page copy
process     → process page copy
contact     → contact page copy + form labels
legal       → privacy & terms copy
```

---

## Adding case studies

1. Open `src/lib/cases.ts`
2. Add a new object to the `cases` array:

```ts
{
  slug: 'your-case-slug',        // used in URL: /en/work/your-case-slug
  category: 'automation',        // 'automation' | 'systems' | 'web'
  year: '2024',
  en: {
    title: 'English title',
    tagline: 'Short tagline',
    metric: '80%',               // headline stat
    metricLabel: 'time saved',
    problem: 'What was broken.',
    approach: 'How we diagnosed it.',
    solution: 'What we built.',
    intro: 'One-line opener.',
    context: 'Longer context paragraph.',
    results: ['Result 1', 'Result 2', 'Result 3', 'Result 4'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  et: {
    // Estonian translations — same structure as en
  },
}
```

The case will automatically appear on the Work page and get a detail page at `/[locale]/work/[slug]`.

---

## Design system

CSS variables are in `src/app/globals.css`:

| Variable      | Default                   |
|---------------|---------------------------|
| `--bg`        | Deep charcoal             |
| `--surface`   | Slightly lighter          |
| `--surface-2` | Card backgrounds          |
| `--border`    | Subtle borders            |
| `--text`      | Near-white foreground     |
| `--muted`     | Secondary text            |
| `--accent`    | Electric teal (170°)      |

Tailwind aliases: `bg-bg`, `bg-surface`, `bg-surface-2`, `border-border`, `text-foreground`, `text-muted`, `text-accent`.

---

## Deployment

Deploy to Vercel — zero config needed. The `metadataBase` in `src/app/layout.tsx` is set to `https://agency99.ee`; update it to your domain before going live.
