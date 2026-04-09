import { safeFetch } from '@/lib/sanityFetch'
import { caseStudyBySlugQuery } from '@/lib/queries'
import CaseStudyPage from '@/components/CaseStudyPage'

export default async function PaywallFcPage() {
  const data = await safeFetch(caseStudyBySlugQuery, { slug: 'paywall-fc' })
  return <CaseStudyPage data={data as Parameters<typeof CaseStudyPage>[0]['data']} slug="paywall-fc" fallbackTitle="Paywall Fc" fallbackTag="Product Design" />
}
