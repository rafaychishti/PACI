/**
 * Entity type definitions mirroring SDD §6 (Database Design). These are
 * the stable data *shapes* referenced throughout the SDD and PRD — the
 * storage mechanism underneath them changes across phases (JSON ->
 * SQLite -> PostgreSQL, SDD §13), but these types shouldn't need to.
 *
 * Sprint 1 scope: types only. No data, no persistence logic, no business
 * logic — see shared/lib/storage-adapter.ts for the (also-empty-of-data)
 * Phase 1 storage layer these types describe.
 */

export type MasteryStage = 'introduced' | 'practiced' | 'applied' | 'mastered';

export type PhaseStatus = 'not_started' | 'in_progress' | 'complete';

export type ProjectStatus = 'planned' | 'in_progress' | 'shipped';

export type StudySessionType = 'study' | 'build' | 'review';

export interface LearningPath {
  id: string;
  userId: string;
  name: string;
  officialDurationMonths: number;
  acceleratedTargetWeeks: number;
}

export interface Phase {
  id: string;
  learningPathId: string;
  name: string;
  order: number;
  officialMonths: string;
  acceleratedWeeks: number;
  status: PhaseStatus;
}

export interface Module {
  id: string;
  phaseId: string;
  name: string;
  status: PhaseStatus;
  completedAt: string | null;
}

export interface Competency {
  id: string;
  moduleId: string;
  skillId: string;
  description: string;
  masteryStage: MasteryStage;
  evidenceLink: string | null;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  /** IDs of skills this one depends on — the Knowledge Graph's edges (PRD §21.4). */
  dependsOn: string[];
}

export interface StudySession {
  id: string;
  phaseId: string;
  moduleId: string;
  date: string;
  durationMinutes: number;
  type: StudySessionType;
  notes: string;
}

export interface Project {
  id: string;
  phaseId: string;
  title: string;
  status: ProjectStatus;
  deployed: boolean;
  deployedUrl: string | null;
  repoUrl: string | null;
}

export interface Reflection {
  id: string;
  weekStartDate: string;
  whatShipped: string;
  planVsReality: string;
  nextChange: string;
  isPublic: boolean;
}

export interface KnowledgeNote {
  id: string;
  title: string;
  body: string;
  tags: string[];
  createdAt: string;
}

export interface Milestone {
  id: string;
  type: string;
  sourceEntityType: 'project' | 'skill';
  sourceEntityId: string;
  detectedAt: string;
}
