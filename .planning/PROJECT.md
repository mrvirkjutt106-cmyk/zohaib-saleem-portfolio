# Zohaib Saleem Professional Portfolio

## What This Is

A professional portfolio for Zohaib Saleem, a Chartered Accountancy student exploring accounting, financial data, digital systems, and AI. The site helps accounting and audit recruiters, hiring managers, and professional contacts quickly understand his qualifications, career direction, and applied project work. This project redesigns the existing React portfolio into a visually distinctive, polished experience without changing the underlying professional identity or inventing accomplishments.

## Core Value

Help accounting and audit decision-makers quickly assess Zohaib's professional fit and credibility.

## Requirements

### Validated

- ✓ The portfolio presents Zohaib's accounting, data, and AI positioning — existing
- ✓ Visitors can explore professional background, projects, capabilities, CA journey, credentials, and future direction — existing
- ✓ Visitors can access contact options and download a CV — existing
- ✓ The application uses React, TypeScript, Vite, and Framer Motion — existing

### Active

- [ ] Redesign the experience with a refined editorial visual system, dimensional 3D-inspired details, and selective cinematic feature sections.
- [ ] Use clear information hierarchy and accessible navigation to foreground accounting/audit fit, qualifications, and credible project evidence.
- [ ] Deliver a coherent responsive experience across desktop and mobile, with touch-friendly controls and layouts that prevent clipping or horizontal overflow.
- [ ] Add purposeful entrance, hover, and scroll-linked motion that enhances comprehension without making the content difficult to read or navigate.
- [ ] Keep interactions and visual effects smooth on typical devices, avoid unnecessary loading/performance cost, and respect reduced-motion preferences.
- [ ] Preserve accurate existing portfolio content and working project, CV, and contact destinations; do not fabricate credentials, metrics, or experience.

### Out of Scope

- Backend services, user accounts, or a content-management system — the portfolio is a static professional showcase.
- Replacing or expanding the subject's real qualifications, career history, and project claims — the redesign must present verified content rather than inventing it.
- A separate native mobile application — the site remains a responsive web experience.
- A heavy, always-running WebGL/3D scene unless a later implementation plan demonstrates it is necessary — prioritize lightweight effects and smooth loading.

## Context

- The repository is an existing Vite application, not a greenfield build. Its portfolio is organized as React section components with co-located CSS, global design tokens, and shared layout components.
- The existing page includes a hero, professional philosophy, project showcase, capabilities, CA journey, credentials, future direction, contact options, and footer.
- Existing assets include portraits, project imagery, and a downloadable CV. Keep currently valid asset and contact paths intact.
- Existing motion uses Framer Motion; existing global styles include a reduced-motion rule. Preserve and extend these patterns rather than replacing the stack without a clear need.
- The audience priority is accounting/audit opportunity evaluation. Automation and AI work supports this story but should not obscure professional fit or credentials.
- The chosen art direction is a balanced hybrid: light editorial content with a cinematic 3D-inspired hero and dark feature moments.

## Constraints

- **Tech stack**: React 18, TypeScript, Vite, and Framer Motion — preserve the established application architecture unless implementation evidence justifies a focused addition.
- **Performance**: Effects must remain lightweight and degrade gracefully on mobile or lower-powered devices — the site should load smoothly on a range of devices.
- **Accessibility**: Maintain readable contrast, keyboard-usable interactions, semantic content, and reduced-motion support — professional content must remain accessible regardless of animation preferences.
- **Content integrity**: Preserve factual claims and existing destinations — the portfolio represents a real person's professional qualifications.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Balanced hybrid art direction | Combines a distinctive cinematic hero and dark feature moments with readable light editorial content | ✓ Approved during project setup |
| Prioritize accounting/audit opportunity evaluation | Matches the intended audience and makes the professional story and qualifications the primary visitor journey | ✓ Approved during project setup |
| Prefer lightweight 3D-inspired effects over a heavy always-running scene | Delivers depth and motion while supporting smooth loading on desktop and mobile | — Pending implementation validation |

## Evolution

At phase transitions, validate which active redesign requirements have shipped, move proven capabilities to Validated, record new requirements and decisions, and check that the portfolio remains truthful to Zohaib's current professional profile. Revisit the core value only if the portfolio's intended audience changes.

---
*Last updated: 2026-10-22 after project initialization*
