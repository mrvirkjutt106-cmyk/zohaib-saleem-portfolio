---
phase: 01-hiring-focused-hero-art-direction
plan: 01
subsystem: ui
tags: [react, typescript, framer-motion, css, responsive-design, accessibility]

requires: []
provides:
  - Recruiter-first, portrait-led hero with verified positioning, professional facts, and existing destinations
  - Responsive hero with reduced-motion behavior, portrait-failure fallback, and measured text/control contrast
affects: [phase-2-professional-evidence, portfolio, accessibility, visual-design]

actuals:
  tokens: 7250
  tasks: 2
  commits: 3

tech-stack:
  added: []
  patterns:
    - Eager hero portrait with async decoding, intrinsic dimensions, ref-based fetch priority, and a content-preserving error fallback
    - Reduced-motion-aware Framer Motion entrances initialized directly to the final state

key-files:
  created: []
  modified:
    - src/components/hero/HeroChamber.tsx
    - src/components/hero/HeroChamber.css
    - src/data/siteData.ts

key-decisions:
  - Preserve the existing React, TypeScript, Vite, Framer Motion, portrait, CV path, and native section destinations.
  - Keep the token-blue primary action and add a light outline to meet the meaningful control-boundary contrast threshold on mobile.

patterns-established:
  - Keep hero identity, facts, and native links independent of portrait loading so media failure does not remove professional content.

requirements-completed: [IDENTITY-01, VISUAL-01, VISUAL-02, VISUAL-03]

coverage:
  - id: D1
    description: "Full-bleed recruiter-first hero communicates CA-student status, accounting/audit direction, supporting disciplines, verified facts, and existing actions."
    requirement: IDENTITY-01
    verification:
      - kind: automated_ui
        ref: "Browser: hero content, facts, and native destinations; portrait failure preserved the copy and all three actions."
        status: pass
    human_judgment: true
    rationale: "Recruiter-facing hierarchy and portrait composition require visual sign-off."
  - id: D2
    description: "Hero reflows across mobile and desktop, supports reduced motion and keyboard focus, and meets contrast targets over the portrait and fallback."
    requirement: VISUAL-02
    verification:
      - kind: automated_ui
        ref: "Browser: 320, 375, 768, 959, 960, and 1440px; 48px actions; no horizontal overflow; actual browser zoom at 200% from a 1280px viewport."
        status: pass
      - kind: manual_procedural
        ref: "Canvas sampling of rendered portrait plus gradients: minimum normal-text contrast 5.17:1; primary control boundary 19.09:1 after outline. Fallback text and boundary checks also passed."
        status: pass
      - kind: other
        ref: "npm run build (TypeScript and Vite production build)"
        status: pass
    human_judgment: true
    rationale: "Automated viewport and contrast checks do not replace a final human visual review of composition and editorial coherence."

duration: 39min
completed: 2026-10-22
status: complete
---

# Phase 1: Hiring-Focused Hero & Art Direction Summary

**A portrait-led recruiter-first hero now presents Zohaib's verified CA and accounting/audit direction with responsive actions, factual highlights, and accessible motion.**

## Performance

- **Duration:** 39 min
- **Started:** 2026-10-22T17:05:51Z
- **Completed:** 2026-10-22T17:44:32Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Replaced the split hero with a full-bleed portrait, left-aligned role-first messaging, a dark readability overlay, and the approved positioning sentence.
- Preserved all four factual highlights and the native `#projects`, `#journey`, and downloadable CV destinations; portrait failure retains the content and links.
- Added responsive 2×2/four-column fact layouts, visible keyboard focus, reduced-motion behavior, and a high-contrast outline on the blue primary action.
- Verified the hero at six viewport widths, tested 200% page-zoom simulation, checked reduced motion and keyboard focus, and sampled rendered/fallback text and control contrast.

## Task Commits

1. **Task 1: Replace the split hero with the recruiter-first portrait-led experience** — `6831b35` (`feat`)
2. **Task 2: Complete hero responsive, reduced-motion, and visual-contract behavior** — `a992fad` (`fix`)
3. **Contrast verification correction** — `1a392b3` (`fix`); added the light outline after mobile control-boundary contrast measured 2.81:1 before correction.

**Plan metadata:** Follow-up GSD state/roadmap close-out is recorded after this summary commit.

## Files Created/Modified

- `src/components/hero/HeroChamber.tsx` - Semantic recruiter-first content, facts, native actions, portrait loading/fallback behavior, and reduced-motion-aware entrances.
- `src/components/hero/HeroChamber.css` - Full-bleed portrait treatment, responsive layout, readable overlay, 48px actions, visible focus, and the primary control outline.
- `src/data/siteData.ts` - Canonical approved hero positioning sentence.

## Decisions Made

- Retained the existing application stack and supplied portrait; no dependencies or image-processing tooling were added.
- Kept Explore Projects as the sole filled token-blue action, while CA Journey and CV remain quieter native links.
- Added a light primary-action outline after rendered mobile checks found the unoutlined edge at 2.81:1; the corrected boundary measured 19.09:1 against the adjacent rendered background.

## Deviations from Plan

None. The outline is an in-scope correction required to satisfy the plan's control-boundary contrast criterion.

## Issues Encountered

- React 18 warned when `fetchPriority` was passed as a JSX prop. Setting the native image property via a ref removed the warning.
- The initial mobile primary-action boundary measured 2.81:1. A light outline retained the approved blue fill and passed the re-check.
- Actual browser zoom at 200% from a 1280px viewport retained the portrait, all four facts, and all actions without horizontal overflow; the three actions remained 48px high.
- Final subjective visual sign-off remains for the user; screenshots at desktop and mobile widths were reviewed during verification.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 2 can proceed with the visual foundation and recruiter-first opening in place. The remaining portfolio sections have not yet been redesigned; this delivery is limited to the Phase 1 hero.

---
*Phase: 01-hiring-focused-hero-art-direction*
*Completed: 2026-10-22*
