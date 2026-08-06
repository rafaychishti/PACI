# Architecture Decision Records

This folder is the permanent record of *why* the PACI Learning Dashboard's architecture looks the way it does. Where the [PRD](../../PACI-Learning-Dashboard-PRD.md) documents *what* to build and the [SDD](../../PACI-Learning-Dashboard-SDD.md) documents *how* it's architected, each ADR documents *why one specific technical decision* was made — captured at the time it was made, so the reasoning doesn't have to be reconstructed later from commit messages or memory.

## Why this exists

A solo project spanning roughly nine months will have long gaps between working sessions on any given part of the system. The README's status line and the PRD/SDD's stable content answer "what is this and how does it work," but neither is built to answer "why did I choose Zustand over Redux" six months after the fact, without re-deriving the reasoning from scratch. That's what this folder is for.

## Numbering convention

- ADRs are numbered sequentially with four-digit, zero-padded numbers: `0001`, `0002`, `0003`, …
- Numbers are **never reused**, even if an ADR is later superseded — the sequence is a timeline, not a slot system
- Filenames follow `NNNN-kebab-case-title.md`, matching the ADR's title
- The next new ADR is always the current highest number plus one — check this folder's contents before assigning a number, don't assume based on this README alone

## Status lifecycle

Every ADR has one of these statuses in its `## Status` section:

- **Proposed** — under consideration, not yet acted on (none of the current ADRs use this status; all eight below were written to document decisions already approved in the PRD/SDD, so they start at Accepted)
- **Accepted** — the decision is active and in effect
- **Superseded by ADR-NNNN** — a later ADR replaced this decision; the original stays in place, unedited, with this status and a link to the one that replaced it
- **Deprecated** — the decision is no longer in effect and has not been replaced by a new one (rare — most changes are supersessions, not outright removals)

## When to update an existing ADR vs. create a new one

**Update the existing ADR in place** when:
- Fixing an error, typo, or unclear wording
- Adding detail to the `Future Considerations` section as new triggers are identified
- Elaborating the `Rationale` without changing the actual decision

**Create a new ADR** (and mark the old one "Superseded by ADR-NNNN") when:
- The actual decision changes — e.g., a future switch from Zustand to something else would be a new ADR, not an edit to ADR-0002
- A significant new alternative becomes viable that wasn't available or considered at the time (e.g., a major new framework release)
- The context has materially changed — e.g., if the single-user scope in ADR-0007 is ever revisited because a second real user or curriculum appears (see PRD §24), that's new ADRs for authentication and multi-user support, not edits to ADR-0007

The rule of thumb: **the `Decision` and `Alternatives Considered` sections of an accepted ADR are historical record and should not be rewritten.** If the decision itself would need to change, that's a new ADR by definition — editing history defeats the purpose of keeping it.

## Current ADRs

| ADR | Title | Summary |
|---|---|---|
| [0001](./0001-technology-stack.md) | Technology Stack | React/TS/Vite/Tailwind/shadcn frontend, FastAPI backend, SQLite→PostgreSQL, Vercel/Railway deployment |
| [0002](./0002-state-management-strategy.md) | State Management Strategy | Zustand, introduced at Dashboard Phase 2, over Redux Toolkit and plain Context |
| [0003](./0003-backend-architecture.md) | Backend Architecture | FastAPI over Flask, Django, Express.js, and NestJS |
| [0004](./0004-database-strategy.md) | Database Strategy | Staged database introduction: none through Phase 2, SQLite at Phase 3, PostgreSQL at Phase 4 |
| [0005](./0005-project-architecture.md) | Project Architecture | Feature-based folder organization over layer-based or domain-driven alternatives |
| [0006](./0006-ai-first-system-design.md) | AI-First System Design | A stable AI service boundary exists early; specific AI features are phased to match curriculum skill |
| [0007](./0007-mvp-scope.md) | MVP Scope | Authentication, multi-user, AI agents, RAG, vector databases, notifications, and cloud sync excluded from v1–v2 |
| [0008](./0008-documentation-strategy.md) | Documentation Strategy | Why README, PRD, SDD, and ADRs are kept as four separate, purpose-specific documents |

## Template

All ADRs in this folder follow the same structure: Status, Context, Decision, Alternatives Considered (with pros/cons per option), Rationale, Consequences (Positive/Negative), and Future Considerations. Use the existing ADRs as the template for any new one, rather than inventing a new structure — consistency here is what makes the collection quick to scan later.
