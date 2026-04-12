'use client'

import { RacingStripeBand } from '@/components/RacingStripeBand'
import Image from 'next/image'
import WorkSection from '@/components/WorkSection'
import { HOME_GALLERY } from '@/lib/homeGallery'

export default function Home() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)', backgroundColor: '#f7f7fb' }}>

      <section style={{
        boxSizing: 'border-box',
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
          <span style={{ display: 'block' }}>
            <span style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, color: 'var(--c-black)' }}>I design to </span>
            <span className="font-display" style={{ color: 'var(--c-orange)' }}>perform</span>
          </span>
          <span style={{ display: 'block' }}>
            <span style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, color: 'var(--c-black)' }}>at game </span>
            <span className="font-display" style={{ color: 'var(--c-orange)' }}>speed</span>
          </span>
        </h1>
      </section>

      <WorkSection />

      <section id="about" className="page-section" style={{ paddingTop: '40px' }}>

        <RacingStripeBand label="About me" linesFrom="right" />

        <div className="inner">

          <div className="about-row">

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

            <div
              className="about-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <p
                style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, fontSize: 'clamp(14px, 1.3vw, 20px)', lineHeight: 1.5, color: 'var(--c-black)', margin: '0 0 var(--sp-3)' }}
              >
                Hi, I&apos;m Thomas an English Product designer currently across the pond in the bay area.
              </p>
              <p
                style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 40px)', lineHeight: 1.15, color: 'var(--c-black)', margin: '0 0 var(--sp-5)' }}
              >
                I believe that strong visual design is a big part of great user experience.
              </p>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                <a href="mailto:thomasplowman@icloud.com" className="about-btn-solid">
                  <span className="font-display about-btn-inner">Contact</span>
                </a>
                <a href="#" className="about-btn-outline">
                  <span className="font-display about-btn-inner">Resume</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="page-section">

        <RacingStripeBand label="Gallery" linesFrom="left" labelHref="/gallery" />

        <div className="inner">

          <div className="gallery-grid">
            {HOME_GALLERY.map(({ src, alt, label }) => (
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
                    <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(243,240,234,0.18)' }}>
                      Coming Soon
                    </span>
                  </div>
                )}

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(21,21,21,0.62) 0%,transparent 52%)', pointerEvents: 'none' }} />

                <div className="gallery-hover-scrim" />

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
