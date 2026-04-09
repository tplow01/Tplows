import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

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
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}
