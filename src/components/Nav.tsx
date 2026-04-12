'use client'

import { TransitionLink } from '@/components/page-transition/TransitionLink'
import Image from 'next/image'
import { useState, useRef } from 'react'
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
          {/* Dark overlay — matches case cards */}
          <div className="mega-card-overlay" />
          {/* Title on image — Hubot Sans ExtraBold Italic, same as case cards */}
          <span className="mega-card-title font-display">{project.title}</span>
        </div>
      </TransitionLink>
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
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [casesOpen, setCasesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

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

  const shellClass = `nav-shell${casesOpen ? ' nav-shell--open' : ''}`

  return (
    <>
      <header className={shellClass}>
        <div className="nav-inner">

          {/* Left — logo only */}
          <TransitionLink href="/" className="nav-logo" aria-label="Thomas Plowman — home">
            <Image
              src="/logo-wordmark.png"
              alt="Thomas Plowman"
              width={260}
              height={38}
              style={{ objectFit: 'contain' }}
            />
          </TransitionLink>

          {/* Right — Home, Cases, About, Gallery, Contact */}
          <nav className="nav-links" aria-label="Primary navigation">

            {/* Home */}
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

            {/* Cases trigger */}
            <div
              className="cases-wrap"
              onMouseEnter={openCases}
              onMouseLeave={closeCases}
            >
              <span
                className={`nav-link font-display${casesOpen ? ' nav-link--hover' : ''}`}
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

            {/* Contact CTA */}
            <TransitionLink href="/contact" className="nav-cta-wrap" aria-label="Contact">
              <span className="nav-cta-inner">
                <span className="nav-cta-text font-display">
                  <LetterSwapPingPong
                    label="Contact"
                    staggerFrom="first"
                    staggerDuration={0.03}
                  />
                </span>
              </span>
            </TransitionLink>
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
              <TransitionLink
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display nav-overlay-link"
              >
                {label}
              </TransitionLink>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        /* ── Shell — always solid #F7F7FB ───────────────────────────────── */
        .nav-shell {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: #f7f7fb;
          transition: box-shadow 0.3s ease;
        }
        /* No extra style on the shell when open — shadow lives on the panel */

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

        /* ── Links row ─────────────────────────────────────────────────────────────── */
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

        /* ── Full-width mega panel ───────────────────────────────────────── */
        .mega-panel {
          position: absolute;
          left: 0; right: 0;
          top: 100%;
          background: #f7f7fb;
          /* Shadow offset downward so it only appears below the panel, not between panel and nav */
          box-shadow: 0 16px 40px rgba(21, 21, 21, 0.08);
          border-radius: 0 0 var(--radius-card) var(--radius-card);
          padding: 28px 0 32px;
        }

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

        /* Thumbnail — 16:9, image fills it */
        .mega-card-thumb {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #111;
        }

        /* Flat dark overlay — same as case cards */
        .mega-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(21,21,21,0.5);
          pointer-events: none;
        }

        /* Title on image — Hubot Sans ExtraBold Italic, bottom-left */
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
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(243, 240, 234, 0.18);
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
          font-size: clamp(26px, 5.5vw, 44px);
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
