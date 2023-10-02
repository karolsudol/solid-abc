import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://portal-dwh-service-staging-xs3c3zjjbq-ue.a.run.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1')
      }
    }
  },

  build: {
    target: 'esnext',
  },
});
