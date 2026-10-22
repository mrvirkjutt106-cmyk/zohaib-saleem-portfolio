---
last_mapped_commit: 26ca7495c2399f81d80625c6e2527abad502f6dc
last_mapped_at: 2026-10-22
---
# Coding Conventions

**Analysis Date:** 2026-10-22

## Naming Patterns

**Files:**
- React component implementations use PascalCase filenames and matching component names, e.g. `src/components/hero/HeroChamber.tsx`.
- Component styles use a same-basename `.css` file beside the component, e.g. `src/components/hero/HeroChamber.css`.
- Data modules and hooks use lower camelCase, e.g. `src/data/siteData.ts` and `src/hooks/useNavScroll.ts`.

**Functions:**
- React components are named functions, usually default-exported: `export default function HeroChamber()` in `src/components/hero/HeroChamber.tsx`.
- Hooks use the `use` prefix and lower camelCase, as in `useNavScroll` in `src/hooks/useNavScroll.ts`.
- Event callbacks and local helpers use lower camelCase (`handleScroll`, `closeMenu`, `fadeUp` in `src/components/layout/HeaderNav.tsx` and `src/components/hero/HeroChamber.tsx`).

**Variables:**
- Use lower camelCase for local state and values (`activeSection`, `mobileMenuOpen` in `src/components/layout/HeaderNav.tsx`).
- Use descriptive uppercase names for shared data constants (`PERSON`, `CONTACT`, `IMAGES` in `src/data/siteData.ts`; `FLAGSHIP_PROJECTS` in `src/data/projects.ts`).
- Use `const` for bindings throughout the observed source.

**Types:**
- Use PascalCase for interfaces and type names (`NavLink` in `src/components/layout/HeaderNav.tsx`; `FlagshipProject` and workflow interfaces in `src/data/projects.ts`).
- Prefer explicit interfaces for structured data and annotate hook return values where useful (`useNavScroll` returns `boolean` in `src/hooks/useNavScroll.ts`).
- Use literal/readonly typing for fixed configuration where applicable (`as const` in `src/data/siteData.ts`).

## Code Style

**Formatting:**
- No formatter configuration is present at the repository root. Match the existing TypeScript style: two-space indentation, single-quoted strings, no statement-ending semicolons, and trailing commas in multiline structures.
- Write JSX with parenthesized multiline returns and one prop per line when attributes are long, as in `src/components/hero/HeroChamber.tsx`.
- Keep component-specific CSS next to its component; shared visual tokens and reset rules belong in `src/styles/tokens.css` and `src/styles/global.css`.

**Linting:**
- No ESLint, Prettier, or Biome configuration or lint script is present.
- TypeScript strict checks are enabled in `tsconfig.json`, including `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`. Keep code type-safe and remove unused symbols rather than weakening these checks.

## Import Organization

**Order:**
1. External libraries (for example, React hooks or Framer Motion) at the top.
2. Relative application modules such as data and shared components.
3. The component's own stylesheet, usually after TypeScript imports.

Examples: `src/components/hero/HeroChamber.tsx` imports Framer Motion, shared image/contact data, then `HeroChamber.css`; `src/components/layout/HeaderNav.tsx` imports React hooks, site data, then its CSS.

**Path Aliases:**
- No TypeScript path aliases are configured in `tsconfig.json`; use relative imports such as `../../data/siteData`.

## Error Handling

**Patterns:**
- No common error-boundary or centralized error utility is present in the inspected app. For browser effects, pair event registration with cleanup in `useEffect`, following `src/hooks/useNavScroll.ts` and `src/components/layout/HeaderNav.tsx`.
- Validate behavior with TypeScript/build checks; do not assume thrown errors are transformed by a repository-wide handler.

## Logging

**Framework:** No application logging framework detected.

**Patterns:**
- No consistent production logging pattern is present in the inspected `src/` code. Avoid adding ad hoc console output to UI paths.

## Comments

**When to Comment:**
- Use brief comments to label non-obvious behavior or section structure; comments in `src/components/hero/HeroChamber.tsx` and `src/components/layout/HeaderNav.tsx` organize substantial JSX sections.
- Data modules may use a short module header to explain the dataset's purpose, as in `src/data/projects.ts`.

**JSDoc/TSDoc:**
- Short block comments describe hook behavior in `src/hooks/useNavScroll.ts`. There is no evidence of a requirement to document every component or function.

## Function Design

**Size:** No explicit size rule is configured. Keep section-specific rendering in focused components under `src/components/`; use `src/App.tsx` to compose the page sections rather than embedding their implementation there.

**Parameters:** Components without inputs take no props. For new component inputs, use typed props; use an interface when the shape has multiple fields. Small helpers use defaults for optional tuning values, e.g. `fadeUp(delay = 0)` in `src/components/hero/HeroChamber.tsx`.

**Return Values:** Components return JSX. Custom hooks return a typed state value (`boolean` from `src/hooks/useNavScroll.ts`). Keep reusable display content in typed data modules, then render collections with `.map()` and stable keys, as in `src/components/credentials/CredentialsArchive.tsx`.

## Module Design

**Exports:** UI components are default-exported; hooks and shared datasets/types are named exports. Follow the local pattern in `src/components/layout/HeaderNav.tsx`, `src/hooks/useNavScroll.ts`, and `src/data/projects.ts`.

**Barrel Files:** No barrel/index modules are present under `src/`. Import from the owning file directly.

**Component Pattern:** Each major portfolio section has its own directory with a PascalCase TSX component and companion CSS, e.g. `src/components/projects/SystemShowcase.tsx` and `src/components/projects/SystemShowcase.css`. Shared data is imported from `src/data/`; global design tokens are defined in `src/styles/tokens.css`. For data-backed lists, define an explicit item type in the data module and keep rendering/accessibility markup in the component, as exemplified by `src/data/projects.ts` and `src/components/credentials/CredentialsArchive.tsx`.

**CSS Naming:** Component styles use BEM-like classes with a component prefix, `__` for elements, and `--` for modifiers (e.g. `.header-nav__container`, `.header-nav--scrolled` in `src/components/layout/HeaderNav.css`). Use custom properties from `src/styles/tokens.css` for shared colors, spacing, typography, and motion values.

---

*Convention analysis: 2026-10-22*
