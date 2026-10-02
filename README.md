# Zohaib Saleem Portfolio — Setup Guide

## First-time setup (after installing Node.js)

Open this folder in your terminal and run:

```bash
npm install
npm run dev
```

The site will open at: **http://localhost:3000**

---

## Image assets

You have provided **5 professional photographs**. Here is exactly where each one belongs and what filename to save it as. Copy each file manually into `public/images/`.

### Photos you have — naming guide

| Save as | Description | Used in | Notes |
|---|---|---|---|
| `zohaib-logo-cutout.png` | **Arms-crossed, dark/black background** ← the most recent photo | **Hero** (right-side composition) + **Nav** brand mark | See technique note below |
| `zohaib-headshot.png` | Close headshot, transparent/checkered background | Contact section (Phase 2) | Transparent bg — works as-is |
| `zohaib-thinking.png` | Thoughtful pose, hand on chin, transparent background | Professional Summary section (Phase 2) | Transparent bg — works as-is |
| `zohaib-working.png` | At desk on laptop, transparent background | Projects section (Phase 2) | Transparent bg — works as-is |
| `zohaib-fullbody.jpg` | Full body standing, white background | Backup / optional | White bg dissolves on off-white page |

> **The `zohaib-logo-cutout.png` file is the only one required for Phase 1.**  
> All other photos will be used in Phase 2.

---

### ⚠️ Important — Hero portrait with dark background

The arms-crossed photo has a **pure black background**, not transparent. Two options:

**Option A — Remove the background (recommended, 2 minutes):**
1. Go to [remove.bg](https://www.remove.bg) — free, instant
2. Upload the arms-crossed photo
3. Download the transparent PNG
4. Save as `public/images/zohaib-logo-cutout.png`

This gives the cleanest result — the figure sits directly on the warm page background.

**Option B — Use the full-body white background photo instead:**
- Save the full-body standing photo as `public/images/zohaib-logo-cutout.png`
- The white background is close enough to `#F7F5F0` that it integrates naturally without any CSS technique

Option A with the arms-crossed photo will look significantly more editorial and premium.

---

## File checklist before `npm run build`

```
public/images/
  ✅  project-ai.jpg            (already in place)
  ✅  project-erp.jpg           (already in place)
  ✅  zohaib-portrait.jpg       (old placeholder — no longer used by code)
  ⬜  zohaib-logo-cutout.png    ← REQUIRED for hero + nav
  ⬜  zohaib-headshot.png       ← Phase 2 (save now, use later)
  ⬜  zohaib-thinking.png       ← Phase 2 (save now, use later)
  ⬜  zohaib-working.png        ← Phase 2 (save now, use later)
```

---

## Tech stack

- React 18 + TypeScript
- Vite 5
- Framer Motion 11
- Google Fonts (Cormorant Garamond + Inter)
- Pure CSS with custom properties

## Project structure

```
src/
  App.tsx                           — Root (Phase 1: nav + hero only)
  main.tsx
  styles/
    tokens.css                      — ALL design tokens (colors, type, spacing)
    global.css                      — Resets and base
    typography.css                  — Typographic utility classes
  components/
    layout/
      Navigation.tsx / .css         — Fixed nav, scroll transition, mobile overlay
    sections/
      Hero.tsx / .css               — Hero composition (Phase 1 complete)
    ui/
      LedgerLine.tsx / .css         — Hairline rule component
      SectionLabel.tsx / .css       — "01 — Introduction" counter
  hooks/
    useNavScroll.ts                 — Scroll detection for nav state
  data/
    siteData.ts                     — Contact info, LinkedIn, image paths
    professionalSummary.ts          — Summary copy + core focus areas
    caJourney.ts                    — CA papers, timeline, progress
    certifications.ts               — All certifications + skills list
    projects.ts                     — Project descriptions
public/
  favicon.svg
  images/
    zohaib-logo-cutout.png          — Hero + nav portrait (YOU MUST ADD THIS)
    zohaib-headshot.png             — Phase 2: Contact section
    zohaib-thinking.png             — Phase 2: Professional Summary section
    zohaib-working.png              — Phase 2: Projects section
    project-erp.jpg                 — Phase 2: ERP project graphic
    project-ai.jpg                  — Phase 2: AI lab graphic
```
