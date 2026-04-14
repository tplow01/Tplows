import RelatedCases from '@/components/RelatedCases'
import { CaseLabel } from '@/components/CaseLabel'

// Figma asset — expires in 7 days; swap for /images/Mindset_hero.jpg when ready
const HERO_IMG = 'https://www.figma.com/api/mcp/asset/0baefc04-9cb0-47c5-b3e4-296180672eb4'

// Mindset palette
// Page bg:   linear-gradient(114.68deg, #f0f4f8 0%, #e8f0f7 50%, #f5f0f8 100%)
// Text:      #2d3748  (slate blue-grey)
// Accent:    #2dd4bf  (teal — used for strokes)
// Hero card: #2d3748

export default function MindsetPage() {
  return (
    <>
      {/* ── Page-scoped styles ─────────────────────────────────────────── */}
      <style>{`

        /* ── Root ── */
        .ms {
          padding-top: var(--nav-h);
          background: #eaf1f8;
          overflow-x: hidden;
        }

        /* Content wrapper */
        .ms-w {
          max-width: var(--grid-max);
          margin-left:  auto;
          margin-right: auto;
          padding-left:  var(--grid-margin);
          padding-right: var(--grid-margin);
        }

        /* ── Hero ── */
        .ms-hero {
          border-radius: var(--radius-card);
          overflow: hidden;
          height: clamp(280px, 47.9vw, 690px);
          position: relative;
          background: #2d3748;
          margin-top: var(--sp-6);
          margin-bottom: clamp(20px, 2.1vw, 30px);
        }
        .ms-hero img {
          position: absolute;
          width: 119%;          /* matches Figma 1566/1322 ≈ 118.5% */
          height: 128%;         /* matches Figma 881/690 ≈ 127.7% */
          left: -19%;           /* Figma left: -246px / 1322px ≈ -18.6% */
          top: clamp(-70px, -6.9vw, -40px);
          object-fit: cover;
          object-position: center;
        }

        /* ── Full-bleed section dividers ─────────────────────────────────
           Same pattern as Next Gen / Paywall FC.
           Strokes are Mindset teal (#2dd4bf).
        ─────────────────────────────────────────────────────────────── */

        /* Case header: ————————————————— Mindset */
        .ms-case-hdr {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.67vw, 24px);
          padding-left: 0;
          padding-right: var(--grid-margin);
          margin-bottom: clamp(32px, 4.4vw, 64px);
        }
        .ms-case-hdr-line {
          flex: 1;
          height: clamp(2px, 0.35vw + 1px, 4px);
          border-radius: 999px;
          background: #2dd4bf;
        }
        .ms-case-hdr-label {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #2d3748;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }

        /* Section header: The Problem ——————————————————————— */
        .ms-section-hdr {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.67vw, 24px);
          padding-left: var(--grid-margin);
          padding-right: 0;
          margin-bottom: clamp(32px, 3.33vw, 48px);
        }
        .ms-section-hdr-label {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #2d3748;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }
        .ms-section-hdr-line {
          flex: 1;
          height: clamp(2px, 0.35vw + 1px, 4px);
          border-radius: 999px;
          background: #2dd4bf;
        }

        /* ── Problem title ── */
        .ms-problem-ttl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #2d3748;
          margin: 0 0 clamp(40px, 5.5vw, 80px);
        }

        /* ── Project meta — 3-col ── */
        .ms-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          margin-bottom: clamp(64px, 9vw, 130px);
        }
        .ms-meta-lbl {
          display: block;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #2d3748;
          margin-bottom: clamp(16px, 2.2vw, 32px);
          letter-spacing: -0.02em;
        }
        .ms-meta-val {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: rgba(45,55,72,0.65);
          line-height: 1.6;
        }

        /* Bottom breathing room before RelatedCases */
        .ms-gap { padding-bottom: clamp(64px, 9vw, 130px); }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════ */
        @media (max-width: 767px) {
          .ms-meta { grid-template-columns: 1fr; gap: 32px; }
        }

        @supports (corner-shape: squircle) {
          .ms-hero { corner-shape: squircle; }
        }
      `}</style>

      <div className="ms">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="ms-w">
          <div className="ms-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_IMG} alt="Mindset — app interface" />
          </div>
        </div>

        {/* ── CASE HEADER — full-bleed teal line + "Mindset" label ─────── */}
        <div className="ms-case-hdr">
          <div className="ms-case-hdr-line" aria-hidden="true" />
          <CaseLabel label="Mindset" accent="#2dd4bf" className="ms-case-hdr-label" />
        </div>

        {/* ── PROBLEM TITLE + META ─────────────────────────────────────── */}
        <div className="ms-w">

          <h1 className="ms-problem-ttl">
            A long term plan to battle a worsening problem
          </h1>

          <div className="ms-meta">
            <div>
              <span className="ms-meta-lbl">My position</span>
              <span className="ms-meta-val">Brand designer<br />Web designer</span>
            </div>
            <div>
              <span className="ms-meta-lbl">My gear</span>
              <span className="ms-meta-val">Figma<br />Illustrator<br />After Effects</span>
            </div>
            <div>
              <span className="ms-meta-lbl">Timeline</span>
              <span className="ms-meta-val">September &ndash; November 2025</span>
            </div>
          </div>

        </div>

        {/* ── THE PROBLEM — full-bleed teal line ───────────────────────── */}
        <div className="ms-section-hdr">
          <CaseLabel label="The Problem" accent="#2dd4bf" className="ms-section-hdr-label" />
          <div className="ms-section-hdr-line" aria-hidden="true" />
        </div>

        {/* Content below The Problem goes here as the design is built out */}
        <div className="ms-w ms-gap" />

        {/* ── MORE CASES — on mindset light-blue background ────────────── */}
        <RelatedCases currentSlug="mindset" bg="#eaf1f8" />

      </div>
    </>
  )
}
