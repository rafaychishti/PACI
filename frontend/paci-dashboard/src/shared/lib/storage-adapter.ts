/**
 * The pre-backend data layer (SDD §4, §13). There is no API to build a
 * client for until Dashboard Phase 4 — this interface is what "API
 * client foundation" resolves to in Sprint 1 instead (see the Sprint 1
 * plan's reconciliation notes).
 *
 * Feature code should depend on this interface, never on `localStorage`
 * directly, so swapping this implementation for a SQLite-wasm-backed one
 * at Dashboard Phase 3 (SDD §13) touches this one file, not every
 * feature that reads or writes data.
 *
 * Deliberately generic and empty of domain logic — no entity-specific
 * methods, no seeding, no validation beyond JSON-serializability. That
 * logic belongs in each feature's own code once Sprint 2+ builds it.
 */
export interface StorageAdapter {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
  remove(key: string): Promise<void>;
  /** Lists stored keys, optionally filtered by prefix. */
  list(prefix?: string): Promise<string[]>;
}

const NAMESPACE = 'paci-dashboard:';

/**
 * JSON-serialized, localStorage-backed implementation — the Phase 1–2
 * adapter per SDD §13. Namespaced so this app's keys never collide with
 * anything else sharing the origin.
 */
export class LocalJsonStorageAdapter implements StorageAdapter {
  private namespacedKey(key: string): string {
    return `${NAMESPACE}${key}`;
  }

  async get<T>(key: string): Promise<T | null> {
    const raw = window.localStorage.getItem(this.namespacedKey(key));
    if (raw === null) return null;
    return JSON.parse(raw) as T;
  }

  async set<T>(key: string, value: T): Promise<void> {
    window.localStorage.setItem(this.namespacedKey(key), JSON.stringify(value));
  }

  async remove(key: string): Promise<void> {
    window.localStorage.removeItem(this.namespacedKey(key));
  }

  async list(prefix = ''): Promise<string[]> {
    const fullPrefix = this.namespacedKey(prefix);
    const keys: string[] = [];

    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = window.localStorage.key(i);
      if (key?.startsWith(fullPrefix)) {
        keys.push(key.slice(NAMESPACE.length));
      }
    }

    return keys;
  }
}

/**
 * The application's single storage instance. Feature code imports this
 * rather than constructing its own adapter, so there's one place to
 * swap the implementation when Dashboard Phase 3 arrives.
 */
export const storage: StorageAdapter = new LocalJsonStorageAdapter();
