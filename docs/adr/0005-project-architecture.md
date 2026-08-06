# ADR-0005: Project Architecture

## Status

Accepted

---

## Context

The application is organized around a fixed set of system components (Dashboard, Learning Engine, Skill Engine, Projects, Portfolio & Milestones, Knowledge Base, Analytics Engine, Career Module, AI Services — SDD §3). A folder-organization strategy had to be chosen for both frontend and backend that supports a solo developer resuming work after gaps of days or weeks, without assuming a team large enough to justify heavier structural conventions.

---

## Decision

**Feature-based organization**, mirrored across frontend and backend: one folder per system component (e.g., `features/learning/`, `features/skills/`, `features/projects/`), each self-contained with its own components/hooks/types (frontend) or routers/services/repositories (backend) — rather than organizing by technical layer (all components together, all hooks together, all services together).

---

## Alternatives Considered

### Option 1: Feature-based architecture (chosen)

Pros: everything related to one system component lives in one place; a feature can be picked back up after a multi-week gap without needing to remember how its logic is scattered across several top-level folders; natural unit of work that maps directly to the PRD's own feature breakdown (PRD §10).

Cons: some duplication of similar-looking utilities across features (e.g., a date formatter might get reimplemented per feature before being noticed and extracted to `shared/`) unless deliberately watched for.

### Option 2: Layer-based (traditional) folder structure

Pros: familiar, conventional structure (`components/`, `hooks/`, `services/`, `types/` at the top level); easy to explain to someone new to the codebase in the abstract.

Cons: understanding or modifying one feature (say, the Skill Engine) requires navigating and mentally reassembling code spread across four or five different top-level folders — exactly the kind of re-onboarding effort the PRD's maintainability requirement (PRD §7) is trying to avoid after a gap in active development.

### Option 3: Domain-driven design / hexagonal architecture

Pros: strong separation between domain logic and infrastructure; scales well for large, long-lived systems with complex business rules and multiple developers.

Cons: the ceremony (explicit ports/adapters, domain/application/infrastructure layering) is disproportionate to a single-user application's actual complexity — this is a clear instance of the over-engineering the SDD explicitly argues against throughout (SDD §1, §15).

---

## Rationale

Feature-based organization is the structural expression of a principle already established elsewhere in the SDD: each system component should be resumable independently. It maps directly onto the PRD's feature breakdown, so there's no translation step between "what feature am I working on" and "what folder do I open." The layer-based alternative optimizes for a kind of consistency (all hooks in one place) that matters more to teams onboarding new members than to a solo developer who already knows the codebase but needs to reload context quickly after time away.

---

## Consequences

### Positive

- A feature's full implementation is discoverable in one folder, directly supporting the PRD's maintainability non-functional requirement
- Frontend and backend folder structures mirror each other by feature name, so moving between "what does the UI do" and "what does the API do" for one feature doesn't require learning two different organizational schemes
- New features (e.g., the Career Module, added at v2.1+) can be added as a new folder without restructuring anything that already exists

### Negative

- Shared utilities can be duplicated across features before being noticed and extracted into `shared/` — requires occasional deliberate cleanup rather than being structurally prevented
- Cross-feature logic (e.g., the Portfolio Timeline aggregating events from Projects, Milestones, and Skills — SDD §22) doesn't map cleanly to a single feature folder and has to live somewhere slightly less obvious (its own `portfolio/` feature that reads from others)

---

## Future Considerations

- Revisit if a second developer joins and shared-utility duplication becomes a recurring, costly problem rather than an occasional cleanup task
- Revisit if the application's domain logic grows complex enough that Option 3's stronger separation of concerns starts to pay for its ceremony — not expected within the scope of the approved PRD/SDD
