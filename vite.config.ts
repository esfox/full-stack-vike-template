import '@kitajs/html/register';
import ssr from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [ssr()],
});
