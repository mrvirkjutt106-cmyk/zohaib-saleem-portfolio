# Phase 1: Hiring-Focused Hero & Art Direction - Context

**Gathered:** 2026-10-22
**Status:** Ready for planning

<domain>
## Phase Boundary

This phase delivers a polished opening experience that helps accounting and audit visitors immediately understand Zohaib's professional direction. It covers the hero composition and the initial art direction only. The approved project direction remains a balanced hybrid of light editorial content and selective dark feature sections, with lightweight 3D-inspired depth. Detailed presentation of the remaining portfolio evidence and the full navigation, accessibility, responsive, motion, and performance pass stay within their roadmap phases.

</domain>

<decisions>
## Implementation Decisions

### Hero composition
- **D-01:** Make a full-bleed portrait the dominant visual in the opening hero, with text layered over the image.
- **D-02:** Place the hero copy left-aligned over a soft dark gradient. Keep the portrait visible while using the gradient to support clear text contrast.
- **D-03:** Lead the copy with CA-student status and accounting/audit focus. Present accounting × data × AI as supporting disciplines.
- **D-04:** Make Explore Projects the primary hero action. Keep CV and CA Journey as quieter secondary links, retaining their existing destinations.

### the agent's Discretion
- Detailed implementation and responsive behavior for the agreed full-bleed composition, provided the portrait, text, and primary action remain clear and usable.
- Exact type scale, spacing, gradient treatment, and lightweight depth effects within the previously approved balanced-hybrid direction.
- Preserve existing verified profile facts and destinations; do not introduce new professional claims.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project scope and requirements
- `.planning/PROJECT.md` — Core audience, value, constraints, and approved balanced-hybrid direction.
- `.planning/REQUIREMENTS.md` — Phase 1 requirements IDENTITY-01 and VISUAL-01/02/03.
- `.planning/ROADMAP.md` — Phase 1 boundary and success criteria.
- `.planning/STATE.md` — Current phase and known project concerns.

### Existing hero and visual system
- `src/components/hero/HeroChamber.tsx` — Existing hero copy, portrait, credibility ribbon, and Projects/CA Journey/CV actions.
- `src/components/hero/HeroChamber.css` — Existing light editorial hero, two-column grid, typography, and ambient blue/violet lighting.
- `src/data/siteData.ts` — Canonical profile facts, hero statement, and image/contact/CV paths.
- `src/styles/tokens.css` — Shared color, typography, spacing, radius, and motion tokens.
- `src/App.tsx` — Page composition and global stylesheet imports.

### Codebase patterns
- `.planning/codebase/STACK.md` — Existing React, TypeScript, Vite, and Framer Motion stack.
- `.planning/codebase/ARCHITECTURE.md` — Single-page composition and section integration points.
- `.planning/codebase/CONVENTIONS.md` — Component, CSS, and styling conventions.
- `.planning/codebase/STRUCTURE.md` — Existing source and asset organization.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `HeroChamber` already renders the name, positioning statement, professional status ribbon, primary Projects link, CA Journey link, CV download, and portrait.
- `IMAGES.heroCutout` in `src/data/siteData.ts` points to `/images/zohaib-portrait.png`, currently used as the hero portrait. The portrait file is approximately 2.1 MB; account for this existing asset cost when shaping the opening visual.
- Global `src/styles/tokens.css` provides the existing palette, typography, spacing, and motion variables.

### Established Patterns
- Major sections keep their component and CSS in a domain folder; global tokens live in `src/styles/tokens.css`.
- Framer Motion is already used for the hero entrance and exposes reduced-motion preferences through `useReducedMotion`.
- The existing hero is a two-column grid over a light canvas with restrained blue/violet ambient glows; the discussed composition intentionally changes this starting layout into a full-bleed image with left-aligned overlay copy.

### Integration Points
- The hero is mounted first in `src/App.tsx` and uses `id="hero"`, which is targeted by the header's home link.
- Hero actions use existing fragment destinations (`#projects`, `#journey`) and the CV path from `CONTACT.cvPath`.
- Profile facts and the hero portrait path are centralized in `src/data/siteData.ts`; retain these as the source of truth.

</code_context>

<specifics>
## Specific Ideas

- Full-bleed portrait as the main visual.
- Left-aligned headline and copy over a soft dark gradient rather than a boxed panel or bottom caption.
- Recruiter-first opening order: CA-student status and accounting/audit focus first; accounting × data × AI supports it.
- Explore Projects as the prominent call to action; CV and CA Journey remain secondary.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope. Detailed visual-language and depth/motion choices were left to the implementation's discretion within the approved project direction.

</deferred>

---

*Phase: 1-Hiring-Focused-Hero-Art-Direction*
*Context gathered: 2026-10-22*
