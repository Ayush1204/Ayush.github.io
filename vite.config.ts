import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'Ayush.github.io';

export default defineConfig({
  base: `/${repoName}/`,
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
