import { safeFetch } from '@/lib/sanityFetch'
import { caseStudyBySlugQuery } from '@/lib/queries'
import CaseStudyPage from '@/components/CaseStudyPage'

export default async function NextGenPage() {
  const data = await safeFetch(caseStudyBySlugQuery, { slug: 'next-gen' })
  return <CaseStudyPage data={data as Parameters<typeof CaseStudyPage>[0]['data']} slug="next-gen" fallbackTitle="Next Gen" fallbackTag="UX/UI Design" />
}
