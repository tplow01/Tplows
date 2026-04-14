'use client'

import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

const ORANGE = '#f15e22'

function ShutterChar({ char, index }: { char: string; index: number }) {
  const d = char === ' ' ? '\u00A0' : char
  const base = index * 0.04

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* Overflow-hidden shell clips the sweeping slices without clipping the main char's blur */}
      <span
        aria-hidden
        style={{ position: 'absolute', inset: 0, display: 'block', overflow: 'hidden', pointerEvents: 'none', zIndex: 10 }}
      >
        {/* Top slice — orange, sweeps left → right */}
        <motion.span
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, delay: base, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)', color: ORANGE }}
        >
          {d}
        </motion.span>

        {/* Middle slice — inherits text colour, sweeps right → left */}
        <motion.span
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '-100%', opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, delay: base + 0.1, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, clipPath: 'polygon(0 35%, 100% 35%, 100% 65%, 0 65%)' }}
        >
          {d}
        </motion.span>

        {/* Bottom slice — orange, sweeps left → right */}
        <motion.span
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, delay: base + 0.2, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, clipPath: 'polygon(0 65%, 100% 65%, 100% 100%, 0 100%)', color: ORANGE }}
        >
          {d}
        </motion.span>
      </span>

      {/* Main character — blurs in after slices have swept */}
      <motion.span
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ delay: base + 0.3, duration: 0.8 }}
        style={{ display: 'inline-block' }}
      >
        {d}
      </motion.span>
    </span>
  )
}

interface Props {
  text: string
  /** Character index offset for cross-segment staggering */
  startIndex?: number
  className?: string
  style?: CSSProperties
}

export function ShutterText({ text, startIndex = 0, className, style }: Props) {
  return (
    <span className={className} style={style}>
      {text.split('').map((char, i) => (
        <ShutterChar key={i} char={char} index={startIndex + i} />
      ))}
    </span>
  )
}
