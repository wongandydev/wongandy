// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
// output: 'static' is the default — emits a fully static site to dist/,
// deployable to GitHub Pages (custom domain) or Vercel with no adapter.
export default defineConfig({
  site: 'https://wongandy.com',
  integrations: [mdx()],
});