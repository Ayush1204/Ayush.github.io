import { copyFileSync, cpSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');

if (!statSync(docsDir).isDirectory()) {
  throw new Error('docs directory not found. Run the Vite build first.');
}

for (const entry of readdirSync(docsDir, { withFileTypes: true })) {
  const srcPath = path.join(docsDir, entry.name);
  const destPath = path.join(rootDir, entry.name);

  if (entry.isDirectory()) {
    mkdirSync(destPath, { recursive: true });
    cpSync(srcPath, destPath, { recursive: true });
  } else {
    copyFileSync(srcPath, destPath);
  }
}
