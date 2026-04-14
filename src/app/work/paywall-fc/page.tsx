import RelatedCases from '@/components/RelatedCases'
import { CaseLabel } from '@/components/CaseLabel'

export default function PaywallFcPage() {
  return (
    <>
      {/* ── Page-scoped styles ─────────────────────────────────────────── */}
      <style>{`

        /* ── Root ── */
        .pw {
          padding-top: var(--nav-h);
          background: #111011;
          overflow-x: hidden;
        }

        /* Content wrapper */
        .pw-w {
          max-width: var(--grid-max);
          margin-left:  auto;
          margin-right: auto;
          padding-left:  var(--grid-margin);
          padding-right: var(--grid-margin);
        }

        /* ── Hero ── */
        .pw-hero {
          border-radius: var(--radius-card);
          height: clamp(280px, 47.9vw, 690px);
          /* Light-blue Figma placeholder — replace with an <img> once the
             production hero asset is ready */
          background: #dcebf8;
          margin-top: var(--sp-6);
          margin-bottom: clamp(20px, 2.1vw, 30px);
          overflow: hidden;
          position: relative;
        }

        /* ── Full-bleed section dividers ──────────────────────────────────
           Same full-bleed trick as Next Gen — outside .pw-w so they reach
           both viewport edges. Lines use brand orange for Paywall FC.
        ─────────────────────────────────────────────────────────────── */

        /* Case header: ————————————————— Paywall Fc */
        .pw-case-hdr {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.67vw, 24px);
          padding-left: 0;
          padding-right: var(--grid-margin);
          margin-bottom: clamp(32px, 4.4vw, 64px);
        }
        .pw-case-hdr-line {
          flex: 1;
          height: clamp(2px, 0.35vw + 1px, 4px);
          border-radius: 999px;
          background: #ffd107;
        }
        .pw-case-hdr-label {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #dcebf8;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }

        /* Section header: The Problem ——————————————————————— */
        .pw-section-hdr {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.67vw, 24px);
          padding-left: var(--grid-margin);
          padding-right: 0;
          margin-bottom: clamp(32px, 3.33vw, 48px);
        }
        .pw-section-hdr-label {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #dcebf8;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }
        .pw-section-hdr-line {
          flex: 1;
          height: clamp(2px, 0.35vw + 1px, 4px);
          border-radius: 999px;
          background: #ffd107;
        }

        /* ── Problem title ── */
        .pw-problem-ttl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #dcebf8;
          margin: 0 0 clamp(40px, 5.5vw, 80px);
        }

        /* ── Project meta — 3-col ── */
        .pw-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          margin-bottom: clamp(64px, 9vw, 130px);
        }
        .pw-meta-lbl {
          display: block;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #dcebf8;
          margin-bottom: clamp(16px, 2.2vw, 32px);
          letter-spacing: -0.02em;
        }
        .pw-meta-val {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: rgba(220,235,248,0.7);
          line-height: 1.6;
        }

        /* Bottom breathing room before RelatedCases */
        .pw-gap { padding-bottom: clamp(64px, 9vw, 130px); }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════ */
        @media (max-width: 767px) {
          .pw-meta { grid-template-columns: 1fr; gap: 32px; }
        }

        @supports (corner-shape: squircle) {
          .pw-hero { corner-shape: squircle; }
        }
      `}</style>

      <div className="pw">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="pw-w">
          {/* Light-blue placeholder matching Figma — swap for <img> once
              the production hero asset is ready */}
          <div className="pw-hero" role="img" aria-label="Paywall FC hero" />
        </div>

        {/* ── CASE HEADER — full-bleed orange line + "Paywall Fc" label ── */}
        <div className="pw-case-hdr">
          <div className="pw-case-hdr-line" aria-hidden="true" />
          <CaseLabel label="Paywall Fc" accent="#ffd107" className="pw-case-hdr-label" />
        </div>

        {/* ── PROBLEM TITLE + META ─────────────────────────────────────── */}
        <div className="pw-w">

          <h1 className="pw-problem-ttl">
            A long term plan to battle a worsening problem
          </h1>

          <div className="pw-meta">
            <div>
              <span className="pw-meta-lbl">My position</span>
              <span className="pw-meta-val">Brand designer<br />Web designer</span>
            </div>
            <div>
              <span className="pw-meta-lbl">My gear</span>
              <span className="pw-meta-val">Figma<br />Illustrator<br />After Effects</span>
            </div>
            <div>
              <span className="pw-meta-lbl">Timeline</span>
              <span className="pw-meta-val">February &ndash; April 2026</span>
            </div>
          </div>

        </div>

        {/* ── THE PROBLEM — full-bleed orange line ─────────────────────── */}
        <div className="pw-section-hdr">
          <CaseLabel label="The Problem" accent="#ffd107" className="pw-section-hdr-label" />
          <div className="pw-section-hdr-line" aria-hidden="true" />
        </div>

        {/* Content below The Problem goes here as the design is built out */}
        <div className="pw-w pw-gap" />

        {/* ── MORE CASES ─────────────────────────────────────────────── */}
        <RelatedCases currentSlug="paywall-fc" dark darkBg="#111011" />

      </div>
    </>
  )
}
