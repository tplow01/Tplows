import { safeFetch } from '@/lib/sanityFetch'
import { caseStudyBySlugQuery } from '@/lib/queries'
import CaseStudyPage from '@/components/CaseStudyPage'

export default async function MindsetPage() {
  const data = await safeFetch(caseStudyBySlugQuery, { slug: 'mindset' })
  return <CaseStudyPage data={data as Parameters<typeof CaseStudyPage>[0]['data']} slug="mindset" fallbackTitle="Mindset" fallbackTag="Brand & UX" />
}
