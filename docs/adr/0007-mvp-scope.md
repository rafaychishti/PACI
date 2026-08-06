# ADR-0007: MVP Scope

## Status

Accepted

---

## Context

Both the PRD and SDD repeatedly identify features that are plausible, even expected, in a long-term "learning operating system" — but that have no validated requirement in the current single-user, curriculum-tracking scope. Left unexamined, several of these (authentication, multi-user support, AI agents, RAG, vector databases, notifications, cloud synchronization) could each individually seem reasonable to include "for completeness." A deliberate scope decision was needed to prevent that accumulation.

---

## Decision

Version 1 (through the Dashboard Phase 9 / SDD v2.0 capstone) explicitly excludes: **authentication**, **multi-user support**, **AI agents** (before Phase 9), **RAG** (before Phase 9), **vector databases** (before Phase 9), **notifications**, and **cloud synchronization**. Each is either schema-ready but unbuilt (e.g., a `User` table exists — SDD §6 — but no login flow does) or entirely omitted with no placeholder.

---

## Alternatives Considered

### Option 1: Build a full-featured platform from day one, including all of the above

Pros: no feature gaps to explain; looks more like a "real product" immediately.

Cons: the majority of this list solves problems a single user with local, personal data doesn't have — building auth, multi-user isolation, and cloud sync for an audience of one is pure speculative cost with no corresponding benefit, and would directly contradict the "no gold-plating on non-core work" principle established throughout the PRD.

### Option 2: Build scaffolding/placeholders for all of the above (stub routes, unused tables, disabled UI) without full implementation

Pros: signals intent; theoretically eases adding the real feature later.

Cons: placeholder code for features with no validated need still has to be maintained, understood, and kept from rotting — it's a smaller version of Option 1's cost, not the absence of it. SDD §3 explicitly rejects this for the Notification System specifically, for exactly this reason.

### Option 3: Exclude entirely; add only when a validated need exists (chosen)

Pros: zero maintenance cost for unbuilt features; each one can still be added later without redesign, because the underlying schema (SDD §6) was kept generic enough to support it without needing to be reshaped first.

Cons: revisiting any of these later means picking the work back up from a cold start rather than an existing scaffold — an accepted tradeoff given none currently have a validated requirement.

---

## Rationale

Every excluded feature was evaluated against a single test: is there a concrete, current requirement in the approved PRD driving it? None of the seven have one. Authentication and multi-user support have no purpose without a second user, which doesn't exist. AI agents, RAG, and vector databases are explicitly tied to Phase 9's curriculum content (PRD §14) — building them earlier would mean using AI infrastructure ahead of the skill to operate it, the exact failure mode the PRD's Risks section (PRD §15) warns against. Notifications and cloud synchronization have no PRD requirement at all — the application is local-first by design (PRD §7's data-ownership requirement), and a single user checking their own dashboard doesn't need to be notified by it.

---

## Consequences

### Positive

- No implementation or maintenance time spent on speculative infrastructure
- The schema (SDD §6) was deliberately kept generic enough — a `User` table, a `LearningPath` table — that adding any of these later doesn't require a data-model redesign, only new functionality on top of what already exists
- Keeps the security surface area minimal: no auth system means no auth vulnerabilities to maintain against

### Negative

- If a genuine multi-user or cloud-sync need emerges (e.g., wanting to check progress from a second device, or eventually sharing the tool with others), that work starts from zero rather than from a partially-built scaffold
- No notification system means the application depends entirely on the user remembering to open it — acceptable given the PRD's own success metrics (PRD §4) already measure this directly (session capture rate, reflection completion rate) rather than assuming notifications would fix low engagement

---

## Future Considerations

- Revisit authentication and multi-user support only if the generalization discussed in PRD §24 is actually pursued (i.e., a second real curriculum or a second real user, not a hypothetical one)
- Revisit AI agents, RAG, and vector databases exactly at Dashboard Phase 9, as already planned — not before
- Revisit cloud synchronization if working across multiple devices becomes a real, recurring friction point in practice, rather than a theoretical convenience
- Revisit notifications only if the PRD's engagement metrics (session capture rate, reflection completion rate) show a real, sustained gap that a reminder mechanism would plausibly close
