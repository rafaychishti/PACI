# ADR-0006: AI-First System Design

## Status

Accepted

---

## Context

The product vision (PRD §2) is for the application's capability ceiling to rise exactly as fast as the user's own technical capability does — meaning every AI feature (forecasting, recommendations, an assistant, RAG, an agent) is tied to the curriculum phase that teaches the skill to build it, not implemented ahead of that skill. At the same time, AI integration is a long-term structural concern for the system, not an incidental feature — it needed to be treated as a first-class architectural boundary from the start, even though no AI capability would actually exist for months. This ADR clarifies what "AI-first" means here, since it could otherwise be misread as "AI features ship immediately," which is the opposite of the actual decision.

---

## Decision

AI integration is designed as a first-class architectural concern from the beginning — a single, stable `AIService` boundary exists in the backend architecture from the point the backend itself exists (SDD §5), and every AI-touching feature is required to go through it. What is deliberately deferred is not the *architecture* for AI, but the *implementation* of specific AI features, each introduced only at the curriculum phase that teaches the skill behind it (PRD §14, SDD §12).

---

## Alternatives Considered

### Option 1: Build AI features immediately, using off-the-shelf APIs regardless of curriculum phase

Pros: could ship "impressive" AI capability (forecasting, an assistant) far earlier than Phase 4/6.

Cons: would directly contradict the product's own premise — the tool's construction is itself part of the curriculum (PRD §2) — and would mean shipping AI-powered features built with skills the user hasn't yet learned, which the PRD explicitly treats as a risk to avoid (PRD §15, "feature-tier scope creep").

### Option 2: No AI-specific architecture at all until Phase 9; bolt AI on ad hoc when first needed

Pros: avoids designing for a capability that doesn't exist yet, in the spirit of not over-engineering.

Cons: without a stable service boundary established from the point the backend exists, each AI feature (Phase 4 forecasting, Phase 5 recommendations, Phase 6 assistant, Phase 9 RAG/agent) would likely be implemented with direct, ad hoc calls to whatever LLM SDK or logic is convenient at the time — making it far harder to swap providers, evaluate against baselines, or keep AI logic out of business logic later, exactly the failure mode SDD §15 flags as "AI boundary leakage."

### Option 3: Progressive AI introduction behind a stable service boundary, phased to match the curriculum (chosen)

Pros: gets the architectural benefit of Option 2's discipline (a real, enforced boundary) without the risk of Option 2's ad hoc alternative, while still respecting the phase-gated feature timing that is central to the product vision.

Cons: requires establishing the `AIService` interface before there's a second AI feature to prove it generalizes correctly — some risk that the interface's first real shape (defined against Phase 4's simple forecasting) needs revision once Phase 6/9's more complex needs (retrieval, agent orchestration) arrive.

---

## Rationale

The chosen option resolves an apparent tension: "AI-first" describes the architecture's posture toward AI as a concern (isolated, provider-agnostic, evaluable against baselines) rather than a claim about how early AI features ship. This is consistent with the product's central discipline — never build ahead of the skill to build well — applied at the architecture level instead of the feature level. A stable boundary established early is cheap; a proliferation of unmediated LLM calls is not.

---

## Consequences

### Positive

- Every AI feature, from Phase 4's simple forecasting baseline through Phase 9's RAG/agent orchestration, is implemented against the same interface, making provider swaps and baseline evaluation straightforward at every stage
- Business logic (e.g., `RecommendationService`) never depends on which AI technique currently backs it, so upgrading from a rule-based approach to a model-backed one doesn't require touching calling code
- The discipline of "evaluate against a baseline before trusting a model" (PRD §14) is architecturally easy to enforce because the boundary already separates the baseline implementation from any future model-backed one

### Negative

- The `AIService` interface is designed against only one real use case (Phase 4 forecasting) for a long stretch of the roadmap before a second one (Phase 5 recommendations) arrives to validate it generalizes — some rework risk if the initial interface shape proves too narrow
- Maintaining strict discipline about routing all AI-touching code through this boundary depends on manual review in a solo codebase with no automated enforcement (flagged directly in SDD §15)

---

## Future Considerations

- Revisit the `AIService` interface's shape once Phase 6's retrieval-based assistant is implemented — this is the first feature meaningfully different in kind from Phase 4/5's forecasting and recommendation logic, and is the natural point to confirm the interface still fits
- Revisit if AI boundary leakage (SDD §15) is ever discovered in review — treat it as a signal to add a lightweight enforcement mechanism (e.g., a lint rule restricting direct LLM SDK imports outside the AI service module) rather than relying on manual discipline indefinitely
