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
    src: '/images/SG_Gallery_CTA.jpg',
    alt: "Survivor's Guilt",
    label: "Survivor's Guilt",
    lightbox: {
      title: "Survivor's Guilt",
      category: 'Projects',
      description: 'A visual project exploring themes of guilt, memory, and redemption.',
    },
  },
  {
    src: '/images/Flux_Gallery_CTA.jpg',
    alt: 'Flux',
    label: 'Flux',
    lightbox: {
      title: 'Flux',
      category: 'Projects',
      description: 'A dynamic design exploration of movement and change.',
    },
  },
  {
    src: null,
    alt: 'Footy Finds',
    label: 'Footy Finds',
    lightbox: {
      title: 'Footy Finds',
      category: 'Projects',
      description: 'Coming soon.',
    },
  },
  {
    src: '/images/ArtU_Social.jpg',
    alt: 'Art U',
    label: 'Art U',
    lightbox: {
      title: 'Art U',
      description: "Social media matchday design for my school's instagram.",
      video: '/images/artu/AAUloop.mp4',
      stripeLabel: 'Art U',
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
    src: '/images/SWF_Gallery_CTA.jpg',
    alt: "Streets Won't Forget",
    label: "Streets Won't Forget",
    lightbox: {
      title: "Streets Won't Forget",
      category: 'Imaging',
      description: 'A photography series documenting street culture and memory.',
    },
  },
  {
    src: '/images/BSC_Social.jpg',
    alt: 'BSC',
    label: 'BSC',
    lightbox: {
      title: 'BSC',
      category: 'Social Media',
      description: 'Social media graphics and brand identity design.',
    },
  },
]
