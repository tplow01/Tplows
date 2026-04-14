'use client'

import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'

const NO_FOOTER = new Set(['/cases', '/gallery'])

/** Maps per-page background colours for the footer gradient fade. */
const FOOTER_FROM: Record<string, string> = {
  '/work/next-gen':   '#1d1f1d',
  '/work/paywall-fc': '#111011',
  '/work/mindset':    '#eaf1f8',
}

export default function ConditionalFooter() {
  const pathname = usePathname()
  if (NO_FOOTER.has(pathname)) return null
  return <Footer fromColor={FOOTER_FROM[pathname] ?? '#f7f7fb'} />
}
