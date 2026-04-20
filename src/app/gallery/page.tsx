'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HOME_GALLERY, type HomeGalleryItem } from '@/lib/homeGallery'
import HomeLightbox from '@/components/HomeLightbox'

export default function GalleryPage() {
  const [activeLightbox, setActiveLightbox] = useState<HomeGalleryItem | null>(null)

  return (
    <div
      className="gallery-page-root"
      style={{
        minHeight: '100dvh',
        paddingTop: 'var(--nav-h)',
        backgroundColor: 'var(--surface-card)',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 'var(--grid-margin)',
        paddingRight: 'var(--grid-margin)',
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
          paddingBottom: 'var(--sp-4)',
        }}
      >
        <div
          className="gallery-page-grid"
          style={{
            flex: 1,
            minHeight: 0,
            gap: '12px',
            alignContent: 'stretch',
          }}
        >
          {HOME_GALLERY.map((item) => (
            <button
              key={item.alt}
              onClick={() => setActiveLightbox(item)}
              aria-label={`Open ${item.label}`}
              className="gallery-cell card-corners"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-card)',
                backgroundColor: 'var(--surface-dark-strong)',
                minHeight: 0,
                display: 'block',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                width: '100%',
              }}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="33vw"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,var(--surface-dark-soft) 0%,var(--surface-dark-muted) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-inverse-faint)' }}>
                    Coming Soon
                  </span>
                </div>
              )}

              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,var(--overlay-dark-62) 0%,transparent 52%)', pointerEvents: 'none' }} />

              <div className="gallery-hover-scrim" />
              <div className="gallery-hover-name">
                <span>{item.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <HomeLightbox
        item={activeLightbox ? { ...activeLightbox.lightbox, coverSrc: activeLightbox.src } : null}
        onClose={() => setActiveLightbox(null)}
      />

      <style>{`
        .gallery-page-root .gallery-page-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
        }
        @media (max-width: 899px) {
          .gallery-page-root .gallery-page-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
          }
        }
        @media (max-width: 599px) {
          .gallery-page-root .gallery-page-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  )
}
