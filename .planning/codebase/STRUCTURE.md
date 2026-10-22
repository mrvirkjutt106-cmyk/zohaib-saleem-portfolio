---
last_mapped_commit: 26ca7495c2399f81d80625c6e2527abad502f6dc
last_mapped_at: 2026-10-22
---
# Codebase Structure

**Analysis Date:** 2026-10-22

## Directory Layout

```text
zohaib-saleem-portfolio/
├── .planning/
│   └── codebase/                # GSD codebase mapping documents
├── public/
│   ├── cv/                      # Downloadable public CV
│   └── images/                  # Portfolio portraits and project artwork
├── src/
│   ├── components/              # One directory per UI section/layout area
│   ├── data/                    # Static portfolio facts and section datasets
│   ├── hooks/                   # Reusable React hooks
│   ├── styles/                  # Global CSS foundations
│   ├── App.tsx                  # Single-page composition root
│   └── main.tsx                 # React/Vite browser entry
├── index.html                   # Browser document shell
├── vite.config.ts               # Vite and React plugin configuration
├── tsconfig.json                # Application TypeScript configuration
└── package.json                 # Package metadata and scripts
```

## Directory Purposes

**`src/components/`:**
- Purpose: Holds page sections and shared layout elements.
- Contains: Feature folders with `.tsx` component files and typically a matching `.css` file.
- Key files: `src/components/layout/HeaderNav.tsx`, `src/components/layout/FooterBar.tsx`, `src/components/hero/HeroChamber.tsx`, `src/components/projects/SystemShowcase.tsx`.
- Guidance: Add a new major portfolio section in a clearly named subdirectory, keep its component and component CSS together, and add it to the explicit order in `src/App.tsx`.

**`src/data/`:**
- Purpose: Defines profile facts, content, and structured data rendered by sections.
- Contains: Named TypeScript exports, arrays, and interfaces.
- Key files: `src/data/siteData.ts`, `src/data/professionalSummary.ts`, `src/data/projects.ts`, `src/data/caJourney.ts`, `src/data/certifications.ts`.
- Guidance: Add shared/repeated or structured content here and import it from the consuming section; maintain typed interfaces for records with a defined shape.

**`src/hooks/`:**
- Purpose: Reusable React behavior extracted from presentation components.
- Contains: Hook modules.
- Key files: `src/hooks/useNavScroll.ts`.
- Guidance: Put reusable state/effect behavior here; component-specific interactions can remain local to the component.

**`src/styles/`:**
- Purpose: Holds site-wide style foundations.
- Contains: CSS for global defaults, design tokens, and typography.
- Key files: `src/styles/tokens.css`, `src/styles/global.css`, `src/styles/typography.css`; these are imported by `src/App.tsx`.
- Guidance: Put shared primitives and global rules here; keep section-only declarations alongside the matching component.

**`public/`:**
- Purpose: Provides static files copied/served at root-relative URLs.
- Contains: `public/favicon.svg`, `public/cv/Zohaib-Saleem-CV.pdf`, and image files in `public/images/`.
- Guidance: Add directly served media/documents here and reference them with a leading `/`; register commonly reused image paths in `src/data/siteData.ts`.

**`dist/`:**
- Purpose: Vite production build output.
- Contains: Generated site files.
- Generated: Yes. Treat as build output rather than source; make application changes in `src/`, `public/`, or root configuration.

**`node_modules/`:**
- Purpose: Installed dependencies.
- Contains: Third-party package files.
- Generated: Yes. Do not add application code here.

## Key File Locations

**Entry Points:**
- `index.html`: Document metadata, `#root` target, and module script.
- `src/main.tsx`: React root creation and application render.
- `src/App.tsx`: Page component ordering and global CSS imports.

**Configuration:**
- `package.json`: Scripts and package declarations.
- `vite.config.ts`: Vite React plugin and dev-server settings.
- `tsconfig.json`, `tsconfig.node.json`: TypeScript configurations.

**Core Logic:**
- `src/components/`: Section rendering and interactions.
- `src/data/`: Static content contracts and content source modules.
- `src/hooks/useNavScroll.ts`: Reusable scroll threshold state.

**Styling:**
- `src/styles/`: Global design foundations.
- `src/components/*/*.css`: Section/layout-specific styles, paired by basename with the component.

**Testing:**
- No test directory or test files were detected in the inspected source tree.

## Naming Conventions

**Files:**
- React component modules use PascalCase names matching their exported component, e.g. `src/components/hero/HeroChamber.tsx`.
- Component styles use the same basename with `.css`, e.g. `src/components/hero/HeroChamber.css`.
- Data and hook modules use lower camelCase names, e.g. `src/data/siteData.ts` and `src/hooks/useNavScroll.ts`.
- Global stylesheet files use lower-case descriptive names, e.g. `src/styles/global.css`.

**Directories:**
- Feature directories under `src/components/` use lowercase domain words, e.g. `src/components/credentials/` and `src/components/direction/`.
- Shared concerns have dedicated lowercase directories: `src/data/`, `src/hooks/`, and `src/styles/`.

## Where to Add New Code

**New Feature:**
- Primary code: Create a section component under a relevant `src/components/<feature>/` directory and include its section-specific CSS beside it.
- Composition: Import and position the component in `src/App.tsx`; use a unique section `id` if it is targeted by fragment navigation.
- Tests: No test placement pattern is established; no existing test suite was detected.

**New Component/Module:**
- Implementation: Keep section-level components in `src/components/<feature>/`; shared layout belongs under `src/components/layout/`.
- Shared data contracts: `src/data/`.
- Reusable React behavior: `src/hooks/`.

**Utilities:**
- Shared helpers or hooks: `src/hooks/` for reusable React behavior; no general utility directory currently exists.
- Shared styling tokens/base styles: `src/styles/`.

## Special Directories

**`public/images/` and `public/cv/`:**
- Purpose: Publicly addressable image and document assets.
- Generated: No, these are source assets.
- Committed: Tracked as project inputs; their root-relative URLs are consumed in `src/data/siteData.ts` and section components.

**`dist/`:**
- Purpose: Built site output.
- Generated: Yes, by the Vite build.
- Committed: Not determined from the directory listing alone; do not edit its contents directly.

**`node_modules/`:**
- Purpose: Installed npm packages.
- Generated: Yes, from package installation.
- Committed: No application source belongs here.

**`.planning/codebase/`:**
- Purpose: GSD-maintained repository analysis documents.
- Generated: Yes, by mapping workflows.
- Committed: The mapper does not commit changes.

---

*Structure analysis: 2026-10-22*
