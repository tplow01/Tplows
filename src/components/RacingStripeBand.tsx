'use client'

import type { CSSProperties, ReactNode } from 'react'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'

const labelBase: CSSProperties = {
  fontFamily: "'Hubot Sans', sans-serif",
  fontWeight: 800,
  fontVariationSettings: "'wght' 800, 'slnt' -10",
  fontSize: '20px',
  lineHeight: 1,
  flexShrink: 0,
}

/** Single orange rule — thickness scales with viewport */
const stripeStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
  height: 'clamp(2px, 0.45vw + 1px, 5px)',
  borderRadius: '999px',
  backgroundColor: 'var(--c-orange)',
}

export type RacingStripeBandProps = {
  label: ReactNode
  /** Line grows from this side; label sits on the opposite side */
  linesFrom: 'left' | 'right'
  /** When true, cancel parent horizontal `var(--grid-margin)` padding (full-bleed band) */
  bleed?: boolean
  /** Use a real `h1` for the label (e.g. gallery page title) */
  labelAsH1?: boolean
  className?: string
  style?: CSSProperties
}

export function RacingStripeBand({
  label,
  linesFrom,
  bleed = true,
  labelAsH1 = false,
  className,
  style,
}: RacingStripeBandProps) {
  const stripe = <div style={stripeStyle} aria-hidden />

  const textAlign: CSSProperties =
    linesFrom === 'left'
      ? { textAlign: 'right' as const }
      : { textAlign: 'left' as const }

  const justify: 'flex-end' | 'flex-start' =
    linesFrom === 'left' ? 'flex-end' : 'flex-start'

  /**
   * Stroke starts at the physical page edge (viewport left or right).
   * Text sits flush to the opposite grid margin line (`--grid-margin` inset).
   * `--sp-1` (8px) between stroke and label.
   */
  const bandPadding: CSSProperties =
    linesFrom === 'left'
      ? { paddingLeft: 0, paddingRight: 'var(--grid-margin)' }
      : { paddingLeft: 'var(--grid-margin)', paddingRight: 0 }

  /** Full viewport width so the band escapes padded section wrappers */
  const viewportFullBleed: CSSProperties = bleed
    ? {
        width: '100vw',
        maxWidth: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        position: 'relative',
      }
    : { width: '100%' }

  const wrapStyle: CSSProperties = {
    ...labelBase,
    ...textAlign,
    whiteSpace: 'normal',
    margin: 0,
    flexShrink: 0,
    minWidth: 0,
    display: 'flex',
    justifyContent: justify,
    maxWidth: '100%',
  }

  const text =
    typeof label !== 'string' ? (
      <span className="font-display racing-stripe-shuffle" style={wrapStyle}>
        {label}
      </span>
    ) : labelAsH1 ? (
      <h1 className="font-display racing-stripe-label-wrap" style={wrapStyle}>
        <LetterSwapPingPong
          label={label}
          staggerFrom="first"
          staggerDuration={0.03}
          className="racing-stripe-shuffle"
        />
      </h1>
    ) : (
      <span className="font-display racing-stripe-label-wrap" style={wrapStyle}>
        <LetterSwapPingPong
          label={label}
          staggerFrom="first"
          staggerDuration={0.03}
          className="racing-stripe-shuffle"
        />
      </span>
    )

  return (
    <div
      className={`racing-stripe-band${className ? ` ${className}` : ''}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-1)',
        boxSizing: 'border-box',
        marginBottom: 'clamp(40px, 4.44vw, 64px)',
        ...bandPadding,
        ...viewportFullBleed,
        ...style,
      }}
    >
      {linesFrom === 'left' ? (
        <>
          {stripe}
          {text}
        </>
      ) : (
        <>
          {text}
          {stripe}
        </>
      )}
    </div>
  )
}
