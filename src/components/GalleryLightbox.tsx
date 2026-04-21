'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'

export interface LightboxItem {
  _id: string
  title: string
  category?: string
  description?: unknown[]
  coverImage?: { asset: { _ref: string } }
  images?: Array<{
    _key: string
    image: { asset: { _ref: string } }
    caption?: string
  }>
  staticCoverSrc?: string
  staticImages?: Array<{ _key: string; src: string; caption?: string }>
}

interface Props {
  item: LightboxItem | null
  onClose: () => void
}

export default function GalleryLightbox({ item, onClose }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = item ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [item, handleKeyDown])

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.88)',
              zIndex: 100,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '5vh',
              left: '50%',
              x: '-50%',
              width: 'min(92vw, 900px)',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: 'var(--c-black)',
              borderRadius: 'var(--radius-card)',
              zIndex: 101,
              padding: 'clamp(28px, 4vw, 52px)',
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                width: 34,
                height: 34,
                borderRadius: '50%',
                border: '1px solid var(--border-inverse-faint)',
                background: 'transparent',
                color: 'var(--c-white)',
                cursor: 'pointer',
                fontSize: 20,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              ×
            </button>

            {/* Header */}
            <div style={{ paddingRight: '48px', marginBottom: 'clamp(20px, 3vw, 36px)' }}>
              {item.category && (
                <span
                  className="font-display"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--c-orange)',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  {item.category}
                </span>
              )}
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(28px, 5vw, 56px)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.04em',
                  color: 'var(--c-white)',
                  margin: 0,
                }}
              >
                {item.title}
              </h2>
            </div>

            {/* Description */}
            {item.description && item.description.length > 0 && (
              <div
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: 'var(--text-inverse-soft)',
                  marginBottom: 'clamp(24px, 3vw, 40px)',
                  maxWidth: '62ch',
                }}
              >
                <PortableText value={item.description as Parameters<typeof PortableText>[0]['value']} />
              </div>
            )}

            {/* Images — Sanity */}
            {item.images && item.images.length > 0 && (
              <>
                <div style={{ height: '1px', backgroundColor: 'var(--border-inverse-faint)', marginBottom: 'clamp(20px, 3vw, 36px)' }} />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '3px',
                  }}
                >
                  {item.images.map((img) => (
                    <figure key={img._key} style={{ margin: 0, borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
                      <Image
                        src={urlFor(img.image).width(700).quality(85).url()}
                        alt={img.caption ?? ''}
                        width={700}
                        height={500}
                        style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                      />
                      {img.caption && (
                        <figcaption
                          style={{
                            fontFamily: 'var(--font-dm-sans), sans-serif',
                            fontSize: '11px',
                            color: 'var(--text-inverse-ghost)',
                            padding: '6px 2px',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </>
            )}

            {/* Images — static */}
            {item.staticImages && item.staticImages.length > 0 && (
              <>
                <div style={{ height: '1px', backgroundColor: 'var(--border-inverse-faint)', marginBottom: 'clamp(20px, 3vw, 36px)' }} />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '3px',
                  }}
                >
                  {item.staticImages.map((img) => (
                    <figure key={img._key} style={{ margin: 0, borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
                      <Image
                        src={img.src}
                        alt={img.caption ?? ''}
                        width={700}
                        height={700}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                      {img.caption && (
                        <figcaption
                          style={{
                            fontFamily: 'var(--font-dm-sans), sans-serif',
                            fontSize: '11px',
                            color: 'var(--text-inverse-ghost)',
                            padding: '6px 2px',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
