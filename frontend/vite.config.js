// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/readify-archives.github.io/', // 👈 must match your GitHub repo name
  plugins: [react()],
});