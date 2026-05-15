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

export default function MindsetV2Page() {
  return (
    <>
      <style>{`

        /* ── Root ── */
        .ms2 {
          padding-top: var(--nav-h);
          background: var(--surface-card);
          --text-inverse: var(--text-primary);
          --text-inverse-muted: var(--text-primary-muted);
          overflow-x: hidden;
        }

        .ms2-w {
          max-width: var(--grid-max);
          margin-left:  auto;
          margin-right: auto;
          padding-left:  var(--grid-margin);
          padding-right: var(--grid-margin);
        }

        /* ── Hero ── */
        .ms2-hero {
          border-radius: var(--radius-card);
          overflow: hidden;
          height: clamp(280px, 47.9vw, 690px);
          position: relative;
          background: var(--text-primary);
          margin-top: var(--sp-6);
          margin-bottom: clamp(20px, 2.1vw, 30px);
        }
        .ms2-hero video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Overview ── */
        .ms2-overview {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms2-overview-title {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
        }
        .ms2-overview-heading {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(10px, 1.11vw, 16px);
        }
        .ms2-overview-subtitle {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 18px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }
        .ms2-overview-right {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 2.78vw, 40px);
        }
        .ms2-meta {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--grid-gutter);
        }
        .ms2-meta-lbl {
          display: block;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--text-inverse);
          margin-bottom: clamp(16px, 2.2vw, 32px);
          letter-spacing: -0.02em;
        }
        .ms2-meta-val {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.6;
        }

        /* ── CTA buttons ── */
        .ms2-cta-row { display: flex; flex-wrap: wrap; gap: clamp(10px, 1.11vw, 16px); }
        .ms2-btn {
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
        .ms2-btn-content { display: inline-block; transform: skewX(10deg); }
        .ms2-btn .letter,
        .ms2-btn .letter-secondary { color: inherit; transition: color 0.2s ease; }
        .ms2-btn-filled {
          background: var(--c-orange);
          color: var(--surface-card);
          border: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .ms2-btn-filled:hover { background: var(--c-orange-strong); }
        .ms2-btn-outline {
          background: transparent;
          color: var(--c-orange);
          border: clamp(2px, 0.28vw, 4px) solid var(--c-orange);
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .ms2-btn-outline:hover { background: var(--c-orange); color: var(--surface-card); border-color: var(--c-orange); }

        /* ── My Story ── */
        .ms2-story-media {
          width: 100%;
          aspect-ratio: 21 / 8;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-dark-soft);
          position: relative;
          margin-bottom: clamp(24px, 2.78vw, 40px);
        }
        .ms2-story-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .ms2-story-copy-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--grid-gutter);
          padding-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms2-story-copy {
          grid-column: 2;
          max-width: 48ch;
          justify-self: end;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.08vw, 30px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── The Problem ── */
        .ms2-problem-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          max-width: calc(50% - var(--grid-gutter) / 2);
        }
        .ms2-problem-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }
        .ms2-reality {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: var(--grid-gutter);
          row-gap: clamp(40px, 5.56vw, 80px);
          padding-top: clamp(40px, 5.5vw, 80px);
          padding-bottom: clamp(40px, 5.56vw, 80px);
        }
        .ms2-reality-lbl {
          grid-column: 1 / 5;
          grid-row: 1;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          color: var(--c-orange);
          letter-spacing: -0.02em;
          align-self: start;
          margin: 0;
        }
        .ms2-reality-stat {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 0.83vw, 12px);
        }
        .ms2-reality-stat-1 { grid-column: 9 / 13; grid-row: 1; }
        .ms2-reality-stat-2 { grid-column: 5 / 9;  grid-row: 2; }
        .ms2-reality-stat-3 { grid-column: 1 / 5;  grid-row: 3; }
        .ms2-reality-num {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(56px, 8.89vw, 128px);
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: var(--c-orange);
          margin: 0;
        }
        .ms2-reality-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.4;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }
        .ms2-hmw {
          padding-top: clamp(16px, 2.22vw, 32px);
          padding-bottom: clamp(80px, 12.5vw, 180px);
          max-width: 50ch;
          margin-left: auto;
        }
        .ms2-hmw-lead {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(12px, 1.67vw, 24px);
        }
        .ms2-hmw-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Insight: stagger interview ── */
        .ms2-stagger {
          padding-bottom: clamp(64px, 9vw, 130px);
        }
        .ms2-stagger-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: var(--grid-gutter);
        }
        .ms2-stagger-right {
          padding-top: clamp(80px, 13.89vw, 200px);
        }
        .ms2-person-row {
          display: flex;
          align-items: flex-end;
          gap: clamp(16px, 1.67vw, 24px);
          margin-bottom: clamp(20px, 2.08vw, 30px);
        }
        .ms2-person-photo {
          flex: 0 0 clamp(160px, 26.04vw, 375px);
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-dark-soft);
        }
        .ms2-person-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .ms2-person-findings {
          flex: 1;
          min-width: 0;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 18px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
          padding-bottom: clamp(8px, 0.83vw, 12px);
        }
        .ms2-person-findings p { margin: 0; }
        .ms2-person-name {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(28px, 3.33vw, 48px);
          color: var(--c-orange);
          letter-spacing: -0.011em;
          line-height: 1.3;
          margin: 0 0 clamp(4px, 0.42vw, 6px);
        }
        .ms2-person-meta {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 18px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }
        .ms2-stagger-conclusion {
          margin-top: clamp(40px, 5.56vw, 80px);
        }
        .ms2-stagger-conclusion p {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(24px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          max-width: 16ch;
        }
        .ms2-findings {
          margin-top: clamp(24px, 2.78vw, 40px);
        }
        .ms2-findings-lbl {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--text-inverse);
          letter-spacing: -0.02em;
          margin: 0 0 clamp(8px, 0.83vw, 12px);
        }
        .ms2-findings-list { margin: 0; padding: 0; list-style: none; }
        .ms2-findings-item {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(10px, 1.11vw, 16px);
          padding-left: 1.1em;
          position: relative;
        }
        .ms2-findings-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 0.35em;
          height: 0.35em;
          border-radius: 1px;
          background: var(--c-orange);
          transform: skewX(-10deg);
        }
        .ms2-findings-item:last-child { margin-bottom: 0; }

        /* ── Design Decisions ── */
        .ms2-design { padding-bottom: clamp(48px, 6.25vw, 90px); }

        .ms2-design-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: var(--grid-gutter);
        }
        .ms2-design-card {
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 1.67vw, 24px);
        }
        .ms2-design-card--right {
          padding-top: clamp(80px, 13.89vw, 200px);
        }
        .ms2-design-card-media {
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: var(--surface-dark-soft);
        }
        .ms2-design-card-media video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ms2-design-card-lbl {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--text-inverse);
          letter-spacing: -0.02em;
          margin: 0;
        }
        .ms2-design-card-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 18px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }

        /* ── Solution / Prototype ── */
        .ms2-solution-overview {
          display: flex;
          align-items: flex-start;
          gap: clamp(20px, 2.22vw, 32px);
          margin-bottom: clamp(40px, 5.5vw, 72px);
          max-width: calc(50% - var(--grid-gutter) / 2);
        }
        .ms2-solution-text { flex: 1; min-width: 0; }
        .ms2-solution-intro {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .ms2-solution-logo {
          flex-shrink: 0;
          align-self: flex-end;
          width: clamp(80px, 8.33vw, 120px);
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
        }
        .ms2-solution-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ms2-proto-trio {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          margin-bottom: clamp(40px, 5.5vw, 72px);
        }
        .ms2-proto-trio-card {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.39vw, 20px);
        }
        .ms2-proto-trio-video {
          aspect-ratio: 645 / 828;
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .ms2-proto-trio-video video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ms2-proto-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--text-inverse);
          letter-spacing: -0.02em;
          margin: 0 0 clamp(4px, 0.42vw, 6px);
        }
        .ms2-proto-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 18px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }

        /* ── Lessons / Next Steps ── */
        .ms2-foot {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--grid-gutter);
          padding-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms2-foot-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(28px, 3.33vw, 48px);
          line-height: 1.2;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(8px, 1.11vw, 14px);
        }
        .ms2-foot-list { margin: 0; padding: 0; list-style: none; }
        .ms2-foot-item {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(10px, 1.11vw, 16px);
          padding-left: 1.1em;
          position: relative;
          max-width: 42ch;
        }
        .ms2-foot-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 0.35em;
          height: 0.35em;
          border-radius: 1px;
          background: var(--c-orange);
          transform: skewX(-10deg);
        }
        .ms2-foot-item:last-child { margin-bottom: 0; }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════ */
        @media (max-width: 1023px) {
          .ms2-overview       { flex-direction: column; }
          .ms2-overview-title { flex: none; width: 100%; }
          .ms2-overview-right { flex: none; width: 100%; }
        }
        @media (max-width: 767px) {
          .ms2-meta              { grid-template-columns: 1fr; gap: 32px; }
          .ms2-reality              { grid-template-columns: 1fr; row-gap: clamp(32px, 8vw, 48px); }
          .ms2-reality-lbl,
          .ms2-reality-stat-1,
          .ms2-reality-stat-2,
          .ms2-reality-stat-3     { grid-column: 1 / -1; grid-row: auto; }
          .ms2-story-copy-row    { grid-template-columns: 1fr; }
          .ms2-story-copy        { grid-column: 1; justify-self: stretch; max-width: none; }
          .ms2-hmw               { margin-left: 0; }
          .ms2-stagger-grid      { grid-template-columns: 1fr; row-gap: clamp(32px, 8vw, 48px); }
          .ms2-stagger-right     { padding-top: 0; }
          .ms2-findings          { margin-top: 0; }
          .ms2-stagger-conclusion { margin-top: 0; }
          .ms2-stagger-conclusion p { max-width: none; }
          .ms2-design-grid       { grid-template-columns: 1fr; }
          .ms2-design-card--right { padding-top: clamp(40px, 8vw, 64px); }
          .ms2-solution-overview { max-width: 100%; }
          .ms2-proto-trio        { grid-template-columns: 1fr; }
          .ms2-foot              { grid-template-columns: 1fr; }
        }

        @supports (corner-shape: squircle) {
          .ms2-hero { corner-shape: squircle; }
        }
      `}</style>

      <div className="ms2">

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <div className="ms2-w">
          <div className="ms2-hero" role="img" aria-label="Mindset hero">
            <video autoPlay muted loop playsInline>
              <source src="/images/mindset/MindsetMoodHero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <RacingStripeBand label="Mindset" linesFrom="left" animateOnScroll />

        <div className="ms2-w">
          <motion.div className="ms2-overview" {...scrollFadeUp}>
            <div className="ms2-overview-title">
              <h1 className="ms2-overview-heading">Mental wellness, built for student athletes.</h1>
              <p className="ms2-overview-subtitle">A high standard with constant crushing pressures</p>
            </div>
            <div className="ms2-overview-right">
              <div className="ms2-meta">
                <div>
                  <span className="ms2-meta-lbl">My position</span>
                  <span className="ms2-meta-val">Brand designer<br />UI designer</span>
                </div>
                <div>
                  <span className="ms2-meta-lbl">My gear</span>
                  <span className="ms2-meta-val">Figma<br />Illustrator</span>
                </div>
              </div>
              <div className="ms2-cta-row">
                <a href="https://www.figma.com/proto/ePqyleWuGXMR6GkfQmkmxO/Mindset_Prototype?node-id=23-1965&p=f&viewport=319%2C281%2C0.12&t=te2g5dsUoWdDsRpx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=23%3A1965&show-proto-sidebar=1&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="ms2-btn ms2-btn-filled">
                  <span className="ms2-btn-content">
                    <LetterSwapPingPong label="View prototype" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
                <a href="/pdf/Mindset_PDF.pdf" target="_blank" rel="noopener noreferrer" className="ms2-btn ms2-btn-outline">
                  <span className="ms2-btn-content">
                    <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 2. MY STORY ──────────────────────────────────────────────── */}
        <RacingStripeBand label="My Story" linesFrom="right" animateOnScroll />

        <div className="ms2-w">
          <motion.div {...scrollFadeUp}>
            <div className="ms2-story-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mindset/MindsetPersonal.jpg" alt="Personal interest — student athlete life" />
            </div>
            <div className="ms2-story-copy-row">
              <p className="ms2-story-copy">
                I was a student athlete at 3 different schools and found myself facing the
                same issues at each one. The constant pressure to perform, get good grades
                and maintain relationships took a mental toll. I often found myself struggling,
                falling behind in class and lowering my standards, I needed more support.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── 3. THE PROBLEM ───────────────────────────────────────────── */}
        <RacingStripeBand label="The Problem" linesFrom="left" animateOnScroll />

        <div className="ms2-w">
          <motion.p className="ms2-problem-body" {...scrollFadeUp}>
            <span className="ms2-problem-accent">Student-athletes</span>
            {' '}juggle two full time jobs with no single tool that understands their schedule
            and their mental state, leaving them burned out and falling behind.
          </motion.p>

          <motion.div className="ms2-reality" {...scrollFadeUp}>
            <p className="ms2-reality-lbl">The Reality</p>

            <div className="ms2-reality-stat ms2-reality-stat-1">
              <p className="ms2-reality-num">60hrs</p>
              <p className="ms2-reality-desc">committed per week on average on sport, travel and academics</p>
            </div>

            <div className="ms2-reality-stat ms2-reality-stat-2">
              <p className="ms2-reality-num">10%</p>
              <p className="ms2-reality-desc">of student athletes with mental health conditions actually seek help</p>
            </div>

            <div className="ms2-reality-stat ms2-reality-stat-3">
              <p className="ms2-reality-num">47%</p>
              <p className="ms2-reality-desc">of student athletes report experiencing psychological burnout</p>
            </div>
          </motion.div>

          <motion.div className="ms2-hmw" {...scrollFadeUp}>
            <p className="ms2-hmw-lead">How might we</p>
            <p className="ms2-hmw-body">
              help student athletes track their mental state and feel supported by their
              team while managing the demands of academics and athletics?
            </p>
          </motion.div>
        </div>

        {/* ── 4. INSIGHT ───────────────────────────────────────────────── */}
        <RacingStripeBand label="Interviewing" linesFrom="right" animateOnScroll />

        <div className="ms2-w ms2-stagger">
          <motion.div className="ms2-stagger-grid" {...scrollFadeUp}>

            {/* 1. Chris profile */}
            <div>
              <div className="ms2-person-row">
                <div className="ms2-person-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/mindset/chris.webp" alt="Chris Lechuga" />
                </div>
                <div className="ms2-person-findings">
                  <p>&ldquo;I&rsquo;d check in for five seconds if it actually helps my performance or shows patterns that help.&rdquo;</p>
                </div>
              </div>
              <p className="ms2-person-name">Chris Lechuga</p>
              <p className="ms2-person-meta">21, Chicago, Illinois<br />Player @ Tiffin University</p>
            </div>

            {/* 2. Adrian profile – staggered right on desktop */}
            <div className="ms2-stagger-right">
              <div className="ms2-person-row">
                <div className="ms2-person-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/mindset/adrian.webp" alt="Adrian Lechuga" />
                </div>
                <div className="ms2-person-findings">
                  <p>&ldquo;Mood definitely affects my game, being self aware of it and keeping positive is so important.&rdquo;</p>
                </div>
              </div>
              <p className="ms2-person-name">Adrian Lechuga</p>
              <p className="ms2-person-meta">21, Chicago, Illinois<br />Player @ Tiffin University</p>
            </div>

            {/* 3. Chris findings */}
            <div className="ms2-findings">
              <p className="ms2-findings-lbl">Findings</p>
              <ul className="ms2-findings-list">
                <li className="ms2-findings-item">They&rsquo;d track daily if it&rsquo;s quick and genuinely helpful, friction kills the habit.</li>
                <li className="ms2-findings-item">Scheduling disruptions are constant</li>
                <li className="ms2-findings-item">Burnout is both physical and emotional</li>
                <li className="ms2-findings-item">Mood directly impacts performance</li>
              </ul>
            </div>

            {/* 4. Adrian conclusion */}
            <div className="ms2-stagger-conclusion">
              <p>If a solution isn&rsquo;t quick and easy, it won&rsquo;t get used.</p>
            </div>

          </motion.div>
        </div>

        <RacingStripeBand label="Solution" linesFrom="left" animateOnScroll />

        <div className="ms2-w">
          <motion.div {...scrollFadeUp}>
            <div className="ms2-solution-overview">
              <div className="ms2-solution-text">
                <p className="ms2-solution-intro">
                  A single tool that lets student athletes log their mood in seconds, see patterns
                  over time, and stay connected with their team, all while managing the demands of
                  both academic and athletic schedules.
                </p>
              </div>
              <motion.div
                className="ms2-solution-logo"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 160, damping: 24, delay: 0.15 }}
                style={{ originX: 1, originY: 1 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/mindset/logo.png" alt="Mindset app logo" />
              </motion.div>
            </div>
            <div className="ms2-proto-trio">
              <div className="ms2-proto-trio-card">
                <div className="ms2-proto-trio-video">
                  <video autoPlay muted loop playsInline>
                    <source src="/images/mindset/Mock_moodlog.mp4" type="video/mp4" />
                  </video>
                </div>
                <p className="ms2-proto-title">Mood Logging</p>
                <p className="ms2-proto-body">A quick tap captures how you&rsquo;re feeling without breaking your flow, keeping patterns visible without the effort.</p>
              </div>
              <div className="ms2-proto-trio-card">
                <div className="ms2-proto-trio-video">
                  <video autoPlay muted loop playsInline>
                    <source src="/images/mindset/Mock_schedule.mp4" type="video/mp4" />
                  </video>
                </div>
                <p className="ms2-proto-title">Scheduling</p>
                <p className="ms2-proto-body">Conflicts get flagged the moment they happen. No surprises, just a schedule that actually works.</p>
              </div>
              <div className="ms2-proto-trio-card">
                <div className="ms2-proto-trio-video">
                  <video autoPlay muted loop playsInline>
                    <source src="/images/mindset/Mock_messaging.mp4" type="video/mp4" />
                  </video>
                </div>
                <p className="ms2-proto-title">Messaging</p>
                <p className="ms2-proto-body">Group chats and direct messages in one place, organised and always where you need them.</p>
              </div>
            </div>
            <div className="ms2-cta-row" style={{ marginBottom: 'clamp(48px, 6.25vw, 90px)' }}>
              <a href="https://www.figma.com/proto/ePqyleWuGXMR6GkfQmkmxO/Mindset_Prototype?node-id=23-1965&p=f&viewport=319%2C281%2C0.12&t=te2g5dsUoWdDsRpx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=23%3A1965&show-proto-sidebar=1&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="ms2-btn ms2-btn-filled">
                <span className="ms2-btn-content">
                  <LetterSwapPingPong label="View prototype" staggerFrom="first" staggerDuration={0.03} />
                </span>
              </a>
              <a href="/pdf/Mindset_PDF.pdf" target="_blank" rel="noopener noreferrer" className="ms2-btn ms2-btn-outline">
                <span className="ms2-btn-content">
                  <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── 6. DESIGN DECISIONS ──────────────────────────────────────── */}
        <RacingStripeBand label="Design Decisions" linesFrom="right" animateOnScroll />

        <div className="ms2-w ms2-design">
          <motion.div className="ms2-design-grid" {...scrollFadeUp}>

            {/* Left — Mood Icon */}
            <div className="ms2-design-card">
              <div className="ms2-design-card-media">
                <video autoPlay muted loop playsInline>
                  <source src="/images/mindset/quickmoodtoggle.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="ms2-design-card-lbl">The Mood Icon</p>
              <p className="ms2-design-card-body">
                Mental health check-ins fail when they feel like admin. A numeric scale or
                slider is clinical, slow, and disconnected from how athletes actually think
                about how they feel.
              </p>
              <p className="ms2-design-card-body">
                Custom mood icons make the check-in instant, intuitive, and human, reducing
                friction at the most important moment in the app.
              </p>
            </div>

            {/* Right — Usability Testing */}
            <div className="ms2-design-card">
              <div className="ms2-design-card-media">
                <video autoPlay muted loop playsInline>
                  <source src="/images/mindset/usabilityresult.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="ms2-design-card-lbl">Usability Testing</p>
              <p className="ms2-design-card-body">
                Tested with 2 students across the 3 core flows — mood logging, schedule
                change, and messaging a peer.
              </p>
              <p className="ms2-design-card-body">
                The UI landed well — both users responded positively to the visual direction
                and mood icons.
              </p>
              <div className="ms2-findings" style={{ marginTop: 0 }}>
                <p className="ms2-findings-lbl">Key findings resulting in:</p>
                <ul className="ms2-findings-list">
                  <li className="ms2-findings-item">Feedback to mood logging, giving helpful schedule suggestions</li>
                  <li className="ms2-findings-item">Clearly sectioned difference between group chat and direct messages</li>
                </ul>
              </div>
            </div>

          </motion.div>

          <motion.div className="ms2-design-grid" style={{ marginTop: 'clamp(40px, 5.5vw, 72px)' }} {...scrollFadeUp}>

            {/* Left — Scheduling */}
            <div className="ms2-design-card">
              <div className="ms2-design-card-media">
                <video autoPlay muted loop playsInline>
                  <source src="/images/mindset/alert.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="ms2-design-card-lbl">Overlaps Get Flagged</p>
              <p className="ms2-design-card-body">
                Overlaps get flagged the moment they happen. No surprises, just a schedule
                that works.
              </p>
            </div>

            {/* Right — Messaging */}
            <div className="ms2-design-card">
              <div className="ms2-design-card-media">
                <video autoPlay muted loop playsInline>
                  <source src="/images/mindset/3mainscreens.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="ms2-design-card-lbl">Everything in One Central Place</p>
              <p className="ms2-design-card-body">
                Everything stays in one central place — mood logging, schedule planning and
                messaging for group chats and direct messages.
              </p>
            </div>

          </motion.div>
        </div>

        {/* ── 7. LESSONS / NEXT STEPS ──────────────────────────────────── */}
        <RacingStripeBand label="Lessons / Next Steps" linesFrom="left" animateOnScroll />

        <div className="ms2-w">
          <motion.div className="ms2-foot" {...scrollFadeUp}>
            <div>
              <p className="ms2-foot-title">Lessons</p>
              <ul className="ms2-foot-list">
                <li className="ms2-foot-item">If it creates friction, athletes won&rsquo;t touch it — speed of logging is everything</li>
                <li className="ms2-foot-item">The problem isn&rsquo;t awareness of mental health, it&rsquo;s the lack of tools built around an athlete&rsquo;s schedule</li>
                <li className="ms2-foot-item">Talking to student athletes directly revealed that team visibility of mood was both desired and feared — that tension needs to be designed around carefully</li>
              </ul>
            </div>
            <div>
              <p className="ms2-foot-title">Next Steps</p>
              <ul className="ms2-foot-list">
                <li className="ms2-foot-item">Test the prototype with active student athletes across different sports and school sizes</li>
                <li className="ms2-foot-item">Validate with athletic departments — would coaches or trainers want access to team mood data?</li>
                <li className="ms2-foot-item">Explore the notification model — push prompts need to feel supportive, not like another obligation</li>
                <li className="ms2-foot-item">Understand the institutional angle — could this live inside a school&rsquo;s existing athlete support system?</li>
              </ul>
            </div>
            <div style={{ gridColumn: '1 / -1', marginTop: 'clamp(24px, 2.78vw, 40px)', display: 'flex', gap: 'clamp(10px, 1.11vw, 16px)' }}>
              <a href="https://www.figma.com/proto/ePqyleWuGXMR6GkfQmkmxO/Mindset_Prototype?node-id=23-1965&p=f&viewport=319%2C281%2C0.12&t=te2g5dsUoWdDsRpx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=23%3A1965&show-proto-sidebar=1&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="ms2-btn ms2-btn-filled">
                <span className="ms2-btn-content">
                  <LetterSwapPingPong label="View prototype" staggerFrom="first" staggerDuration={0.03} />
                </span>
              </a>
              <a href="/pdf/Mindset_PDF.pdf" target="_blank" rel="noopener noreferrer" className="ms2-btn ms2-btn-outline">
                <span className="ms2-btn-content">
                  <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>

      <RelatedCases currentSlug="mindset" />
    </>
  )
}
