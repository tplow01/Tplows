'use client'

import { motion } from 'framer-motion'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import CasesHoverStrip from '@/components/CasesHoverStrip'

export default function WorkSection() {
  return (
    <section
      style={{
        backgroundColor: '#f7f7fb',
        paddingTop: 'calc(clamp(var(--sp-2), 1.5vw, var(--sp-4)) + 40px)',
        paddingLeft: 'var(--grid-margin)',
        paddingRight: 'var(--grid-margin)',
        paddingBottom: 'clamp(120px, 14vw, 200px)',
      }}
    >
      {/* Stripe draws in at 1.6 s (after hero title finishes), label 0.4 s later */}
      <RacingStripeBand label="Cases" linesFrom="left" labelHref="/cases" animateDelay={1.6} />

      {/* Cards slide up after the band, starting at 2.3 s */}
      <motion.div
        style={{ maxWidth: 'var(--grid-max)', margin: '0 auto' }}
        initial={{ opacity: 0, y: 72 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 160, damping: 24, delay: 2.3 }}
      >
        <CasesHoverStrip heightPx={700} />
      </motion.div>
    </section>
  )
}
