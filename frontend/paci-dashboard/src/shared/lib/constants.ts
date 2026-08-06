export const APP_NAME = 'PACI Learning Dashboard';

/**
 * Route paths as a single source of truth, so route definitions
 * (app/routes) and navigation links (shared/components/app-sidebar)
 * can't silently drift apart.
 */
export const ROUTES = {
  dashboard: '/',
  curriculum: '/curriculum',
  studyLog: '/study-log',
  projects: '/projects',
  reflections: '/reflections',
  settings: '/settings',
  // Scaffolded per SDD §4, but not linked in the Sprint 1 sidebar — see
  // NAV_ITEMS below. These become visible starting Dashboard Phase 2,
  // per the SDD's nav table and the PRD's progressive-disclosure
  // principle (PRD §19).
  analytics: '/analytics',
  growth: '/growth',
  portfolio: '/portfolio',
} as const;

interface NavItem {
  label: string;
  path: string;
}

/**
 * The Sprint 1 *visible* navigation set. Deliberately narrower than
 * ROUTES above — Analytics, Growth, and Portfolio exist as routes
 * (so their folders/pages are in place) but aren't linked from the
 * sidebar until Dashboard Phase 2, matching the SDD nav table exactly.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: ROUTES.dashboard },
  { label: 'Curriculum', path: ROUTES.curriculum },
  { label: 'Study Log', path: ROUTES.studyLog },
  { label: 'Projects', path: ROUTES.projects },
  { label: 'Reflections', path: ROUTES.reflections },
];
