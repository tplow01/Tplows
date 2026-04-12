import type { Metadata } from 'next'
import { DM_Sans, Hubot_Sans, Mona_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import ConditionalFooter from '@/components/ConditionalFooter'
import { PageTransitionProvider } from '@/components/page-transition/PageTransitionProvider'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
  adjustFontFallback: true,
})

const hubotSans = Hubot_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-hubot-sans',
  adjustFontFallback: true,
})

const monaSans = Mona_Sans({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-mona-sans',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Thomas Plowman — Designer',
  description: 'UI/UX & graphic design portfolio by Thomas Plowman, based in San Francisco.',
  openGraph: {
    title: 'Thomas Plowman — Designer',
    description: 'UI/UX & graphic design portfolio',
    siteName: 'Thomas Plowman',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${hubotSans.variable} ${monaSans.variable}`}>
      <body>
        <PageTransitionProvider>
          <Nav />
          <main>{children}</main>
          <ConditionalFooter />
        </PageTransitionProvider>
      </body>
    </html>
  )
}
