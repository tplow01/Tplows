'use client'

import { useEffect, useRef } from 'react'
import RelatedCases from '@/components/RelatedCases'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import { motion, useInView } from 'framer-motion'

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

export default function PaywallFcPage() {
  const solutionVideoRef = useRef<HTMLVideoElement>(null)
  const replayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const solutionVideoInView = useInView(solutionVideoRef, { amount: 0.6 })

  useEffect(() => {
    const video = solutionVideoRef.current
    if (!video) return

    if (solutionVideoInView) {
      void video.play().catch(() => {})
      return
    }

    video.pause()
  }, [solutionVideoInView])

  useEffect(() => {
    const video = solutionVideoRef.current
    if (!video) return

    const handleEnded = () => {
      if (replayTimeoutRef.current) clearTimeout(replayTimeoutRef.current)

      // Hold on the final frame for 4s, then replay from start.
      replayTimeoutRef.current = setTimeout(() => {
        if (!solutionVideoRef.current) return
        solutionVideoRef.current.currentTime = 0

        if (solutionVideoInView) {
          void solutionVideoRef.current.play().catch(() => {})
        }
      }, 4000)
    }

    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('ended', handleEnded)
      if (replayTimeoutRef.current) {
        clearTimeout(replayTimeoutRef.current)
        replayTimeoutRef.current = null
      }
    }
  }, [solutionVideoInView])

  return (
    <>
      {/* ── Page-scoped styles ─────────────────────────────────────────── */}
      <style>{`

        /* ── Root ── */
        .pw {
          padding-top: var(--nav-h);
          background: var(--surface-card);
          --text-inverse: var(--text-primary);
          --text-inverse-muted: var(--text-primary-muted);
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
          background: var(--text-inverse);
          margin-top: var(--sp-6);
          margin-bottom: clamp(20px, 2.1vw, 30px);
          overflow: hidden;
          position: relative;
        }

        /* Section bands: RacingStripeBand (same animation / bleed as Next Gen) */

        /* ── Problem title ── */
        .pw-problem-ttl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(40px, 5.5vw, 80px);
        }
        .pw-problem-ttl-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }

        /* ── Overview: title left, meta+CTAs right ── */
        .pw-overview {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--grid-gutter);
          margin-bottom: clamp(64px, 9vw, 130px);
        }
        .pw-overview-title {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          margin: 0;
        }
        .pw-overview-right {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 2.78vw, 40px);
        }

        /* ── Project meta — 2-col ── */
        .pw-meta {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--grid-gutter);
        }
        .pw-meta-lbl {
          display: block;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--text-inverse);
          margin-bottom: clamp(16px, 2.2vw, 32px);
          letter-spacing: -0.02em;
        }
        .pw-meta-val {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.6;
        }

        /* ── CTA buttons ── */
        .pw-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(10px, 1.11vw, 16px);
          margin-top: auto;
        }
        .pw-btn {
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
        .pw-btn-content {
          display: inline-block;
          transform: skewX(10deg);
        }
        .pw-btn .letter,
        .pw-btn .letter-secondary {
          color: inherit;
          transition: color 0.2s ease;
        }
        .pw-btn-filled {
          background: var(--c-orange);
          color: var(--surface-card);
          border: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .pw-btn-filled:hover { background: var(--c-orange-strong); }
        .pw-btn-outline {
          background: transparent;
          color: var(--c-orange);
          border: clamp(2px, 0.28vw, 4px) solid var(--c-orange);
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .pw-btn-outline:hover {
          background: var(--c-orange);
          color: var(--surface-card);
          border-color: var(--c-orange);
        }

        /* ── Problem body ── */
        .pw-problem-body {
          max-width: 40ch;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Stats: Next Gen style ── */
        .pw-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: var(--grid-gutter);
          align-items: start;
          padding-top: clamp(40px, 5.5vw, 80px);
        }
        .pw-stat-2,
        .pw-stat-3 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 0;
        }
        .pw-stat-num {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(56px, 8.89vw, 128px);
          color: var(--text-inverse);
          line-height: 1;
          letter-spacing: -0.04em;
          margin: 0 0 clamp(12px, 1.39vw, 20px);
        }
        .pw-stat-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.5;
          margin: 0;
          max-width: 28ch;
        }

        /* ── Personal: full-width image, copy below image on the right ── */
        .pw-personal-block {
          padding-top: clamp(64px, 9vw, 130px);
        }
        .pw-personal-media {
          width: 100%;
          max-width: none;
          aspect-ratio: 21 / 8;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-dark-soft);
          position: relative;
        }
        .pw-personal-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .pw-personal-copy-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--grid-gutter);
          margin-top: clamp(24px, 2.78vw, 40px);
        }
        .pw-personal-copy {
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
          text-align: left;
        }

        /* ── How may we — below image + copy, left-aligned ── */
        .pw-hmw {
          padding-top: clamp(48px, 6.25vw, 90px);
          max-width: 50ch;
          margin-right: auto;
        }
        .pw-hmw-lead {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(12px, 1.67vw, 24px);
        }
        .pw-hmw-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── The Solution (Next Gen–style grid) ── */
        .pw-solution-grid {
          display: flex;
          align-items: flex-start;
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .pw-solution-placeholder {
          flex: 0 0 auto;
          width: clamp(240px, 39.2vw, 565px);
          max-width: 100%;
          aspect-ratio: 1;
          height: auto;
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .pw-solution-placeholder video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .pw-solution-text { flex: 1; min-width: 0; }
        .pw-solution-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(16px, 2.22vw, 32px);
        }
        .pw-solution-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Exploring the problem: audience interview + findings ── */
        .pw-explore {
          padding-bottom: clamp(64px, 9vw, 130px);
        }
        .pw-interview-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--grid-gutter);
          margin-bottom: clamp(24px, 2.78vw, 40px);
        }
        .pw-interview-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
        }
        .pw-interview-photo {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          margin-bottom: clamp(16px, 1.67vw, 24px);
          flex-shrink: 0;
        }
        .pw-interview-name {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(18px, 2.22vw, 28px);
          color: var(--c-orange);
          letter-spacing: -0.011em;
          line-height: 1.3;
          margin: 0 0 clamp(6px, 0.56vw, 8px);
        }
        .pw-interview-meta {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.5;
          letter-spacing: -0.011em;
          margin: 0;
        }
        .pw-findings-list {
          margin: 0;
          padding: 0;
          list-style: none;
          max-width: 62ch;
        }
        .pw-findings-item {
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
        .pw-findings-item::before {
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
        .pw-findings-item:last-child { margin-bottom: 0; }

        .pw-prompt {
          margin-top: clamp(40px, 5.5vw, 72px);
          max-width: 56ch;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin-bottom: 0;
        }
        .pw-prompt-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }

        /* ── Design process: sketches + A/B test ── */
        .pw-design {
          padding-bottom: clamp(64px, 9vw, 130px);
        }
        .pw-sketches-row {
          display: flex;
          gap: var(--grid-gutter);
          margin-bottom: clamp(24px, 2.78vw, 40px);
        }
        .pw-design-copy {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(40px, 5.5vw, 72px);
          max-width: 62ch;
        }
        .pw-design-copy--after-ab {
          margin-top: 0;
          margin-bottom: clamp(40px, 5.5vw, 72px);
        }
        .pw-design-copy--after-ab {
          margin: 0;
          max-width: 48ch;
          align-self: center;
        }
        .pw-sketch-cell {
          flex: 1;
          aspect-ratio: 1;
          min-width: 0;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          position: relative;
        }
        .pw-sketch-cell img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pw-ab-row {
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 2.78vw, 40px);
          margin-bottom: clamp(40px, 5.5vw, 72px);
          align-items: flex-start;
        }
        @media (min-width: 1024px) {
          .pw-ab-row {
            flex-direction: row;
            align-items: flex-start;
          }
        }
        .pw-ab-frame {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          line-height: 0;
          flex-shrink: 0;
        }
        @media (min-width: 1024px) {
          .pw-ab-frame {
            width: min(720px, calc(50% - var(--grid-gutter) / 2));
          }
        }
        .pw-lofi-hifi {
          width: 100%;
          height: clamp(300px, 51.7vw, 744px);
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          margin-bottom: clamp(40px, 5.5vw, 72px);
        }

        /* ── Usability testing: square left, copy right ── */
        .pw-usability-grid {
          display: flex;
          align-items: flex-start;
          gap: var(--grid-gutter);
        }
        .pw-usability-media {
          flex: 1;
          min-width: 0;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          position: relative;
        }
        .pw-usability-media img,
        .pw-usability-media video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pw-usability-text {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 2vw, 24px);
          justify-content: flex-start;
          align-self: flex-start;
        }
        .pw-usability-text .pw-findings-list {
          max-width: none;
        }
        .pw-usability-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0;
        }
        .pw-usability-conclusion {
          margin: 0;
          max-width: none;
        }
        .pw-usability-wide {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          position: relative;
          margin-top: clamp(40px, 5.5vw, 72px);
          margin-bottom: 0;
        }
        .pw-usability-wide img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Final product section body */
        .pw-final {
          padding-bottom: clamp(64px, 9vw, 130px);
        }
        .pw-final-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-contrast-soft);
          position: relative;
          margin-bottom: clamp(48px, 6.25vw, 90px);
        }
        .pw-final-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* What I learned / What’s next — Next Gen proto-foot pattern */
        .pw-foot {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--grid-gutter);
        }
        .pw-foot-next {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .pw-foot-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(28px, 3.33vw, 48px);
          line-height: 1.2;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(8px, 1.11vw, 14px);
        }
        .pw-foot-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          max-width: 42ch;
        }
        .pw-lofi-hifi img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pw-ab-frame img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Device video pair ── */
        .pw-device-pair {
          display: flex;
          gap: var(--grid-gutter);
          margin-bottom: clamp(48px, 6.25vw, 90px);
        }
        .pw-device-video {
          flex: 1;
          min-width: 0;
          border-radius: 20px;
          overflow: hidden;
          background: #1d1f1d;
          aspect-ratio: 1;
          position: relative;
        }
        .pw-device-video video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 767px) {
          .pw-device-pair {
            flex-direction: column;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .pw-device-pair {
            flex-direction: row;
          }
        }

        /* Bottom breathing room before RelatedCases */
        .pw-gap { padding-bottom: clamp(64px, 9vw, 130px); }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════ */
        @media (max-width: 639px) {
          .pw-stats { grid-template-columns: 1fr; }
          .pw-stat-2 { padding-top: clamp(32px, 8vw, 72px); }
          .pw-stat-3 { padding-top: clamp(64px, 16vw, 140px); }
        }

        @media (max-width: 767px) {
          .pw-lofi-hifi { height: auto; }
          .pw-lofi-hifi video { position: static; width: 100%; height: auto; object-fit: initial; }
          .pw-meta { grid-template-columns: 1fr; gap: 32px; }
          .pw-stats { grid-template-columns: 1fr; row-gap: 40px; }
          .pw-personal-copy-row {
            grid-template-columns: 1fr;
          }
          .pw-personal-copy {
            grid-column: 1;
            justify-self: stretch;
            max-width: none;
          }
          .pw-solution-grid { flex-direction: column; }
          .pw-solution-placeholder {
            width: 100%;
            max-width: min(565px, 100%);
            aspect-ratio: 1;
            height: auto;
            flex: none;
          }
          .pw-interview-grid {
            grid-template-columns: 1fr;
            row-gap: clamp(32px, 5vw, 48px);
          }
          .pw-sketches-row {
            flex-direction: column;
          }
          .pw-usability-grid {
            flex-direction: column;
            align-items: stretch;
          }
          .pw-usability-media {
            width: 100%;
            max-width: none;
            flex: none;
          }
          .pw-usability-text {
            align-self: flex-start;
          }
          .pw-foot {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 1023px) {
          .pw-overview { flex-direction: column; }
          .pw-overview-title { flex: none; width: 100%; }
          .pw-overview-right { flex: none; width: 100%; }
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
          <div className="pw-hero" role="img" aria-label="Paywall FC hero">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/images/paywall-hero-new.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <RacingStripeBand label="Paywall Fc" linesFrom="left" animateOnScroll />

        {/* ── PROBLEM TITLE + META ─────────────────────────────────────── */}
        <div className="pw-w">
          <motion.div className="pw-overview" {...scrollFadeUp}>
            <h1 className="pw-problem-ttl pw-overview-title">
              A long term plan to battle a{' '}
              <span className="pw-problem-ttl-accent">worsening</span>
              {' '}problem
            </h1>

            <div className="pw-overview-right">
              <div className="pw-meta">
                <div>
                  <span className="pw-meta-lbl">My position</span>
                  <span className="pw-meta-val">Brand designer<br />Web designer</span>
                </div>
                <div>
                  <span className="pw-meta-lbl">My gear</span>
                  <span className="pw-meta-val">Figma<br />Illustrator<br />After Effects</span>
                </div>
              </div>

              <div className="pw-cta-row">
                <a
                  href="https://paywallfc.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pw-btn pw-btn-filled"
                >
                  <span className="pw-btn-content">
                    <LetterSwapPingPong label="View live" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
                <a href="#" className="pw-btn pw-btn-outline">
                  <span className="pw-btn-content">
                    <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div id="the-problem">
          <RacingStripeBand label="The Problem" linesFrom="right" animateOnScroll />
        </div>

        <div className="pw-w pw-gap">
          <motion.div {...scrollFadeUp}>
          <p className="pw-problem-body">
            <span className="pw-problem-ttl-accent">Football fans</span>
            {' '}are being silenced by their own wallets, split across endless platforms,
            priced out of their passion and ignored by the leagues and broadcasters profiting
            from it.
          </p>

          <motion.div className="pw-stats" {...fadeUp(0.08)}>
            <div>
              <p className="pw-stat-num">£820+</p>
              <p className="pw-stat-desc">
                Is the minimum UK fans pay to follow their team, in just the Premier League,
                across three platforms: Sky, TNT and Amazon.
              </p>
            </div>

            <div className="pw-stat-2">
              <p className="pw-stat-num">15%</p>
              <p className="pw-stat-desc">
                Of games are blacked out even with the premium cost. Under the 3pm Saturday
                blackout rule, UK fans are legally blocked from watching their team, making
                the UK the most expensive with the least access.
              </p>
            </div>

            <div className="pw-stat-3">
              <p className="pw-stat-num">4+</p>
              <p className="pw-stat-desc">
                On average, it is cheaper to buy four pints than legally watch one Premier
                League game. The matchday price has become so inflated that fans are priced
                out before kickoff.
              </p>
            </div>
          </motion.div>

          <motion.div className="pw-personal-block" {...fadeUp(0.12)}>
            <div className="pw-personal-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/paywall-watching-footy.png"
                alt="Watching football with friends"
              />
            </div>
            <div className="pw-personal-copy-row">
              <p className="pw-personal-copy">
                Some of my fondest memories come from watching the games around a friend&apos;s.
                I was always priced out, so watching the game was a big deal and not a regular
                thing. I wish it were more accessible to bring that joy more often.
              </p>
            </div>

            <div className="pw-hmw">
              <p className="pw-hmw-lead">How may we</p>
              <p className="pw-hmw-body">
                Unify UK football fans around the cost of watching, so their frustration becomes
                a collective, public voice?
              </p>
            </div>
          </motion.div>
          </motion.div>
        </div>

        <RacingStripeBand label="The Solution" linesFrom="left" animateOnScroll />

        <div className="pw-w">
          <motion.div className="pw-solution-grid" {...scrollFadeUp}>
            <motion.div className="pw-solution-placeholder">
              <video
                ref={solutionVideoRef}
                muted
                playsInline
                preload="auto"
                aria-label="Paywall FC logo animation"
              >
                <source src="/images/LogoAnimation.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <div className="pw-solution-text">
              <p className="pw-solution-title">Paywall FC</p>
              <p className="pw-solution-body">
                A hypothetical club to represent the millions of UK fans who are no longer the
                priority of broadcasters, through a digital platform highlighting the rising cost
                of watching the game, with a long-term plan to bring streaming for the fans.
              </p>
            </div>
          </motion.div>
        </div>

        <RacingStripeBand label="Audience Interview" linesFrom="right" animateOnScroll />

        <div className="pw-w pw-explore">
          <motion.div {...scrollFadeUp}>
          <div className="pw-interview-grid">
            <div className="pw-interview-card">
              <div className="pw-interview-photo" role="img" aria-label="Lewis Darley — photo placeholder" />
              <p className="pw-interview-name">Lewis Darley</p>
              <p className="pw-interview-meta">
                23, Newmarket, England
                <br />
                Southampton Fan
              </p>
            </div>
            <div className="pw-interview-card">
              <div className="pw-interview-photo" role="img" aria-label="Adam Sutton — photo placeholder" />
              <p className="pw-interview-name">Adam Sutton</p>
              <p className="pw-interview-meta">
                23, Ely, England
                <br />
                Arsenal Fan
              </p>
            </div>
            <div className="pw-interview-card">
              <div className="pw-interview-photo" role="img" aria-label="Harry Howe — photo placeholder" />
              <p className="pw-interview-name">Harry Howe</p>
              <p className="pw-interview-meta">
                24, Burwell, England
                <br />
                Arsenal Fan
              </p>
            </div>
          </div>

          <ul className="pw-findings-list">
            <li className="pw-findings-item">
              It is actually cheaper to get a pint (turns out 4+) down the pub than legally watch
              a game at home.
            </li>
            <li className="pw-findings-item">
              The blackout is understood, but still feels like a robbery.
            </li>
            <li className="pw-findings-item">
              Everyone misses games because of the multiple subscriptions needed.
            </li>
          </ul>

          </motion.div>
        </div>

        <RacingStripeBand label="Design process" linesFrom="left" animateOnScroll />

        <div className="pw-w pw-design">
          <motion.div {...scrollFadeUp}>
          <div className="pw-sketches-row">
            <div className="pw-sketch-cell">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/paywall-sketch-1.jpg" alt="Logo sketch 1" />
            </div>
            <div className="pw-sketch-cell">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/paywall-sketch-2.jpg" alt="Logo sketch 2" />
            </div>
          </div>

          <p className="pw-design-copy">
            I started out by sketching the logo, going off a previously made logo to see if I
            could improve it. I took this on first as I wanted this to set the tone of the
            campaign.
          </p>

          <div className="pw-ab-row">
            <div className="pw-ab-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/paywall-ab-test.png"
                alt="Paywall Football Club — brand direction A versus B, with colour palette"
              />
            </div>
            <p className="pw-design-copy pw-design-copy--after-ab">
              I completed some A/B testing to see firstly if the new logo is better, but also to
              see if a new colour palette works better. I found that B took the favour, with a
              preferred logo and colour palette.
            </p>
          </div>

          <div className="pw-lofi-hifi">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              aria-label="Lo-fi to hi-fi progression"
            >
              <source src="/images/paywall-sketching-to-final.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="pw-design-copy">
            I then built out from sketches up to a version I was ready to take forward to get
            tested.
          </p>

          <div className="pw-usability-grid">
            <div className="pw-usability-media">
              <video
                src="/images/paywall-usability-testing.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Usability testing — screen recording"
              />
            </div>
            <div className="pw-usability-text">
              <p className="pw-usability-title">Usability testing</p>
              <ul className="pw-findings-list">
                <li className="pw-findings-item">All copy understood.</li>
                <li className="pw-findings-item">
                  Liked the calculator but needs a way to skip past it if I don&apos;t want to
                  have to scroll.
                </li>
                <li className="pw-findings-item">
                  Highlight the key parts from the calculator more.
                </li>
              </ul>
            </div>
          </div>

          <div className="pw-usability-wide">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              aria-label="Fixture toggle interaction"
            >
              <source src="/images/paywall-fixtoggle.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="pw-design-copy">
            I concluded this by implementing a way to skip through the fixtures as well as
            highlighting 3 key stats better.
          </p>
          </motion.div>
        </div>

        <RacingStripeBand label="Final product" linesFrom="right" animateOnScroll />

        <div className="pw-w pw-final">
          <motion.div {...scrollFadeUp}>
            <div className="pw-final-image">
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                aria-label="Paywall FC final product"
              >
                <source src="/images/paywall-product.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="pw-device-pair">
              <div className="pw-device-video">
                <video autoPlay muted loop playsInline aria-label="iPad view">
                  <source src="/images/ipdsquare.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="pw-device-video">
                <video autoPlay muted loop playsInline aria-label="Phone view">
                  <source src="/images/phonsquare.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="pw-foot">
              <div>
                <p className="pw-foot-title">What I learned</p>
                <p className="pw-foot-body">
                  My first time connecting a database to a site to get live updates for a little
                  feature as well as how to put together a feasible plan, while dealing with real
                  world changes.
                </p>
              </div>
              <div className="pw-foot-next">
                <p className="pw-foot-title">What&apos;s Next?</p>
                <p className="pw-foot-body">
                  Building out better advertisement to get people to find the site, then get
                  started using a real counter.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── MORE CASES ─────────────────────────────────────────────── */}
        <RelatedCases currentSlug="paywall-fc" />

      </div>
    </>
  )
}
