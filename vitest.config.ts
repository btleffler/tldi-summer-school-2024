import { configDefaults, coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
  ],
  test: {
    environment: 'jsdom',
    exclude: [
      ...configDefaults.exclude,
      'src/app/layout.tsx',
    ],
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'out/**',
        'next.config.js',
        'postcss.config.mjs',
        'tailwind.config.ts',
        'src/app/layout.tsx',
      ],
    }
  },
});
