'use client'

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
      <RacingStripeBand label="Cases" linesFrom="left" labelHref="/cases" />

      <div style={{ maxWidth: 'var(--grid-max)', margin: '0 auto' }}>
        <CasesHoverStrip heightPx={700} />
      </div>
    </section>
  )
}
