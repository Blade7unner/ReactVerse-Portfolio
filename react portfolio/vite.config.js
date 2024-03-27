import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Customize your port if needed
    open: true, // Open the browser automatically when running the dev server
    proxy: {
      // Proxy configuration if needed
    },
  },
});
