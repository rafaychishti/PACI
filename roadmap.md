# PACI

**Repository:** PACI
**Owner:** Faisal
**Status:** Active — Phase 1 in progress
**Last updated:** 2026-07-31

**A public engineering journal documenting my transition from full-stack developer to AI Engineer — through the PACI AI Specialization, from Python fundamentals to AI Systems Engineering.**

This is not a course-notes repository. It's a record of what was built, how it was built, and why — structured so anyone can browse it and reconstruct the path, phase by phase, project by project. This README *is* the roadmap: mission, timeline, phase-by-phase plan, and engineering standards all live here, in one place, rather than split across files.

---

## Mission

This repository is the engineering record of my transition from a working full-stack developer into an AI Engineer — built in public, through the PACI AI Specialization curriculum, and driven by shipped work rather than completed lessons.

It is not a collection of course notes. It is a log of decisions, builds, failures, and iterations, structured so that anyone — a future employer, a collaborator, or future-me — can open this repository and reconstruct exactly how the skill was built, phase by phase, project by project.

If a concept doesn't show up as code, a written artifact, or a documented experiment, it doesn't count as learned.

---

## Vision

By the end of this program, `PACI` should read like the technical history of an engineer who can move fluently from raw data to a deployed, production-grade AI system — someone who understands not just *how* to call a model API, but *why* the system underneath it is built the way it is.

The repository itself should double as a portfolio: a reviewer should be able to scan the phase folders and projects and immediately understand the depth and trajectory of the work, without needing me to explain it in person.

---

## Long-Term Objective

Complete the 9-phase PACI AI Specialization — an official 18-month program — on an accelerated ~8.5–9-month timeline, while producing a portfolio-quality project at every phase boundary.

The end state is the ability to independently:

- Design, train, evaluate, and deploy machine learning and deep learning systems
- Build applied AI products end-to-end (data → model → API → interface), not just notebooks
- Reason about system-level tradeoffs (latency, cost, scalability, reliability) in AI infrastructure
- Bring these skills directly into production SaaS work, rather than treating AI as a bolt-on API call

This is a depth project, not a certificate project. Timeline compression is a constraint I'm designing around, not a shortcut through the material.

---

## Accelerated Learning Strategy

The official PACI curriculum runs 18 months. This repository targets roughly **8.5–9 months**, using the following levers rather than skipping content:

1. **Proportional compression, not arbitrary compression.** Every phase's accelerated duration below is derived by applying a uniform ~50% reduction to its *official* month allocation, not by guessing which phases feel shorter. This means Phase 4 (Machine Learning Backbone) stays the longest phase in the accelerated plan too — it's the longest phase officially (4 months) — and Phases 3, 8, and 9 stay the shortest, matching their official single-month allocations. The relative shape of the official curriculum is preserved; only its absolute scale is compressed.
2. **Build-first, read-second.** Every concept is paired with a build task before it's considered understood. Passive consumption (videos, articles, docs) is capped and time-boxed.
3. **Parallel tracking where prerequisites allow.** Lightweight phases (e.g., SQL) can run partially in parallel with adjacent phases instead of strictly sequentially, without violating dependency order.
4. **Project reuse across phases.** Later-phase projects deliberately extend earlier-phase projects (same dataset, same product idea) instead of starting from zero each time — compounding effort instead of resetting it.
5. **Tight feedback loops.** Weekly logs and phase retrospectives (see [Progress Philosophy](#progress-philosophy)) surface where I'm over-investing in polish versus under-investing in fundamentals, so pace can be corrected early.
6. **No gold-plating on non-core work.** Tooling, environment setup, and boilerplate are kept minimal and reused across phases so time is spent on the skill being tested, not on incidental engineering.
7. **Real deadlines, flexible scope.** Phase end-dates are fixed targets; if a phase is at risk of slipping, project *scope* is cut before the *timeline* is extended.

The 8.5–9-month figure is a target, not a promise — actuals and any drift are logged in `/progress`, not hidden or silently absorbed into this file.

---

## Timeline Overview

| Phase | Focus | Core Module(s) | Official Duration | Accelerated Target | Cumulative |
|---|---|---|---|---|---|
| 1 | Programming Foundation | Python Programming Fundamentals | Months 1–3 | 6 weeks | Week 6 |
| 2 | Data Preparation & Numerical Computing | Numerical Computing with Arrays · Data Preparation and Analysis | Months 4–5 | 4 weeks | Week 10 |
| 3 | Structured Data Systems | Structured Data Querying | Month 6 | 2 weeks | Week 12 |
| 4 | Machine Learning Backbone | Machine Learning Foundations | Months 7–10 | 9 weeks | Week 21 |
| 5 | Predictive Modeling Specialization | Regression Modeling and Evaluation · Classification Modeling and Evaluation | Months 11–12 | 4 weeks | Week 25 |
| 6 | Applied AI Implementation | Applied AI Practicum | Months 13–14 | 4 weeks | Week 29 |
| 7 | Deep Learning Systems | Deep Learning Systems | Months 15–16 | 4 weeks | Week 33 |
| 8 | Computer Vision Deployment | Computer Vision Deployment | Month 17 | 2 weeks | Week 35 |
| 9 | AI Systems Engineering | AI Systems Engineering | Month 18 | 2 weeks | Week 37 |

37 weeks ≈ 8.5 months — the buffer between this and the 9-month target absorbs any single phase running long without forcing a full re-plan. Actual dates and variances are tracked in `/progress`, not in this table — this table describes the plan, not the day-to-day.

---

## Phase-by-Phase Roadmap

Each phase below follows the same structure: **Objective**, **Core Skills**, **Portfolio Project(s)**, and **Definition of Done** — the bar a phase must clear before it's marked complete.

### Phase 1 — Programming Foundation
**Official timeline:** Months 1–3
**Objective:** Build fluency in Python as an engineering tool, not a scripting toy — control flow, functions, OOP, and reusable code organization, with debugging and problem decomposition as first-class skills.
**Core skills:** Python syntax and idioms, control flow, functions, object-oriented programming, core data structures, file handling, debugging, problem decomposition, Git workflow and virtual environments (added beyond the official module to build engineering habits from day one).
**Portfolio project:** A small CLI utility or automation tool solving a real personal or work problem, packaged properly (README, requirements, entry point) rather than left as a single script.
**Definition of done:** Code is modular, version-controlled with meaningful commit history, and documented well enough that a stranger could run it from the README alone.

### Phase 2 — Data Preparation & Numerical Computing
**Official timeline:** Months 4–5
**Objective:** Build scientific Python capability across arrays, vectorized computation, and the full data cleaning / exploratory analysis workflow, including time-series basics.
**Core skills:** NumPy arrays and vectorized/matrix-oriented computation, Pandas-based cleaning and transformation, exploratory data analysis, foundational statistics, time-series preparation, visualization.
**Portfolio project:** An end-to-end EDA + cleaning pipeline on a non-trivial real-world dataset, published with a written analysis of data quality issues found and how they were resolved.
**Definition of done:** Pipeline is reusable (not notebook-only spaghetti), and findings are written up as if for a stakeholder, not just left as inline comments.

### Phase 3 — Structured Data Systems
**Official timeline:** Month 6
**Objective:** Be able to model, query, and reason about relational data confidently — filtering, aggregation, joins, and reporting-style queries — since most real AI systems sit on top of structured data stores.
**Core skills:** SQL fundamentals through advanced joins/window functions, filtering and aggregation, schema design, indexing basics, relational workflow literacy.
**Portfolio project:** A schema design + query layer for a realistic dataset (e.g., the same dataset used in Phase 2), including a short write-up of design tradeoffs.
**Definition of done:** Schema is normalized appropriately, queries are optimized (not just correct), and the reasoning behind design choices is documented.

### Phase 4 — Machine Learning Backbone
**Official timeline:** Months 7–10 (the longest phase in the official curriculum)
**Objective:** Understand classical ML deeply enough to know *why* a model works — statistics, probability, exploratory analysis, feature engineering, supervised and unsupervised learning, brought together into a full model-building workflow.
**Core skills:** Statistics and probability, feature engineering, supervised learning, unsupervised learning, validation strategy, model comparison, scikit-learn.
**Portfolio project:** A classical ML project solving a concrete problem end-to-end (problem framing → features → model → evaluation), with model choice justified against at least one alternative.
**Definition of done:** Includes a proper evaluation methodology (train/val/test discipline, appropriate metrics) — not just a single accuracy number.

### Phase 5 — Predictive Modeling Specialization
**Official timeline:** Months 11–12
**Objective:** Deepen applied machine learning through regression and classification — problem framing, model selection, and metric-driven evaluation.
**Core skills:** Regression modeling, classification modeling, feature engineering for predictive tasks, comparative validation, interpreting precision/recall/F1/ROC-AUC.
**Portfolio project:** A predictive modeling project (regression, classification, or both) with a documented experimentation log — multiple models/configs compared, with a clear rationale for the final choice.
**Definition of done:** Experimentation is reproducible (seeds, logged configs) and results are presented with honest discussion of limitations, using the appropriate metric set for the problem type.

### Phase 6 — Applied AI Implementation
**Official timeline:** Months 13–14
**Objective:** Turn theory into implementation — real-world AI projects across forecasting, NLP, recommendation, or vision, executed and documented like production work rather than coursework.
**Core skills:** NLP basics, forecasting, recommender systems, applied project execution, experiment documentation and result presentation — extended personally with modern LLM APIs and prompt engineering, since that directly strengthens the applied-implementation goal.
**Portfolio project:** One applied AI practicum project chosen from NLP, forecasting, or recommendation — ideally extended into a working feature on the existing Next.js/TypeScript/Supabase stack for real integration practice, though standalone is acceptable if deployment isn't a natural fit for the chosen problem.
**Definition of done:** The project is framed and evaluated like a real-world deliverable — problem statement, approach, results, and honest limitations — not just a working notebook.

### Phase 7 — Deep Learning Systems
**Official timeline:** Months 15–16
**Objective:** Understand neural networks from first principles through modern architectures — optimization, CNNs, RNNs, transfer learning, and transformer intuition — and be able to train them, not just fine-tune black boxes.
**Core skills:** Neural network fundamentals and backpropagation, optimization, CNNs, RNNs, transfer learning, PyTorch workflow design, transformer intuition.
**Portfolio project:** A deep learning model trained from a reasonable starting point (not just loading a pretrained checkpoint) on a well-defined task, with training curves and failure analysis documented.
**Definition of done:** Training process is understood and explainable — what was tuned, why, and what the failure modes looked like along the way.

### Phase 8 — Computer Vision Deployment
**Official timeline:** Month 17
**Objective:** Specialize in computer vision — object detection, segmentation, tracking, custom dataset training, and annotation workflow — with deployment-style thinking throughout.
**Core skills:** Dataset preparation and annotation workflow, object detection, segmentation, tracking, real-time detection considerations, model optimization for inference, deployment planning.
**Portfolio project:** A deployed CV application (web-facing, using the existing Docker/Nginx/VPS setup) — e.g., an image classification or detection tool with a real interface.
**Definition of done:** Model is served behind an API, has documented inference performance (latency/accuracy tradeoffs), and is reachable by a live URL, not just runnable locally.

### Phase 9 — AI Systems Engineering
**Official timeline:** Month 18 (capstone)
**Objective:** Bring everything together into a systems-level view — LLMs, retrieval-augmented generation, vector databases, and agent/orchestration workflows, evaluated with an evaluation-first mindset for multi-step AI applications.
**Core skills:** LLM-based system design, RAG pipelines, vector databases, agent and orchestration patterns, structured outputs, evaluation-first thinking — extended personally with production monitoring and observability, since a capstone "systems engineering" phase should include how the system is watched in production, not just how it's built.
**Portfolio project:** A capstone AI system — ideally an extension of an earlier phase's project — deployed as a full production-style service with monitoring, versioning, and a documented architecture.
**Definition of done:** The system could be handed to another engineer with the existing documentation alone, and it includes basic observability (logs/metrics), not just a working demo.

---

## Skills to Master

Grouped by layer rather than by phase, since several phases reinforce the same underlying competency:

- **Language & tooling:** Python (advanced), Git/GitHub workflows, virtual environments, CLI fluency
- **Data:** NumPy, Pandas, SQL, data cleaning and validation, exploratory analysis, time-series preparation
- **Statistics & classical ML:** Statistics, probability, scikit-learn, feature engineering, model evaluation, hyperparameter tuning, ensembling
- **Applied AI:** NLP fundamentals, forecasting, recommender systems, LLM APIs, prompt engineering, retrieval-augmented generation
- **Deep learning:** PyTorch, neural network architectures (CNN/RNN/Transformer), optimization, training diagnostics, transfer learning
- **Computer vision:** Dataset annotation, object detection, segmentation, tracking, inference optimization
- **AI systems & deployment:** Vector databases, agent/orchestration patterns, structured outputs, Docker, API design for model serving, Nginx, VPS deployment, monitoring/observability, MLOps basics
- **Communication:** Technical writing, documenting experiments and tradeoffs, presenting results to a non-technical stakeholder

---

## Portfolio Projects Overview

| Phase | Project Theme | Deployed? |
|---|---|---|
| 1 | CLI automation tool | Local |
| 2 | EDA + data cleaning pipeline | Local |
| 3 | Schema design + query layer | Local |
| 4 | Classical ML end-to-end project | Local |
| 5 | Predictive modeling with experiment log | Local |
| 6 | Applied AI practicum (NLP / forecasting / recommender) | Optional |
| 7 | Deep learning model trained from scratch | Local |
| 8 | Deployed computer vision application | Live |
| 9 | Capstone AI system | Live, monitored |

Where possible, later projects extend earlier ones instead of starting fresh — see [Accelerated Learning Strategy](#accelerated-learning-strategy).

---

## Milestones

- **M1 — Foundation Complete** *(end of Phase 3):* Comfortable across Python, data manipulation, and SQL; three shipped projects in the repository.
- **M2 — Classical ML Competence** *(end of Phase 5):* Able to independently frame a problem as an ML task, build a defensible model, and evaluate it with the right metrics.
- **M3 — First Applied AI Practicum Project** *(end of Phase 6):* A real-world-style AI project shipped — the first point where curriculum content is executed like production work rather than an exercise.
- **M4 — Deep Learning Competence** *(end of Phase 7):* Able to train and debug neural networks from first principles, not just fine-tune pretrained models.
- **M5 — First Deployed Model** *(end of Phase 8):* A trained model served behind a live, user-facing endpoint.
- **M6 — AI Systems Engineer** *(end of Phase 9):* Capstone system live, monitored, and documented to a standard that could be handed off to another engineer.

Each milestone gets a short retrospective entry in `/progress` — what worked, what took longer than planned, and what the next phase's plan adjusts because of it.

---

## Repository Structure

```
PACI/
├── README.md                          # This file — mission, roadmap, structure, and standards
├── phases/                            # One folder per curriculum phase
│   ├── phase-01-programming-foundation/
│   ├── phase-02-data-preparation/
│   ├── phase-03-structured-data/
│   ├── phase-04-machine-learning/
│   ├── phase-05-predictive-modeling/
│   ├── phase-06-applied-ai/
│   ├── phase-07-deep-learning/
│   ├── phase-08-computer-vision/
│   └── phase-09-ai-systems-engineering/
├── projects/                          # Standalone portfolio-grade projects
├── notes/                             # Concept write-ups and reference notes
├── assets/                            # Diagrams, images, and supporting media
└── progress/                          # Weekly logs and phase retrospectives
```

**Folder conventions:**

- **`phases/phase-XX-.../`** — exercises, experiments, and study artifacts tied directly to that phase's curriculum. Each phase folder holds its own short README summarizing what was covered and what it led to.
- **`projects/`** — the portfolio-quality deliverables referenced above, promoted out of a phase folder once they're complete and documented well enough to stand alone.
- **`notes/`** — durable reference material (concepts, cheat-sheets, write-ups) that isn't tied to a single phase or project.
- **`assets/`** — diagrams, architecture sketches, screenshots, and other media referenced from notes, project READMEs, or this file.
- **`progress/`** — the weekly logs and phase retrospectives described in [Progress Philosophy](#progress-philosophy). This is where actual pacing (vs. the plan) is tracked honestly.

---

## How to Navigate This Repository

- Start with this file for the mission, timeline, and phase-by-phase plan.
- Browse **`phases/`** to see the raw learning process for a given phase.
- Browse **`projects/`** for the portfolio-grade output — this is the fastest way to evaluate the work without reading the process behind it.
- Check **`progress/`** for the current pace, what's shipped, and what's next.

---

## Engineering Standards

Standards this repository holds itself to, regardless of phase:

- **Every project has its own README** covering problem, approach, results, and known limitations — written for a reader who wasn't there.
- **Commits are meaningful.** No `"update"` or `"fix stuff"` commit messages; history should be readable as a changelog.
- **Environments are reproducible.** Every project pins its dependencies (requirements file or equivalent) and states how to run it from scratch.
- **Code is modular before it's clever.** Notebooks are for exploration; anything meant to be reused or extended graduates to proper scripts/modules.
- **Results are reported honestly.** No cherry-picked metrics without context — limitations and failure cases are documented alongside successes.
- **Documentation happens during the work, not after.** Notes and write-ups are drafted as the project develops, not reconstructed from memory at the end.

---

## Progress Philosophy

Progress in this repository is measured by what has been **built and shipped**, not by lessons watched or chapters read.

- **Weekly logs** (`/progress`) capture what was built, what broke, and what was learned — kept short and honest rather than polished.
- **Phase retrospectives** close out every phase: what the definition of done actually required versus what was assumed going in, and what that changes for the next phase's estimate.
- **Slipping timelines are logged, not hidden.** If a phase runs long, the reason is recorded and the plan adjusts — this document is a living record, not a contract with myself to feel guilty about.
- **Depth is prioritized over coverage** when the two conflict. A curriculum topic that's rushed to hit a date is a false milestone.

---

## Guiding Principles

1. **Build before you believe you understand.** If it isn't code, it isn't learned yet.
2. **Ship the ugly version before the polished one.** Momentum compounds; perfectionism stalls it.
3. **Depth over breadth, at every layer.** Better to deeply understand fewer things than to skim everything.
4. **Document like someone else will read it** — because eventually, someone will.
5. **Consistency beats intensity.** A sustainable weekly cadence outperforms sporadic bursts, even on an accelerated timeline.
6. **The timeline serves the skill, not the other way around.** ~9 months is the target; the competency is the point.
7. **Every phase must produce something that outlives the phase** — a project, a written artifact, a reusable piece of code.

---

## Status

**Current phase:** 01 — Programming Foundation
**Curriculum pace:** Accelerated (target ~8.5–9 months against an official 18-month program — see [Timeline Overview](#timeline-overview))

*This section is updated as phases are completed — it reflects where the work actually is, not the plan.*
