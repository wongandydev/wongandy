# site

The Astro project behind [wongandy.com](https://wongandy.com). See the
[repo README](../README.md) for the full overview.

## Commands

Run from this directory. Requires Node >= 22.12.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Dev server at `localhost:4321`                   |
| `npm run build`           | Production build to `./dist/`                    |
| `npm run preview`         | Serve the build locally before deploying         |
| `npm run astro -- --help` | Astro CLI help                                   |

## Structure

- `src/config.ts` — identity, hero copy, contact, nav, the typed Swift snippet
- `src/content.config.ts` — collection schemas, documented inline
- `src/content/` — the content itself: one file per role, project, link, skill
  group, and metric
- `src/assets/images/` — project imagery, optimized by Astro at build time
- `public/` — copied verbatim into the build (`CNAME`, `Resume.pdf`, favicons)

Adding content means adding a file to the right `src/content/` directory — the
page picks it up automatically.
