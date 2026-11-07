import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const SOURCE_PATH = './src';
const CURRENT_MODULE_URL = import.meta.url;
const RESOLVED_SOURCE_URL = new URL(SOURCE_PATH, CURRENT_MODULE_URL);
const SOURCE = fileURLToPath(RESOLVED_SOURCE_URL);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': SOURCE,
    },
  },
});
