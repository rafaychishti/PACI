import { PagePlaceholder } from '@/shared/components/page-placeholder';

/**
 * Route exists (SDD §4 folder structure) but isn't linked from the
 * Sprint 1 sidebar — see NAV_ITEMS in shared/lib/constants.ts. Visible
 * starting Dashboard Phase 2, per the SDD nav table and PRD §19's
 * progressive-disclosure principle.
 */
export function AnalyticsPage() {
  return (
    <PagePlaceholder
      title="Analytics"
      description="Study time by phase/week, velocity trend, and session statistics."
      comingIn="Dashboard Phase 2."
    />
  );
}
