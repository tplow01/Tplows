import { safeFetch } from '@/lib/sanityFetch'
import { galleryItemsQuery } from '@/lib/queries'
import GalleryGrid from '@/components/GalleryGrid'

const projectsSubs = [
  { label: 'Survivors Guilt', href: '/gallery/projects/survivors-guilt' },
  { label: 'Footy Finds', href: '/gallery/projects/footy-finds' },
  { label: 'Flux', href: '/gallery/projects/flux' },
]

export default async function ProjectsGalleryPage() {
  const items = await safeFetch<Parameters<typeof GalleryGrid>[0]['items']>(galleryItemsQuery, { type: 'projects' })
  return (
    <GalleryGrid
      items={items ?? []}
      type="projects"
      title="Projects"
      subTitle="UX/UI · Campaigns"
      subs={projectsSubs}
    />
  )
}
