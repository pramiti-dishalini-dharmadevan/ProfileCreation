import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ProfileCreation/',
  plugins: [react()],
  server: {
    open: true
  }
});