import { safeFetch } from '@/lib/sanityFetch'
import { galleryItemBySlugQuery } from '@/lib/queries'
import GalleryItemPage from '@/components/GalleryItemPage'

export default async function ImagingItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await safeFetch(galleryItemBySlugQuery, { slug })
  return <GalleryItemPage data={data as Parameters<typeof GalleryItemPage>[0]['data']} backHref="/gallery/imaging" backLabel="Imaging Gallery" />
}
