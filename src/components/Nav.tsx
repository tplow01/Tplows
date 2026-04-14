'use client'

import { TransitionLink } from '@/components/page-transition/TransitionLink'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import { PROJECTS } from '@/lib/projects'

function MegaCard({
  project,
  index,
  onClose,
}: {
  project: (typeof PROJECTS)[number]
  index: number
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 22,
        delay: index * 0.055,
      }}
    >
      <TransitionLink href={project.href} className="mega-card" onClick={onClose}>
        <div className="mega-card-thumb" style={{ background: project.bg }}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 900px) 80vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div className="mega-card-coming">
              <span>Coming Soon</span>
            </div>
          )}
          <div className="mega-card-overlay" />
          <span className="mega-card-title font-display">{project.title}</span>
        </div>
      </TransitionLink>
    </motion.div>
  )
}

const RIGHT_LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
]

const HOME_LINK = { href: '/', label: 'Home' }

interface NavStyle {
  /** Nav background colour. */
  bg: string
  /** True → white links + inverted logo (dark pages). */
  dark?: boolean
}

const NAV_STYLES: Record<string, NavStyle> = {
  '/work/next-gen':   { bg: '#1d1f1d', dark: true },
  '/work/paywall-fc': { bg: '#111011', dark: true },
  '/work/mindset':    { bg: '#eaf1f8' },
}

export default function Nav() {
  const pathname = usePathname()
  const casesMegaEnabled = pathname !== '/cases'
  const navConfig = NAV_STYLES[pathname] ?? { bg: '#f7f7fb' }
  const darkNav = navConfig.dark ?? false

  const [menuOpen, setMenuOpen] = useState(false)
  const [casesOpen, setCasesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!casesMegaEnabled) setCasesOpen(false)
  }, [casesMegaEnabled])

  /* Close mobile menu once the new page is loaded (pathname changes during transition,
     while the orange curtain is covering the screen — menu disappears behind it) */
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  function openCases() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setCasesOpen(true)
  }
  function closeCases() {
    closeTimer.current = setTimeout(() => setCasesOpen(false), 140)
  }
  function keepOpen() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const shellClass = `nav-shell${casesOpen && casesMegaEnabled ? ' nav-shell--open' : ''}`

  return (
    <>
      <header
        className={shellClass}
        {...(darkNav ? { 'data-dark': '' } : {})}
        style={{ '--nav-bg': navConfig.bg } as React.CSSProperties}
      >
        <div className="nav-inner">

          <div className="nav-logo-cell">
            <TransitionLink href="/" className="nav-logo" aria-label="Thomas Plowman — home">
              <Image
                src="/logo-wordmark.png"
                alt="Thomas Plowman"
                width={260}
                height={38}
                className="nav-logo-img nav-logo-img--wordmark"
                style={{ objectFit: 'contain' }}
                priority
              />
              <Image
                src="/logo-icon.svg"
                alt=""
                width={42}
                height={78}
                className="nav-logo-img nav-logo-img--icon"
                style={{ objectFit: 'contain', height: 'clamp(32px, 5vw, 38px)', width: 'auto' }}
                aria-hidden
              />
            </TransitionLink>
          </div>

          <div className="nav-right-cluster">
            <nav className="nav-links" aria-label="Primary navigation">

              <TransitionLink
                href={HOME_LINK.href}
                className="nav-link font-display"
              >
                <LetterSwapPingPong
                  label={HOME_LINK.label}
                  staggerFrom="first"
                  staggerDuration={0.03}
                />
              </TransitionLink>

              <div
                className="cases-wrap"
                onMouseEnter={casesMegaEnabled ? openCases : undefined}
                onMouseLeave={casesMegaEnabled ? closeCases : undefined}
              >
                <TransitionLink
                  href="/cases"
                  className={`nav-link font-display${casesOpen && casesMegaEnabled ? ' nav-link--hover' : ''}`}
                >
                  <LetterSwapPingPong
                    label="Cases"
                    staggerFrom="first"
                    staggerDuration={0.03}
                  />
                </TransitionLink>
              </div>

              {RIGHT_LINKS.map(({ href, label }) => (
                <TransitionLink
                  key={href}
                  href={href}
                  className="nav-link font-display"
                >
                  <LetterSwapPingPong
                    label={label}
                    staggerFrom="first"
                    staggerDuration={0.03}
                  />
                </TransitionLink>
              ))}
            </nav>

            <div className="nav-trailing">
              <a href="mailto:thomasplowman@icloud.com" className="nav-cta-wrap" aria-label="Contact">
                <span className="nav-cta-inner">
                  <span className="nav-cta-text font-display">
                    <LetterSwapPingPong
                      label="Contact"
                      staggerFrom="first"
                      staggerDuration={0.03}
                    />
                  </span>
                </span>
              </a>

              <button
                type="button"
                className="nav-burger"
                onClick={() => setMenuOpen(o => !o)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M2 2L16 16M16 2L2 16" stroke="var(--c-orange)" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
                    <rect width="20" height="2.5" rx="1.25" fill="var(--c-orange)"/>
                    <rect y="5.75" width="20" height="2.5" rx="1.25" fill="var(--c-orange)"/>
                    <rect y="11.5" width="20" height="2.5" rx="1.25" fill="var(--c-orange)"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {casesOpen && casesMegaEnabled && (
            <motion.div
              className="mega-panel"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={keepOpen}
              onMouseLeave={closeCases}
            >
              <div className="mega-panel-inner">
                {PROJECTS.map((p, i) => (
                  <MegaCard
                    key={p.slug}
                    project={p}
                    index={i}
                    onClose={() => setCasesOpen(false)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {menuOpen && (
        <div className="nav-overlay" role="dialog" aria-modal="true">
          <nav className="nav-overlay-nav" aria-label="Mobile navigation">
            {[
              { href: '/', label: 'Home' },
              { href: '/cases', label: 'Cases' },
              { href: '/#about', label: 'About' },
              { href: '/gallery', label: 'Gallery' },
            ].map(({ href, label }) => (
              <TransitionLink
                key={href}
                href={href}
                onClick={href.includes('#') ? () => setMenuOpen(false) : undefined}
                className="font-display nav-overlay-link"
              >
                <LetterSwapPingPong
                  label={label}
                  staggerFrom="first"
                  staggerDuration={0.03}
                  className="nav-overlay-shuffle"
                />
              </TransitionLink>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        .nav-shell {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 110;
          background: var(--nav-bg, #f7f7fb);
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }

        /* Logo left — nav links + Contact + menu grouped and right-aligned (desktop) */
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--sp-4);
          height: var(--nav-h);
          padding: 0 var(--grid-margin);
          max-width: var(--grid-max);
          margin: 0 auto;
        }

        .nav-logo-cell {
          flex-shrink: 0;
          min-width: 0;
        }

        .nav-right-cluster {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(16px, 2.5vw, 28px);
          flex-shrink: 0;
          min-width: 0;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-logo-img--icon {
          display: none;
        }
        .nav-logo-img--wordmark {
          display: block;
          max-width: min(260px, 32vw);
          height: auto;
        }

        @media (max-width: 900px) {
          .nav-logo-img--wordmark {
            display: none;
          }
          .nav-logo-img--icon {
            display: block;
          }
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: var(--sp-5);
          flex-wrap: nowrap;
        }

        .nav-trailing {
          display: flex;
          align-items: center;
          gap: clamp(8px, 2vw, 16px);
          flex-shrink: 0;
        }

        .nav-cta-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transform: skewX(-10deg);
          flex-shrink: 0;
        }
        .nav-cta-inner {
          background: var(--c-orange);
          border-radius: 4px;
          padding: 8px 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .nav-cta-wrap:hover .nav-cta-inner { background: #d44d16; }
        .nav-cta-text {
          display: inline-flex;
          align-items: center;
          transform: skewX(10deg);
          font-size: clamp(15px, 1.8vw, 20px);
          letter-spacing: -0.02em;
          color: #f7f7fb;
          white-space: nowrap;
        }

        .nav-link {
          font-size: 20px;
          letter-spacing: -0.02em;
          color: var(--c-black);
          text-decoration: none;
          padding: 4px 0;
          cursor: pointer;
          transition: color 0.15s;
        }
        .nav-link--hover { color: var(--c-orange); }
        .nav-link:hover { color: var(--c-orange); }

        .cases-wrap { position: relative; }

        .mega-panel {
          position: absolute;
          left: 0; right: 0;
          top: 100%;
          background: #f7f7fb;
          box-shadow: 0 16px 40px rgba(21, 21, 21, 0.08);
          border-radius: 0 0 var(--radius-card) var(--radius-card);
          padding: 28px 0 32px;
        }
        /* Cover the shadow seam at the nav/panel junction — always matches nav bg */
        .nav-shell::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0; right: 0;
          height: 4px;
          background: var(--nav-bg, #f7f7fb);
          pointer-events: none;
          z-index: 1;
        }

        .mega-panel-inner {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          max-width: var(--grid-max);
          margin: 0 auto;
          padding: 0 var(--grid-margin);
        }

        .mega-card {
          display: block;
          text-decoration: none;
          border-radius: var(--radius-card);
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s;
          will-change: transform;
        }
        .mega-card:hover {
          transform: scale(0.97);
          box-shadow: 0 8px 32px rgba(21, 21, 21, 0.15);
        }

        .mega-card-thumb {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #111;
        }

        .mega-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(21,21,21,0.5);
          pointer-events: none;
        }

        .mega-card-title {
          position: absolute;
          bottom: 16px;
          left: 18px;
          right: 18px;
          font-size: clamp(20px, 2vw, 28px);
          line-height: 1.05;
          color: #f7f7fb;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mega-card-coming {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mega-card-coming span {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(243, 240, 234, 0.18);
        }

        .nav-burger {
          display: none;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          margin: 0;
          flex-shrink: 0;
          -webkit-tap-highlight-color: transparent;
          transform: skewX(-10deg);
          border-radius: 4px;
          /* Square that matches the CTA pill height (8px padding × 2 + font) */
          width: 36px;
          height: 36px;
        }

        .nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: calc(var(--nav-h) + var(--sp-6)) var(--grid-margin) var(--sp-10);
          box-sizing: border-box;
        }
        .nav-overlay-nav {
          display: flex;
          flex-direction: column;
          gap: var(--sp-10);
          width: 100%;
        }
        .nav-overlay-link {
          font-size: clamp(26px, 5.5vw, 44px);
          letter-spacing: -0.04em;
          color: var(--c-black);
          text-decoration: none;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          width: fit-content;
        }
        /* Shuffle letters: black → orange on hover (same idea as racing stripe band) */
        .nav-overlay-shuffle {
          justify-content: flex-start !important;
        }
        .nav-overlay-shuffle .letter,
        .nav-overlay-shuffle .letter-secondary {
          color: inherit;
          transition: color 0.28s ease;
        }
        .nav-overlay-link .nav-overlay-shuffle {
          color: var(--c-black);
        }
        .nav-overlay-link:hover .nav-overlay-shuffle,
        .nav-overlay-link:hover .nav-overlay-shuffle .letter,
        .nav-overlay-link:hover .nav-overlay-shuffle .letter-secondary {
          color: var(--c-orange);
        }

        @media (max-width: 767px) {
          .nav-inner {
            column-gap: var(--sp-3);
          }
          .nav-links {
            display: none;
          }
          .nav-right-cluster {
            flex: 0 0 auto;
            gap: var(--sp-3);
          }
          .nav-burger {
            display: flex;
          }
        }

        /* ── Dark-nav pages — white links + inverted logo ── */
        .nav-shell[data-dark] .nav-link        { color: #f7f7fb; }
        .nav-shell[data-dark] .nav-link:hover,
        .nav-shell[data-dark] .nav-link--hover { color: var(--c-orange); }
        .nav-shell[data-dark] .nav-logo-img    { filter: brightness(0) invert(1); }
      `}</style>
    </>
  )
}
