import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "solo-leveling-level-up", // ← replace with your actual repo name if different
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
