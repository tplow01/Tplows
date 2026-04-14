'use client'

import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import type { CSSProperties } from 'react'

interface Props {
  label: string
  /** Accent colour the label animates to on hover. */
  accent: string
  /** Extra className passed to the motion.span — put your sizing/colour class here. */
  className?: string
  style?: CSSProperties
}

/**
 * Section-header label with the same letter-swap ping-pong animation used on
 * the racing stripe band, changing to the page accent colour on hover.
 * Works for any case page regardless of light/dark theme.
 */
export function CaseLabel({ label, accent, className, style }: Props) {
  return (
    <LetterSwapPingPong
      label={label}
      staggerFrom="first"
      staggerDuration={0.03}
      className={`case-label${className ? ` ${className}` : ''}`}
      style={{ '--case-accent': accent, ...style } as CSSProperties}
    />
  )
}
