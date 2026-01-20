import type { Alpine as AlpineType } from 'alpinejs';

declare global {
  interface Window {
    Alpine: AlpineType;
  }
}

declare module 'alpinejs' {
  interface Stores {
    theme: {
      isDark: boolean;
      init(): void;
      toggle(): void;
    };
  }
}

export {};
