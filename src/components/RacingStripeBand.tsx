'use client'

import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import { TransitionLink } from '@/components/page-transition/TransitionLink'

const labelBase: CSSProperties = {
  fontFamily: 'var(--font-hubot-sans), sans-serif',
  fontWeight: 800,
  fontStyle: 'italic',
  fontOpticalSizing: 'auto',
  fontVariationSettings: '"wdth" 100',
  fontSize: '20px',
  lineHeight: 1,
  flexShrink: 0,
}

const stripeStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
  height: 'clamp(2px, 0.45vw + 1px, 5px)',
  borderRadius: '999px',
  backgroundColor: 'var(--c-orange)',
}

const labelLinkStyle: CSSProperties = {
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  maxWidth: '100%',
  minWidth: 0,
  transition: 'color 0.15s ease',
}

export type RacingStripeBandProps = {
  label: ReactNode
  linesFrom: 'left' | 'right'
  bleed?: boolean
  labelAsH1?: boolean
  /** When set with a string `label`, the label becomes a link (e.g. to /cases). */
  labelHref?: string
  /**
   * When provided, the stripe draws in and the label fades up using a
   * time-based entrance animation. The value is the base delay in seconds
   * (i.e. when the stripe starts). The label follows 0.4 s later.
   */
  animateDelay?: number
  className?: string
  style?: CSSProperties
}

export function RacingStripeBand({
  label,
  linesFrom,
  bleed = true,
  labelAsH1 = false,
  labelHref,
  animateDelay,
  className,
  style,
}: RacingStripeBandProps) {
  const animated = animateDelay !== undefined

  const stripe = animated ? (
    <motion.div
      aria-hidden
      style={{
        ...stripeStyle,
        transformOrigin: linesFrom === 'left' ? 'left' : 'right',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.65, delay: animateDelay, ease: [0.16, 1, 0.3, 1] }}
    />
  ) : (
    <div style={stripeStyle} aria-hidden />
  )

  const textAlign: CSSProperties =
    linesFrom === 'left'
      ? { textAlign: 'right' as const }
      : { textAlign: 'left' as const }

  const justify: 'flex-end' | 'flex-start' =
    linesFrom === 'left' ? 'flex-end' : 'flex-start'

  const bandPadding: CSSProperties =
    linesFrom === 'left'
      ? { paddingLeft: 0, paddingRight: 'var(--grid-margin)' }
      : { paddingLeft: 'var(--grid-margin)', paddingRight: 0 }

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

  function wrapLabelIfLinked(inner: ReactNode) {
    if (!labelHref || typeof label !== 'string') return inner
    return (
      <TransitionLink
        href={labelHref}
        className="racing-stripe-label-link"
        style={{ ...labelLinkStyle, justifyContent: justify }}
      >
        {inner}
      </TransitionLink>
    )
  }

  const text =
    typeof label !== 'string' ? (
      <span className="font-display racing-stripe-shuffle" style={wrapStyle}>
        {label}
      </span>
    ) : labelAsH1 ? (
      wrapLabelIfLinked(
        <h1 className="font-display racing-stripe-label-wrap" style={wrapStyle}>
          <LetterSwapPingPong
            label={label}
            staggerFrom="first"
            staggerDuration={0.03}
            className="racing-stripe-shuffle"
          />
        </h1>,
      )
    ) : (
      wrapLabelIfLinked(
        <span className="font-display racing-stripe-label-wrap" style={wrapStyle}>
          <LetterSwapPingPong
            label={label}
            staggerFrom="first"
            staggerDuration={0.03}
            className="racing-stripe-shuffle"
          />
        </span>,
      )
    )

  const labelNode = animated ? (
    <motion.div
      style={{ flexShrink: 0, minWidth: 0, display: 'flex', alignItems: 'center' }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animateDelay! + 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {text}
    </motion.div>
  ) : text

  return (
    <>
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
            {labelNode}
          </>
        ) : (
          <>
            {labelNode}
            {stripe}
          </>
        )}
      </div>
      {labelHref && typeof label === 'string' ? (
        <style>{`
          a.racing-stripe-label-link:hover,
          a.racing-stripe-label-link:focus-visible {
            color: var(--c-orange);
          }
        `}</style>
      ) : null}
    </>
  )
}
