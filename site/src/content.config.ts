import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * The content layer.
 *
 * Every section of the site is driven by a directory of files — drop a new
 * file in, and the corresponding section fills itself in. No code changes.
 *
 *   src/content/experience/*.md   → the "version history" work timeline
 *   src/content/projects/*.md     → the portfolio grid
 *   src/content/writing/*.md      → writing / around-the-internet links
 *   src/content/skills/*.json     → the toolchain groups
 *   src/content/metrics/*.json    → the headline career metrics
 */

// ── Experience ────────────────────────────────────────────────────────────
// One file per role. Frontmatter holds the structured fields; the Markdown
// body holds the bullet list. In bullets, use **bold** for emphasis and
// `backticks` for metric deltas (e.g. `97% → 99.99%`) — the CSS styles them.
const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateRange: z.string(),
    location: z.string().optional(),
    // Label shown in the release "pill" — e.g. "current release", "2021".
    versionLabel: z.string(),
    // The single current role is highlighted (mint pill); the rest are archived.
    current: z.boolean().default(false),
    // Higher = more recent. Controls ordering (newest first).
    order: z.number(),
  }),
});

// ── Projects ──────────────────────────────────────────────────────────────
// One file per project. Body is the description.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string().default(''),
      link: z.string().url().optional(),
      // "client" work vs "personal" projects — groups the portfolio page.
      category: z.enum(['client', 'personal']).default('personal'),
      tech: z.array(z.string()).default([]),
      order: z.number().default(0),
    }),
});

// ── Writing / elsewhere ───────────────────────────────────────────────────
const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    // e.g. "GitHub", "LinkedIn", "Medium" — small label / source.
    source: z.string().optional(),
    order: z.number().default(0),
  }),
});

// ── Skills (toolchain groups) ─────────────────────────────────────────────
// One JSON file per group: { "title": "platform", "order": 1, "items": [...] }
const skills = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    items: z.array(z.string()),
  }),
});

// ── Metrics (headline numbers) ────────────────────────────────────────────
// One JSON file per metric: { "value": "33M", "label": "...", "order": 1 }
const metrics = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/metrics' }),
  schema: z.object({
    value: z.string(),
    label: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { experience, projects, writing, skills, metrics };
