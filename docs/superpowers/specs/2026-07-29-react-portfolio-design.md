# Convert single-page portfolio to React (Vite) + Vercel deploy

## Context

Current portfolio is a single DC-tool-authored HTML file (`Purinat Sanbundit.dc.html`) with inline styles, a fake `Component extends DCLogic` class for toggle state, and `{{ mustache }}` templating placeholders. It renders correctly only inside the DC tool runtime (`support.js`, `image-slot.js`) — not deployable as-is to a standard static host.

Goal: rebuild as a real React app, buildable with Vite, deployable to Vercel via GitHub integration.

## Source content (authoritative — port 1:1, no rewrites)

All copy, stats, project entries, experience, skills, education, and contact details come from `Purinat Sanbundit.dc.html` (lines 42–304). No content changes — this is a tech-stack port, not a content rewrite.

## Architecture

- **Tooling**: Vite + React + TypeScript
- **Styling**: Plain CSS (one `src/styles.css` or per-component CSS files), visually 1:1 with current inline styles — same colors (#f3f2f2 bg, #201e1d text, #ec3013/#ae1800 accent), same Archivo font via Google Fonts link in `index.html`, same breakpoint (900px) for mobile collapse
- **No CMS/API** — all content lives directly in component JSX/TSX (single-owner static site, no need for content abstraction)

## Components

- `App.tsx` — composes sections in order
- `Header` — sticky nav, CV download link
- `Hero` — name, tagline, intro paragraph, CTA buttons, portrait placeholder, availability badge
- `Stats` — 4-column stat strip (5+, 50K+, 50%, 5)
- `Projects` — renders 3x `ProjectCard`
  - `ProjectCard` — title, meta, heading, always-visible bullets, expandable bullets (`useState<boolean>` per card, replaces DC's `open0/1/2` state), tag pills, toggle button (label switches "+ Full detail" / "— Show less")
- `Experience` — PALO IT + Dek-D entries
- `Skills` — 4-column skill category grid
- `Education` — Mahidol entry + languages
- `Contact` — CTA band (email, phone, CV download)
- `Footer` — copyright + social links (LinkedIn/GitHub stay as `#` placeholder per user — fill in later)

## Assets

- Portrait: styled placeholder box (dashed border, "Add portrait" label) in place of `<image-slot>` — swap later by dropping a file into `src/assets/portrait.jpg` and updating one import in `Hero.tsx`
- CV PDF: copy `uploads/Purinat_Sanbundit_CV_2026.pdf` → `public/Purinat_Sanbundit_CV_2026.pdf`, link unchanged

## Motion

Keep the existing progressive-enhancement scroll-reveal (`@supports (animation-timeline: view())`, `prefers-reduced-motion` respected) as plain CSS — no JS scroll library. Drop the DC `motion` prop toggle (was an editor-only switch); always-on is fine since it's already a `@supports`-gated enhancement.

## Removed (DC-tool-specific, not needed in React)

- `support.js`, `image-slot.js`, `<x-dc>`, `<helmet>`, `sc-if`, `{{ }}` templating, `class Component extends DCLogic`, `data-dc-script` prop schema

## Testing

No unit tests — static content page. Verify via `npm run dev`, visual diff against original `.dc.html` opened in browser side by side. Confirm: layout matches at desktop + mobile (<900px), toggle buttons expand/collapse each project card independently, all links (mailto, tel, CV download, anchor nav) work.

## Deploy

1. `git init` in project root, `.gitignore` for `node_modules`, `dist`
2. Create GitHub repo (confirm name/visibility with user before creating), push
3. Connect repo in Vercel dashboard (or `vercel` CLI link) — framework preset: Vite
4. Auto-deploy on push to main; preview deployments on branches/PRs

## Out of scope

- Real portrait photo (placeholder for now, user swaps later)
- Real LinkedIn/GitHub URLs (placeholder `#` for now)
- Any content/copy changes
- CMS, blog, additional pages, analytics
