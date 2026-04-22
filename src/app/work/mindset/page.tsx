'use client'

import RelatedCases from '@/components/RelatedCases'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import { motion } from 'framer-motion'

const scrollFadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { type: 'spring', stiffness: 160, damping: 24 },
} as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { type: 'spring' as const, stiffness: 160, damping: 24, delay },
})

export default function MindsetPage() {
  return (
    <>
      {/* ── Page-scoped styles ─────────────────────────────────────────── */}
      <style>{`

        /* ── Root ── */
        .ms {
          padding-top: var(--nav-h);
          background: var(--surface-card);
          --text-inverse: var(--text-primary);
          --text-inverse-muted: var(--text-primary-muted);
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
          background: var(--text-primary);
          margin-top: var(--sp-6);
          margin-bottom: clamp(20px, 2.1vw, 30px);
        }

        /* ── Overview title ── */
        .ms-problem-ttl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .ms-problem-ttl-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }

        /* ── Project meta — 2-col ── */
        .ms-meta {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--grid-gutter);
        }
        .ms-meta-lbl {
          display: block;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--text-inverse);
          margin-bottom: clamp(16px, 2.2vw, 32px);
          letter-spacing: -0.02em;
        }
        .ms-meta-val {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.6;
        }

        /* ── Overview: title left 6-col, meta right 6-col ── */
        .ms-overview {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms-overview-title {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
        }
        .ms-overview-right {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 2.78vw, 40px);
        }

        /* ── CTA buttons ── */
        .ms-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(10px, 1.11vw, 16px);
        }
        .ms-btn {
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
        .ms-btn-content {
          display: inline-block;
          transform: skewX(10deg);
        }
        .ms-btn .letter,
        .ms-btn .letter-secondary {
          color: inherit;
          transition: color 0.2s ease;
        }
        .ms-btn-filled {
          background: var(--c-orange);
          color: var(--surface-card);
          border: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .ms-btn-filled:hover { background: var(--c-orange-strong); }
        .ms-btn-outline {
          background: transparent;
          color: var(--c-orange);
          border: clamp(2px, 0.28vw, 4px) solid var(--c-orange);
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .ms-btn-outline:hover {
          background: var(--c-orange);
          color: var(--surface-card);
          border-color: var(--c-orange);
        }

        /* ── Problem body ── */
        .ms-problem-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          max-width: 52ch;
        }
        .ms-problem-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }

        /* ── Stats ── */
        .ms-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: var(--grid-gutter);
          align-items: start;
          padding-top: clamp(40px, 5.5vw, 80px);
        }
        .ms-stat-2,
        .ms-stat-3 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ms-stat-num {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(56px, 8.89vw, 128px);
          color: var(--text-inverse);
          line-height: 1;
          letter-spacing: -0.04em;
          margin: 0 0 clamp(12px, 1.39vw, 20px);
        }
        .ms-stat-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.5;
          margin: 0;
          max-width: 24ch;
        }

        /* ── Personal image + copy ── */
        .ms-personal-block {
          padding-top: clamp(64px, 9vw, 130px);
        }
        .ms-personal-media {
          width: 100%;
          aspect-ratio: 21 / 8;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-dark-soft);
          position: relative;
        }
        .ms-personal-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .ms-personal-copy-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--grid-gutter);
          margin-top: clamp(24px, 2.78vw, 40px);
        }
        .ms-personal-copy {
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

        /* ── How might we ── */
        .ms-hmw {
          padding-top: clamp(48px, 6.25vw, 90px);
          padding-bottom: clamp(80px, 12.5vw, 180px);
          max-width: 50ch;
        }
        .ms-hmw-lead {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(12px, 1.67vw, 24px);
        }
        .ms-hmw-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Solution grid ── */
        .ms-solution-grid {
          display: flex;
          align-items: flex-start;
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms-solution-placeholder {
          flex: 0 0 auto;
          width: clamp(240px, 39.2vw, 565px);
          max-width: 100%;
          aspect-ratio: 1;
          height: auto;
          background: var(--surface-dark-soft);
          border-radius: 20px;
          overflow: hidden;
        }
        .ms-solution-text { flex: 1; min-width: 0; }
        .ms-solution-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(16px, 2.22vw, 32px);
        }
        .ms-solution-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Audience interview ── */
        .ms-explore {
          padding-bottom: clamp(64px, 9vw, 130px);
        }
        .ms-interview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--grid-gutter);
          margin-bottom: clamp(40px, 5.5vw, 80px);
        }
        .ms-interview-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
        }
        .ms-interview-photo {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-dark-soft);
          margin-bottom: clamp(16px, 1.67vw, 24px);
          flex-shrink: 0;
        }
        .ms-interview-name {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(18px, 2.22vw, 32px);
          color: var(--c-orange);
          letter-spacing: -0.011em;
          line-height: 1.3;
          margin: 0 0 clamp(6px, 0.56vw, 8px);
        }
        .ms-interview-meta {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.5;
          letter-spacing: -0.011em;
          margin: 0;
        }

        /* ── Findings list ── */
        .ms-findings-list {
          margin: 0;
          padding: 0;
          list-style: none;
          max-width: 62ch;
        }
        .ms-findings-item {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(15px, 1.67vw, 24px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(16px, 2vw, 28px);
          padding-left: 1.1em;
          position: relative;
        }
        .ms-findings-item::before {
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
        .ms-findings-item:last-child { margin-bottom: 0; }

        /* Bottom breathing room before RelatedCases */
        .ms-gap { padding-bottom: clamp(64px, 9vw, 130px); }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════ */
        @media (max-width: 639px) {
          .ms-stats  { grid-template-columns: 1fr; }
          .ms-stat-2 { padding-top: clamp(32px, 8vw, 72px); }
          .ms-stat-3 { padding-top: clamp(64px, 16vw, 140px); }
        }

        @media (max-width: 1023px) {
          .ms-overview       { flex-direction: column; }
          .ms-overview-title { flex: none; width: 100%; }
          .ms-overview-right { flex: none; width: 100%; }
        }

        @media (max-width: 767px) {
          .ms-meta  { grid-template-columns: 1fr; gap: 32px; }
          .ms-stats { grid-template-columns: 1fr; }
          .ms-personal-copy-row {
            grid-template-columns: 1fr;
          }
          .ms-personal-copy {
            grid-column: 1;
            justify-self: stretch;
            max-width: none;
          }
          .ms-solution-grid { flex-direction: column; }
          .ms-solution-placeholder {
            width: 100%;
            max-width: min(565px, 100%);
            flex: none;
          }
          .ms-interview-grid {
            grid-template-columns: 1fr;
            row-gap: clamp(32px, 5vw, 48px);
          }
        }

        @supports (corner-shape: squircle) {
          .ms-hero { corner-shape: squircle; }
        }
      `}</style>

      <div className="ms">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="ms-w">
          <div className="ms-hero" role="img" aria-label="Mindset — mood hero">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/images/mindset/MindsetMoodHero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* ── CASE HEADER ─────────────────────────────────────────────── */}
        <RacingStripeBand label="Mindset" linesFrom="left" animateOnScroll />

        {/* ── OVERVIEW: title left · meta right ────────────────────────── */}
        <div className="ms-w">
          <motion.div className="ms-overview" {...scrollFadeUp}>

            <h1 className="ms-problem-ttl ms-overview-title">
              A high standard with constant{' '}
              <span className="ms-problem-ttl-accent">crushing</span>
              {' '}pressures
            </h1>

            <div className="ms-overview-right">
              <div className="ms-meta">
                <div>
                  <span className="ms-meta-lbl">My position</span>
                  <span className="ms-meta-val">Brand designer<br />UI designer</span>
                </div>
                <div>
                  <span className="ms-meta-lbl">My gear</span>
                  <span className="ms-meta-val">Figma<br />Illustrator<br />After Effects</span>
                </div>
              </div>

              <div className="ms-cta-row">
                <a href="#" className="ms-btn ms-btn-filled">
                  <span className="ms-btn-content">
                    <LetterSwapPingPong label="View live" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
                <a href="#" className="ms-btn ms-btn-outline">
                  <span className="ms-btn-content">
                    <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
        <RacingStripeBand label="The Problem" linesFrom="right" animateOnScroll />

        <div className="ms-w">
          <motion.p className="ms-problem-body" {...fadeUp(0)}>
            <span className="ms-problem-accent">Student Athletes</span>
            {' '}need support because trying to balance classes, training, travel and the
            constant pressure to perform can lead to a mental burnout, missed events and a
            disconnection from teammates.
          </motion.p>

          <motion.div className="ms-stats" {...fadeUp(0.1)}>
            <div>
              <p className="ms-stat-num">47%</p>
              <p className="ms-stat-desc">
                of student athletes report experiencing psychological burnout
              </p>
            </div>
            <div className="ms-stat-2">
              <p className="ms-stat-num">10%</p>
              <p className="ms-stat-desc">
                of student athletes with mental health conditions actually seek help
              </p>
            </div>
            <div className="ms-stat-3">
              <p className="ms-stat-num">60hrs</p>
              <p className="ms-stat-desc">
                committed per week on average between sport, travel and academics
              </p>
            </div>
          </motion.div>

          <motion.div className="ms-personal-block" {...scrollFadeUp}>
            <div className="ms-personal-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Mindset_1.jpg" alt="Student athlete experience" />
            </div>
            <div className="ms-personal-copy-row">
              <p className="ms-personal-copy">
                Having been a student at a total of three schools, I&rsquo;ve had three
                different experiences. However, all of these experiences shared the constant
                pressure to perform, get good grades and maintain relationships, which all
                took a mental toll. I found myself often struggling, falling behind in class
                and lowering my standards, I needed more support.
              </p>
            </div>

            <div className="ms-hmw">
              <p className="ms-hmw-lead">How might we</p>
              <p className="ms-hmw-body">
                help student athletes track their mental state and feel supported by their
                team while managing the demands of academics and athletics?
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── THE SOLUTION ─────────────────────────────────────────────── */}
        <RacingStripeBand label="The Solution" linesFrom="left" animateOnScroll />

        <div className="ms-w ms-gap">
          <motion.div className="ms-solution-grid" {...scrollFadeUp}>
            <div className="ms-solution-placeholder" role="img" aria-label="Mindset app — coming soon" />
            <div className="ms-solution-text">
              <p className="ms-solution-title">Mindset</p>
              <p className="ms-solution-body">
                A productivity and wellness app designed specifically for student-athletes to
                support through unifying scheduling, communication, and mood tracking all into
                one space, helping users stay organised, consistent, and connected both on and
                off the field.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── AUDIENCE INTERVIEW ───────────────────────────────────────── */}
        <RacingStripeBand label="Audience Interview" linesFrom="right" animateOnScroll />

        <div className="ms-w ms-explore">
          <motion.div {...scrollFadeUp}>

            <div className="ms-interview-grid">
              <div className="ms-interview-card">
                <div className="ms-interview-photo" role="img" aria-label="Chris Lechuga" />
                <p className="ms-interview-name">Chris Lechuga</p>
                <p className="ms-interview-meta">
                  Student Athlete<br />
                  Academy of Art University
                </p>
              </div>
              <div className="ms-interview-card">
                <div className="ms-interview-photo" role="img" aria-label="Adrian Lechuga" />
                <p className="ms-interview-name">Adrian Lechuga</p>
                <p className="ms-interview-meta">
                  Student Athlete<br />
                  Academy of Art University
                </p>
              </div>
            </div>

            <ul className="ms-findings-list">
              <li className="ms-findings-item">
                They&rsquo;d track daily if it&rsquo;s quick and genuinely helpful — friction kills the habit.
              </li>
              <li className="ms-findings-item">
                Burnout is felt physically and emotionally.
              </li>
              <li className="ms-findings-item">
                Scheduling disruptions happen often.
              </li>
            </ul>

          </motion.div>
        </div>

        {/* ── MORE CASES ─────────────────────────────────────────────── */}
        <RelatedCases currentSlug="mindset" bg="var(--surface-card)" />

      </div>
    </>
  )
}
