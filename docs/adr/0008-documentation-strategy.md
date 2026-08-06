# ADR-0008: Documentation Strategy

## Status

Accepted

---

## Context

The project now produces four distinct documentation artifacts — the repository README, the PRD, the SDD, and this ADR collection — each written at a different point in the planning process and aimed at a different question. Without a clear rationale for keeping them separate, they risk drifting into redundant or contradictory copies of the same information, which is a real maintainability cost for a solo-maintained project expected to run for the better part of a year.

---

## Decision

Maintain four distinct, purpose-specific documents rather than one combined document or an informal/undocumented approach: the **README** (orientation and current status), the **PRD** (what to build and why, from a product perspective), the **SDD** (how it's built, architecturally), and the **ADRs** (why specific, individual technical decisions were made, as a permanent historical record).

---

## Alternatives Considered

### Option 1: A single combined document containing everything

Pros: one file to keep updated; no risk of documents drifting out of sync with each other, since there's only one.

Cons: mixes audiences and lifespans that don't match — the README changes with every status update, the PRD is stable once approved, the SDD changes only with architecture shifts, and ADRs are meant to be near-immutable historical records. Combining them means either the stable parts get needlessly re-read every time the status line changes, or the historical record (ADRs) gets edited in place when it shouldn't be — undermining the entire point of keeping a decision record.

### Option 2: README only, with reasoning captured informally in commit messages and code comments

Pros: minimal documentation overhead; lower upfront writing cost.

Cons: reasoning captured only in commit messages and comments is expensive to reconstruct later — exactly the "why did we do it this way" question an ADR exists to answer cheaply. This directly conflicts with the PRD's own maintainability requirement: resuming work after a multi-week gap depends on being able to reload context quickly, which scattered commit-message archaeology doesn't support.

### Option 3: Four separate, purpose-specific documents (chosen)

Pros: each document has a single clear job and a natural update cadence matching that job; a reader (including future-self) can go directly to the document that answers their actual question — "what's the current status" (README), "what are we building and why" (PRD), "how is it architected" (SDD), or "why was this specific technical choice made" (ADRs) — without wading through the other three.

Cons: four documents to keep loosely consistent with each other, requiring occasional cross-referencing (as done throughout the PRD, SDD, and these ADRs) rather than a single source of truth.

---

## Rationale

The four-document system matches documentation lifespan to document type, which is the actual problem being solved. A README's "current status" line should update often; a PRD's approved product decisions should barely change; an SDD's architecture should change only deliberately; and an ADR, once accepted, should essentially never be edited in place — only superseded by a new one (see this collection's own README, `docs/adr/README.md`, for the update-vs-supersede rule). Collapsing these into one document (Option 1) or discarding formal documentation in favor of scattered informal notes (Option 2) both trade away that lifespan-matching for a smaller number of files, at a real cost to future readability.

---

## Consequences

### Positive

- Each document can be updated at its own natural cadence without disturbing the others — the README's status line changes weekly; the ADRs, once accepted, essentially never change
- A future reader (including the project's own author, returning after a gap) can go directly to the document that answers their actual question, rather than searching one large file
- The permanent decision record (ADRs) is protected from being accidentally rewritten when someone is really just trying to update a status line or a feature list

### Negative

- Four documents require deliberate cross-referencing to stay consistent — a decision that changes in the SDD (e.g., swapping a library) needs a corresponding ADR update or new ADR, not just a silent SDD edit
- More total files to be aware of than a single-document approach, though this is mitigated by each document's narrow, well-defined scope making it obvious which one to open

---

## Future Considerations

- Revisit if the four-document system starts producing real inconsistencies in practice (e.g., the SDD and an ADR disagreeing) — the fix is tighter cross-referencing discipline, not necessarily collapsing the documents
- Revisit if a second contributor joins and needs a more formal process (e.g., ADRs requiring review before "Accepted" status) than the current solo-maintainer workflow assumes
