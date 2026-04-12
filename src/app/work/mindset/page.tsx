import Image from 'next/image'
import { TransitionLink } from '@/components/page-transition/TransitionLink'
import RelatedCases from '@/components/RelatedCases'

const HERO_COVER = '/images/Mindset_1.jpg'

export default function MindsetPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      <section style={{ backgroundColor: 'var(--c-black)', overflow: 'hidden', position: 'relative' }}>
        <span
          className="font-display"
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 'var(--grid-margin)',
            bottom: '-12%',
            fontSize: 'clamp(52px, 10vw, 150px)',
            color: 'rgba(243,240,234,0.03)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.06em',
          }}
        >
          M
        </span>

        <div className="g section" style={{ rowGap: 'var(--sp-6)', position: 'relative' }}>

          <div className="c3 self-center fade-up fade-up-1">
            <TransitionLink
              href="/"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                color: 'rgba(243,240,234,0.35)',
                textDecoration: 'none',
              }}
            >
              ← Back
            </TransitionLink>
          </div>
          <div className="c1" />
          <div className="c4 fade-up fade-up-1">
            <span className="eyebrow">Brand &amp; UX</span>
          </div>
          <div className="c4" />

          <h1
            className="c9 font-display fade-up fade-up-2"
            style={{
              fontSize: 'clamp(30px, 5.8vw, 84px)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--c-white)',
              margin: 0,
            }}
          >
            Mindset
          </h1>
          <div className="c3" />

          <p
            className="c7 fade-up fade-up-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: 'rgba(243,240,234,0.5)',
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            Mental performance brand identity and digital experience built for elite athletes at the edge — from
            verbal identity to UI that stays calm when the moment isn&apos;t.
          </p>
          <div className="c5" />
        </div>
      </section>

      <div style={{ lineHeight: 0 }}>
        <Image
          src={HERO_COVER}
          alt="Mindset — brand and interface"
          width={1600}
          height={900}
          priority
          style={{ width: '100%', height: 'clamp(220px, 38vw, 560px)', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <section style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="g section">
          <div className="c12" style={{ marginBottom: 'var(--sp-3)' }}>
            <span className="eyebrow">Overview</span>
          </div>
          <div
            className="c8"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(16px, 1.7vw, 19px)',
              lineHeight: 1.8,
              color: 'rgba(21,21,21,0.7)',
            }}
          >
            <p style={{ margin: '0 0 1.25em' }}>
              Mindset is built around a single idea: clarity under pressure. The visual system pairs warm, grounded
              neutrals with sharp orange accents so hierarchy reads in a split second — whether someone is checking in
              before a match or reviewing a plan the night before.
            </p>
            <p style={{ margin: 0 }}>
              Typography mixes confident display moments with readable body copy, and the digital experience keeps
              navigation shallow and predictable so athletes spend less time hunting controls and more time on their
              preparation.
            </p>
          </div>
          <div className="c4" />
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--c-black)' }}>
        <div className="g section" style={{ rowGap: 'var(--sp-6)' }}>
          <div className="c12">
            <span className="eyebrow">Identity &amp; UI</span>
          </div>
          <div className="c5 self-center" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(22px, 2.85vw, 38px)',
                letterSpacing: '-0.035em',
                color: 'var(--c-white)',
                margin: 0,
              }}
            >
              Cohesive from mark to screen
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', color: 'rgba(243,240,234,0.5)', lineHeight: 1.7, margin: 0 }}>
              The identity carries through social, product surfaces, and presentation decks: consistent corner radii,
              shared elevation, and photography that feels candid rather than stock — always in service of trust.
            </p>
          </div>
          <div className="c2" />
          <div className="c5">
            <Image
              src={HERO_COVER}
              alt="Mindset visual design detail"
              width={800}
              height={520}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-card)' }}
            />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--c-white)' }}>
        <div className="g section">
          <div className="c12" style={{ marginBottom: 'var(--sp-3)' }}>
            <span className="eyebrow">Outcome</span>
          </div>
          <p
            className="c8"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(16px, 1.7vw, 19px)',
              lineHeight: 1.8,
              color: 'rgba(21,21,21,0.7)',
              margin: 0,
            }}
          >
            The outcome is a coherent brand and product story: image-forward, easy to scan, and ready to present —
            from first impression through to the details in UI and photography.
          </p>
          <div className="c4" />
        </div>
      </section>

      <RelatedCases currentSlug="mindset" />
    </div>
  )
}
