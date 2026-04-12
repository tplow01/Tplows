'use client'

import Image from 'next/image'
import { TransitionLink } from '@/components/page-transition/TransitionLink'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import { gridBleedFullWidth } from '@/lib/racing-stripe-layout'
import { urlFor } from '@/sanity/lib/image'

interface GalleryItem {
  _id: string
  title: string
  slug: { current: string }
  category?: string
  coverImage?: { asset: { _ref: string } }
}

interface Props {
  items: GalleryItem[]
  type: 'imaging' | 'projects'
  title: string
  subTitle: string
  subs: Array<{ label: string; href: string }>
}

export default function GalleryGrid({ items, type, title, subTitle, subs }: Props) {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── HEADER ──────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--c-black)', overflow: 'hidden', position: 'relative' }}>

        <span
          className="font-display"
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 'var(--grid-margin)',
            bottom: '-10%',
            fontSize: 'clamp(52px, 11vw, 155px)',
            color: 'rgba(243,240,234,0.03)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.06em',
          }}
        >
          {title[0]}
        </span>

        <div className="g section" style={{ rowGap: 'var(--sp-6)', position: 'relative' }}>

          {/* Row 1: eyebrow (cols 1–3) */}
          <div className="c9 fade-up fade-up-1">
            <span className="eyebrow">{subTitle}</span>
          </div>

          {/* Row 2: double line left, title right (matches Case Studies band) */}
          <div className="c12 fade-up fade-up-2" style={gridBleedFullWidth()}>
            <RacingStripeBand label={title} linesFrom="left" bleed={false} labelAsH1 />
          </div>

          {/* Row 3: sub-page pills — cols 1–9 */}
          <div
            className="c9 fade-up fade-up-3"
            style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap' }}
          >
            {subs.map(({ label, href }) => (
              <TransitionLink
                key={href}
                href={href}
                className="font-display"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--c-white)',
                  border: '1px solid rgba(243,240,234,0.18)',
                  padding: 'var(--sp-2) var(--sp-4)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--c-orange)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-orange)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(243,240,234,0.18)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-white)'; }}
              >
                {label}
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="g section">
          {items.length === 0 ? (
            <p
              className="c9"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                color: 'rgba(21,21,21,0.35)',
              }}
            >
              Content coming soon — add items in Sanity Studio at{' '}
              <code style={{ fontSize: '13px' }}>/studio</code>.
            </p>
          ) : (
            // 3-col cards to fill 9-col grid (Gestalt: similarity + proximity)
            items.map((item) => (
              <TransitionLink
                key={item._id}
                href={`/gallery/${type}/${item.slug.current}`}
                className="c3 card-lift card-corners"
                style={{
                  position: 'relative',
                  display: 'block',
                  textDecoration: 'none',
                  backgroundColor: 'var(--c-black)',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-card)',
                  aspectRatio: '3/4',
                }}
              >
                {item.coverImage && (
                  <Image
                    src={urlFor(item.coverImage).width(600).quality(85).url()}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover', opacity: 0.8, transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}
                  />
                )}
                {/* Gradient vignette — figure-ground */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(21,21,21,0.8) 0%, transparent 50%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: 'var(--sp-5)', left: 'var(--sp-5)', right: 'var(--sp-5)' }}>
                  {item.category && (
                    <span className="eyebrow" style={{ display: 'block', marginBottom: 'var(--sp-2)', fontSize: '10px' }}>
                      {item.category}
                    </span>
                  )}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: 'clamp(16px, 2.2vw, 26px)',
                      letterSpacing: '-0.03em',
                      color: 'var(--c-white)',
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </TransitionLink>
            ))
          )}
        </div>
      </section>

    </div>
  )
}
