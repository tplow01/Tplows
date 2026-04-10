'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import { PROJECTS } from '@/lib/projects'

// ─── Mega menu card ────────────────────────────────────────────────────────────
function MegaCard({
  project,
  index,
  onClose,
}: {
  project: typeof PROJECTS[number]
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
      <Link href={project.href} className="mega-card" onClick={onClose}>
        {/* Thumbnail */}
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
          <div className="mega-card-scrim" />
        </div>

        {/* Footer */}
        <div className="mega-card-foot">
          <div className="mega-card-foot-left">
            <span className="mega-card-idx">{project.index}</span>
            <span className="mega-card-title font-display">{project.title}</span>
          </div>
          <div className="mega-card-foot-right">
            <span className="mega-card-cat">{project.category}</span>
            <span className="mega-card-arr">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ─── Nav links config ─────────────────────────────────────────────────────────
const RIGHT_LINKS = [
  { href: '/about',           label: 'About'   },
  { href: '/gallery/imaging', label: 'Gallery' },
]

const HOME_LINK = { href: '/', label: 'Home' }

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [casesOpen, setCasesOpen] = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isDark =
    pathname.startsWith('/work') ||
    pathname === '/about' ||
    pathname.startsWith('/gallery')

  // Scroll-aware background
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function openCases()  {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setCasesOpen(true)
  }
  function closeCases() {
    closeTimer.current = setTimeout(() => setCasesOpen(false), 140)
  }
  function keepOpen()   {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const shellClass = [
    'nav-shell',
    isDark    ? 'nav-shell--dark'     : '',
    scrolled  ? 'nav-shell--scrolled' : '',
    casesOpen ? 'nav-shell--open'     : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={shellClass}>
        <div className="nav-inner">

          {/* Left — logo only */}
          <Link href="/" className="nav-logo" aria-label="Thomas Plowman — home">
            <Image
              src="/logo-wordmark.png"
              alt="Thomas Plowman"
              width={260}
              height={38}
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Right — Home, Cases, About, Gallery, Contact */}
          <nav className="nav-links" aria-label="Primary navigation">

            {/* Home */}
            <Link
              href={HOME_LINK.href}
              className={`nav-link font-display${isDark ? ' nav-link--dark' : ''}`}
            >
              <LetterSwapPingPong
                label={HOME_LINK.label}
                staggerFrom="first"
                staggerDuration={0.03}
              />
            </Link>

            {/* Cases trigger */}
            <div
              className="cases-wrap"
              onMouseEnter={openCases}
              onMouseLeave={closeCases}
            >
              <span
                className={`nav-link font-display${isDark ? ' nav-link--dark' : ''}${casesOpen ? ' nav-link--hover' : ''}`}
              >
                <LetterSwapPingPong
                  label="Cases"
                  staggerFrom="first"
                  staggerDuration={0.03}
                />
              </span>
            </div>

            {/* About + Gallery */}
            {RIGHT_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link font-display${isDark ? ' nav-link--dark' : ''}`}
              >
                <LetterSwapPingPong
                  label={label}
                  staggerFrom="first"
                  staggerDuration={0.03}
                />
              </Link>
            ))}

            {/* Contact CTA */}
            <Link href="/contact" className="nav-cta-wrap" aria-label="Contact">
              <span className="nav-cta-inner">
                <span className="nav-cta-text font-display">
                  <LetterSwapPingPong
                    label="Contact"
                    staggerFrom="first"
                    staggerDuration={0.03}
                  />
                </span>
              </span>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="burger-line" style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span className="burger-line" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="burger-line" style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* ── Full-width mega menu ──────────────────────────────────────────── */}
        <AnimatePresence>
          {casesOpen && (
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

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="nav-overlay" role="dialog" aria-modal="true">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-10)' }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/work/next-gen', label: 'Cases' },
              { href: '/about', label: 'About' },
              { href: '/gallery/imaging', label: 'Gallery' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display nav-overlay-link"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        /* ── Shell ───────────────────────────────────────────────────────── */
        .nav-shell {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.3s ease, backdrop-filter 0.3s ease,
                      border-color 0.3s ease, box-shadow 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        /* After scroll — frosted glass tint */
        .nav-shell--scrolled {
          background: rgba(243, 240, 234, 0.78);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-bottom-color: rgba(21, 21, 21, 0.07);
          box-shadow: 0 1px 24px rgba(21, 21, 21, 0.05);
        }
        .nav-shell--dark.nav-shell--scrolled {
          background: rgba(15, 15, 15, 0.80);
          border-bottom-color: rgba(243, 240, 234, 0.07);
        }
        /* When mega menu is open — always show the glass border */
        .nav-shell--open {
          background: rgba(243, 240, 234, 0.78);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-bottom-color: rgba(21, 21, 21, 0.07);
        }
        .nav-shell--dark.nav-shell--open {
          background: rgba(15, 15, 15, 0.80);
          border-bottom-color: rgba(243, 240, 234, 0.07);
        }

        /* ── Inner row ───────────────────────────────────────────────────── */
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--nav-h);
          padding: 0 var(--grid-margin);
          max-width: var(--grid-max);
          margin: 0 auto;
        }

        /* ── Logo ────────────────────────────────────────────────────────── */
        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* ── Links row ───────────────────────────────────────────────────── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--sp-5);
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
        .nav-link--dark  { color: var(--c-white); }
        .nav-link--hover { color: var(--c-orange); }
        .nav-link:hover  { color: var(--c-orange); }

        /* Cases wrapper — relative so menu attaches to shell, not here */
        .cases-wrap { position: relative; cursor: pointer; }

        /* ── Contact CTA ─────────────────────────────────────────────────── */
        .nav-cta-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transform: skewX(-10deg);
          margin-left: var(--sp-2);
        }
        .nav-cta-inner {
          background: var(--c-orange);
          border-radius: 4px;
          padding: 8px 22px;
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
          font-size: 20px;
          letter-spacing: -0.02em;
          color: #f7f7fb;
          white-space: nowrap;
        }

        /* ── Full-width mega panel ────────────────────────────────────────── */
        .mega-panel {
          position: absolute;
          left: 0; right: 0;
          top: 100%;
          background: rgba(243, 240, 234, 0.88);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          border-bottom: 1px solid rgba(21, 21, 21, 0.08);
          box-shadow: 0 24px 64px rgba(21, 21, 21, 0.10);
          padding: 28px 0 32px;
        }
        .nav-shell--dark .mega-panel {
          background: rgba(18, 18, 18, 0.90);
          border-bottom-color: rgba(243, 240, 234, 0.07);
        }

        /* 9-col grid constrained to same max-width as page grid */
        .mega-panel-inner {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          max-width: var(--grid-max);
          margin: 0 auto;
          padding: 0 var(--grid-margin);
        }

        /* ── Mega card ───────────────────────────────────────────────────── */
        .mega-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid rgba(21, 21, 21, 0.08);
          transition: border-color 0.25s, box-shadow 0.35s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
          will-change: transform;
        }
        .mega-card:hover {
          border-color: rgba(241, 94, 34, 0.30);
          box-shadow: 0 12px 40px rgba(241, 94, 34, 0.10);
          transform: translateY(-3px);
        }
        .nav-shell--dark .mega-card {
          border-color: rgba(243, 240, 234, 0.08);
        }
        .nav-shell--dark .mega-card:hover {
          border-color: rgba(241, 94, 34, 0.40);
        }

        /* Thumbnail — 16:9 */
        .mega-card-thumb {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #111;
        }
        .mega-card-scrim {
          position: absolute;
          inset: 0;
          background: rgba(21,21,21,0.22);
          opacity: 0;
          transition: opacity 0.25s;
          pointer-events: none;
          z-index: 1;
        }
        .mega-card:hover .mega-card-scrim { opacity: 1; }
        .mega-card-coming {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mega-card-coming span {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(243, 240, 234, 0.18);
        }

        /* Footer row */
        .mega-card-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 14px 16px 13px;
          background: rgba(255,255,255,0.45);
          border-top: 1px solid rgba(21,21,21,0.06);
        }
        .nav-shell--dark .mega-card-foot {
          background: rgba(30,30,30,0.60);
          border-top-color: rgba(243,240,234,0.06);
        }
        .mega-card-foot-left {
          display: flex;
          align-items: baseline;
          gap: 10px;
          min-width: 0;
        }
        .mega-card-foot-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .mega-card-idx {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.06em;
          color: rgba(21,21,21,0.3);
          flex-shrink: 0;
        }
        .nav-shell--dark .mega-card-idx { color: rgba(243,240,234,0.3); }
        .mega-card-title {
          font-size: 16px;
          letter-spacing: -0.03em;
          color: var(--c-black);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .nav-shell--dark .mega-card-title { color: var(--c-white); }
        .mega-card-cat {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: rgba(21,21,21,0.38);
        }
        .nav-shell--dark .mega-card-cat { color: rgba(243,240,234,0.38); }
        .mega-card-arr {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(21,21,21,0.22);
          transition: color 0.2s, transform 0.2s;
        }
        .nav-shell--dark .mega-card-arr { color: rgba(243,240,234,0.22); }
        .mega-card:hover .mega-card-arr {
          color: var(--c-orange);
          transform: translateX(4px);
        }

        /* ── Mobile hamburger ────────────────────────────────────────────── */
        .nav-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--sp-2);
        }
        .burger-line {
          display: block;
          width: 24px; height: 2px;
          background: var(--c-black);
          transition: transform 0.3s, opacity 0.3s;
        }
        .nav-shell--dark .burger-line { background: var(--c-white); }

        /* ── Mobile overlay ──────────────────────────────────────────────── */
        .nav-overlay {
          position: fixed;
          inset: 0;
          top: var(--nav-h);
          background: var(--c-black);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 var(--grid-margin);
          z-index: 99;
        }
        .nav-overlay-link {
          font-size: clamp(36px, 8vw, 64px);
          letter-spacing: -0.04em;
          color: var(--c-white);
          text-decoration: none;
          line-height: 1;
          transition: color 0.2s;
        }
        .nav-overlay-link:hover { color: var(--c-orange); }

        @media (max-width: 767px) {
          .nav-links  { display: none; }
          .nav-burger { display: flex; }
        }
      `}</style>
    </>
  )
}
