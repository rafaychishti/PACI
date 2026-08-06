import * as React from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'paci-theme';

interface ThemeContextValue {
  /** The user's stored preference — may be 'system'. */
  theme: Theme;
  /** The actually-applied theme, with 'system' already resolved. */
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'system';
}

/**
 * The one deliberately-global piece of client state in Sprint 1 (ADR-0002)
 * — everything else waits for Zustand at Dashboard Phase 2. Persists the
 * user's preference, resolves 'system' against the OS setting, and keeps
 * the <html> `.dark` class in sync so Tailwind's `dark:` variant works
 * everywhere without prop-drilling a theme value through the tree.
 */
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>(readStoredTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>(() =>
    theme === 'system' ? getSystemTheme() : theme,
  );

  const applyTheme = React.useCallback((next: ResolvedTheme) => {
    document.documentElement.classList.toggle('dark', next === 'dark');
    setResolvedTheme(next);
  }, []);

  const setTheme = React.useCallback(
    (next: Theme) => {
      setThemeState(next);
      if (next === 'system') {
        window.localStorage.removeItem(STORAGE_KEY);
        applyTheme(getSystemTheme());
      } else {
        window.localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      }
    },
    [applyTheme],
  );

  // Keep in sync with OS-level theme changes while 'system' is active.
  React.useEffect(() => {
    if (theme !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => applyTheme(getSystemTheme());

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [theme, applyTheme]);

  const value = React.useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
export type { ResolvedTheme, Theme };
