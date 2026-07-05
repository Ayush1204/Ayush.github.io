import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Change this to your GitHub repository name if it differs.
const repoName = 'portfolio-template';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${repoName}/` : '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
