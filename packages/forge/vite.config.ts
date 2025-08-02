import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'FactaForge',
      fileName: 'forge',
      formats: ['es']
    },
    rollupOptions: {
      external: ['@facta/fp'],
    },
    sourcemap: true,
    minify: false,
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/*.test.ts'
      ],
      rollupTypes: true
    })
  ],
});
