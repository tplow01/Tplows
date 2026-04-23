export const PROJECTS = [
  {
    slug: 'next-gen',
    index: '01',
    title: 'Next Gen',
    category: 'UX / UI Design',
    year: '2025',
    description: 'An app to fix the recruitment process.',
    href: '/work/next-gen',
    bg: 'linear-gradient(160deg, color-mix(in srgb, var(--c-orange) 18%, var(--surface-dark)) 0%, color-mix(in srgb, var(--c-orange) 28%, var(--surface-dark)) 45%, var(--surface-dark-strong) 100%)',
    image: '/images/Next_Gen_1.jpg',
  },
  {
    slug: 'paywall-fc',
    index: '02',
    title: 'Paywall FC',
    category: 'Product Design',
    year: '2025',
    description: 'A digital platform built around the beautiful game.',
    href: '/work/paywall-fc',
    bg: 'linear-gradient(160deg, color-mix(in srgb, var(--c-orange) 12%, var(--surface-dark)) 0%, color-mix(in srgb, var(--c-orange) 20%, var(--surface-dark)) 45%, var(--surface-dark-strong) 100%)',
    image: '/images/Paywall_1.png',
  },
  {
    slug: 'mindset',
    index: '03',
    title: 'Mindset',
    category: 'Brand & UX',
    year: '2025',
    description: 'An app to help student athletes feel more supported and closer as a team.',
    href: '/work/mindset',
    bg: 'linear-gradient(160deg, color-mix(in srgb, var(--c-orange) 15%, var(--surface-dark)) 0%, color-mix(in srgb, var(--c-orange) 22%, var(--surface-dark)) 45%, var(--surface-dark-strong) 100%)',
    image: '/images/Mindset_1.jpg',
  },
] as const

export type Project = (typeof PROJECTS)[number]
