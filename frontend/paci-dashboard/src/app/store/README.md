# app/store

Zustand is installed as a dependency (per the Sprint 1 approval note) and
this folder exists as its home, but **no stores are defined here yet.**

Per [ADR-0002](../../../docs/adr/0002-state-management-strategy.md), Zustand
is introduced starting **Dashboard Phase 2** — Phase 1's state needs are met
by local component state and the one justified Context (`useTheme`, in
`shared/hooks/use-theme.tsx`). Adding stores here before Phase 2 needs them
would be exactly the kind of premature abstraction ADR-0002 and the SDD
argue against.

When Phase 2 arrives, the first store goes here, e.g.:

```
app/store/
├── use-learning-store.ts
└── ...
```

Until then, this file is the only thing in the folder.
