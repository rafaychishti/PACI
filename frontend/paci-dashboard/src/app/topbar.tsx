import { MobileNav } from '@/app/mobile-nav';
import { ThemeToggle } from '@/shared/components/theme-toggle';
import { APP_NAME } from '@/shared/lib/constants';

/**
 * Top bar. Sprint 1 keeps this deliberately minimal — the command
 * palette trigger and any current-phase/schedule-variance summary
 * (PRD §12, Dashboard Layout) are Sprint 2+ once there's real data to
 * summarize; this is the visual shell they'll land in.
 */
export function TopBar() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background px-4">
      <MobileNav />
      <span className="text-sm font-semibold tracking-tight md:hidden">{APP_NAME}</span>
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
