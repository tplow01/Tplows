import Image from 'next/image'
import { TransitionLink } from '@/components/page-transition/TransitionLink'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import RelatedCases from '@/components/RelatedCases'

interface Props {
  data: {
    title: string
    label?: string
    tag?: string
    description?: string
    overview?: unknown[]
    coverImage?: { asset: { _ref: string } }
    prototypeUrl?: string
    designComponent?: {
      title?: string
      description?: string
      image?: { asset: { _ref: string } }
    }
    slideshowUrl?: string
    gallery?: Array<{ asset: { _ref: string }; _key: string }>
  } | null
  slug: string
  fallbackTitle: string
  fallbackTag: string
}

export default function CaseStudyPage({ data, slug, fallbackTitle, fallbackTag }: Props) {
  const title = data?.title ?? fallbackTitle
  const tag   = data?.tag   ?? fallbackTag
  const description = data?.description ?? 'Case study content coming soon — add it in Sanity Studio.'
  const initials = slug.split('-').map(w => w[0].toUpperCase()).join('')

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--c-black)', overflow: 'hidden', position: 'relative' }}>

        {/* Ghost initials — figure-ground depth */}
        <span
          className="font-display"
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 'var(--grid-margin)',
            bottom: '-12%',
            fontSize: 'clamp(52px, 10vw, 150px)',
            color: 'var(--text-inverse-ghost)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.06em',
          }}
        >
          {initials}
        </span>

        <div className="g section" style={{ rowGap: 'var(--sp-6)', position: 'relative' }}>

          {/* Row 1 — back link (cols 1–3) + tag (cols 5–8) */}
          <div className="c3 self-center fade-up fade-up-1">
            <TransitionLink
              href="/"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '13px',
                color: 'var(--text-inverse-soft)',
                textDecoration: 'none',
              }}
            >
              ← Back
            </TransitionLink>
          </div>
          <div className="c1" />
          <div className="c4 fade-up fade-up-1">
            <span className="eyebrow">{tag}</span>
          </div>
          <div className="c4" />

          {/* Row 2 — title spans 9 cols */}
          <h1
            className="c9 font-display fade-up fade-up-2"
            style={{
              fontSize: 'clamp(30px, 5.8vw, 84px)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--c-white)',
              margin: 0,
            }}
          >
            {title}
          </h1>
          <div className="c3" />

          {/* Row 3 — description (cols 1–7) + CTAs (cols 9–12) */}
          <p
            className="c7 fade-up fade-up-3"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: 'var(--text-inverse-muted)',
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            {description}
          </p>
          <div className="c1" />
          <div
            className="c4 self-end fade-up fade-up-4"
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}
          >
            {data?.prototypeUrl && (
              <a
                href={data.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--c-black)',
                  background: 'var(--c-orange)',
                  padding: 'var(--sp-3) var(--sp-6)',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Prototype →
              </a>
            )}
            {data?.slideshowUrl && (
              <a
                href={data.slideshowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--c-white)',
                  border: '1px solid var(--border-inverse-soft)',
                  padding: 'var(--sp-3) var(--sp-6)',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                PDF Slideshow
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE — full bleed ──────────────────────── */}
      {data?.coverImage && (
        <div style={{ lineHeight: 0 }}>
          <Image
            src={urlFor(data.coverImage).width(1600).quality(90).url()}
            alt={title}
            width={1600}
            height={800}
            style={{ width: '100%', height: 'clamp(220px, 38vw, 560px)', objectFit: 'cover', display: 'block' }}
          />
        </div>
      )}

      {/* ── OVERVIEW ─────────────────────────────────────── */}
      {data?.overview && (
        <section style={{ backgroundColor: 'var(--c-white)' }}>
          <div className="g section">
            {/* Gestalt: proximity — label sits close above body */}
            <div className="c12" style={{ marginBottom: 'var(--sp-3)' }}>
              <span className="eyebrow">Overview</span>
            </div>
            {/* Body text in cols 1–8, leaving 4-col margin */}
            <div
              className="c8"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: 'clamp(16px, 1.7vw, 19px)',
                lineHeight: 1.8,
                color: 'var(--text-primary-muted)',
              }}
            >
              <PortableText value={data.overview as Parameters<typeof PortableText>[0]['value']} />
            </div>
            <div className="c4" />
          </div>
        </section>
      )}

      {/* ── 2ND DESIGN COMPONENT ─────────────────────────── */}
      {data?.designComponent && (
        <section style={{ backgroundColor: 'var(--c-black)' }}>
          <div className="g section" style={{ rowGap: 'var(--sp-6)' }}>
            <div className="c12">
              <span className="eyebrow">2nd Design Component</span>
            </div>
            {/* Text: cols 1–5 / gap / Image: cols 8–12 */}
            <div className="c5 self-center" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(22px, 2.85vw, 38px)',
                  letterSpacing: '-0.035em',
                  color: 'var(--c-white)',
                  margin: 0,
                }}
              >
                {data.designComponent.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '16px', color: 'var(--text-inverse-muted)', lineHeight: 1.7, margin: 0 }}>
                {data.designComponent.description}
              </p>
            </div>
            <div className="c2" />
            {data.designComponent.image ? (
              <div className="c5">
                <Image
                  src={urlFor(data.designComponent.image).width(800).quality(90).url()}
                  alt={data.designComponent.title ?? ''}
                  width={800}
                  height={520}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ) : <div className="c5" />}
          </div>
        </section>
      )}

      {/* ── GALLERY ──────────────────────────────────────── */}
      {data?.gallery && data.gallery.length > 0 && (
        <section style={{ backgroundColor: 'var(--c-white)' }}>
          <div className="g section" style={{ rowGap: 'var(--sp-2)' }}>
            <div className="c12" style={{ marginBottom: 'var(--sp-3)' }}>
              <span className="eyebrow">Gallery</span>
            </div>
            {data.gallery.map((img, i) => (
              <div key={img._key} className={i % 3 === 2 ? 'c4' : 'c4'}>
                <Image
                  src={urlFor(img).width(800).quality(85).url()}
                  alt=""
                  width={800}
                  height={600}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── MORE CASES ───────────────────────────────────── */}
      <RelatedCases currentSlug={slug} />

    </div>
  )
}
