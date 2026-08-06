import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/app/sidebar';
import { TopBar } from '@/app/topbar';

/**
 * The application shell — sidebar + top bar + content area. This is
 * meant to "remain stable throughout the lifetime of the application"
 * per the Sprint 1 brief: individual pages change constantly from here
 * on, this structure shouldn't.
 */
export function AppShell() {
  return (
    <div className="flex h-dvh overflow-hidden bg-background text-foreground">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
