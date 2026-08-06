# ADR-0001: Technology Stack

## Status

Accepted

---

## Context

The PRD called for a "modern but beginner-friendly stack" capable of supporting a solo, phase-gated build across a 9-phase curriculum — one that starts as a simple static tracker and evolves toward AI-powered features without a rewrite at any stage. The SDD further constrained the choice: no backend exists before Dashboard Phase 4 (SDD §2), and the UI direction is explicitly modeled on Linear, GitHub, Notion, Raycast, and the Vercel Dashboard (PRD §19). The stack needed to satisfy both constraints at once, not just look reasonable in isolation.

---

## Decision

**Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide React, Recharts.
**Backend (introduced at Dashboard Phase 4):** FastAPI.
**Database:** SQLite first (introduced at Dashboard Phase 3, not day one — see ADR-0004), PostgreSQL later.
**Deployment:** Vercel (frontend), Railway or Render (backend, once one exists).

---

## Alternatives Considered

### Option 1: Next.js (full-stack framework) instead of Vite SPA + separate backend

Pros: unified full-stack framework, already familiar from existing SaaS work; built-in routing and API routes.

Cons: brings server-rendering and API-route infrastructure into a project that has no backend at all through Dashboard Phase 3 (SDD §2) — would front-load backend-shaped complexity the architecture is deliberately deferring.

### Option 2: Vue or Svelte instead of React

Pros: smaller runtime; arguably simpler component model for a small app.

Cons: no concrete benefit for a single-user tool; React has the deepest ecosystem support for the specific dependencies this project already needs (shadcn/ui, Recharts, TanStack Query), and switching frameworks would trade a real ecosystem advantage for a marginal runtime-size one.

### Option 3: Material UI or Ant Design instead of Tailwind + shadcn/ui

Pros: faster initial scaffolding via pre-styled components.

Cons: both impose a strong, recognizable visual identity that works against the "clarity over decoration" design direction (PRD §19) — Tailwind plus shadcn/ui's copy-into-the-repo model gives full styling control instead of fighting a component library's opinions.

---

## Rationale

Every piece of this stack was chosen to minimize friction for a solo builder rather than to optimize for a team that doesn't exist yet. React + TypeScript + Vite gives a fast local dev loop, which matters because the tool needs to be used *during* study sessions, not just built once and left alone. Tailwind + shadcn/ui + Lucide React together produce the specific low-clutter, card-based aesthetic the PRD names as inspiration, without adopting a prescriptive component library's visual identity. Recharts is confirmed sufficient through Dashboard Phase 7 per SDD §10 — no heavier visualization library is justified until a specific chart genuinely can't be expressed in it. FastAPI keeps the backend in the same language (Python) the curriculum itself teaches from Phase 4 onward (see ADR-0003). SQLite-then-PostgreSQL matches the curriculum's own SQL-learning timing (see ADR-0004). Vercel and Railway/Render are both low-maintenance, solo-friendly hosts requiring no dedicated ops effort.

---

## Consequences

### Positive

- One language (TypeScript) across the entire pre-backend era, and one language (Python) across backend and curriculum ML/AI work
- shadcn/ui + Tailwind directly support the stated design inspiration without adopting a heavier, opinionated design system
- Recharts and the rest of the frontend dependency set are all mature, well-documented libraries — low risk for a solo maintainer troubleshooting alone

### Negative

- shadcn/ui components are copied into the repository rather than installed as a versioned dependency, so updates must be applied manually rather than via a package bump
- Vite (frontend) and FastAPI (backend) are two separate deployables rather than one full-stack framework, meaning two deployment targets to manage once the backend exists

---

## Future Considerations

- Revisit if the project ever needs server-side rendering or SEO — not a current requirement for a private, single-user tool, but would favor Next.js if it ever became one
- Revisit shadcn/ui if its manual-update model becomes a real maintenance burden as the component count grows
- Revisit backend hosting if self-hosting on existing infrastructure (an already-operated VPS with Docker/Nginx) turns out to be cheaper or simpler to consolidate than adding a third-party host — Railway/Render remain the default unless this is deliberately reconsidered
