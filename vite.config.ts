import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
// Change this to your GitHub repository name if it differs.
const repoName = 'portfolio-template';
=======
const repoName = 'Ayush.github.io';
>>>>>>> 343a696b6334e8a6a950b907d203bc3d2c9e8b74

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
