# ADR-0004: Database Strategy

## Status

Accepted

---

## Context

The original stated preference was "SQLite initially, PostgreSQL later." During PRD review, this was refined further: Dashboard Phases 1–2 use no database at all (flat JSON files), Phase 3 introduces SQLite specifically because that's when the curriculum teaches SQL, and PostgreSQL arrives only at Phase 4 alongside the FastAPI backend, since a networked database isn't useful without a server to expose it through. A database strategy had to be chosen that matches this staged timing rather than assuming a database exists from project day one.

---

## Decision

No database through Dashboard Phase 2 (flat JSON files via the StorageAdapter pattern, SDD §4). **SQLite** introduced at Dashboard Phase 3, running client-side (SQLite-wasm) with no server involved. **PostgreSQL** introduced at Dashboard Phase 4, running server-side behind FastAPI via SQLAlchemy (SDD §5).

---

## Alternatives Considered

### Option 1: PostgreSQL from day one

Pros: avoids a later migration entirely; one database technology for the whole project.

Cons: requires a running server (or hosted instance) before there's any backend to expose it through, and before there's any curriculum-driven reason to have learned it — directly contradicts the "no infrastructure ahead of the skill to build it properly" principle established throughout the PRD and SDD.

### Option 2: A hosted managed database (e.g., Supabase, PlanetScale) from day one

Pros: zero local setup; built-in hosting, backups, and often auth tooling.
Cons: introduces a third-party dependency and often a recurring cost for a single-user tool with no current need for hosted infrastructure; would also mean learning that platform's specific tooling instead of the general SQL and relational-database skills the curriculum itself is teaching.

### Option 3: Stay on SQLite indefinitely, never migrate to PostgreSQL

Pros: simplest possible long-term setup; SQLite is genuinely capable of handling a single user's data volume indefinitely.
Cons: once a backend exists (Phase 4) serving a real API rather than a client-side wasm build, PostgreSQL's stronger concurrent-write handling and the practice of operating a "real" production database become directly relevant to the AI Systems Engineering phase's own curriculum content (PRD §14) — staying on SQLite would forfeit that practice opportunity for no material benefit.

---

## Rationale

The staged approach lets the database technology arrive exactly when there's a concrete reason for it to exist: SQLite when the curriculum teaches SQL, PostgreSQL when a real backend needs a networked, concurrent-write-capable store. This mirrors the PRD's own reasoning (PRD §13) almost exactly and avoids maintaining infrastructure (a running database, network access, backups) for months before there's a genuine requirement driving it.

---

## Consequences

### Positive

- Zero database operations overhead for the first several months of the project (Phases 1–2)
- The SQLite migration (Phase 3) doubles as deliberate practice of the exact skill the curriculum is teaching at that point
- The entity model (SDD §6) is defined once, independent of storage mechanism, so the shape doesn't change across either migration — only the implementation underneath it does

### Negative

- Two migrations instead of zero: JSON → SQLite (Phase 3), then SQLite (client-side) → PostgreSQL (server-side, Phase 4) — each requires an explicit, budgeted data-migration step (SDD §15, §17), not something that happens automatically alongside other work
- Until Phase 4, there is no server-side backup of the data beyond whatever the user exports manually (PRD §7's data-export requirement exists specifically to cover this gap)

---

## Future Considerations

- Revisit the Phase 3→4 migration plan specifically once Phase 3 is underway and the real shape of the accumulated SQLite data is known, rather than planning it purely speculatively today
- Revisit hosted/managed PostgreSQL (rather than self-managed) if operating a database becomes a genuine maintenance burden once Phase 4 is reached
