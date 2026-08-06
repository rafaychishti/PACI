# ADR-0003: Backend Architecture

## Status

Accepted

---

## Context

Dashboard Phase 4 introduces server-side computation for the first time (baseline completion forecasting, per PRD §14), which is the first point a backend is genuinely required (SDD §2). By that point, the curriculum's own Machine Learning Backbone phase has already established Python as the working language for ML/AI work. A backend framework had to be chosen that fits an async-friendly, AI-integration-heavy roadmap (Phase 6's assistant, Phase 9's RAG and agent orchestration) without introducing a second language ecosystem to maintain solo.

---

## Decision

**FastAPI**, introduced at Dashboard Phase 4 — not before (see ADR-0007 and SDD §2 for why no backend exists prior to this point).

---

## Alternatives Considered

### Option 1: Flask

Pros: minimal, well-understood, huge community, easy to learn alongside the curriculum.

Cons: no built-in async support or request/response validation — both would need to be bolted on via extensions, which FastAPI provides natively and which matter specifically for the AI-integration workloads planned from Phase 6 onward (concurrent LLM calls, streaming responses).

### Option 2: Django (with Django REST Framework)

Pros: batteries-included (admin panel, ORM, auth system out of the box).
Cons: most of what Django provides out of the box — a full auth system, an admin panel — is explicitly out of scope for a single-user tool through v2 (ADR-0007); adopting it would mean carrying the weight of features this project has deliberately decided not to build.

### Option 3: Express.js or NestJS (Node.js)

Pros: would keep the entire stack (frontend and backend) in one language, TypeScript/JavaScript.

Cons: moves backend work outside the language the curriculum's own ML/AI phases are teaching — Phase 4 onward is explicitly a Python-skills-building period (PRD §10), and a Node backend would mean practicing FastAPI/Python skills nowhere in the actual codebase being built, undercutting the PRD's "the tool's construction is part of the curriculum" premise (PRD §2).

---

## Rationale

FastAPI is the only option that satisfies both real constraints simultaneously: it keeps the backend in the language the curriculum is already teaching from Phase 4 onward, and its native async support and automatic request/response validation (via Pydantic) directly serve the AI-integration-heavy roadmap ahead (Phase 6 assistant, Phase 9 RAG/agent orchestration) without needing extensions. Its automatic OpenAPI documentation generation is a genuine, low-cost benefit for a solo developer returning to the codebase after a gap — the API contract (SDD §7) stays self-documenting rather than needing to be manually kept in sync with a separate spec.

---

## Consequences

### Positive

- One language (Python) across backend implementation and the curriculum's own ML/AI/AI-systems-engineering content
- Native async support is available from day one of the backend's existence, ready for the concurrent/streaming workloads Phase 6+ AI features will need
- Automatic request/response validation (Pydantic) and OpenAPI documentation reduce the manual-maintenance burden for a solo developer

### Negative

- FastAPI provides less "batteries-included" scaffolding than Django — auth, admin tooling, and similar conveniences would need to be added deliberately if ever needed (consistent with ADR-0007's decision not to build them yet)
- Smaller ecosystem of pre-built extensions compared to Flask's long-established plugin ecosystem, though this hasn't proven to be a real constraint for the features planned through v2

---

## Future Considerations

- Revisit if the project ever needs Django's built-in admin panel or auth system at a scale where building them manually in FastAPI becomes a real burden (would require the generalization discussed in PRD §24 to first be pursued)
- Revisit if async workloads (Phase 6+ AI features) reveal a need for background task infrastructure (e.g., Celery) beyond what FastAPI's async support handles directly
