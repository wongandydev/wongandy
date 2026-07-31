/**
 * Site-level configuration — the singular, non-repeating content:
 * identity, hero copy, contact details, nav, and the Swift hero animation.
 *
 * Repeating content (jobs, projects, writing, skills, metrics) lives in the
 * file-based collections under src/content/ — see src/content.config.ts.
 */

export const site = {
  name: 'Andy Wong',
  brand: 'wongandy',
  tld: '.com',
  title: 'Andy Wong — Senior iOS Engineer',
  description:
    'Andy Wong is a Senior iOS Engineer in New York City. Currently building digital identity at CLEAR for 33M+ members.',
  url: 'https://wongandy.com',

  email: 'wongandy97@gmail.com',
  location: 'New York, NY',
  role: 'Senior iOS Engineer',
  resume: '/Resume.pdf',

  hero: {
    eyebrow: 'New York, NY · Senior iOS Engineer',
    // {accent} marks the phrase highlighted in the keyword color.
    headline: 'I ship iOS apps that {accent} people rely on.',
    accent: '33 million',
    lede: 'I’m Andy Wong. For the last 7 years I’ve taken iOS products from idea to the App Store — currently leading workstreams on <strong>digital identity at CLEAR</strong>, where my work runs at airport-security scale with a <strong>99.99% crash-free rate</strong>.',
  },

  contact: {
    heading: 'Let’s build something.',
    body: 'Whether it’s a full-time role, a contract project, or a quick question about iOS — my inbox is open.',
    note: '// usually replies within a day',
  },

  socials: {
    github: 'https://github.com/wongandydev',
    linkedin: 'https://www.linkedin.com/in/wongandydev',
    medium: 'https://medium.com/@wongandydev',
  },

  nav: [
    { label: 'experience', href: '#experience' },
    { label: 'work', href: '#work' },
    { label: 'skills', href: '#skills' },
    { label: 'elsewhere', href: '#elsewhere' },
    { label: 'resume', href: '/Resume.pdf' },
  ],
} as const;

/**
 * The typed Swift snippet in the hero code window.
 * Each line is an array of [tokenType, text] pairs.
 * Token types map to the Xcode-dark palette (see global.css .tok-*).
 */
export type Tok = [string, string];
export const heroCode: Tok[][] = [
  [['kw', 'import'], ['pl', ' '], ['type', 'Foundation']],
  [],
  [['kw', 'struct'], ['pl', ' '], ['type', 'AndyWong'], ['pl', ': '], ['type', 'Engineer'], ['pl', ' {']],
  [['pl', '    '], ['kw', 'let'], ['pl', ' '], ['prop', 'role'], ['pl', ' = '], ['str', '"Senior iOS Engineer"']],
  [['pl', '    '], ['kw', 'let'], ['pl', ' '], ['prop', 'location'], ['pl', ' = '], ['str', '"New York, NY"']],
  [['pl', '    '], ['kw', 'let'], ['pl', ' '], ['prop', 'yearsShipping'], ['pl', ' = '], ['num', '7']],
  [],
  [['pl', '    '], ['kw', 'func'], ['pl', ' '], ['fn', 'ship'], ['pl', '() -> '], ['type', 'App'], ['pl', ' {']],
  [['pl', '        '], ['com', '// 33M users · 99.99% crash-free']],
  [['pl', '        '], ['kw', 'return'], ['pl', ' '], ['type', 'App'], ['pl', '(quality: .'], ['prop', 'obsessive'], ['pl', ')']],
  [['pl', '    }']],
  [['pl', '}']],
];
