import { safeFetch } from '@/lib/sanityFetch'
import { galleryItemsQuery } from '@/lib/queries'
import GalleryGrid from '@/components/GalleryGrid'

const imagingSubs = [
  { label: "Top 5 streets won't forget", href: '/gallery/imaging/top-5-streets' },
  { label: 'Art U social media', href: '/gallery/imaging/art-u-social-media' },
  { label: 'BSC social media', href: '/gallery/imaging/bsc-social-media' },
]

export default async function ImagingGalleryPage() {
  const items = await safeFetch<Parameters<typeof GalleryGrid>[0]['items']>(galleryItemsQuery, { type: 'imaging' })
  return (
    <GalleryGrid
      items={items ?? []}
      type="imaging"
      title="Imaging"
      subTitle="Print · Motion · Illustration"
      subs={imagingSubs}
    />
  )
}
