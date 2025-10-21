import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/samsung-usb-driver-download-page/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Gemini API key references removed
      },
      resolve: {
        alias: {
          '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), '.'),
        }
      }
    };
});
