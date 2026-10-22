---
last_mapped_commit: 26ca7495c2399f81d80625c6e2527abad502f6dc
last_mapped_at: 2026-10-22
---
# Testing Patterns

**Analysis Date:** 2026-10-22

## Test Framework

**Runner:**
- No project test runner is configured or declared in `package.json`.
- Config: Not detected; no Jest, Vitest, Playwright, or Cypress configuration exists at the repository root.

**Assertion Library:**
- Not detected. No project test framework or assertion package is configured.

**Run Commands:**

```bash
npm run build              # TypeScript check followed by a Vite production build
npm run dev                # Start Vite development server; not a test runner
npm run preview            # Serve the production build locally for manual validation
```

## Test File Organization

**Location:**
- No application test files are present under `src/`. A test-file search including dependencies found only a vendored dependency test under `node_modules/gensync/test/index.test.js`; it is not a project test.

**Naming:**
- No repository test naming convention is established. If tests are introduced, keep project tests outside `node_modules/` and use a consistent `*.test.ts` / `*.test.tsx` suffix with the runner's configuration.

**Structure:**

```text
src/
  App.tsx
  components/
  data/
  hooks/
  styles/
```

- Existing source layout contains implementation only; no `__tests__/`, fixtures, or test utilities directories were detected.

## Test Structure

**Suite Organization:**

```typescript
// No in-repository test suites or examples are present.
```

**Patterns:**
- Setup pattern: Not detected.
- Teardown pattern: Not detected.
- Assertion pattern: Not detected.

## Mocking

**Framework:** Not detected; the repository has no configured test runner or mocking library.

**Patterns:**

```typescript
// No project mocking examples are present.
```

**What to Mock:**
- No repository guidance or examples detected.

**What NOT to Mock:**
- No repository guidance or examples detected.

## Fixtures and Factories

**Test Data:**

```typescript
// No test fixtures or test-data factories are present.
```

**Location:**
- Not detected. Production-facing static content is organized under `src/data/`, including `src/data/projects.ts` and `src/data/siteData.ts`; those files are application data, not test fixtures.

## Coverage

**Requirements:** None enforced. No coverage tool or threshold is configured.

**View Coverage:**

```bash

# No coverage command is configured in package.json.

```

## Test Types

**Unit Tests:**
- None detected. In particular, the custom scroll hook in `src/hooks/useNavScroll.ts` has no unit test.

**Integration Tests:**
- None detected.

**E2E Tests:**
- No E2E framework or browser test suite detected.

## Common Patterns

**Async Testing:**

```typescript
// No async test pattern is established in this repository.
```

**Error Testing:**

```typescript
// No error assertion pattern is established in this repository.
```

## Build Validation

- `npm run build` runs `tsc && vite build`; TypeScript compilation must pass before Vite creates the production bundle.
- Validation on 2026-10-22 completed successfully: TypeScript checking passed and Vite 5.4.21 transformed 412 modules and generated the production assets under `dist/`.
- The build validates static typing and bundling, but it does not exercise browser interactions or replace automated tests.
- `npm run dev` and `npm run preview` are available for manual browser checks; neither is an automated test command.

---

*Testing analysis: 2026-10-22*
