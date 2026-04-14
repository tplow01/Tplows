export const PROJECTS = [
  {
    slug: 'next-gen',
    index: '01',
    title: 'Next Gen',
    category: 'UX / UI Design',
    year: '2025',
    description: 'An app to fix the recruitment process.',
    href: '/work/next-gen',
    bg: 'linear-gradient(160deg, #1a1208 0%, #2d1a0e 45%, #111010 100%)',
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
    bg: 'linear-gradient(160deg, #080d18 0%, #0f1f35 45%, #060a12 100%)',
    image: null,
  },
  {
    slug: 'mindset',
    index: '03',
    title: 'Mindset',
    category: 'Brand & UX',
    year: '2025',
    description: 'An app to help student athletes feel more supported and closer as a team.',
    href: '/work/mindset',
    bg: 'linear-gradient(160deg, #100f0d 0%, #221f1b 45%, #0d0c0b 100%)',
    image: '/images/Mindset_1.jpg',
  },
] as const

export type Project = (typeof PROJECTS)[number]
