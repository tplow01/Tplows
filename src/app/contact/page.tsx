'use client'

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── HEADER ──────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--c-black)', overflow: 'hidden', position: 'relative' }}>
        <span
          className="font-display"
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 'var(--grid-margin)',
            bottom: '-14%',
            fontSize: 'clamp(80px, 18vw, 260px)',
            color: 'rgba(243,240,234,0.03)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.06em',
          }}
        >
          HI
        </span>

        <div className="g section" style={{ rowGap: 'var(--sp-4)', position: 'relative' }}>
          <div className="c9 fade-up fade-up-1">
            <span className="eyebrow">Contact</span>
          </div>
          <h1
            className="c7 font-display fade-up fade-up-2"
            style={{
              fontSize: 'clamp(48px, 9vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--c-white)',
              margin: 0,
            }}
          >
            Let's work<br />
            <em style={{ color: 'var(--c-orange)', fontStyle: 'inherit' }}>together</em>
          </h1>
          <div className="c2" />
          <p
            className="c5 fade-up fade-up-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: 'rgba(243,240,234,0.4)',
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            Open to freelance work, collaborations, and full-time opportunities.
          </p>
          <div className="c4" />
        </div>
      </section>

      {/* ── CONTACT BODY ────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="g section" style={{ rowGap: 'var(--sp-12)' }}>

          {/*
            Direct contact info — cols 1–3
            Breathing space — col 4
            Form — cols 5–9
            (Gestalt: proximity — info group / form group clearly separated)
          */}

          {/* Direct info block */}
          <div className="c3" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-8)' }}>

            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 'var(--sp-4)' }}>Email</span>
              <a
                href="mailto:thomasplowman@icloud.com"
                className="link-orange"
                style={{
                  fontFamily: "'Hubot Sans', sans-serif",
                  fontWeight: 800,
                  fontStyle: 'oblique -10deg',
                  fontSize: 'clamp(13px, 1.4vw, 16px)',
                  letterSpacing: '-0.02em',
                  color: 'var(--c-black)',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                }}
              >
                thomasplowman<br />@icloud.com
              </a>
            </div>

            {/* Social — consistent label+value (Gestalt: similarity) */}
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 'var(--sp-4)' }}>Social</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
                {[
                  { href: 'https://instagram.com/tplows.design',      label: 'Instagram', handle: '@tplows.design' },
                  { href: 'https://linkedin.com/in/thomas-plowman',   label: 'LinkedIn',  handle: 'thomas-plowman' },
                ].map(({ href, label, handle }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-orange"
                    style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--sp-1)' }}
                  >
                    <span
                      className="font-display"
                      style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(21,21,21,0.35)' }}
                    >
                      {label}
                    </span>
                    <span
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--c-black)' }}
                    >
                      {handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Gutter col */}
          <div className="c1" />

          {/* Form — cols 5–9 = span 5 */}
          <form
            action="mailto:thomasplowman@icloud.com"
            method="get"
            encType="text/plain"
            className="c5"
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-8)' }}
          >
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 'var(--sp-5)' }}>Send a message</span>
            </div>

            {/* Fields — consistent bottom-border style (Gestalt: similarity) */}
            {[
              { id: 'subject', label: 'Name / Subject', type: 'text' },
            ].map(({ id, label, type }) => (
              <label key={id} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(21,21,21,0.35)',
                  }}
                >
                  {label}
                </span>
                <input
                  id={id}
                  name={id}
                  type={type}
                  style={{
                    width: '100%',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    color: 'var(--c-black)',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(21,21,21,0.15)',
                    padding: 'var(--sp-3) 0',
                    outline: 'none',
                  }}
                />
              </label>
            ))}

            <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(21,21,21,0.35)',
                }}
              >
                Message
              </span>
              <textarea
                name="body"
                rows={5}
                style={{
                  width: '100%',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  color: 'var(--c-black)',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(21,21,21,0.15)',
                  padding: 'var(--sp-3) 0',
                  resize: 'none',
                  outline: 'none',
                }}
              />
            </label>

            <div>
              <button
                type="submit"
                className="font-display"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--c-white)',
                  background: 'var(--c-orange)',
                  border: 'none',
                  padding: 'var(--sp-4) var(--sp-8)',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--c-black)')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--c-orange)')}
              >
                Send →
              </button>
            </div>
          </form>

        </div>
      </section>

    </div>
  )
}
