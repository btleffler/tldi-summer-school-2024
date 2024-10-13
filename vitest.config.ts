import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
  ],
  test: {
    environment: 'jsdom',
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'out/**',
        'next.config.js',
        'postcss.config.mjs',
        'tailwind.config.ts',
      ],
    }
  },
});
