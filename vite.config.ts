import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/rav/', // Base URL for the app
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for source directory
    },
  },
});
