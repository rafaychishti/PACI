import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/App';

describe('App', () => {
  it('renders successfully without crashing', () => {
    render(<App />);

    // The Dashboard route is the default ('/') — its placeholder heading
    // is a stable, always-present element to assert against. This is a
    // smoke test (does the app render at all), not a feature test —
    // deliberately not asserting on anything that will change once
    // Sprint 2+ replaces this placeholder with real content.
    expect(screen.getByRole('heading', { name: 'Dashboard' })).toBeInTheDocument();
  });

  it('renders the sidebar navigation', () => {
    render(<App />);

    expect(screen.getAllByText('PACI Learning Dashboard').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /curriculum/i })).toBeInTheDocument();
  });
});
