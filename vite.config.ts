import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'portfolio-template';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${repoName}/` : '/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
