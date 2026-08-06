import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges conditional class names (clsx) and then resolves conflicting
 * Tailwind utility classes (tailwind-merge), so later classes correctly
 * override earlier ones instead of both being applied.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
