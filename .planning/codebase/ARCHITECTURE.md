---
last_mapped_commit: 26ca7495c2399f81d80625c6e2527abad502f6dc
last_mapped_at: 2026-10-22
---
<!-- refreshed: 2026-10-22 -->

# Architecture

**Analysis Date:** 2026-10-22

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                    Browser application                       │
│                                                              │
│  `index.html` → `src/main.tsx` → `src/App.tsx`               │
│                                      │                       │
│         ┌────────────────────────────┴───────────────────┐  │
│         │ Ordered page sections (`src/components/`)      │  │
│         │ Layout · Hero · Philosophy · Projects · etc.   │  │
│         └────────────────────────────┬───────────────────┘  │
└──────────────────────────────────────┼──────────────────────┘
                                       │
               ┌──────────────────────┴─────────────────────┐
               │ Static content (`src/data/`)                │
               │ Component state/hooks · CSS (`src/styles/`) │
               └──────────────────────┬─────────────────────┘
                                      ▼
┌─────────────────────────────────────────────────────────────┐
│ Static assets served from `public/` · built output `dist/`  │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| HTML shell | Provides document metadata, root mount element, and module script | `index.html` |
| React bootstrap | Mounts the app under `React.StrictMode` | `src/main.tsx` |
| Page composition | Defines the one-page portfolio section order and imports global CSS | `src/App.tsx` |
| Site navigation and footer | Shared top/bottom chrome; navigation tracks scroll and mobile-menu state | `src/components/layout/HeaderNav.tsx`, `src/components/layout/FooterBar.tsx` |
| Portfolio sections | Render hero, philosophy, projects, capabilities, CA journey, credentials, future direction, and contact | `src/components/hero/HeroChamber.tsx`, `src/components/philosophy/PhilosophySpread.tsx`, `src/components/projects/SystemShowcase.tsx`, `src/components/capabilities/CapabilitiesMatrix.tsx`, `src/components/journey/CaVisualTrajectory.tsx`, `src/components/credentials/CredentialsArchive.tsx`, `src/components/direction/FutureTrajectory.tsx`, `src/components/contact/ContactConsole.tsx` |
| Content definitions | Supplies portfolio copy, contact and image references, credentials, journey, and project data | `src/data/siteData.ts`, `src/data/professionalSummary.ts`, `src/data/projects.ts`, `src/data/caJourney.ts`, `src/data/certifications.ts` |
| Styling | Defines global design tokens, typography, page defaults, and component-specific presentation | `src/styles/`, `src/components/*/*.css` |

## Pattern Overview

**Overall:** Single-page React application composed from ordered, domain-focused section components, with static public-facing content and local component state.

**Key Characteristics:**
- `src/App.tsx` is the explicit composition root; it directly imports and orders every section rather than routing between pages.
- Each section has its own directory under `src/components/` and generally keeps its CSS beside its `.tsx` component.
- Reusable data is exported as constants from `src/data/`; some display datasets remain local to their component, such as the project case studies in `src/components/projects/SystemShowcase.tsx`.
- React state is local to interactive components. `src/components/layout/HeaderNav.tsx` handles scroll, active section, and mobile-menu state; `src/components/projects/SystemShowcase.tsx` tracks selected workflow steps.
- Framer Motion is used in several sections for presentation and reduced-motion-aware animation; it does not define app-level navigation or data flow.
- No server/API layer or client-side router is present in the examined application path.

## Layers

**Document and bootstrap:**
- Purpose: Provide the browser document and mount the React tree.
- Location: `index.html`, `src/main.tsx`
- Contains: Metadata, the `#root` element, and React mounting code.
- Depends on: `src/App.tsx` and the browser DOM.
- Used by: The Vite-served development app and built frontend.

**Page composition:**
- Purpose: Assemble the single page and apply global styles.
- Location: `src/App.tsx`
- Contains: Imports and ordered JSX for shared layout and each portfolio section.
- Depends on: `src/components/` and `src/styles/`.
- Used by: `src/main.tsx`.

**Presentation sections:**
- Purpose: Render page content and section-level interactions.
- Location: `src/components/`
- Contains: Domain-named components and their colocated styles. The section IDs form same-page navigation targets, e.g. `id="journey"` in `src/components/journey/CaVisualTrajectory.tsx`.
- Depends on: `src/data/`, React state/hooks, Framer Motion where used, and component CSS.
- Used by: `src/App.tsx`; the layout components are also imported there.

**Content data:**
- Purpose: Keep shared profile facts and section datasets separate from rendering.
- Location: `src/data/`
- Contains: Typed or inferred TypeScript constants. For example, `src/data/caJourney.ts` defines `AcademicStage`/`CAPaper` and journey arrays; `src/data/projects.ts` defines project interfaces and `FLAGSHIP_PROJECTS`.
- Depends on: No application services; these modules are static.
- Used by: The relevant section components, including `src/components/journey/CaVisualTrajectory.tsx` and `src/components/contact/ContactConsole.tsx`.

**Styles and static assets:**
- Purpose: Supply shared visual rules and files used directly by the browser.
- Location: `src/styles/`, component directories, `public/`
- Contains: Global token/base/typography CSS, component CSS, images, favicon, and CV PDF.
- Depends on: No application service. Assets are referenced by public-root URLs, e.g. `/images/...` from `src/data/siteData.ts`.
- Used by: `src/App.tsx`, individual components, and `index.html`.

## Data Flow

### Initial Page Render

1. The browser loads `index.html`, including its `#root` and `/src/main.tsx` module script.
2. `src/main.tsx` creates a React root, wraps `App` in `React.StrictMode`, and renders it.
3. `src/App.tsx` renders the shared header, the portfolio sections in their documented visual order, and footer.
4. Sections read imported constants from `src/data/` and/or local component constants, then render markup and optional local interactions.
5. Vite serves source assets during development; production build output is emitted under `dist/`.

### Interactive Navigation and Section State

1. `src/components/layout/HeaderNav.tsx` registers a passive window scroll listener in an effect.
2. It updates local `scrolled` and `activeSection` state by reading page scroll position and target elements by ID.
3. Navigation links use same-page fragment URLs such as `#about` and `#projects`; mobile-menu controls update local state and manage body overflow.
4. Other interactions stay within their owning component, e.g. active project workflow selection in `src/components/projects/SystemShowcase.tsx`.

**State Management:**
- Component interactions use React `useState`; no global state store or server cache is present.
- Shared portfolio facts are imported from static modules such as `src/data/siteData.ts`.
- `src/hooks/useNavScroll.ts` provides a reusable scroll-threshold hook, although the current header implements its own combined scroll/section tracking.

## Key Abstractions

**Portfolio section component:**
- Purpose: Encapsulate one page section’s markup, behavior, and visual styles.
- Examples: `src/components/hero/HeroChamber.tsx`, `src/components/credentials/CredentialsArchive.tsx`
- Pattern: Default-export a React component and import its adjacent CSS; add it to `src/App.tsx` to display it.

**Static content contract:**
- Purpose: Shape and centralize repeatable content consumed by presentation sections.
- Examples: `src/data/caJourney.ts`, `src/data/certifications.ts`, `src/data/projects.ts`
- Pattern: Export named arrays/constants and interfaces from data modules; render arrays with `.map()` in the corresponding component.

**Shared site constants:**
- Purpose: Reuse profile/contact facts and asset paths across multiple UI elements.
- Examples: `src/data/siteData.ts` (`PERSON`, `CONTACT`, `IMAGES`)
- Pattern: Import only needed named exports; image and document URLs point to files under `public/`.

## Entry Points

**Browser document:**
- Location: `index.html`
- Triggers: Browser navigation to the site.
- Responsibilities: Supplies metadata, document title, root mount element, and the Vite module entry.

**React entry:**
- Location: `src/main.tsx`
- Triggers: The module script in `index.html`.
- Responsibilities: Creates the root and renders `src/App.tsx` in strict mode.

**Vite configuration:**
- Location: `vite.config.ts`
- Triggers: Vite development/build commands.
- Responsibilities: Enables the React plugin and configures the development server on port `3000`.

## Architectural Constraints

- **Threading:** Browser JavaScript and React rendering run on the browser’s main event loop; no worker entry point is present.
- **Global state:** No shared mutable state store is present. Static exported constants live in `src/data/`; UI state is component-local. `src/components/layout/HeaderNav.tsx` also temporarily writes `document.body.style.overflow` while the mobile menu is open.
- **Circular imports:** No circular dependency chain was detected in the inspected imports.
- **Page shape:** Content sections are composed into a single document in `src/App.tsx`; navigation is based on fragment anchors rather than route definitions.
- **Asset paths:** Files placed in `public/` are addressed from the site root, as in `/cv/Zohaib-Saleem-CV.pdf` in `src/data/siteData.ts`.

## Anti-Patterns

No recurring architectural anti-pattern is established by the inspected application structure. Keep new section behavior local to its component and shared content in `src/data/` where it is consumed across components.

## Error Handling

**Strategy:** The inspected UI is a static client-side portfolio with no application-level API requests or centralized error boundary evident in `src/App.tsx` and the section components.

**Patterns:**
- Browser APIs are used directly for local interactions, for example clipboard access in `src/components/contact/ContactConsole.tsx`; no shared error-reporting abstraction is present.
- Effects that register scroll listeners in `src/components/layout/HeaderNav.tsx` and `src/hooks/useNavScroll.ts` remove their listeners on cleanup.
- Do not assume network-backed persistence or a server error flow; keep any future asynchronous error handling at the feature boundary unless a shared strategy is introduced.

## Cross-Cutting Concerns

**Logging:** No application logging layer is present in the inspected source.
**Validation:** No shared runtime validation layer is present; content contracts are expressed through TypeScript interfaces in files such as `src/data/projects.ts`.
**Authentication:** Not applicable to the current public portfolio UI; no authentication layer was detected.

---

*Architecture analysis: 2026-10-22*
