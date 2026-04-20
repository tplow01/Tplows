import Image from 'next/image'
import { TransitionLink } from '@/components/page-transition/TransitionLink'

const IMAGES = [
  { src: '/images/artu/art1.png', alt: 'Gameday — vs Hawaii Pacific' },
  { src: '/images/artu/art2.png', alt: 'Gameday — vs Colts' },
  { src: '/images/artu/art3.png', alt: 'Gameday — vs SMU' },
  { src: '/images/artu/art4.png', alt: 'Gameday — vs East Bay' },
  { src: '/images/artu/art5.png', alt: 'Spring Schedule' },
]

export default function ArtUSocialMediaPage() {
  return (
    <div style={{ backgroundColor: 'var(--c-black)', minHeight: '100vh' }}>

      {/* Full-bleed video hero */}
      <div style={{ position: 'relative', width: '100%', height: '100dvh', overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/images/artu/artuvid.mp4" type="video/mp4" />
        </video>

        {/* Dark vignette bottom */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--c-black) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)' }} />

        {/* Nav spacer back link */}
        <div style={{ position: 'absolute', top: 'var(--nav-h)', left: 'clamp(24px, 4vw, 56px)', paddingTop: '24px' }}>
          <TransitionLink
            href="/gallery/imaging"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}
          >
            ← Imaging Gallery
          </TransitionLink>
        </div>

        {/* Title pinned to bottom of video */}
        <div style={{ position: 'absolute', bottom: 'clamp(40px, 6vw, 72px)', left: 'clamp(24px, 4vw, 56px)', right: 'clamp(24px, 4vw, 56px)' }}>
          <span
            className="font-display"
            style={{ display: 'block', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--c-orange)', marginBottom: '12px' }}
          >
            Social Media · Academy of Art University
          </span>
          <h1
            className="font-display"
            style={{ fontSize: 'clamp(42px, 8vw, 110px)', lineHeight: 0.88, letterSpacing: '-0.04em', color: 'var(--c-white)', margin: 0 }}
          >
            Art U
          </h1>
        </div>
      </div>

      {/* Description */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) clamp(24px, 4vw, 56px)', maxWidth: '760px' }}>
        <p
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.75, color: 'var(--text-inverse-soft)', margin: '0 0 1.4em' }}
        >
          A series of social media graphics designed for the Academy of Art University men's soccer program. Each gameday post pairs player photography with bold typographic treatment and the team's red and white identity, built for high-impact across Instagram and X.
        </p>
        <p
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.75, color: 'var(--text-inverse-faint)', margin: 0 }}
        >
          Placeholder — add your own copy here about your process, tools used, or anything else about this project.
        </p>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: 'var(--border-inverse-faint)', margin: '0 clamp(24px, 4vw, 56px)' }} />

      {/* Image grid */}
      <section style={{ padding: 'clamp(40px, 5vw, 72px) clamp(24px, 4vw, 56px) clamp(72px, 10vw, 120px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'clamp(8px, 1.2vw, 16px)',
          }}
        >
          {IMAGES.map(({ src, alt }) => (
            <figure
              key={src}
              className="card-lift card-corners"
              style={{ margin: 0, borderRadius: 'var(--radius-card)', overflow: 'hidden', backgroundColor: 'var(--surface-dark)' }}
            >
              <Image
                src={src}
                alt={alt}
                width={800}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </figure>
          ))}
        </div>
      </section>

    </div>
  )
}
