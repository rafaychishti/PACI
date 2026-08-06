import { Moon, Sun } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { useTheme } from '@/shared/hooks/use-theme';

/**
 * Toggles between light and dark. Deliberately a simple two-way toggle
 * rather than a light/dark/system menu — 'system' is still respected as
 * the initial value (see use-theme.tsx), but once a person has an
 * opinion, a single click should be enough to act on it.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
