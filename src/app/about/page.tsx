import { safeFetch } from '@/lib/sanityFetch'
import { aboutQuery } from '@/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import AboutLinks from '@/components/AboutLinks'

export default async function AboutPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = await safeFetch<any>(aboutQuery)

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── HEADER ──────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--c-black)' }}>
        <div className="g section" style={{ rowGap: 'var(--sp-4)' }}>
          <div className="c9 fade-up fade-up-1">
            <span className="eyebrow">About</span>
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
            Thomas<br />
            <em style={{ color: 'var(--c-orange)', fontStyle: 'inherit' }}>Plowman</em>
          </h1>
          <div className="c2" />
        </div>
      </section>

      {/* ── CONTENT — 4 col photo / 5 col text ──────────── */}
      <section style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="g section" style={{ rowGap: 'var(--sp-12)' }}>

          {/* Photo — cols 1–4 (Gestalt: figure-ground, large area) */}
          <div className="c4">
            {data?.photo ? (
              <Image
                src={urlFor(data.photo).width(680).quality(90).url()}
                alt="Thomas Plowman"
                width={680}
                height={860}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  backgroundColor: 'var(--c-black)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  className="font-display"
                  style={{ fontSize: '80px', color: 'rgba(243,240,234,0.06)', letterSpacing: '-0.05em' }}
                >
                  TP
                </span>
              </div>
            )}
          </div>

          {/* Gap col 5 — breathing room (Gestalt: proximity/closure) */}
          <div className="c1" />

          {/* Text — cols 6–9 */}
          <div
            className="c4"
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-10)', paddingTop: 'var(--sp-6)' }}
          >
            {/* Bio */}
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 'var(--sp-5)' }}>Bio</span>
              {data?.bio ? (
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 'clamp(15px, 1.6vw, 18px)',
                    lineHeight: 1.8,
                    color: 'rgba(21,21,21,0.7)',
                  }}
                >
                  <PortableText value={data.bio} />
                </div>
              ) : (
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 1.8, color: 'rgba(21,21,21,0.7)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
                  <p style={{ margin: 0 }}>
                    I'm Thomas — a UI/UX and graphic designer from Cambridgeshire, England,
                    currently based in San Francisco. I hold an Associate's in Graphic Design and
                    am completing my Bachelor's at Academy of Art University.
                  </p>
                  <p style={{ margin: 0 }}>
                    My work sits at the intersection of sports culture and digital design —
                    building brands, interfaces, and campaigns that move with the energy of the game.
                  </p>
                </div>
              )}
            </div>

            {/* Skills — consistent tag treatment (Gestalt: similarity) */}
            {data?.skills && data.skills.length > 0 && (
              <div>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 'var(--sp-4)' }}>Skills</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                  {data.skills.map((skill: string) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '13px',
                        color: 'var(--c-black)',
                        border: '1px solid rgba(21,21,21,0.14)',
                        padding: 'var(--sp-2) var(--sp-4)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <AboutLinks hasResume={!!data?.resumeFile?.asset} resumeHref="#" />
          </div>
        </div>
      </section>

    </div>
  )
}
