import { PagePlaceholder } from '@/shared/components/page-placeholder';

/** Route exists but isn't linked in the Sprint 1 sidebar (see analytics-page.tsx for why). */
export function PortfolioPage() {
  return (
    <PagePlaceholder
      title="Portfolio"
      description="The chronological Portfolio Timeline — projects, deployments, and engineering milestones."
      comingIn="Dashboard Phase 1 close-out (milestones) and Phase 2 (full timeline view)."
    />
  );
}
