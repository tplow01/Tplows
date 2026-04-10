'use client'

import Link from 'next/link'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'

const socialLinks = [
  { href: 'https://instagram.com/tplows.design', label: 'Instagram' },
  { href: 'https://linkedin.com/in/thomas-plowman', label: 'LinkedIn' },
]

const pageLinks = [
  { href: '/',                label: 'Home'    },
  { href: '/work/next-gen',   label: 'Cases'   },
  { href: '/about',           label: 'About'   },
  { href: '/gallery/imaging', label: 'Gallery' },
  { href: '/contact',         label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer-root">

      <div className="footer-inner">

        {/* ── Col 1 — Icon mark ──────────────────────────────── */}
        <div className="footer-col footer-col--icon" aria-hidden="true">
          <svg
            viewBox="0 0 62.8 116.37"
            xmlns="http://www.w3.org/2000/svg"
            className="footer-icon-svg"
            aria-hidden="true"
          >
            <path
              fill="white"
              d="M56.51,24.48c.09.63-.11,1.28-.29,2.42-.25,1.42-.58,3.2-.81,4.49-.26,1.29-.23,1.96-1.03,2.6-.6.51-1.29.52-1.99.36-2.64-.47-12.18-2.19-14.64-2.63-.96-.23-1.18.29-1.38,1.19-.22,1.07-.47,2.55-.63,3.57-.3,1.41.79,1.73,1.98,2.04,19.19,4.67,30.94,23.75,22.09,40.04-.8,1.34-1.56,2.86-2.77,3.87-.67.44-1.38.15-2.04-.12-2.91-1.26-6.49-1.11-9.09.77-1.22.68-2.12,2.68-3.49,2.36-1.1-.44-2.01-1.31-3.04-1.97-1.06-.73-2.61-1.64-.95-2.75,4.66-2.2,8.81-5.65,10.03-10.84,1.94-8.24-3.92-16.42-12.93-19.17-.65-.21-1.91-.4-2.23-.24-1.16,3.8-8.63,48.06-10.8,59.27-.02.94-1.16,1.84-1.98,1.98-2.8.8-12.83,3.77-15.64,4.57-1.84.51-2.68-1.53-2.41-1.94,1.04-5.68,13.1-73.04,15.3-85.25.28-.75-.62-.97-1.2-1.06-.66-.13-1.81-.32-3.02-.54-1.75-.31-3.73-.67-5.58-1-2.63-.47-4.95-.89-6.09-1.09-.51-.08-1-.25-1.34-.67-.89-1.06-.49-1.88-.23-3.55.11-.62.22-1.24.33-1.86.19-1.06.43-2.43.6-3.32.11-.99.56-1.99,1.54-2.34,4.37.18,39.24,7.01,52.32,9.17.68.13,1.18.82,1.39,1.6v.05Z"
            />
            <path
              fill="white"
              d="M38.24,8.36c-2.22,9.72-16.66,5.67-13.47-3.78,1.7-5.21,8.73-6.1,12.08-2.04,1.22,1.39,1.82,3.74,1.41,5.73l-.02.09Z"
            />
            <path
              fill="white"
              d="M58.3,93.14c-1.38,9.79-16.08,6.88-13.61-2.7,1.35-5.3,8.13-6.67,11.79-2.91,1.3,1.27,2.07,3.53,1.82,5.54v.07Z"
            />
          </svg>
        </div>

        {/* ── Col 2 — Social ─────────────────────────────────── */}
        <div className="footer-col">
          <span className="footer-label font-display">Social</span>
          <nav className="footer-links" aria-label="Social media links">
            {socialLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link font-display"
              >
                <LetterSwapPingPong label={label} staggerFrom="first" staggerDuration={0.03} />
              </a>
            ))}
          </nav>
        </div>

        {/* ── Col 3 — Pages ──────────────────────────────────── */}
        <div className="footer-col">
          <span className="footer-label font-display">Pages</span>
          <nav className="footer-links" aria-label="Site pages">
            {pageLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="footer-link font-display">
                <LetterSwapPingPong label={label} staggerFrom="first" staggerDuration={0.03} />
              </Link>
            ))}
          </nav>
        </div>

      </div>

      {/* ── Copyright strip ────────────────────────────────────── */}
      <div className="footer-copy">
        <p>© 2026 Thomas Plowman</p>
      </div>

      <style>{`
        .footer-root {
          background: linear-gradient(to top, var(--c-orange) 0%, #f7f7fb 100%);
          padding: clamp(var(--sp-12), 6vw, var(--sp-20)) var(--grid-margin) 0;
        }

        .footer-inner {
          max-width: var(--grid-max);
          margin: 0 auto;
          display: flex;
          gap: clamp(var(--sp-8), 4vw, var(--sp-16));
          align-items: flex-end;
        }

        /* Col 1 — icon sits flush to the bottom, oversized and decorative */
        .footer-col--icon {
          flex: 1.2;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          min-height: clamp(180px, 22vw, 320px);
        }
        .footer-icon-svg {
          width: clamp(100px, 14vw, 180px);
          height: auto;
          display: block;
          opacity: 0.92;
          transform: translateY(12%);
        }

        /* Cols 2 & 3 */
        .footer-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--sp-6);
          padding-bottom: var(--sp-10);
        }

        .footer-label {
          font-size: clamp(28px, 3.5vw, 48px);
          letter-spacing: -0.04em;
          color: var(--c-black);
          display: block;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--sp-2);
        }

        .footer-link {
          font-size: clamp(14px, 1.4vw, 18px);
          letter-spacing: -0.02em;
          color: rgba(21, 21, 21, 0.55);
          text-decoration: none;
          display: inline-flex;
          transition: color 0.2s;
          width: fit-content;
        }
        .footer-link:hover { color: var(--c-black); }

        /* Copyright strip */
        .footer-copy {
          max-width: var(--grid-max);
          margin: 0 auto;
          padding: var(--sp-6) 0;
          border-top: 1px solid rgba(21, 21, 21, 0.1);
          margin-top: var(--sp-10);
        }
        .footer-copy p {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: rgba(21, 21, 21, 0.35);
          margin: 0;
          text-transform: uppercase;
        }

        @media (max-width: 767px) {
          .footer-col--icon { display: none; }
          .footer-inner { flex-direction: column; align-items: flex-start; gap: var(--sp-10); }
          .footer-col { padding-bottom: 0; }
        }
      `}</style>
    </footer>
  )
}
