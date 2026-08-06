import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist', 'coverage', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Import sorting is enforced automatically rather than left to
      // convention — see docs/adr/0001 & Sprint 1 acceptance criteria.
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // A stray console.log is easy to leave behind; warn instead of
      // erroring so console.warn/error (used deliberately) stay fine.
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  // Test files run under Vitest's globals, not the browser-only set above.
  {
    files: ['**/*.test.{ts,tsx}', 'src/test/**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  // shadcn/ui primitives (ADR-0001) co-locate a component with its cva
  // variants export by convention, and provider files co-locate a
  // component with its hook — both trip react-refresh's "only export
  // components" rule by design, not by oversight. These files change
  // rarely enough that losing Fast Refresh on an edit is an acceptable
  // tradeoff for keeping the established convention intact.
  {
    files: ['src/shared/components/ui/**/*.tsx', 'src/shared/hooks/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  // Prettier last: disables any ESLint formatting rules that would
  // otherwise conflict with Prettier's own formatting (SDD §13).
  prettierConfig,
);
