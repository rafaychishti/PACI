import '@testing-library/jest-dom/vitest';

// Extends Vitest's `expect` with jest-dom matchers (toBeInTheDocument,
// toHaveClass, etc.) for every test file — imported once here via
// vite.config.ts's `test.setupFiles`, not per-test.

// jsdom doesn't implement matchMedia, but ThemeProvider (shared/hooks/
// use-theme.tsx) depends on it for system-theme detection. Mocked here
// once, globally, rather than per-test.
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query: string): MediaQueryList =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}
