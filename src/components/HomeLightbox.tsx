'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import type { HomeLightboxContent } from '@/lib/homeGallery'

interface Props {
  item: (HomeLightboxContent & { coverSrc?: string | null }) | null
  onClose: () => void
}

const PAD = 'clamp(24px, 3.5vw, 52px)'

export default function HomeLightbox({ item, onClose }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = item ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [item, handleKey])

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.88)',
              zIndex: 200,
              cursor: 'pointer',
            }}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.985 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '4vh',
              left: '50%',
              x: '-50%',
              width: 'min(95vw, 1080px)',
              maxHeight: '92vh',
              backgroundColor: '#151515',
              borderRadius: '20px',
              zIndex: 201,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Scrollable body */}
            <div style={{ flex: 1, overflowY: 'auto' }}>

              {/* Zero-height sticky anchor — close button floats over content */}
              <div style={{ position: 'sticky', top: 0, height: 0, overflow: 'visible', zIndex: 10 }}>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 24,
                    width: 52,
                    height: 52,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#f15e22',
                    borderRadius: '4px',
                    transform: 'skewX(-10deg) scaleY(0.97)',
                  }} />
                  <span style={{
                    position: 'relative',
                    fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif',
                    fontWeight: 500,
                    fontSize: '26px',
                    color: '#fff',
                    lineHeight: 1,
                    userSelect: 'none',
                    letterSpacing: 0,
                  }}>
                    ×
                  </span>
                </button>
              </div>

              {/* ── Section 1: media (padded) ── */}
              <div style={{ padding: `${PAD} ${PAD} 0` }}>
                {item.video && (
                  <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: item.stripeLabel ? 'clamp(20px, 2.5vw, 36px)' : 'clamp(28px, 3vw, 44px)',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    lineHeight: 0,
                  }}>
                    <video
                      autoPlay muted loop playsInline
                      style={{ width: '100%', display: 'block', maxHeight: '52vh', objectFit: 'cover' }}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                )}

                {!item.video && item.coverSrc && (
                  <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: item.stripeLabel ? 'clamp(20px, 2.5vw, 36px)' : 'clamp(28px, 3vw, 44px)',
                    lineHeight: 0,
                  }}>
                    <Image
                      src={item.coverSrc}
                      alt={item.title}
                      width={1080}
                      height={720}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                )}
              </div>

              {/* ── Section 2: title — full-width stripe or padded title+line ── */}
              {item.stripeLabel ? (
                /* paddingLeft only — stripe bleeds to the right edge of the panel */
                <div style={{ paddingLeft: PAD }}>
                  <RacingStripeBand
                    label={<span style={{ color: '#f7f7fb' }}>{item.stripeLabel}</span>}
                    linesFrom="right"
                    bleed={false}
                    animateDelay={0}
                    style={{
                      paddingLeft: 0,
                      paddingRight: 0,
                      marginBottom: 'clamp(24px, 3vw, 40px)',
                    }}
                  />
                </div>
              ) : (
                <div style={{ padding: `0 ${PAD} clamp(24px, 3vw, 40px)` }}>
                  {item.category && (
                    <span
                      className="font-display"
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#f15e22',
                        marginBottom: '10px',
                      }}
                    >
                      {item.category}
                    </span>
                  )}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    paddingBottom: '14px',
                    borderBottom: '1px solid rgba(247,247,251,0.1)',
                  }}>
                    <h2
                      className="font-display"
                      style={{
                        fontSize: 'clamp(20px, 2.2vw, 28px)',
                        color: '#f7f7fb',
                        margin: 0,
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.title}
                    </h2>
                    <div style={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(247,247,251,0.12)' }} />
                  </div>
                </div>
              )}

              {/* ── Section 3: description, meta, images (padded) ── */}
              <div style={{ padding: `0 ${PAD} ${PAD}` }}>

                {(item.description || (item.meta && item.meta.length > 0)) && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: item.meta?.length ? '1fr auto' : '1fr',
                    gap: 'clamp(24px, 4vw, 72px)',
                    alignItems: 'start',
                    marginBottom: item.images?.length ? 'clamp(32px, 4vw, 52px)' : 0,
                  }}>
                    {item.description && (
                      <p style={{
                        fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif',
                        fontWeight: 500,
                        fontSize: 'clamp(17px, 2vw, 28px)',
                        lineHeight: 1.28,
                        color: '#f7f7fb',
                        margin: 0,
                      }}>
                        {item.description}
                      </p>
                    )}

                    {item.meta && item.meta.length > 0 && (
                      <div style={{ display: 'flex', gap: 'clamp(28px, 3vw, 52px)', flexShrink: 0 }}>
                        {item.meta.map(({ label, value }) => (
                          <div key={label}>
                            <div
                              className="font-display"
                              style={{
                                fontSize: 'clamp(13px, 1.4vw, 17px)',
                                color: '#f7f7fb',
                                marginBottom: '10px',
                                lineHeight: 1,
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {label}
                            </div>
                            <div style={{
                              fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif',
                              fontWeight: 500,
                              fontSize: 'clamp(12px, 1.2vw, 15px)',
                              color: 'rgba(247,247,251,0.6)',
                              whiteSpace: 'pre-line',
                              lineHeight: 1.55,
                            }}>
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {item.images && item.images.length > 0 && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 'clamp(6px, 1vw, 18px)',
                    marginTop: item.description || item.meta?.length ? 'clamp(32px, 4vw, 52px)' : 0,
                  }}>
                    {item.images.map(({ src, alt }) => (
                      <figure
                        key={src}
                        style={{
                          margin: 0,
                          borderRadius: '10px',
                          overflow: 'hidden',
                          backgroundColor: '#fff',
                          lineHeight: 0,
                        }}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          width={600}
                          height={600}
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </figure>
                    ))}
                  </div>
                )}

              </div>
            </div>{/* end scrollable body */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
