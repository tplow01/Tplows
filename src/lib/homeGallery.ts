export interface HomeLightboxContent {
  title: string
  category?: string
  description?: string
  video?: string
  images?: Array<{ src: string; alt: string }>
  meta?: Array<{ label: string; value: string }>
  stripeLabel?: string
}

export interface HomeGalleryItem {
  src: string | null
  alt: string
  label: string
  lightbox: HomeLightboxContent
}

export const HOME_GALLERY: HomeGalleryItem[] = [
  {
    src: '/images/Survivor_guilt/SG2.png',
    alt: "Survivor's Guilt",
    label: "Survivor's Guilt",
    lightbox: {
      title: "Survivor's Guilt",
      stripeLabel: "Survivor's Guilt",
      description: 'A visual project exploring themes of guilt, memory, and redemption.',
      meta: [
        { label: 'Category', value: 'Projects' },
      ],
      images: [
        { src: '/images/Survivor_guilt/SG1.png', alt: "Survivor's Guilt — 1" },
        { src: '/images/Survivor_guilt/SG2.png', alt: "Survivor's Guilt — 2" },
        { src: '/images/Survivor_guilt/Sg3.png', alt: "Survivor's Guilt — 3" },
        { src: '/images/Survivor_guilt/Sg4.png', alt: "Survivor's Guilt — 4" },
        { src: '/images/Survivor_guilt/Sg5.png', alt: "Survivor's Guilt — 5" },
        { src: '/images/Survivor_guilt/SGPposter.png', alt: "Survivor's Guilt — Poster" },
      ],
    },
  },
  {
    src: '/images/Flux_Gallery_CTA.jpg',
    alt: 'Flux',
    label: 'Flux',
    lightbox: {
      title: 'Flux',
      stripeLabel: 'Flux',
      description: 'A dynamic design exploration of movement and change.',
      meta: [
        { label: 'Category', value: 'Projects' },
      ],
    },
  },
  {
    src: null,
    alt: 'Footy Finds',
    label: 'Footy Finds',
    lightbox: {
      title: 'Footy Finds',
      stripeLabel: 'Footy Finds',
      description: 'Coming soon.',
      meta: [
        { label: 'Category', value: 'Projects' },
      ],
    },
  },
  {
    src: '/images/ArtU_Social.jpg',
    alt: 'Art U',
    label: 'Art U',
    lightbox: {
      title: 'Art U',
      stripeLabel: 'Art U',
      description: "Social media matchday design for my school's instagram.",
      video: '/images/artu/AAUloop.mp4',
      images: [
        { src: '/images/artu/art1.png', alt: 'Gameday — vs Hawaii Pacific' },
        { src: '/images/artu/art2.png', alt: 'Gameday — vs Colts' },
        { src: '/images/artu/art3.png', alt: 'Gameday — vs SMU' },
        { src: '/images/artu/art4.png', alt: 'Gameday — vs East Bay' },
        { src: '/images/artu/art5.png', alt: 'Spring Schedule' },
      ],
      meta: [
        { label: 'My position', value: 'Graphic designer' },
        { label: 'My gear', value: 'Photoshop\nIllustrator' },
      ],
    },
  },
  {
    src: '/images/SWF/SWF1.png',
    alt: "Streets Won't Forget",
    label: "Streets Won't Forget",
    lightbox: {
      title: "Streets Won't Forget",
      stripeLabel: "Streets Won't Forget",
      description: 'A photography series documenting street culture and memory.',
      meta: [
        { label: 'Category', value: 'Imaging' },
      ],
      images: [
        { src: '/images/SWF/SWF2.png', alt: "Streets Won't Forget — 2" },
        { src: '/images/SWF/SWF3.png', alt: "Streets Won't Forget — 3" },
        { src: '/images/SWF/SWF4.png', alt: "Streets Won't Forget — 4" },
        { src: '/images/SWF/SWF5.png', alt: "Streets Won't Forget — 5" },
        { src: '/images/SWF/SWF6.png', alt: "Streets Won't Forget — 6" },
      ],
    },
  },
  {
    src: '/images/BSC_Social.jpg',
    alt: 'BSC',
    label: 'BSC',
    lightbox: {
      title: 'BSC',
      stripeLabel: 'BSC',
      description: "Social media matchday graphics for Bryant & Stratton College men's soccer — matchday announcements, lineups, goals, and results.",
      video: '/images/bsc/bscloop.mp4',
      images: [
        { src: '/images/bsc/bsc1.png', alt: 'Matchday — vs FMCC, NY' },
        { src: '/images/bsc/bsc2.png', alt: 'Starting XI — vs Carlow' },
        { src: '/images/bsc/bsc3.png', alt: 'Goal — vs Cardinals' },
        { src: '/images/bsc/bsc4.png', alt: 'Full Time — BSC 6-1 Carlow' },
      ],
      meta: [
        { label: 'My position', value: 'Graphic designer' },
        { label: 'My gear', value: 'Photoshop\nIllustrator' },
      ],
    },
  },
]
