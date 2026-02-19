import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://kiuchimitsuru.com',
  integrations: [
    tailwind(),
    mdx(),
  ],
  output: 'static',
  adapter: cloudflare(),
});
