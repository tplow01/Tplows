'use client'

import CasesHoverStrip from '@/components/CasesHoverStrip'

export default function CasesPage() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        paddingTop: 'var(--nav-h)',
        backgroundColor: '#f7f7fb',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 'var(--grid-margin)',
        paddingRight: 'var(--grid-margin)',
        paddingBottom: 'clamp(var(--sp-3), 2vw, var(--sp-5))',
      }}
    >
      <div
        style={{
          flex: 1,
          minHeight: 0,
          maxWidth: 'var(--grid-max)',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CasesHoverStrip fill />
      </div>
    </div>
  )
}
