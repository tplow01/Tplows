'use client'

import { TransitionLink } from '@/components/page-transition/TransitionLink'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'

interface AboutLinksProps {
  hasResume?: boolean
  resumeHref?: string
}

export default function AboutLinks({ hasResume, resumeHref }: AboutLinksProps) {
  return (
    <div style={{ display: 'flex', gap: 'var(--sp-4)', flexWrap: 'wrap' }}>
      {hasResume && (
        <a
          href={resumeHref ?? '#'}
          className="font-display"
          style={{
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--c-white)',
            background: 'var(--c-black)',
            padding: 'var(--sp-3) var(--sp-6)',
            textDecoration: 'none',
            display: 'inline-flex',
          }}
        >
          <LetterSwapPingPong label="Download Resume" staggerFrom="first" staggerDuration={0.02} />
        </a>
      )}
      <TransitionLink
        href="/contact"
        className="font-display"
        style={{
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--c-black)',
          border: '1px solid rgba(21,21,21,0.18)',
          padding: 'var(--sp-3) var(--sp-6)',
          textDecoration: 'none',
          display: 'inline-flex',
        }}
      >
        <LetterSwapPingPong label="Get in touch →" staggerFrom="first" staggerDuration={0.02} />
      </TransitionLink>
    </div>
  )
}
