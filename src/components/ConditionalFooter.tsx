'use client'

import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'

const NO_FOOTER = new Set(['/cases', '/gallery'])

export default function ConditionalFooter() {
  const pathname = usePathname()
  if (NO_FOOTER.has(pathname)) return null
  return <Footer />
}
