# React Portfolio Port Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `Purinat Sanbundit.dc.html` as a real React (Vite + TypeScript) app, deployed to Vercel via GitHub integration.

**Architecture:** Component-per-section React app (`Header`, `Hero`, `Stats`, `Projects`/`ProjectCard`, `Experience`, `Skills`, `Education`, `Contact`, `Footer`) composed in `App.tsx`. Plain CSS (`src/styles.css`), no CMS — content lives directly in component source. Toggle state for project detail expansion via `useState`.

**Tech Stack:** Vite, React 18, TypeScript, plain CSS. Deploy: GitHub + Vercel git integration.

## Global Constraints

- Content is ported verbatim from `Purinat Sanbundit.dc.html` (lines 42–304) — no copy changes.
- Colors: bg `#f3f2f2`, fg `#201e1d`, accent `#ec3013`, accent-dark `#ae1800`, accent-hover `#dd2b0f`, border `rgba(32,30,29,0.4)`, muted `rgba(32,30,29,0.55)`, muted2 `rgba(32,30,29,0.75)`.
- Font: Archivo via Google Fonts (weights 400/600/800), fallback `system-ui, sans-serif`.
- Mobile breakpoint: `900px` (2-col → 1-col hero/education, 4-col → 2-col stats/skills, section sidebar collapses, nav hidden).
- Portrait: styled placeholder (no real image yet).
- Footer LinkedIn/GitHub links stay as `#` placeholder.
- No automated test framework — static content page, verify visually via `npm run dev`.
- Every task ends with a git commit (repo initialized in Task 1).

---

### Task 1: Project scaffold, global styles, static assets

**Files:**
- Create: `.gitignore`
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json` (via Vite scaffold command)
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/styles.css`
- Create: `public/Purinat_Sanbundit_CV_2026.pdf` (copied from `uploads/`)
- Modify: none

**Interfaces:**
- Produces: `src/styles.css` class names consumed by every later component task — `container`, `header`, `header-logo`, `navlinks`, `btn`, `btn-primary`, `btn-outline`, `btn-sm`, `hero`, `badge`, `badge-dot`, `badge-text`, `hero-tagline`, `hero-summary`, `hero-ctas`, `portrait-frame`, `portrait-box`, `portrait-caption`, `stats`, `stat`, `stat-num`, `stat-label`, `section`, `section-eyebrow`, `section-sub`, `bullet-list`, `project-card`, `project-meta`, `project-label`, `project-duration`, `tags`, `tag`, `toggle-btn`, `exp-item`, `exp-head`, `exp-role`, `exp-desc`, `skills-grid`, `skill-col`, `skill-list`, `edu-grid`, `edu-head`, `edu-degree`, `edu-detail`, `edu-project`, `edu-project-label`, `lang-list`, `lang-note`, `contact`, `contact-links`, `contact-btn`, `contact-btn-solid`, `footer`, `footer-copy`, `footer-links`.

- [ ] **Step 1: Init git repo**

```bash
git init
```

- [ ] **Step 2: Write `.gitignore`**

```
node_modules
dist
.DS_Store
```

- [ ] **Step 3: Scaffold Vite React+TS project in place**

```bash
npm create vite@latest . -- --template react-ts
```

When prompted about the current directory not being empty, choose to continue / merge into current directory.

- [ ] **Step 4: Install dependencies**

```bash
npm install
```

- [ ] **Step 5: Remove template boilerplate not needed**

```bash
rm -f src/App.css src/assets/react.svg public/vite.svg
```

- [ ] **Step 6: Replace `index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Purinat Sanbundit — Full-Stack Software Engineer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&display=swap"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Write `src/main.tsx`**

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 8: Write `src/styles.css`**

```css
:root {
  --bg: #f3f2f2;
  --fg: #201e1d;
  --accent: #ec3013;
  --accent-hover: #dd2b0f;
  --accent-dark: #ae1800;
  --border: rgba(32, 30, 29, 0.4);
  --muted: rgba(32, 30, 29, 0.55);
  --muted2: rgba(32, 30, 29, 0.75);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: "Archivo", system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  color: var(--accent-dark);
  text-underline-offset: 3px;
}
a:hover {
  color: var(--accent);
}

::selection {
  background: rgba(236, 48, 19, 0.28);
}

:focus {
  outline: none;
}
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.bullet-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 70ch;
}
.bullet-list li,
.skill-list li,
.lang-list li {
  position: relative;
  padding-left: 24px;
}
.bullet-list li::before,
.skill-list li::before,
.lang-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 11px;
  width: 12px;
  height: 2px;
  background: var(--accent);
}

@keyframes dcRise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    [data-motion="on"] [data-reveal]:not(#top) {
      animation: dcRise linear both;
      animation-timeline: view();
      animation-range: entry 0% cover 20%;
    }
  }
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 68px;
}
.header-logo {
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg);
  text-decoration: none;
}
.navlinks {
  display: flex;
  align-items: center;
  gap: 28px;
}
.navlinks a {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fg);
  text-decoration: none;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px 18px;
  border: 1px solid var(--accent);
  cursor: pointer;
  font-family: inherit;
}
.btn-primary {
  background: var(--accent);
  color: var(--bg);
}
.btn-primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
}
.btn-outline {
  color: var(--fg);
  border-color: var(--border);
  background: transparent;
}
.btn-outline:hover {
  background: rgba(32, 30, 29, 0.07);
}
.btn-sm {
  font-size: 13px;
  padding: 10px 16px;
}

.hero {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 56px;
  padding: 72px 0 56px;
  align-items: start;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 2px solid var(--border);
  padding: 6px 12px;
  margin-bottom: 28px;
}
.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  display: block;
}
.badge-text {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.hero h1 {
  font-size: clamp(52px, 7.4vw, 104px);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  margin: 0 0 20px;
}
.hero-tagline {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 24px;
  max-width: 26ch;
}
.hero-summary {
  font-size: 17px;
  line-height: 1.6;
  margin: 0 0 28px;
  max-width: 56ch;
  text-wrap: pretty;
}
.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.portrait-frame {
  margin: 0;
}
.portrait-box {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  border: 2px dashed var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}
.portrait-caption {
  font-size: 11px;
  margin-top: 8px;
  color: var(--muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
}
.stat {
  padding: 28px 24px;
}
.stat:first-child {
  padding-left: 0;
}
.stat:not(:first-child) {
  border-left: 2px solid var(--border);
}
.stat:last-child {
  padding-right: 0;
}
.stat-num {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
}
.stat-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: 6px;
}

.section {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 48px;
  padding: 72px 0 0;
}
.section-eyebrow {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 10px;
}
.section-sub {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}

.project-card {
  border-top: 2px solid var(--border);
  padding: 32px 0;
}
.project-card:last-child {
  border-bottom: 2px solid var(--border);
}
.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 14px;
}
.project-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--accent-dark);
}
.project-duration {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--muted);
}
.project-card h3 {
  font-size: 30px;
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  max-width: 22ch;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}
.tag {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid var(--border);
  padding: 4px 9px;
}
.toggle-btn {
  margin-top: 18px;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent-dark);
  padding: 4px 0;
}
.toggle-btn:hover {
  color: var(--accent);
}

.exp-item {
  border-top: 2px solid var(--border);
  padding: 32px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}
.exp-item:last-child {
  border-bottom: 2px solid var(--border);
}
.exp-head {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: baseline;
  justify-content: space-between;
}
.exp-item h3 {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
}
.exp-role {
  font-size: 17px;
  font-weight: 600;
}
.exp-desc {
  margin: 0;
  max-width: 70ch;
  color: var(--muted2);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
}
.skill-col {
  padding: 28px 24px;
}
.skill-col:first-child {
  padding-left: 0;
}
.skill-col:not(:first-child) {
  border-left: 2px solid var(--border);
}
.skill-col:last-child {
  padding-right: 0;
}
.skill-col h4 {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  margin: 0 0 14px;
  color: var(--accent-dark);
}
.skill-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 15px;
}

.edu-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
  padding: 32px 0;
}
.edu-head {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
}
.edu-grid h3 {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
}
.edu-degree {
  margin: 0 0 6px;
  font-weight: 600;
}
.edu-detail {
  margin: 0 0 20px;
  color: var(--muted2);
}
.edu-project {
  border-left: 2px solid var(--accent);
  padding-left: 16px;
}
.edu-project-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-bottom: 6px;
}
.edu-project p {
  margin: 0;
  color: var(--muted2);
  max-width: 52ch;
}
.lang-list {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.lang-note {
  margin: 0;
  color: var(--muted2);
  max-width: 40ch;
}

.contact {
  margin: 80px 0 0;
  background: var(--accent);
  color: var(--bg);
  padding: 64px 48px;
}
.contact h2 {
  font-size: clamp(36px, 5.2vw, 68px);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  margin: 0 0 24px;
  max-width: 18ch;
}
.contact p {
  font-size: 19px;
  line-height: 1.5;
  margin: 0 0 36px;
  max-width: 52ch;
}
.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
}
.contact-btn {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 20px;
  border: 1px solid rgba(243, 242, 242, 0.6);
  color: var(--bg);
}
.contact-btn:hover {
  background: rgba(243, 242, 242, 0.14);
}
.contact-btn-solid {
  background: var(--bg);
  color: var(--fg);
  border-color: var(--bg);
}
.contact-btn-solid:hover {
  background: #ffe0d9;
  border-color: #ffe0d9;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0 48px;
}
.footer-copy {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.footer-links {
  display: flex;
  gap: 20px;
}
.footer-links a {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fg);
  text-decoration: none;
  border-bottom: 2px solid var(--border);
}
.footer-links a:hover {
  border-color: var(--accent);
}

@media (max-width: 900px) {
  .hero,
  .edu-grid {
    grid-template-columns: 1fr !important;
  }
  .stats,
  .skills-grid {
    grid-template-columns: 1fr 1fr !important;
  }
  .section {
    grid-template-columns: 1fr !important;
  }
  .navlinks {
    display: none !important;
  }
}
```

- [ ] **Step 9: Copy CV PDF into `public/`**

```bash
mkdir -p public
cp "uploads/Purinat_Sanbundit_CV_2026.pdf" "public/Purinat_Sanbundit_CV_2026.pdf"
```

- [ ] **Step 10: Verify dev server boots (App.tsx not written yet — expect a TS error, that's fine at this step)**

Run: `npm run dev` then Ctrl-C after confirming Vite starts without a config/toolchain error (a missing-`App`-module error is expected and resolved in Task 6).

- [ ] **Step 11: Commit**

```bash
git add .gitignore package.json package-lock.json vite.config.ts tsconfig.json tsconfig.node.json tsconfig.app.json index.html src/main.tsx src/styles.css public/Purinat_Sanbundit_CV_2026.pdf src/vite-env.d.ts
git commit -m "chore: scaffold Vite React+TS project with ported global styles"
```

---

### Task 2: Header and Footer components

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `src/styles.css` classes from Task 1 (`header`, `header-logo`, `navlinks`, `btn`, `btn-primary`, `btn-sm`, `footer`, `footer-copy`, `footer-links`).
- Produces: `Header` and `Footer` default-exported components, no props, consumed by `App.tsx` in Task 6.

- [ ] **Step 1: Write `src/components/Header.tsx`**

```tsx
export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="header-logo">
        Purinat Sanbundit
      </a>
      <nav className="navlinks">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a
        href="/Purinat_Sanbundit_CV_2026.pdf"
        download
        className="btn btn-primary btn-sm"
      >
        Download CV
      </a>
    </header>
  );
}
```

- [ ] **Step 2: Write `src/components/Footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">Purinat Sanbundit · Bangkok, Thailand</div>
      <div className="footer-links">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="mailto:purinat.san@gmail.com">Email</a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx src/components/Footer.tsx
git commit -m "feat: add Header and Footer components"
```

---

### Task 3: Hero and Stats components

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/Stats.tsx`

**Interfaces:**
- Consumes: `src/styles.css` classes (`hero`, `badge`, `badge-dot`, `badge-text`, `hero-tagline`, `hero-summary`, `hero-ctas`, `btn`, `btn-primary`, `btn-outline`, `portrait-frame`, `portrait-box`, `portrait-caption`, `stats`, `stat`, `stat-num`, `stat-label`).
- Produces: `Hero` and `Stats` default-exported components, no props, consumed by `App.tsx` in Task 6.

- [ ] **Step 1: Write `src/components/Hero.tsx`**

```tsx
export default function Hero() {
  return (
    <section id="top" data-reveal className="hero">
      <div>
        <div className="badge">
          <span className="badge-dot" />
          <span className="badge-text">Open to senior roles — Bangkok / Remote</span>
        </div>
        <h1>
          Purinat
          <br />
          Sanbundit
        </h1>
        <p className="hero-tagline">
          Full-Stack Software Engineer — mobile, web and event-driven systems.
        </p>
        <p className="hero-summary">
          Five-plus years shipping production software across banking, international web
          platforms and large-scale B2B MarTech. I work end to end: Flutter and Nuxt 3 on the
          front, reactive Kotlin services and Kafka on the back, CI/CD and clean architecture
          holding it together.
        </p>
        <div className="hero-ctas">
          <a href="mailto:purinat.san@gmail.com" className="btn btn-primary">
            Get in touch
          </a>
          <a href="#projects" className="btn btn-outline">
            See selected work
          </a>
        </div>
      </div>
      <figure className="portrait-frame">
        <div className="portrait-box">Add portrait</div>
        <figcaption className="portrait-caption">
          Bangkok, Thailand · +66 97-227-1804 · purinat.san@gmail.com
        </figcaption>
      </figure>
    </section>
  );
}
```

- [ ] **Step 2: Write `src/components/Stats.tsx`**

```tsx
const STATS = [
  { num: "5+", label: "Years in production" },
  { num: "50K+", label: "Daily transactions handled" },
  { num: "50%", label: "Faster feature delivery" },
  { num: "5", label: "SEA regions served" },
];

export default function Stats() {
  return (
    <section data-reveal className="stats">
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx src/components/Stats.tsx
git commit -m "feat: add Hero and Stats components"
```

---

### Task 4: Projects component (stateful expand/collapse)

**Files:**
- Create: `src/components/Projects.tsx`

**Interfaces:**
- Consumes: `src/styles.css` classes (`section`, `section-eyebrow`, `section-sub`, `project-card`, `project-meta`, `project-label`, `project-duration`, `bullet-list`, `tags`, `tag`, `toggle-btn`). React `useState` from `react`.
- Produces: `Projects` default-exported component, no props, consumed by `App.tsx` in Task 6. Internal `ProjectCard({ project }: { project: ProjectData })` is not exported — local to this file.

- [ ] **Step 1: Write `src/components/Projects.tsx`**

```tsx
import { useState } from "react";

interface ProjectData {
  label: string;
  duration: string;
  title: string;
  bullets: string[];
  moreBullets: string[];
  tags: string[];
}

const PROJECTS: ProjectData[] = [
  {
    label: "Enterprise B2B MarTech Platform",
    duration: "Major Thai enterprise group · Ongoing",
    title: "Distributed multi-domain system at 1K–50K+ daily transactions",
    bullets: [
      "Led development of a distributed system spanning Gamification, Commerce and Messaging domains, improving scalability and domain decoupling.",
      "Built and maintained the frontend and BFF layer with Nuxt 3, improving modularity and cutting feature delivery time by 50%.",
      "Implemented cross-domain integration over REST and Kafka event-driven messaging for asynchronous data flow between services.",
    ],
    moreBullets: [
      "Contributed reactive backend services in Spring WebFlux (Kotlin) following Clean Architecture, supporting non-blocking, scalable processing — including campaign features running 1,000–100,000 concurrent participants.",
      "Shipped features across Gamification (missions, ballots, challenges) and Commerce (campaigns, orders, packages), supporting complex large-scale workflows.",
      "Designed domain-specific data models and flows on MongoDB and PostgreSQL, optimising read/write performance by 25% across services.",
      "Reduced production incidents by 10% through improved error handling, retry mechanisms and async processing strategies.",
    ],
    tags: ["Nuxt 3", "Kotlin · Spring WebFlux", "Kafka", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Flutter Web One-Stop Service Platform",
    duration: "Singapore-based client · 1 yr 3 mo",
    title: "One enterprise platform, five SEA regions",
    bullets: [
      "Developed an enterprise Flutter Web platform serving a one-stop service system used across multiple SEA regions.",
      "Built the BFF layer with Nest.js to aggregate and streamline backend communication for frontend consumption.",
      "Drove cross-team alignment across 5 regions — clarifying requirements and keeping delivery on track.",
    ],
    moreBullets: [
      "Collaborated with distributed teams across Asia-Pacific and Europe on cross-regional feature delivery.",
      "Helped shape project structure and architecture, introducing clearer module boundaries for better scalability and team collaboration.",
    ],
    tags: ["Flutter Web", "Nest.js", "BFF architecture"],
  },
  {
    label: "Mobile Banking Revamp",
    duration: "Thai banking client · 1 yr",
    title: "Legacy banking app rebuilt cross-platform in Flutter",
    bullets: [
      "Revamped a legacy mobile banking application with Flutter, unifying iOS and Android and reducing platform fragmentation.",
      "Drove the re-architecture, improving scalability and maintainability and enabling faster team delivery.",
      "Implemented CI/CD pipelines with Docker and Jenkins, cutting manual deployment effort and improving release consistency.",
    ],
    moreBullets: [
      "Automated end-to-end testing with a Given–When–Then approach, improving test reliability and regression coverage.",
      "Practised trunk-based development inside an Agile (Scrum) workflow to support continuous integration and delivery.",
      "Integrated Firebase services and secure backend APIs for real-time features and user data handling.",
    ],
    tags: ["Flutter", "Docker · Jenkins", "Firebase", "E2E automation"],
  },
];

function ProjectCard({ project }: { project: ProjectData }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="project-card">
      <div className="project-meta">
        <div className="project-label">{project.label}</div>
        <div className="project-duration">{project.duration}</div>
      </div>
      <h3>{project.title}</h3>
      <ul className="bullet-list">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
        {open && project.moreBullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
      <div className="tags">
        {project.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="toggle-btn"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "— Show less" : "+ Full detail"}
      </button>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-reveal className="section">
      <div>
        <h2 className="section-eyebrow">Selected work</h2>
        <p className="section-sub">Three engagements at PALO IT, 2023 — present.</p>
      </div>
      <div>
        {PROJECTS.map((p) => (
          <ProjectCard project={p} key={p.label} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: add Projects component with expand/collapse state"
```

---

### Task 5: Experience, Skills, Education components

**Files:**
- Create: `src/components/Experience.tsx`
- Create: `src/components/Skills.tsx`
- Create: `src/components/Education.tsx`

**Interfaces:**
- Consumes: `src/styles.css` classes (`section`, `section-eyebrow`, `section-sub`, `exp-item`, `exp-head`, `exp-role`, `exp-desc`, `project-duration`, `bullet-list`, `skills-grid`, `skill-col`, `skill-list`, `edu-grid`, `edu-head`, `edu-degree`, `edu-detail`, `edu-project`, `edu-project-label`, `lang-list`, `lang-note`).
- Produces: `Experience`, `Skills`, `Education` default-exported components, no props, consumed by `App.tsx` in Task 6.

- [ ] **Step 1: Write `src/components/Experience.tsx`**

```tsx
export default function Experience() {
  return (
    <section id="experience" data-reveal className="section">
      <div>
        <h2 className="section-eyebrow">Experience</h2>
        <p className="section-sub">2021 — present.</p>
      </div>
      <div>
        <div className="exp-item">
          <div className="exp-head">
            <h3>PALO IT</h3>
            <div className="project-duration">Sep 2023 — Present</div>
          </div>
          <div className="exp-role">
            Software Engineer · Full-Stack Developer · IT Consultant
          </div>
          <p className="exp-desc">
            Delivering enterprise digital solutions across banking, international web
            platforms and large-scale B2B MarTech systems — three client engagements to
            date, detailed above.
          </p>
        </div>
        <div className="exp-item">
          <div className="exp-head">
            <h3>Dek-D Interactive Co., Ltd.</h3>
            <div className="project-duration">Mar 2021 — Aug 2023</div>
          </div>
          <div className="exp-role">Front-end Developer (full-time, from internship)</div>
          <ul className="bullet-list">
            <li>
              Developed and maintained a high-traffic web platform with Nuxt.js, React and
              Svelte, supporting large-scale user interaction.
            </li>
            <li>
              Implemented performance-optimised UI and WebView integration for the mobile
              app, improving rendering performance.
            </li>
            <li>
              Built responsive admin interfaces with React, Next.js and GraphQL for
              internal tooling and content management.
            </li>
            <li>
              Developed reusable components and internal tools that improved development
              efficiency across teams.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write `src/components/Skills.tsx`**

```tsx
const SKILL_GROUPS = [
  {
    title: "Frontend & Mobile",
    items: ["Flutter — iOS, Android, Web", "Nuxt 3 / Vue.js", "React / Next.js", "Svelte"],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Spring WebFlux (Kotlin)",
      "Nest.js / Express.js",
      "Gin (Go)",
      "REST APIs, Clean Architecture",
    ],
  },
  {
    title: "Data & Messaging",
    items: ["MongoDB", "PostgreSQL", "Kafka", "Redis"],
  },
  {
    title: "Tools & Cloud",
    items: ["Docker, Git", "Jenkins, GitHub Actions", "Google Cloud, AWS", "Firebase, Netlify"],
  },
];

export default function Skills() {
  return (
    <section id="skills" data-reveal className="section">
      <div>
        <h2 className="section-eyebrow">Stack</h2>
        <p className="section-sub">What I reach for, day to day.</p>
      </div>
      <div className="skills-grid">
        {SKILL_GROUPS.map((g) => (
          <div className="skill-col" key={g.title}>
            <h4>{g.title}</h4>
            <ul className="skill-list">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write `src/components/Education.tsx`**

```tsx
export default function Education() {
  return (
    <section data-reveal className="section">
      <div>
        <h2 className="section-eyebrow">Education &amp; Languages</h2>
      </div>
      <div className="edu-grid">
        <div>
          <div className="edu-head">
            <h3>Mahidol University</h3>
            <div className="project-duration">2018 — 2021</div>
          </div>
          <p className="edu-degree">
            BSc, Information and Communication Technology (MUICT)
          </p>
          <p className="edu-detail">
            Computer Software Engineering track. First Class Honours, GPA 3.51.
          </p>
          <div className="edu-project">
            <div className="edu-project-label">Final project · AiRadar, 2021</div>
            <p>
              Full-stack air quality monitoring platform — data ingestion and
              visualisation on Next.js, Express.js and MongoDB, IoT device integration,
              real-time tracking and notifications, deployed on DigitalOcean.
            </p>
          </div>
        </div>
        <div>
          <ul className="lang-list">
            <li>
              <strong>Thai</strong> — native speaker
            </li>
            <li>
              <strong>English</strong> — professional working proficiency; TOEIC 745
              (2020)
            </li>
          </ul>
          <p className="lang-note">
            Comfortable working in English across international teams — day-to-day
            collaboration with colleagues in Asia-Pacific and Europe.
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience.tsx src/components/Skills.tsx src/components/Education.tsx
git commit -m "feat: add Experience, Skills, Education components"
```

---

### Task 6: Contact component, App assembly, visual verification

**Files:**
- Create: `src/components/Contact.tsx`
- Modify: `src/App.tsx` (Vite scaffold's default content replaced with real composition)

**Interfaces:**
- Consumes: all components from Tasks 2–5 (`Header`, `Hero`, `Stats`, `Projects`, `Experience`, `Skills`, `Education`, `Footer`), plus `Contact` from this task. `src/styles.css` classes (`contact`, `contact-links`, `contact-btn`, `contact-btn-solid`).
- Produces: `App` default export rendered by `src/main.tsx` (already wired in Task 1).

- [ ] **Step 1: Write `src/components/Contact.tsx`**

```tsx
export default function Contact() {
  return (
    <section id="contact" data-reveal className="contact">
      <h2>Let's build something that scales</h2>
      <p>
        Based in Bangkok, working with teams anywhere. Happy to talk through any of the
        work above in detail.
      </p>
      <div className="contact-links">
        <a
          href="mailto:purinat.san@gmail.com"
          className="contact-btn contact-btn-solid"
        >
          purinat.san@gmail.com
        </a>
        <a href="tel:+66972271804" className="contact-btn">
          +66 97-227-1804
        </a>
        <a href="/Purinat_Sanbundit_CV_2026.pdf" download className="contact-btn">
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Replace `src/App.tsx`**

```tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div data-motion="on" className="container">
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Run dev server and visually verify**

Run: `npm run dev`, open the printed local URL in a browser.

Check against `Purinat Sanbundit.dc.html` (open that file directly in a second browser tab for side-by-side comparison):
- Desktop width (>900px): hero 2-column layout, stat strip 4 columns, section sidebar (eyebrow label) at left of each section, skills grid 4 columns, education 2-column.
- Resize to <900px: hero collapses to 1 column, stats/skills become 2 columns, section sidebar stacks above content, top nav links hidden.
- Click each project card's "+ Full detail" button — extra bullets appear, label flips to "— Show less"; click again to collapse.
- Click "Download CV" (header) and "Download CV (PDF)" (contact section) — PDF downloads.
- Click `mailto:` and `tel:` links — mail/phone handler opens.
- Click anchor nav links (Projects/Experience/Skills/Contact) — page scrolls smoothly to each section.

Fix any visual mismatches found before proceeding.

- [ ] **Step 4: Build production bundle to confirm no TypeScript/build errors**

Run: `npm run build`
Expected: completes with no errors, emits `dist/`.

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.tsx src/App.tsx
git commit -m "feat: add Contact component and assemble App"
```

---

### Task 7: GitHub repo and push

**Files:** none (repo/remote operations only)

**Interfaces:** none — terminal task.

- [ ] **Step 1: Confirm repo name and visibility with user**

Ask user: desired GitHub repo name (e.g. `purinat-san-port-2026`) and visibility (public/private) before creating anything.

- [ ] **Step 2: Create GitHub repo and push**

```bash
gh repo create <confirmed-repo-name> --<public-or-private> --source=. --remote=origin --push
```

- [ ] **Step 3: Verify**

```bash
git remote -v
gh repo view --web
```

Expected: `origin` points at the new GitHub repo, `main` branch pushed.

---

### Task 8: Vercel deploy

**Files:** none (dashboard/CLI operations only)

**Interfaces:** none — deploy task.

- [ ] **Step 1: Connect repo in Vercel**

Via Vercel dashboard: "Add New Project" → import the GitHub repo from Task 7 → framework preset auto-detects "Vite" → deploy. (Or CLI equivalent: `vercel link` then `vercel --prod`, if user prefers CLI over dashboard.)

- [ ] **Step 2: Verify production deploy**

Open the Vercel-assigned URL, re-run the visual verification checklist from Task 6 Step 3 against the live deployment.

- [ ] **Step 3: Confirm auto-deploy wiring**

Explain to user: future `git push` to `main` triggers a new production deploy; pushes to other branches/PRs get preview URLs automatically — no further action needed.
