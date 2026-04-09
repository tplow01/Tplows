'use client'

import Link from 'next/link'
import Image from 'next/image'
import WorkSection from '@/components/WorkSection'

// ─── Gallery data ──────────────────────────────────────────────────────────
const GALLERY: { src: string | null; alt: string; label: string }[] = [
  // Row 1
  { src: '/images/SG_Gallery_CTA.jpg',  alt: "Survivor's Guilt",     label: "Survivor's Guilt"    },
  { src: '/images/Flux_Gallery_CTA.jpg',alt: 'Flux',                  label: 'Flux'                },
  { src: null,                           alt: 'Footy Finds',           label: 'Footy Finds'         },
  // Row 2
  { src: '/images/ArtU_Social.jpg',     alt: 'Art U',                 label: 'Art U'               },
  { src: '/images/SWF_Gallery_CTA.jpg', alt: "Streets Won't Forget",  label: "Streets Won't Forget"},
  { src: '/images/BSC_Social.jpg',      alt: 'BSC',                   label: 'BSC'                 },
]

export default function Home() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)', backgroundColor: '#f7f7fb' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────
          Fills viewport minus nav + 110px bleed so case study tops peek.
          "perform" + "speed" → Hubot Sans 800 slnt-10 (native font axis).
      ─────────────────────────────────────────────────────────────────────── */}
      <section style={{
        height: 'calc(100svh - var(--nav-h) - 110px)',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 var(--grid-margin)',
        textAlign: 'center',
      }}>
        <h1
          className="fade-up fade-up-1"
          style={{ fontSize: 'clamp(44px, 9.5vw, 128px)', lineHeight: 1.02, margin: 0, letterSpacing: '-0.025em' }}
        >
          <span style={{ fontFamily: "'Mona Sans','DM Sans',sans-serif", fontWeight: 500, color: 'var(--c-black)', display: 'block' }}>
            I design to
          </span>
          <span style={{ display: 'block' }}>
            <span className="font-display" style={{ color: 'var(--c-orange)' }}>perform</span>
            <span style={{ fontFamily: "'Mona Sans','DM Sans',sans-serif", fontWeight: 500, color: 'var(--c-black)' }}>{' '}at</span>
          </span>
          <span style={{ display: 'block' }}>
            <span style={{ fontFamily: "'Mona Sans','DM Sans',sans-serif", fontWeight: 500, color: 'var(--c-black)' }}>game{' '}</span>
            <span className="font-display" style={{ color: 'var(--c-orange)' }}>speed</span>
          </span>
        </h1>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <WorkSection />

      {/* ── ABOUT ME ─────────────────────────────────────────────────────── */}
      <section className="page-section">
        <div className="inner">

          {/* Header: title left, orange rule right */}
          <div className="section-header section-header--flip" style={{ marginBottom: 'var(--sp-6)' }}>
            <span className="font-display" style={{ fontSize: 'clamp(16px, 1.8vw, 24px)', color: 'var(--c-orange)', flexShrink: 0 }}>
              About me
            </span>
            <div className="h-rule" />
          </div>

          {/* 9-col split: photo (2fr) + panel (7fr) */}
          <div className="about-row">

            {/* Photo — 2 of 9 cols */}
            <Link
              href="/about"
              className="about-photo"
              aria-label="About Thomas Plowman"
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', textDecoration: 'none', display: 'block' }}
            >
              <Image
                src="/images/Headshot_TP.jpg"
                alt="Thomas Plowman"
                fill
                sizes="(max-width: 899px) 100vw, 22vw"
                style={{ objectFit: 'cover', objectPosition: '50% 12%' }}
              />
              {/* subtle hover scrim */}
              <div className="about-photo-scrim" />
            </Link>

            {/* Panel — 7 of 9 cols */}
            <div
              className="about-panel"
              style={{
                border: '1px solid rgba(21,21,21,0.09)',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(var(--sp-8), 4vw, var(--sp-16))',
              }}
            >
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(26px, 4.2vw, 60px)', letterSpacing: '-0.04em', color: 'var(--c-black)', margin: '0 0 var(--sp-5)', lineHeight: 0.93 }}
              >
                Designer,<br />not just a<br />decorator.
              </h2>
              <p
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.7, color: 'rgba(21,21,21,0.5)', margin: '0 0 var(--sp-8)', maxWidth: '52ch' }}
              >
                UI/UX designer based in San Francisco, studying at Academy of Art University.
                I design performance-first digital experiences — from sports apps to brand
                platforms — where every interaction has a reason.
              </p>
              <Link
                href="/about"
                className="link-orange"
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-orange)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}
              >
                Full profile <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="page-section">
        <div className="inner">

          {/* Header: orange rule left, title right */}
          <div className="section-header" style={{ marginBottom: 'var(--sp-6)' }}>
            <div className="h-rule" />
            <span className="font-display" style={{ fontSize: 'clamp(16px, 1.8vw, 24px)', color: 'var(--c-black)', flexShrink: 0 }}>
              Gallery
            </span>
          </div>

          {/* 3 × 2 square grid */}
          <div className="gallery-grid">
            {GALLERY.map(({ src, alt, label }) => (
              <div
                key={alt}
                className="gallery-cell"
                style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', aspectRatio: '1 / 1', backgroundColor: '#111' }}
              >
                {src ? (
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#181818 0%,#252525 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(243,240,234,0.18)' }}>
                      Coming Soon
                    </span>
                  </div>
                )}
                {/* Vignette */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(21,21,21,0.62) 0%,transparent 52%)', pointerEvents: 'none' }} />
                <span style={{ position: 'absolute', bottom: 'var(--sp-4)', left: 'var(--sp-4)', fontFamily: "'DM Sans',sans-serif", fontSize: '11px', letterSpacing: '0.04em', color: 'rgba(243,240,234,0.65)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: '#f7f7fb', borderTop: '1px solid rgba(21,21,21,0.07)' }}>
        <div className="g section-sm" style={{ alignItems: 'center', rowGap: 'var(--sp-4)' }}>
          <div className="c1">
            <Image src="/logo-icon.svg" alt="TP" width={14} height={26} />
          </div>
          <p className="c5" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', color: 'rgba(21,21,21,0.28)', margin: 0 }}>
            © 2026 Thomas Plowman
          </p>
          <div className="c1" />
          <div className="c2" style={{ display: 'flex', gap: 'var(--sp-6)', justifyContent: 'flex-end' }}>
            {[
              { href: 'https://instagram.com/tplows.design', label: 'Instagram' },
              { href: 'https://linkedin.com/in/thomas-plowman', label: 'LinkedIn' },
            ].map(({ href, label }) => (
              <a
                key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="link-orange"
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', color: 'rgba(21,21,21,0.28)', textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
