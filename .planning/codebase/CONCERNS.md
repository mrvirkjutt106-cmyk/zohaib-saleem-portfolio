---
last_mapped_commit: 26ca7495c2399f81d80625c6e2527abad502f6dc
last_mapped_at: 2026-10-22
---
# Codebase Concerns

**Analysis Date:** 2026-10-22

## Tech Debt

**Undefined design tokens:**
- Issue: `--radius-xl` is referenced by the contact, credentials, and CA journey styles but is not defined in `src/styles/tokens.css`; CSS declarations using it become invalid, so those elements lose the intended radius. `--space-7` is likewise referenced by the journey styles without a token definition, invalidating that padding declaration.
- Files: `src/styles/tokens.css`, `src/components/contact/ContactConsole.css`, `src/components/credentials/CredentialsArchive.css`, `src/components/journey/CaVisualTrajectory.css`
- Impact: Visual inconsistency and silent style regressions when token-based styles are changed.
- Fix approach: Define the missing tokens centrally or replace references with existing spacing/radius tokens; add a stylesheet check for unresolved `var()` references.

**README does not match the checked-in application:**
- Issue: `README.md` documents an earlier component layout and a different set of required image filenames than the current `src/` tree and `src/data/siteData.ts`.
- Files: `README.md`, `src/App.tsx`, `src/components/`, `src/data/siteData.ts`, `public/images/`
- Impact: New contributors can follow obsolete setup and asset guidance despite the current app using different components and image paths.
- Fix approach: Rewrite the setup and file-structure sections against the current app and `IMAGES` paths.

## Known Bugs

**Clipboard UI can report success when copying fails — verified failure-path defect:**
- Symptoms: The copy control switches to “Copied” without waiting for the clipboard write to complete; a rejected write can leave the visitor with false success feedback.
- Files: `src/components/contact/ContactConsole.tsx` (`handleCopyEmail`, lines 10–16)
- Trigger: Clipboard permission denial, unsupported clipboard API, or a context where the browser does not grant clipboard access.
- Workaround: Use the adjacent `mailto:` link or manually select the displayed address.

## Security Considerations

**Deployment security headers are not defined in the repository — deployment risk, not a verified vulnerability:**
- Risk: Security headers such as Content Security Policy and frame/referrer protections depend on the eventual hosting configuration; no hosting or header configuration is present in the checked-in root files.
- Files: `vite.config.ts`, `index.html`
- Current mitigation: The app is a client-side portfolio with no server API or authentication layer detected; external profile links opened in new tabs use `rel="noopener noreferrer"` in `src/components/contact/ContactConsole.tsx`.
- Recommendations: Configure and verify appropriate security headers at the production host; audit the deployed site rather than assuming Vite development settings apply.

**Personal portfolio material is intentionally public:**
- Risk: Contact details and a downloadable CV are included in the public app, so they are available to anyone who can access the deployed site.
- Files: `src/data/siteData.ts`, `src/components/contact/ContactConsole.tsx`, `public/cv/Zohaib-Saleem-CV.pdf`
- Current mitigation: No additional access control is implemented; public visibility is consistent with a portfolio contact section.
- Recommendations: Review the CV and contact content before each deployment and remove details that should not be public.

**Dependency security status is unverified:**
- Risk: The repository has a lockfile but no checked-in dependency audit or CI workflow; no claim of a known vulnerable package is established by this scan.
- Files: `package.json`, `package-lock.json`
- Current mitigation: Dependencies are pinned by the lockfile.
- Recommendations: Run dependency vulnerability checks regularly and add them to CI when CI is introduced.

## Performance Bottlenecks

**Large raster assets, including an eagerly loaded hero image — size risk, not a measured page-speed result:**
- Problem: The six files in `public/images/` are PNGs roughly 1.3–2.1 MB each; the hero portrait is about 2.0 MB and uses `loading="eager"`.
- Files: `public/images/zohaib-portrait.png`, `public/images/zohaib-profile.png`, `public/images/zohaib-full-body.png`, `public/images/zohaib-office.png`, `public/images/Professional ERP Accounting Dashboard Workspace.png`, `public/images/AI-Powered Financial Automation Workspace.png`, `src/components/hero/HeroChamber.tsx`
- Cause: No image optimization or responsive source generation is configured in the checked-in build setup.
- Improvement path: Compress and export suitable assets to modern formats, provide responsive image sources and intrinsic dimensions, and validate with production performance measurements.

## Fragile Areas

**Mobile navigation overlay accessibility:**
- Files: `src/components/layout/HeaderNav.tsx`, `src/components/layout/HeaderNav.css`
- Why fragile: When closed, the overlay is marked `aria-hidden`, but its links and buttons remain in the DOM. CSS opacity and `pointer-events: none` do not remove those controls from keyboard focus order. The open overlay also has no visible focus management, Escape-key handling, or focus restoration.
- Safe modification: Keep closed controls out of tab order (or unmount/inert the overlay); when open, move focus into it, contain and restore focus, and support Escape. Verify using keyboard-only and screen-reader checks.
- Test coverage: No application test files or browser accessibility tests are present.

**Workflow controls advertise tab semantics without a complete tab interaction pattern:**
- Files: `src/components/projects/SystemShowcase.tsx` (workflow list and explainer)
- Why fragile: Workflow buttons use `role="tab"` and `aria-selected`, but there is no associated `tabpanel`/`aria-controls` relationship or arrow-key tab navigation. Assistive technology users may receive incomplete state and keyboard behavior.
- Safe modification: Either implement the complete tab pattern with linked panels and keyboard behavior, or use ordinary buttons with a clearly announced selected-step explanation.
- Test coverage: No application test files are present.

**Reduced-motion handling is incomplete for some Framer Motion effects:**
- Files: `src/components/philosophy/PhilosophySpread.tsx` (`drawConnector`), `src/components/capabilities/CapabilitiesMatrix.tsx` (SVG spine animation), `src/styles/global.css`
- Why fragile: Several components consult `useReducedMotion`, but the philosophy connector and capabilities SVG path animations still define path-length animation independently of that preference. The global CSS media query does not reliably override Framer Motion's runtime animation.
- Safe modification: Apply the reduced-motion preference to every Framer Motion animation, including SVG paths, and verify with the operating-system preference enabled.
- Test coverage: No automated motion-preference coverage is present.

## Scaling Limits

**Current app is a static, single-page portfolio:**
- Current capacity: No runtime database, API, authentication, or server-side processing is detected in `src/` or `vite.config.ts`.
- Limit: No application-level scaling limit is evidenced for its current static content; hosting bandwidth and CDN behavior are external and unmeasured.
- Scaling path: If the product gains user-specific or dynamic data, introduce an appropriate service boundary and measure production hosting and asset delivery before adding infrastructure.

## Dependencies at Risk

**No specific dependency issue verified:**
- Risk: No dependency vulnerability audit was run as part of this read-only mapping; the repository's `package.json` and `package-lock.json` establish the current dependency set but not its security status.
- Impact: Undetected advisories could persist without a recurring audit process.
- Migration plan: Not applicable absent a verified at-risk package; add automated auditing and update dependencies based on actual advisory results.

## Missing Critical Features

**Not detected for the current portfolio scope:**
- Problem: No server-side contact form, authentication, or persistence is present; the contact section instead links to external contact methods and the public CV.
- Blocks: No missing feature is verified against the current static portfolio behavior.
- Files: `src/components/contact/ContactConsole.tsx`, `src/data/siteData.ts`

## Test Coverage Gaps

**No project test suite or test command:**
- What's not tested: Component rendering, interactive navigation/workflow controls, clipboard failure handling, and accessibility behavior have no checked-in test coverage.
- Files: `package.json` (scripts provide `dev`, `build`, and `preview` only); no `src/**/*.test.*` or `src/**/*.spec.*` files detected.
- Risk: Regressions can pass unnoticed; `npm run build` type-checks and bundles but does not verify user interactions or accessibility.
- Priority: Medium

---

*Concerns audit: 2026-10-22*
