import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/readify-archives.github.io/',
  plugins: [react()],
});