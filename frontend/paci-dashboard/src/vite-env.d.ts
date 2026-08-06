/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** See .env.example — placeholder until Phase 4 introduces real config. */
  readonly VITE_ENABLE_DEBUG_LOGGING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
