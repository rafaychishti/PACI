import { PagePlaceholder } from '@/shared/components/page-placeholder';

/**
 * Route exists but isn't linked in the Sprint 1 sidebar (see
 * analytics-page.tsx for why). The three tabs described in SDD §9
 * (Skill Tree / Knowledge Graph / Engineering Score) are Dashboard
 * Phase 2 work — not built here yet, per Sprint 1's "no business logic"
 * scope.
 */
export function GrowthPage() {
  return (
    <PagePlaceholder
      title="Growth"
      description="Skill Tree, Knowledge Graph, and Engineering Score — three views over one capability model."
      comingIn="Dashboard Phase 2."
    />
  );
}
