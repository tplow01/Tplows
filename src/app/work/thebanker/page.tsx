'use client'

import { RacingStripeBand } from '@/components/RacingStripeBand'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import { motion } from 'framer-motion'
import RelatedCases from '@/components/RelatedCases'

const scrollFadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { type: 'spring', stiffness: 160, damping: 24 },
} as const

const DECISIONS = [
  { label: 'Slip entry',    choice: 'OCR screenshot',     rationale: 'Zero manual entry for the user.' },
  { label: 'Persistence',   choice: 'Ephemeral',          rationale: 'Disappearing is the feature.' },
  { label: 'Non-bettors',   choice: 'Spectator access',   rationale: 'Inclusion without friction.' },
  { label: 'Distribution',  choice: 'Bettor shares the code', rationale: 'No marketing needed.' },
  { label: 'Stats',         choice: 'Free and core',      rationale: 'Not a paywall, a baseline.' },
  { label: 'Revenue',       choice: 'Freemium',           rationale: 'Permanent rooms for power users.' },
] as const

export default function TheBankerPage() {
  return (
    <>
      <style>{`

        /* ── Root ──
           theBanker brand palette overrides the global orange accent to lime,
           and uses pure white / near-black instead of the warm site greys.
           --c-orange is scoped so shared components (RacingStripeBand, buttons)
           pick up the lime automatically. */
        .tb {
          padding-top: var(--nav-h);
          background: #FFFFFF;
          color: #0D0D0D;
          --c-orange: #C8FF00;
          --c-orange-strong: #b8eb00;
          --tb-bg: #FFFFFF;
          --tb-off: #F5F5F3;
          --tb-dark: #0D0D0D;
          --tb-lime: #C8FF00;
          --tb-border: #E5E5E3;
          --tb-muted: #888884;
          --tb-text: #0D0D0D;
          --text-inverse: #0D0D0D;
          --text-inverse-muted: #888884;
          overflow-x: hidden;
        }

        .tb-w {
          max-width: var(--grid-max);
          margin-left:  auto;
          margin-right: auto;
          padding-left:  var(--grid-margin);
          padding-right: var(--grid-margin);
        }

        /* Full-bleed strip — used for the overview bar and decisions section */
        .tb-bleed {
          width: 100vw;
          max-width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
        }

        /* ══ HERO ══════════════════════════════════════════════════════ */
        .tb-hero {
          position: relative;
          width: 100%;
          height: calc(100svh - var(--nav-h));
          min-height: 520px;
          background: #000;
          overflow: hidden;
          margin-top: var(--sp-2);
          margin-bottom: clamp(40px, 5.56vw, 80px);
        }
        .tb-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .tb-hero-scrim {
          position: absolute;
          inset: 0;
          background: rgba(13, 13, 13, 0.3);
          pointer-events: none;
        }
        .tb-hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: clamp(24px, 6vw, 96px);
          gap: clamp(16px, 1.67vw, 24px);
          max-width: 1200px;
        }
        .tb-hero-eyebrow {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 600;
          font-size: clamp(12px, 1vw, 14px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--tb-lime);
          margin: 0;
        }
        .tb-hero-h1 {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(44px, 9vw, 144px);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #FFFFFF;
          margin: 0;
          max-width: 14ch;
        }
        .tb-hero-scroll {
          position: absolute;
          right: clamp(16px, 2vw, 32px);
          bottom: clamp(40px, 6vw, 80px);
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          transform: rotate(90deg);
          transform-origin: right top;
        }

        /* ══ OVERVIEW BAR ══════════════════════════════════════════════
           Four columns, full width, divided by 1px borders. */
        .tb-overview {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--tb-border);
          border-bottom: 1px solid var(--tb-border);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .tb-overview-col {
          padding: clamp(20px, 2.22vw, 32px) clamp(20px, 2.22vw, 32px);
          border-left: 1px solid var(--tb-border);
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 0.83vw, 12px);
        }
        .tb-overview-col:first-child { border-left: none; }
        .tb-overview-lbl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(11px, 0.83vw, 12px);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tb-muted);
          margin: 0;
        }
        .tb-overview-val {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.25vw, 18px);
          line-height: 1.45;
          letter-spacing: -0.011em;
          color: var(--tb-text);
          margin: 0;
        }
        .tb-overview-link {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.25vw, 18px);
          line-height: 1.45;
          letter-spacing: -0.011em;
          color: var(--tb-text);
          text-decoration: none;
          display: inline-flex;
          align-items: baseline;
          gap: 0.4em;
          transition: color 0.2s ease;
        }
        .tb-overview-link:hover { color: var(--tb-lime); }
        .tb-overview-link .arrow {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
        }

        /* ══ SECTION SHARED ════════════════════════════════════════════ */
        .tb-section { margin-bottom: clamp(80px, 12.5vw, 180px); }
        .tb-h2 {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(32px, 4.86vw, 70px);
          line-height: 1.02;
          letter-spacing: -0.025em;
          color: var(--tb-text);
          margin: 0 0 clamp(20px, 2.2vw, 32px);
          max-width: 22ch;
        }
        .tb-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(16px, 1.53vw, 22px);
          line-height: 1.55;
          letter-spacing: -0.011em;
          color: var(--tb-text);
          margin: 0;
          max-width: 64ch;
        }

        /* ══ PROBLEM STATS ═════════════════════════════════════════════ */
        .tb-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--tb-border);
          border-bottom: 1px solid var(--tb-border);
          margin-top: clamp(48px, 6.25vw, 90px);
        }
        .tb-stat {
          padding: clamp(24px, 3vw, 44px) clamp(20px, 2.22vw, 32px);
          border-left: 1px solid var(--tb-border);
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 0.83vw, 12px);
        }
        .tb-stat:first-child { border-left: none; }
        .tb-stat-num {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(56px, 8.89vw, 128px);
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: var(--tb-lime);
          margin: 0;
        }
        .tb-stat-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 16px);
          line-height: 1.45;
          letter-spacing: -0.011em;
          color: var(--tb-muted);
          margin: 0;
          max-width: 32ch;
        }

        /* ══ HOW MAY WE ════════════════════════════════════════════════ */
        .tb-hmw {
          background: var(--tb-off);
          padding: clamp(80px, 12vw, 180px) var(--grid-margin);
        }
        .tb-hmw-inner {
          max-width: var(--grid-max);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(16px, 1.67vw, 24px);
          text-align: center;
        }
        .tb-hmw-lbl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(12px, 0.97vw, 14px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--tb-muted);
          margin: 0;
        }
        .tb-hmw-q {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(28px, 4.17vw, 60px);
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: var(--tb-text);
          margin: 0;
          max-width: 22ch;
        }

        /* ══ SOLUTION MEDIA ════════════════════════════════════════════ */
        .tb-solution-media {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--tb-off);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          margin-top: clamp(40px, 5.56vw, 80px);
        }
        .tb-solution-media video,
        .tb-solution-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ══ RESEARCH 3-UP ═════════════════════════════════════════════ */
        .tb-research {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--tb-border);
          border-bottom: 1px solid var(--tb-border);
        }
        .tb-research-col {
          padding: clamp(24px, 2.78vw, 40px);
          border-left: 1px solid var(--tb-border);
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 1.39vw, 20px);
        }
        .tb-research-col:first-child { border-left: none; }
        .tb-research-lbl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(11px, 0.83vw, 12px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--tb-lime);
          margin: 0;
        }
        .tb-research-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.25vw, 17px);
          line-height: 1.55;
          letter-spacing: -0.011em;
          color: var(--tb-text);
          margin: 0;
        }
        .tb-research-sublbl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 600;
          font-size: clamp(11px, 0.83vw, 12px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--tb-muted);
          margin: clamp(8px, 0.83vw, 12px) 0 0;
        }
        .tb-research-finding {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 22px);
          line-height: 1.3;
          letter-spacing: -0.015em;
          color: var(--tb-text);
          margin: 0;
        }

        /* ── Research quotes (two stacked, divided) ── */
        .tb-quotes {
          border-bottom: 1px solid var(--tb-border);
        }
        .tb-quote {
          padding: clamp(40px, 5.56vw, 80px) 0;
          border-top: 1px solid var(--tb-border);
          display: grid;
          grid-template-columns: 2fr 1fr;
          column-gap: var(--grid-gutter);
          align-items: end;
        }
        .tb-quote:first-child { border-top: none; }
        .tb-quote-text {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(22px, 3.33vw, 48px);
          line-height: 1.18;
          letter-spacing: -0.02em;
          color: var(--tb-text);
          margin: 0;
        }
        .tb-quote-attr {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(12px, 1vw, 14px);
          letter-spacing: 0.04em;
          color: var(--tb-muted);
          margin: 0;
          text-align: right;
          justify-self: end;
        }

        /* ══ DECISIONS (dark section) ══════════════════════════════════ */
        .tb-decisions {
          background: var(--tb-dark);
          padding: clamp(80px, 12vw, 180px) 0;
        }
        .tb-decisions-inner {
          max-width: var(--grid-max);
          margin: 0 auto;
          padding: 0 var(--grid-margin);
        }
        .tb-decisions-lbl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(12px, 0.97vw, 14px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 clamp(40px, 5.56vw, 80px);
        }
        .tb-decisions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #222222;
          border: 1px solid #222222;
        }
        .tb-decision-card {
          background: var(--tb-dark);
          padding: clamp(28px, 3.33vw, 48px);
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 1.39vw, 20px);
          min-height: clamp(220px, 24vw, 340px);
          transition: background 0.25s ease;
        }
        .tb-decision-card:hover { background: #1a1a1a; }
        .tb-decision-lbl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 600;
          font-size: clamp(11px, 0.83vw, 12px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--tb-lime);
          margin: 0;
        }
        .tb-decision-choice {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(26px, 3.06vw, 44px);
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: #FFFFFF;
          margin: 0;
        }
        .tb-decision-rationale {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-style: italic;
          font-size: clamp(13px, 1.11vw, 16px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: rgba(255, 255, 255, 0.6);
          margin: auto 0 0;
        }

        /* ══ LIVE PRODUCT ══════════════════════════════════════════════ */
        .tb-screens {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          margin-top: clamp(48px, 6.25vw, 90px);
          margin-bottom: clamp(64px, 8.33vw, 120px);
        }
        .tb-screen {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.11vw, 16px);
        }
        .tb-screen-media {
          aspect-ratio: 9 / 16;
          background: var(--tb-off);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .tb-screen-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .tb-screen-cap {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(12px, 1vw, 14px);
          letter-spacing: -0.005em;
          color: var(--tb-muted);
          margin: 0;
        }

        .tb-session {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: var(--grid-gutter);
          align-items: start;
        }
        .tb-session-photo {
          aspect-ratio: 4 / 5;
          background: var(--tb-off);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        .tb-session-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .tb-session-content {
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 2.22vw, 32px);
        }
        .tb-match-lbl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 600;
          font-size: clamp(11px, 0.83vw, 12px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--tb-muted);
          margin: 0;
        }
        .tb-facts {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid var(--tb-border);
        }
        .tb-fact {
          padding: clamp(14px, 1.39vw, 20px) 0;
          border-bottom: 1px solid var(--tb-border);
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.25vw, 18px);
          line-height: 1.45;
          letter-spacing: -0.011em;
          color: var(--tb-text);
        }
        .tb-session-quote {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(24px, 3.33vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--tb-text);
          margin: 0;
        }

        /* ══ WHAT I LEARNED ════════════════════════════════════════════ */
        .tb-learned {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--tb-border);
          border-bottom: 1px solid var(--tb-border);
        }
        .tb-learned-col {
          padding: clamp(24px, 2.78vw, 40px);
          border-left: 1px solid var(--tb-border);
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 1.39vw, 20px);
        }
        .tb-learned-col:first-child { border-left: none; }
        .tb-learned-lbl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(11px, 0.83vw, 12px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--tb-lime);
          margin: 0;
        }
        .tb-learned-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.25vw, 17px);
          line-height: 1.55;
          letter-spacing: -0.011em;
          color: var(--tb-text);
          margin: 0;
        }

        /* ══ RESPONSIVE ════════════════════════════════════════════════ */
        @media (max-width: 1023px) {
          .tb-overview      { grid-template-columns: repeat(2, 1fr); }
          .tb-overview-col:nth-child(3) { border-left: none; border-top: 1px solid var(--tb-border); }
          .tb-overview-col:nth-child(4) { border-top: 1px solid var(--tb-border); }
          .tb-stats         { grid-template-columns: 1fr; }
          .tb-stat          { border-left: none; border-top: 1px solid var(--tb-border); }
          .tb-stat:first-child { border-top: none; }
          .tb-research      { grid-template-columns: 1fr; }
          .tb-research-col  { border-left: none; border-top: 1px solid var(--tb-border); }
          .tb-research-col:first-child { border-top: none; }
          .tb-decisions-grid{ grid-template-columns: repeat(2, 1fr); }
          .tb-screens       { grid-template-columns: 1fr; }
          .tb-session       { grid-template-columns: 1fr; row-gap: clamp(32px, 5vw, 48px); }
          .tb-learned       { grid-template-columns: 1fr; }
          .tb-learned-col   { border-left: none; border-top: 1px solid var(--tb-border); }
          .tb-learned-col:first-child { border-top: none; }
          .tb-hero-h1       { font-size: clamp(40px, 11vw, 96px); }
        }

        @media (max-width: 639px) {
          .tb-overview      { grid-template-columns: 1fr; }
          .tb-overview-col  { border-left: none; border-top: 1px solid var(--tb-border); }
          .tb-overview-col:first-child { border-top: none; }
          .tb-decisions-grid{ grid-template-columns: 1fr; }
          .tb-quote         { grid-template-columns: 1fr; row-gap: 16px; }
          .tb-quote-attr    { text-align: left; justify-self: start; }
        }

        @supports (corner-shape: squircle) {
          .tb-hero,
          .tb-solution-media,
          .tb-screen-media,
          .tb-session-photo { corner-shape: squircle; }
        }
      `}</style>

      <div className="tb">

        {/* ══ 1. HERO ════════════════════════════════════════════════════ */}
        <div className="tb-hero">
          <video
            className="tb-hero-video"
            src="/images/thebanker/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="tb-hero-scrim" aria-hidden="true" />
          <div className="tb-hero-content">
            <motion.p
              className="tb-hero-eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              theBanker
            </motion.p>
            <motion.h1
              className="tb-hero-h1"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Your bets.<br />Live.<br />Together.
            </motion.h1>
          </div>
          <span className="tb-hero-scroll" aria-hidden="true">Scroll</span>
        </div>

        {/* ══ 2. OVERVIEW BAR ═══════════════════════════════════════════ */}
        <RacingStripeBand label="theBanker" linesFrom="left" animateOnScroll />

        <div className="tb-bleed">
          <div className="tb-overview">
            <div className="tb-overview-col">
              <p className="tb-overview-lbl">My position</p>
              <p className="tb-overview-val">Product designer<br />Full-stack developer</p>
            </div>
            <div className="tb-overview-col">
              <p className="tb-overview-lbl">My gear</p>
              <p className="tb-overview-val">Figma<br />React · Supabase · Vercel</p>
            </div>
            <div className="tb-overview-col">
              <p className="tb-overview-lbl">View live</p>
              <a
                className="tb-overview-link"
                href="https://thebanker.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                thebanker.vercel.app <span className="arrow">↗</span>
              </a>
            </div>
            <div className="tb-overview-col">
              <p className="tb-overview-lbl">View pdf</p>
              <a
                className="tb-overview-link"
                href="/pdf/TheBanker_PDF.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div style={{ height: 'clamp(64px, 8.33vw, 120px)' }} />

        {/* ══ 3. THE PROBLEM ════════════════════════════════════════════ */}
        <RacingStripeBand label="The Problem" linesFrom="right" animateOnScroll />

        <div className="tb-w tb-section">
          <motion.div {...scrollFadeUp}>
            <h2 className="tb-h2">A shared experience with no shared view</h2>
            <p className="tb-body">
              Sports fans who bet together have no single place to follow it. Slips get
              posted to group chats, buried under memes, and forgotten by half time. The
              bettors are distracted, the non-bettors are left out, and nobody knows
              what&rsquo;s happening until it&rsquo;s over.
            </p>
          </motion.div>

          <motion.div className="tb-stats" {...scrollFadeUp}>
            <div className="tb-stat">
              <p className="tb-stat-num">5</p>
              <p className="tb-stat-body">Interviews conducted across San Francisco, ages 21–27.</p>
            </div>
            <div className="tb-stat">
              <p className="tb-stat-num">3</p>
              <p className="tb-stat-body">Subreddits scraped — r/sportsbook, r/sports, r/Patriots.</p>
            </div>
            <div className="tb-stat">
              <p className="tb-stat-num">4</p>
              <p className="tb-stat-body">Competitors audited — all bettor-only, account-required, walled garden.</p>
            </div>
          </motion.div>
        </div>

        {/* ══ 4. HOW MAY WE ═════════════════════════════════════════════ */}
        <div className="tb-bleed tb-hmw">
          <motion.div className="tb-hmw-inner" {...scrollFadeUp}>
            <p className="tb-hmw-lbl">How may we</p>
            <p className="tb-hmw-q">
              Give friend groups one shared screen to follow every bet — live, together —
              without anyone needing an account?
            </p>
          </motion.div>
        </div>

        <div style={{ height: 'clamp(80px, 12.5vw, 180px)' }} />

        {/* ══ 5. THE SOLUTION ═══════════════════════════════════════════ */}
        <RacingStripeBand label="The Solution" linesFrom="left" animateOnScroll />

        <div className="tb-w tb-section">
          <motion.div {...scrollFadeUp}>
            <h2 className="tb-h2">A live room that disappears when the match ends</h2>
            <p className="tb-body">
              theBanker is a real-time group bet tracker. One person creates a room and
              gets a six-digit code. Everyone joins — no account needed. Upload your slip,
              watch every leg update live as the match plays out, and when it&rsquo;s over
              the session disappears. No profiles, no history. Just the sweat.
            </p>

            <div className="tb-solution-media">
              <video
                src="/images/thebanker/solution.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>

        {/* ══ 6. THE RESEARCH ═══════════════════════════════════════════ */}
        <RacingStripeBand label="The Research" linesFrom="right" animateOnScroll />

        <div className="tb-w tb-section">
          <motion.div className="tb-research" {...scrollFadeUp}>
            <div className="tb-research-col">
              <p className="tb-research-lbl">Interviews</p>
              <p className="tb-research-body">
                5 participants · San Francisco · ages 21–27
                <br />Heath, Teo, Gomes, Nathaniel, Paul
              </p>
              <p className="tb-research-sublbl">Key Finding</p>
              <p className="tb-research-finding">
                Emotional investment in sport is driven by the people around you — not the stake.
              </p>
            </div>
            <div className="tb-research-col">
              <p className="tb-research-lbl">Reddit</p>
              <p className="tb-research-body">
                r/sportsbook · r/sports · r/Patriots
              </p>
              <p className="tb-research-sublbl">Key Finding</p>
              <p className="tb-research-finding">
                Fans are building their own tools — spreadsheets, Discord bots, Google Docs.
                DIY infrastructure for a problem the market hasn&rsquo;t solved.
              </p>
            </div>
            <div className="tb-research-col">
              <p className="tb-research-lbl">Competitive Audit</p>
              <p className="tb-research-body">
                Action Network · Pikkit · Juice Reel · Rebet
              </p>
              <p className="tb-research-sublbl">Key Finding</p>
              <p className="tb-research-finding">
                Every competitor is bettor-only, account-required, single-sportsbook. None
                serve the group watching experience.
              </p>
            </div>
          </motion.div>

          <motion.div className="tb-quotes" {...scrollFadeUp} style={{ marginTop: 'clamp(48px, 6.25vw, 90px)' }}>
            <div className="tb-quote">
              <p className="tb-quote-text">
                &ldquo;Being able to check everyone&rsquo;s different bets throughout the
                game — that could be quite neat.&rdquo;
              </p>
              <p className="tb-quote-attr">Heath, 21 · bettor</p>
            </div>
            <div className="tb-quote">
              <p className="tb-quote-text">
                &ldquo;All they talked about was their lines and their parlays. I just
                wanted to talk about the game.&rdquo;
              </p>
              <p className="tb-quote-attr">Nathaniel, 22 · non-bettor</p>
            </div>
          </motion.div>
        </div>

        {/* ══ 7. THE DECISIONS ══════════════════════════════════════════ */}
        <div className="tb-bleed tb-decisions">
          <div className="tb-decisions-inner">
            <motion.p className="tb-decisions-lbl" {...scrollFadeUp}>The Decisions</motion.p>
            <motion.div className="tb-decisions-grid" {...scrollFadeUp}>
              {DECISIONS.map(({ label, choice, rationale }) => (
                <div className="tb-decision-card" key={label}>
                  <p className="tb-decision-lbl">{label}</p>
                  <p className="tb-decision-choice">{choice}</p>
                  <p className="tb-decision-rationale">{rationale}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div style={{ height: 'clamp(80px, 12.5vw, 180px)' }} />

        {/* ══ 8. THE LIVE PRODUCT ═══════════════════════════════════════ */}
        <RacingStripeBand label="The Live Product" linesFrom="right" animateOnScroll />

        <div className="tb-w tb-section">
          <motion.div {...scrollFadeUp}>
            <h2 className="tb-h2">Built and tested during a real Champions League match</h2>
          </motion.div>

          <motion.div className="tb-screens" {...scrollFadeUp}>
            <div className="tb-screen">
              <div className="tb-screen-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/thebanker/screen-room-home.png" alt="Room Home — live standings" />
              </div>
              <p className="tb-screen-cap">Room Home · live standings</p>
            </div>
            <div className="tb-screen">
              <div className="tb-screen-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/thebanker/screen-slip.png" alt="Live legs — current vs target" />
              </div>
              <p className="tb-screen-cap">Live legs · current vs target</p>
            </div>
            <div className="tb-screen">
              <div className="tb-screen-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/thebanker/screen-settled.png" alt="Room Settled — payout ranking" />
              </div>
              <p className="tb-screen-cap">Room Settled · payout ranking</p>
            </div>
          </motion.div>

          <motion.div className="tb-session" {...scrollFadeUp}>
            <div className="tb-session-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/thebanker/session-photo.jpg" alt="Arsenal vs Atlético test session" />
            </div>
            <div className="tb-session-content">
              <p className="tb-match-lbl">Champions League · Arsenal vs Atlético Madrid</p>
              <ul className="tb-facts">
                <li className="tb-fact">4 friends · 4 slips · PaddyPower and PrizePicks</li>
                <li className="tb-fact">OCR read every slip first time</li>
                <li className="tb-fact">Legs tracked live throughout</li>
                <li className="tb-fact">Nobody touched the group chat</li>
              </ul>
              <p className="tb-session-quote">&ldquo;They fucked with it.&rdquo;</p>
            </div>
          </motion.div>
        </div>

        {/* ══ 9. WHAT I LEARNED ═════════════════════════════════════════ */}
        <RacingStripeBand label="What I Learned" linesFrom="left" animateOnScroll />

        <div className="tb-w tb-section">
          <motion.div className="tb-learned" {...scrollFadeUp}>
            <div className="tb-learned-col">
              <p className="tb-learned-lbl">Validated</p>
              <p className="tb-learned-body">
                The shared screen works. Multi-book by design. Stats free and core. Heath
                described this product before it existed.
              </p>
            </div>
            <div className="tb-learned-col">
              <p className="tb-learned-lbl">Surprised me</p>
              <p className="tb-learned-body">
                The settle moment is more differentiated than the live board. The session
                generates all the data. The shareable recap card is the real product.
              </p>
            </div>
            <div className="tb-learned-col">
              <p className="tb-learned-lbl">What&rsquo;s next</p>
              <p className="tb-learned-body">
                Shareable recap card. Non-bettor reactions layer. Permanent rooms for
                returning squads.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...scrollFadeUp}
            style={{
              display: 'flex',
              gap: 'clamp(10px, 1.11vw, 16px)',
              marginTop: 'clamp(40px, 5.56vw, 64px)',
            }}
          >
            <a
              href="https://thebanker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="tb-cta tb-cta-filled"
            >
              <span className="tb-cta-content">
                <LetterSwapPingPong label="View live" staggerFrom="first" staggerDuration={0.03} />
              </span>
            </a>
            <a
              href="/pdf/TheBanker_PDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="tb-cta tb-cta-outline"
            >
              <span className="tb-cta-content">
                <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
              </span>
            </a>
          </motion.div>
        </div>

        <style>{`
          .tb-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transform: skewX(-10deg);
            border-radius: 4px;
            padding: clamp(7px, 0.63vw, 9px) clamp(16px, 1.53vw, 22px);
            font-family: var(--font-hubot-sans), sans-serif;
            font-weight: 800;
            font-style: italic;
            font-size: clamp(15px, 1.67vw, 24px);
            cursor: pointer;
            text-decoration: none;
            white-space: nowrap;
            letter-spacing: -0.02em;
          }
          .tb-cta-content { display: inline-block; transform: skewX(10deg); }
          .tb-cta .letter,
          .tb-cta .letter-secondary { color: inherit; transition: color 0.2s ease; }
          .tb-cta-filled {
            background: #C8FF00;
            color: #0D0D0D;
            border: none;
            transition: background 0.2s ease;
          }
          .tb-cta-filled:hover { background: #b8eb00; }
          .tb-cta-outline {
            background: transparent;
            color: #0D0D0D;
            border: clamp(2px, 0.28vw, 4px) solid #0D0D0D;
            transition: background 0.2s ease, color 0.2s ease;
          }
          .tb-cta-outline:hover { background: #0D0D0D; color: #C8FF00; }
        `}</style>

      </div>

      {/* ══ MORE CASES ═════════════════════════════════════════════════ */}
      <RelatedCases currentSlug="thebanker" />
    </>
  )
}
