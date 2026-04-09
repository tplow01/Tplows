'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/',                label: 'Home'    },
  { href: '/work/next-gen',   label: 'Cases'   },
  { href: '/about',           label: 'About'   },
  { href: '/gallery/imaging', label: 'Gallery' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    if (href === '/work/next-gen')   return pathname.startsWith('/work')
    if (href === '/gallery/imaging') return pathname.startsWith('/gallery')
    return pathname === href
  }

  return (
    <>
      <header className="nav-shell">
        <div className="nav-inner">

          {/* Logo — icon mark + wordmark, matches Figma left zone */}
          <Link href="/" className="nav-logo" aria-label="Thomas Plowman — home">
            <Image
              src="/logo-icon.svg"
              alt=""
              width={22}
              height={40}
              aria-hidden="true"
            />
            <Image
              src="/logo-wordmark.png"
              alt="Thomas Plowman"
              width={160}
              height={24}
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop nav — Home / Cases / About / Gallery / Contact */}
          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link font-display${isActive(href) ? ' nav-link--active' : ''}`}
              >
                {label}
              </Link>
            ))}

            {/* Contact CTA — skewed orange button matching Figma */}
            <Link href="/contact" className="nav-cta-wrap" aria-label="Contact">
              <span className="nav-cta-inner">
                <span className="nav-cta-text font-display">Contact</span>
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
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="nav-overlay" role="dialog" aria-modal="true">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-10)' }}>
            {[...navLinks, { href: '/contact', label: 'Contact' }].map(({ href, label }) => (
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
        .nav-shell {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: var(--nav-h);
          background: rgba(247, 247, 251, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(21,21,21,0.06);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 0 var(--grid-margin);
          max-width: var(--grid-max);
          margin: 0 auto;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: var(--sp-3);
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--sp-5);
        }

        /* Nav links use Hubot Sans — matches Figma exactly */
        .nav-link {
          font-size: 20px;
          letter-spacing: -0.02em;
          color: var(--c-black);
          text-decoration: none;
          transition: color 0.2s;
          padding: 4px 0;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 0; height: 2px;
          background: var(--c-orange);
          transition: width 0.3s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .nav-link:hover::after,
        .nav-link--active::after { width: 100%; }
        .nav-link--active { color: var(--c-orange); }

        /* Contact CTA — skewed orange pill from Figma */
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
          display: inline-block;
          transform: skewX(10deg);
          font-size: 20px;
          letter-spacing: -0.02em;
          color: #f7f7fb;
          white-space: nowrap;
        }

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
