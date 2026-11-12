// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://trackt.tech', // required for sitemap generation
  integrations: [
    sitemap({
      // /trackt and /survey are the paused SaaS pages: still reachable by
      // direct link, but hidden from nav and search for now.
      filter: (page) => !page.includes('/api/') && !/\/(trackt|survey)\/?$/.test(page),
    }),
  ],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
