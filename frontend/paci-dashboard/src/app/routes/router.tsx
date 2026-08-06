import { createBrowserRouter } from 'react-router-dom';

import { AppShell } from '@/app/app-shell';
import { SettingsPage } from '@/app/settings-page';
import { AnalyticsPage } from '@/features/analytics/analytics-page';
import { DashboardPage } from '@/features/dashboard/dashboard-page';
import { ReflectionsPage } from '@/features/knowledge/reflections-page';
import { CurriculumPage } from '@/features/learning/curriculum-page';
import { StudyLogPage } from '@/features/learning/study-log-page';
import { PortfolioPage } from '@/features/portfolio/portfolio-page';
import { ProjectsPage } from '@/features/projects/projects-page';
import { GrowthPage } from '@/features/skills/growth-page';
import { ROUTES } from '@/shared/lib/constants';

/**
 * Single route-config file for Sprint 1's flat, one-level route set —
 * see SDD §4 ("routes/, one per top-level nav item"). Splitting this
 * into one file per route would be premature for nine routes with no
 * nested params yet; revisit that split if/when Curriculum grows a
 * `/curriculum/:phaseId` sub-route or Growth grows its three tabs
 * (both noted as Dashboard Phase 2+ work on their respective pages).
 *
 * Every route here exists as a real path even though only some are
 * linked from the Sprint 1 sidebar — see shared/lib/constants.ts
 * (NAV_ITEMS vs. ROUTES) for which, and why.
 */
export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: ROUTES.dashboard, element: <DashboardPage /> },
      { path: ROUTES.curriculum, element: <CurriculumPage /> },
      { path: ROUTES.studyLog, element: <StudyLogPage /> },
      { path: ROUTES.projects, element: <ProjectsPage /> },
      { path: ROUTES.reflections, element: <ReflectionsPage /> },
      { path: ROUTES.analytics, element: <AnalyticsPage /> },
      { path: ROUTES.growth, element: <GrowthPage /> },
      { path: ROUTES.portfolio, element: <PortfolioPage /> },
      { path: ROUTES.settings, element: <SettingsPage /> },
    ],
  },
]);
