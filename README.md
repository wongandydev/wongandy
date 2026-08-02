# wongandy.com

My personal site — a content-driven portfolio built with [Astro](https://astro.build).

**Live:** [wongandy.com](https://wongandy.com)

## Layout

The whole site lives in [`site/`](site/); the repo root holds only the deploy
workflow and this README.

```text
site/
├── public/            # served as-is (CNAME, Resume.pdf, favicons)
└── src/
    ├── config.ts      # identity, hero copy, contact, nav
    ├── content/       # the file-based content layer (see below)
    ├── components/    # Astro components
    ├── layouts/       # Base.astro
    ├── pages/         # index.astro
    └── styles/        # global.css
```

## Editing content

Every repeating section is driven by a directory of files — drop a new file in
and the section fills itself in, no code changes:

| Directory                     | Drives                      |
| :---------------------------- | :-------------------------- |
| `src/content/experience/*.md` | the work timeline           |
| `src/content/projects/*.md`   | the portfolio grid          |
| `src/content/writing/*.md`    | writing / "elsewhere" links |
| `src/content/skills/*.json`   | the toolchain groups        |
| `src/content/metrics/*.json`  | the headline career metrics |

Schemas — and what each frontmatter field does — are documented inline in
`site/src/content.config.ts`. One-off copy (hero, contact, nav, the animated
Swift snippet) lives in `site/src/config.ts`.

To swap the résumé, replace `site/public/Resume.pdf`.

## Running locally

Requires Node >= 22.12.

```sh
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to site/dist/
npm run preview  # serve the build
```

## Deploying

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds `site/` and publishes it to GitHub Pages. There is no `gh-pages`
branch — Pages uses GitHub Actions as its source. The custom domain comes from
`site/public/CNAME`.
