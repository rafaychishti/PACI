# PACI Learning Dashboard

The personal Learning Operating System tracking progress through the [PACI AI Specialization](../README.md) — see the parent repository's [PRD](../PACI-Learning-Dashboard-PRD.md), [SDD](../PACI-Learning-Dashboard-SDD.md), and [ADRs](../docs/adr/README.md) for the full product and architecture record. This directory is the application itself.

**Status:** Sprint 1 complete — foundation only, no business logic yet (see [Sprint 1 scope](../docs/adr/README.md) and the SDD's Implementation Roadmap, §17).

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — no real vars needed yet
npm run dev
```

## Scripts

| Script                 | Purpose                                   |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the Vite dev server                 |
| `npm run build`        | Typecheck (`tsc -b`) and production build |
| `npm run preview`      | Serve the production build locally        |
| `npm run lint`         | ESLint, zero warnings allowed             |
| `npm run format`       | Prettier, writes changes                  |
| `npm run format:check` | Prettier, check only (used in CI/hooks)   |
| `npm test`             | Run the test suite once (Vitest)          |
| `npm run test:watch`   | Vitest in watch mode                      |

## Stack (Sprint 1)

React 19 + TypeScript (strict mode) + Vite, Tailwind CSS v4, shadcn/ui-pattern primitives (hand-rolled — see note below), Lucide React, React Router, Zustand (installed, unused until Dashboard Phase 2 per [ADR-0002](../docs/adr/0002-state-management-strategy.md)), Vitest + React Testing Library.

**Note on shadcn/ui:** the interactive `shadcn` CLI didn't complete successfully in the environment this was built in. `components.json` is configured correctly for it, and `src/shared/components/ui/{button,card,sheet}.tsx` follow shadcn's exact conventions by hand — running `npx shadcn@latest add <component>` going forward should work normally and match the existing files' style.

## Folder structure

Feature-based, per [SDD §4](../PACI-Learning-Dashboard-SDD.md#4-frontend-architecture) — see that document for the full rationale. Quick orientation:

- `src/app/` — the application shell (sidebar, top bar, routing) and app-level pages (Settings) that don't belong to any one feature
- `src/features/*/` — one folder per system component (SDD §3); currently placeholder pages only
- `src/shared/` — UI primitives, hooks, utilities, and types used across features
- `src/test/` — test setup (not feature code)

## Environment variables

None are required yet — there's no backend until Dashboard Phase 4 ([ADR-0003](../docs/adr/0003-backend-architecture.md)). See `.env.example` for the pattern that will be extended when one exists.

## Git hooks

Husky + lint-staged run ESLint and Prettier on staged files before each commit. If you're cloning this fresh, `npm install` triggers `prepare` (Husky's install step) automatically.
