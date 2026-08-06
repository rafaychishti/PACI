import { PagePlaceholder } from '@/shared/components/page-placeholder';

/**
 * Settings is explicitly "app-level, not a feature" per the SDD's
 * navigation table (§9) — it lives here in app/, not in features/,
 * for that reason.
 */
export function SettingsPage() {
  return (
    <PagePlaceholder
      title="Settings"
      description="Theme, data export, and application preferences."
      comingIn="Theme switching is already live — see the toggle in the top bar. Data export lands in Sprint 4."
    />
  );
}
