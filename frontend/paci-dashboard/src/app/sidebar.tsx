import { BookOpen, FolderKanban, LayoutDashboard, NotebookPen, PenLine } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { cn } from '@/shared/lib/cn';
import { APP_NAME, NAV_ITEMS } from '@/shared/lib/constants';

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Dashboard: LayoutDashboard,
  Curriculum: BookOpen,
  'Study Log': NotebookPen,
  Projects: FolderKanban,
  Reflections: PenLine,
};

interface NavLinksProps {
  onNavigate?: () => void;
}

/**
 * The nav-link list itself, shared between the persistent desktop
 * sidebar and the mobile drawer so the two can never drift apart.
 */
export function NavLinks({ onNavigate }: NavLinksProps) {
  return (
    <nav className="flex flex-col gap-1 px-3">
      {NAV_ITEMS.map((item) => {
        const Icon = NAV_ICONS[item.label] ?? LayoutDashboard;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
              )
            }
          >
            <Icon className="size-4 shrink-0" />
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}

/** Persistent left sidebar, visible at the `md` breakpoint and up. */
export function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-card md:flex">
      <div className="flex h-14 items-center border-b border-border px-4">
        <span className="text-sm font-semibold tracking-tight">{APP_NAME}</span>
      </div>
      <div className="flex-1 overflow-y-auto py-3">
        <NavLinks />
      </div>
    </aside>
  );
}
