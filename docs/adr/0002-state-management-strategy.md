# ADR-0002: State Management Strategy

## Status

Accepted

---

## Context

Starting at Dashboard Phase 2, several independent UI surfaces — the command palette, the streak widget, the velocity chart, and the Growth view (Skill Tree, Knowledge Graph, Engineering Score) — need to read and react to overlapping slices of application state. Dashboard Phase 1's needs are simple enough that this problem doesn't yet exist. A state management approach had to be chosen that fits the app's actual scale — a single user, no complex async orchestration, no multi-developer coordination — rather than defaulting to whatever is most common in larger applications.

---

## Decision

**Zustand**, introduced starting Dashboard Phase 2 (deliberately not Phase 1 — see Consequences). Server state, once a backend exists at Phase 4, is handled separately via TanStack Query rather than folded into the Zustand store.

---

## Alternatives Considered

### Option 1: Zustand (chosen)

Pros: minimal boilerplate; selector-based subscriptions mean a component only re-renders when the specific slice it reads changes; no provider-wrapping ceremony; small enough for one person to hold the entire store's shape in their head.

Cons: less prescriptive than Redux Toolkit about patterns, which can lead to inconsistency if conventions aren't self-enforced in a solo codebase with no second reviewer.

### Option 2: Redux Toolkit

Pros: strong conventions, mature dev tooling (time-travel debugging, extensive middleware ecosystem), well-suited to large multi-developer teams coordinating on one store.

Cons: the problems its tooling solves — coordinating many contributors, complex async orchestration, time-travel debugging for hard-to-reproduce bugs — don't exist in a solo, single-user application; the boilerplate cost isn't justified by the problem size.

### Option 3: React Context (built-in, no library)

Pros: no added dependency; sufficient for the one or two genuinely global values needed in Dashboard Phase 1 (current phase, theme).

Cons: every consumer of a Context re-renders on any change to the provided value — once the command palette, streak widget, and Growth view all subscribe to overlapping state (Phase 2 onward), this becomes a real performance and readability problem, since there's no way to subscribe to just a slice.

---

## Rationale

Zustand directly addresses the problem that motivated this decision — multiple independent widgets needing overlapping state — without importing complexity the project doesn't need. Its selector model solves Context's broad-re-render problem; its minimal API surface avoids Redux Toolkit's boilerplate, which exists to serve team-coordination and debugging needs this single-user project doesn't have. Deferring its introduction to Dashboard Phase 2 (rather than adding it on day one) matches the SDD's general principle (SDD §1) of not introducing an abstraction before the problem it solves actually exists — Phase 1's state needs are met adequately by component state and one narrow Context value.

---

## Consequences

### Positive

- Minimal boilerplate keeps the codebase approachable after multi-week gaps between working sessions, directly serving the PRD's maintainability requirement
- Selector-based subscriptions avoid unnecessary re-renders as the Growth view and other Phase 2+ features are added
- Clean separation between client state (Zustand) and server state (TanStack Query, once a backend exists) avoids the ad-hoc caching bugs that result from mixing the two concerns in one store

### Negative

- Zustand is less opinionated than Redux Toolkit, so conventions (store slicing, naming) must be self-enforced without the guardrails a more prescriptive library provides
- If a second developer ever joins the project, Redux Toolkit's stronger conventions might have eased onboarding — a cost accepted given this is currently a solo project

---

## Future Considerations

- Revisit if the project ever needs time-travel debugging or complex undo/redo functionality that Zustand doesn't provide out of the box
- Revisit if a second contributor joins and prefers Redux Toolkit's more prescriptive structure for team coordination
- Revisit if the Zustand store's slice count grows large enough that self-enforced conventions start breaking down without tooling support
