import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
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
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={dmSans.className}>
        <PageTransitionProvider>
          <Nav />
          <main>{children}</main>
          <ConditionalFooter />
        </PageTransitionProvider>
      </body>
    </html>
  )
}
