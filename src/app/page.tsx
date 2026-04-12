'use client'

import { TransitionLink } from '@/components/page-transition/TransitionLink'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
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
          Nearly full viewport below nav; headline centered. A small strip at
          the bottom reveals just the tops of the case study cards.
      ─────────────────────────────────────────────────────────────────────── */}
      <section style={{
        boxSizing: 'border-box',
        /* Shorter hero so cards / CardContent sit higher (120px total vs peek-only) */
        height: 'calc(100svh - var(--nav-h) - 120px - clamp(40px, 8svh, 88px))',
        minHeight: '380px',
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
          {/* Line 1 — "I design to" Mona Sans, "perform" Hubot orange */}
          <span style={{ display: 'block' }}>
            <span style={{ fontFamily: "'Mona Sans','DM Sans',sans-serif", fontWeight: 500, color: 'var(--c-black)' }}>I design to </span>
            <span className="font-display" style={{ color: 'var(--c-orange)' }}>perform</span>
          </span>
          {/* Line 2 — "at game" Mona Sans, "speed" Hubot orange */}
          <span style={{ display: 'block' }}>
            <span style={{ fontFamily: "'Mona Sans','DM Sans',sans-serif", fontWeight: 500, color: 'var(--c-black)' }}>at game </span>
            <span className="font-display" style={{ color: 'var(--c-orange)' }}>speed</span>
          </span>
        </h1>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <WorkSection />

      {/* ── ABOUT ME ─────────────────────────────────────────────────────── */}
      <section className="page-section" style={{ paddingTop: '40px' }}>

        <RacingStripeBand label="About me" linesFrom="right" />

        <div className="inner">

          {/* 9-col split: photo (2fr) + panel (7fr) */}
          <div className="about-row">

            {/* Photo — 4-col square */}
            <div
              className="about-photo"
              style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', backgroundColor: 'rgba(241,94,34,0.3)' }}
            >
              <Image
                src="/images/me2.png"
                alt="Thomas Plowman"
                fill
                sizes="(max-width: 899px) 100vw, 33vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            {/* Text — 8-col panel, bottom-aligned to match photo */}
            <div
              className="about-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <p
                style={{ fontFamily: "'Mona Sans','DM Sans',sans-serif", fontWeight: 500, fontSize: 'clamp(14px, 1.3vw, 20px)', lineHeight: 1.5, color: 'var(--c-black)', margin: '0 0 var(--sp-3)' }}
              >
                Hi, I&apos;m Thomas an English Product designer currently across the pond in the bay area.
              </p>
              <p
                style={{ fontFamily: "'Mona Sans','DM Sans',sans-serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 40px)', lineHeight: 1.15, color: 'var(--c-black)', margin: '0 0 var(--sp-5)' }}
              >
                I believe that strong visual design is a big part of great user experience.
              </p>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                <TransitionLink href="/contact" className="about-btn-solid">
                  <span className="font-display about-btn-inner">
                    <LetterSwapPingPong label="Contact" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </TransitionLink>
                <a href="#" className="about-btn-outline">
                  <span className="font-display about-btn-inner">
                    <LetterSwapPingPong label="Resume" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="page-section">

        <RacingStripeBand label="Gallery" linesFrom="left" />

        <div className="inner">

          {/* 3 × 2 square grid */}
          <div className="gallery-grid">
            {GALLERY.map(({ src, alt, label }) => (
              <div
                key={alt}
                className="gallery-cell card-corners"
                style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', aspectRatio: '1 / 1', backgroundColor: '#111' }}
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

                {/* Hover scrim — deepens image on hover so orange pops */}
                <div className="gallery-hover-scrim" />

                {/* Hover name — large display font, fades + slides up */}
                <div className="gallery-hover-name">
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


    </div>
  )
}
