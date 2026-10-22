---
last_mapped_commit: 26ca7495c2399f81d80625c6e2527abad502f6dc
last_mapped_at: 2026-10-22
---
# External Integrations

**Analysis Date:** 2026-10-22

## APIs & External Services

**Fonts and presentation assets:**
- Google Fonts - `index.html` preconnects to `fonts.googleapis.com` and `fonts.gstatic.com`, then loads Inter, Plus Jakarta Sans, Space Grotesk, and JetBrains Mono from the Google Fonts CSS endpoint. This is a browser-side font resource, not an SDK/API integration; no authentication is used.

**Contact destinations (user-initiated links, not API clients):**
- LinkedIn - outbound profile link stored in `src/data/siteData.ts` and rendered by `src/components/contact/ContactConsole.tsx`; opens externally without an API client or authentication.
- WhatsApp - outbound `wa.me` contact link stored in `src/data/siteData.ts` and rendered by `src/components/contact/ContactConsole.tsx`; opens externally without an API client or authentication.
- Email - the contact component constructs a `mailto:` link from `CONTACT.email` in `src/data/siteData.ts`; it delegates sending to the visitor's configured mail handler and does not submit through a backend.

**Browser APIs:**
- Clipboard API - `navigator.clipboard.writeText` copies the displayed email in `src/components/contact/ContactConsole.tsx`; no third-party service is called.

## Data Storage

**Databases:**
- None detected. Portfolio content is defined in local TypeScript modules, including `src/data/siteData.ts`, `src/data/projects.ts`, `src/data/certifications.ts`, `src/data/professionalSummary.ts`, and `src/data/caJourney.ts`.

**File Storage:**
- Static assets are served from the repository's `public/` directory, including the CV at `public/cv/Zohaib-Saleem-CV.pdf` and images at `public/images/`; no remote file-storage service is configured.

**Caching:**
- No application cache or caching service detected.

## Authentication & Identity

**Auth Provider:**
- None detected. The site presents portfolio/contact information and has no application authentication flow in `src/` or dependencies in `package.json`.

## Monitoring & Observability

**Error Tracking:**
- None detected; no error-tracking SDK is declared in `package.json`.

**Logs:**
- No logging service or application logging integration detected.

## CI/CD & Deployment

**Hosting:**
- Not detected. `package.json` exposes Vite build and preview commands, but no hosting/deployment provider is configured.

**CI Pipeline:**
- None detected in the repository configuration inspected.

## Environment Configuration

**Required env vars:**
- None detected. Source code has no environment-variable references and no `.env*` files were present.

**Secrets location:**
- Not applicable; no integration credentials or secret configuration were detected.

## Webhooks & Callbacks

**Incoming:**
- None. No API server or webhook endpoint is present.

**Outgoing:**
- None at the application/API level. The site contains only browser navigation to Google Fonts and visitor-initiated contact links (see `index.html`, `src/components/contact/ContactConsole.tsx`, and `src/data/siteData.ts`).

---

*Integration audit: 2026-10-22*
