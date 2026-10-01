// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://renzocampisi.github.io',
  base: '/Campisi_Renzo_Portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
