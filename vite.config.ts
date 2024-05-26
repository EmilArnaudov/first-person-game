import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      stores: '/src/stores',
      api: '/src/api',
      hooks: '/src/hooks',
      assets: '/src/assets',
      utils: '/src/utils.ts',
      socket: '/src/socket.ts',
    },
  },
});
