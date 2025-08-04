import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  optimizeDeps: {
    include: ['react-native-web'],
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
