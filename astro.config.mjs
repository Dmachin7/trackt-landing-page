// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://trackt.tech', // required for sitemap generation
  // @astrojs/sitemap writes /sitemap-index.xml (+ /sitemap-0.xml). Many tools
  // and people check /sitemap.xml first, so point that at the real index.
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
    // Case studies briefly lived at /portfolio before moving to /demos.
    '/portfolio': '/demos',
    '/portfolio/[slug]': '/demos/[slug]',
  },
  integrations: [
    sitemap({
      // /trackt and /survey are the paused SaaS pages: still reachable by
      // direct link, but hidden from nav and search for now.
      // /booking/thank-you is the post-booking conversion page — not for search.
      filter: (page) => !page.includes('/api/') && !/\/(trackt|survey|booking\/thank-you)\/?$/.test(page),
    }),
  ],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
