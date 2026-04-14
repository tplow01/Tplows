'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import CasesHoverStrip from '@/components/CasesHoverStrip'

export default function WorkSection() {
  const [skipIntro] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.sessionStorage.getItem('skip-home-cases-intro') === '1'
  })

  useEffect(() => {
    if (skipIntro && typeof window !== 'undefined') {
      window.sessionStorage.removeItem('skip-home-cases-intro')
    }
  }, [skipIntro])

  return (
    <section
      style={{
        backgroundColor: '#f7f7fb',
        paddingTop: 'calc(clamp(var(--sp-2), 1.5vw, var(--sp-4)) + 40px)',
        paddingLeft: 'var(--grid-margin)',
        paddingRight: 'var(--grid-margin)',
        paddingBottom: 'clamp(48px, 6vw, 80px)',
      }}
    >
      {/* Stripe draws in at 1.6 s (after hero title finishes), label 0.4 s later */}
      <RacingStripeBand
        label="Cases"
        linesFrom="left"
        labelHref="/cases"
        animateDelay={skipIntro ? undefined : 1.6}
      />

      {/* Cards slide up after the band, starting at 2.3 s */}
      {skipIntro ? (
        <div style={{ maxWidth: 'var(--grid-max)', margin: '0 auto' }}>
          <CasesHoverStrip heightPx={560} />
        </div>
      ) : (
        <motion.div
          style={{ maxWidth: 'var(--grid-max)', margin: '0 auto' }}
          initial={{ opacity: 0, y: 72 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 160, damping: 24, delay: 2.3 }}
        >
          <CasesHoverStrip heightPx={560} />
        </motion.div>
      )}
    </section>
  )
}
