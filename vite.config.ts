import { defineConfig } from 'vitest/config';

// Root vite config for development and testing
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
});