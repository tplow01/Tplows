'use client'

import { SparklesHover } from '@/components/ui/sparkles-hover'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import { motion } from 'framer-motion'
import Image from 'next/image'
import WorkSection from '@/components/WorkSection'
import { HOME_GALLERY } from '@/lib/homeGallery'

const scrollFadeUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { type: 'spring', stiffness: 160, damping: 24 },
} as const

export default function Home() {

  return (
    <div style={{ paddingTop: 'var(--nav-h)', backgroundColor: '#f7f7fb' }}>

      <style>{`
        /* Hero responsive layout */
        .hero-dt  { display: none; }
        .hero-mob { display: block; }
        @media (min-width: 768px) {
          .hero-dt  { display: block; }
          .hero-mob { display: none; }
        }
      `}</style>

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
          aria-label="I design to perform at match speed"
          style={{ fontSize: 'clamp(44px, 9.5vw, 128px)', lineHeight: 1.02, margin: 0, letterSpacing: '-0.025em' }}
        >

          {/* ── Desktop: 2 lines ─────────────────────────────────────────── */}
          <span aria-hidden className="hero-dt">
            {/* Line 1: I design to perform */}
            <span style={{ display: 'block' }}>
              <span style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, color: 'var(--c-black)' }}>
                <VerticalCutReveal splitBy="characters" staggerDuration={0.04} transition={{ type: 'spring', stiffness: 200, damping: 21 }}>
                  {'I design to '}
                </VerticalCutReveal>
              </span>
              <SparklesHover className="font-display" style={{ color: 'var(--c-black)' }}>
                <VerticalCutReveal splitBy="characters" staggerDuration={0.04} transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 0.3 }}>
                  {'perform'}
                </VerticalCutReveal>
              </SparklesHover>
            </span>
            {/* Line 2: at match speed — starts after line 1 finishes */}
            <span style={{ display: 'block' }}>
              <span style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, color: 'var(--c-black)' }}>
                <VerticalCutReveal splitBy="characters" staggerDuration={0.04} transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 0.85 }}>
                  {'at match '}
                </VerticalCutReveal>
              </span>
              <span className="font-display" style={{ color: 'var(--c-orange)' }}>
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.04}
                  transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 1.1 }}
                >
                  {'speed'}
                </VerticalCutReveal>
              </span>
            </span>
          </span>

          {/* ── Mobile: 3 lines ──────────────────────────────────────────── */}
          <span aria-hidden className="hero-mob">
            {/* Line 1: I design to */}
            <span style={{ display: 'block' }}>
              <span style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, color: 'var(--c-black)' }}>
                <VerticalCutReveal splitBy="characters" staggerDuration={0.04} transition={{ type: 'spring', stiffness: 200, damping: 21 }}>
                  {'I design to'}
                </VerticalCutReveal>
              </span>
            </span>
            {/* Line 2: perform at — starts after line 1 */}
            <span style={{ display: 'block' }}>
              <SparklesHover className="font-display" style={{ color: 'var(--c-black)' }}>
                <VerticalCutReveal splitBy="characters" staggerDuration={0.04} transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 0.65 }}>
                  {'perform'}
                </VerticalCutReveal>
              </SparklesHover>
              <span style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, color: 'var(--c-black)' }}>
                <VerticalCutReveal splitBy="characters" staggerDuration={0.04} transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 0.85 }}>
                  {' at'}
                </VerticalCutReveal>
              </span>
            </span>
            {/* Line 3: match speed — starts after line 2 */}
            <span style={{ display: 'block' }}>
              <span style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, color: 'var(--c-black)' }}>
                <VerticalCutReveal splitBy="characters" staggerDuration={0.04} transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 1.2 }}>
                  {'match '}
                </VerticalCutReveal>
              </span>
              <span className="font-display" style={{ color: 'var(--c-orange)' }}>
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.04}
                  transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 1.4 }}
                >
                  {'speed'}
                </VerticalCutReveal>
              </span>
            </span>
          </span>

        </h1>
      </section>

      <WorkSection />

      <section id="about" className="page-section" style={{ paddingTop: '40px' }}>

        <RacingStripeBand label="About me" linesFrom="right" animateOnScroll />

        <div className="inner">

          <div className="about-row">

            <motion.div
              className="about-photo"
              style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', backgroundColor: 'rgba(241,94,34,0.3)' }}
              {...scrollFadeUp}
            >
              <Image
                src="/images/me2.png"
                alt="Thomas Plowman"
                fill
                sizes="(max-width: 899px) 100vw, 33vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </motion.div>

            <motion.div
              className="about-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ type: 'spring', stiffness: 160, damping: 24, delay: 0.15 }}
            >
              <p
                style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, fontSize: 'clamp(24px, 2.78vw, 40px)', lineHeight: 1.08, color: 'var(--c-black)', margin: '0 0 var(--sp-4)', letterSpacing: '-0.02em' }}
              >
                Hi, I&apos;m{' '}
                <span className="font-display" style={{ color: 'var(--c-orange)' }}>Thomas</span>
                {' '}an English Product designer currently across the pond in the bay area.
              </p>
              <p
                style={{ fontFamily: 'var(--font-mona-sans), var(--font-dm-sans), sans-serif', fontWeight: 500, fontSize: 'clamp(14px, 1.39vw, 20px)', lineHeight: 1.5, color: 'var(--c-black)', margin: '0 0 var(--sp-6)' }}
              >
                It&apos;s an exciting time to be a product designer with so many possibilities available now.
              </p>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                <a href="mailto:thomasplowman@icloud.com" className="about-btn-solid">
                  <span className="font-display about-btn-inner">
                    <span className="about-btn-text">
                      <LetterSwapPingPong label="Contact" staggerFrom="first" staggerDuration={0.03} />
                    </span>
                  </span>
                </a>
                <a href="#" className="about-btn-outline">
                  <span className="font-display about-btn-inner">
                    <span className="about-btn-text">
                      <LetterSwapPingPong label="Resume" staggerFrom="first" staggerDuration={0.03} />
                    </span>
                  </span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="page-section">

        <RacingStripeBand label="Gallery" linesFrom="left" labelHref="/gallery" animateOnScroll />

        <div className="inner">

          <motion.div
            className="gallery-grid"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 160, damping: 24 }}
          >
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
          </motion.div>

        </div>
      </section>


    </div>
  )
}
