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
          aspect-ratio: 1170 / 1286;
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

        /* ── Stagger interview layout ── */
        .ms-stagger {
          padding-bottom: clamp(64px, 9vw, 130px);
        }
        .ms-stagger-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: var(--grid-gutter);
        }
        .ms-stagger-right {
          padding-top: clamp(80px, 13.89vw, 200px);
        }
        .ms-person-row {
          display: flex;
          align-items: flex-end;
          gap: clamp(16px, 1.67vw, 24px);
          margin-bottom: clamp(20px, 2.08vw, 30px);
        }
        .ms-person-photo {
          flex: 0 0 clamp(160px, 26.04vw, 375px);
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-dark-soft);
        }
        .ms-person-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .ms-person-findings {
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
        .ms-person-findings p { margin: 0; }
        .ms-person-name {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(28px, 3.33vw, 48px);
          color: var(--c-orange);
          letter-spacing: -0.011em;
          line-height: 1.3;
          margin: 0 0 clamp(4px, 0.42vw, 6px);
        }
        .ms-person-meta {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 18px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }
        .ms-stagger-conclusion {
          margin-top: clamp(40px, 5.56vw, 80px);
        }
        .ms-stagger-conclusion p {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(24px, 2.78vw, 40px);
          line-height: 1.4;
          letter-spacing: -0.022em;
          color: var(--text-inverse);
          margin: 0;
          max-width: 16ch;
        }

        /* Bottom breathing room before RelatedCases */
        .ms-gap { padding-bottom: clamp(64px, 9vw, 130px); }

        /* ── Design Process ── */
        .ms-dp-video {
          width: 100%;
          border-radius: var(--radius-card);
          overflow: hidden;
          background: var(--surface-dark-soft);
          margin-bottom: clamp(24px, 2.78vw, 40px);
        }
        .ms-dp-video video {
          width: 100%;
          display: block;
        }
        .ms-dp-copy {
          max-width: 44ch;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.08vw, 30px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          padding-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms-dp-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }

        /* ── Flow rows (prototype-style) ── */
        .ms-proto-rows {
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 2.78vw, 40px);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms-proto-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--grid-gutter);
        }
        .ms-proto-card {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          aspect-ratio: 645 / 828;
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .ms-proto-screen {
          position: absolute;
          width: 56.4%;
          height: 88.5%;
          left: 21.9%;
          top: 5.7%;
          border-radius: 17%;
          overflow: hidden;
          background: var(--surface-dark-soft);
        }
        .ms-proto-screen video,
        .ms-proto-screen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ms-proto-text {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: clamp(24px, 2.78vw, 40px);
          min-width: 0;
        }
        .ms-proto-title {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(24px, 2.78vw, 40px);
          line-height: 1.3;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(4px, 0.28vw, 4px);
        }
        .ms-proto-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Sketch row (3 equal squares) ── */
        .ms-sketch-row {
          display: flex;
          gap: var(--grid-gutter);
          margin-bottom: clamp(24px, 2.78vw, 40px);
        }
        .ms-sketch-sq {
          flex: 1;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: var(--surface-dark-soft);
        }
        .ms-sketch-sq img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Brand palette block ── */
        .ms-brand-block {
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms-brand-media {
          width: 100%;
          aspect-ratio: 16 / 7;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface-dark-soft);
          position: relative;
        }
        .ms-brand-media img,
        .ms-brand-media video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Feature rows ── */
        .ms-feature-rows {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 5.56vw, 80px);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms-feature-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--grid-gutter);
        }
        .ms-feature-media {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: var(--surface-dark-soft);
        }
        .ms-feature-media video,
        .ms-feature-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ms-feature-copy {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .ms-feature-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }

        /* ── Conclusion ── */
        .ms-conclusion {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ms-conclusion-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(28px, 3.33vw, 48px);
          line-height: 1.2;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(8px, 1.11vw, 14px);
        }
        .ms-conclusion-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          max-width: 42ch;
        }

        /* ── Brand Style Guide Panel ── */
        .ms-bs-wrap {
          background: linear-gradient(150deg, #edf2f8 0%, #e4edf6 50%, #eee9f7 100%);
          border-radius: 20px;
          padding: clamp(16px, 2.22vw, 32px);
          display: grid;
          grid-template-columns: 35fr 65fr;
          gap: clamp(12px, 1.67vw, 24px);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        .ms-bs-col-left {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.67vw, 24px);
        }
        .ms-bs-col-right {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.67vw, 24px);
        }
        .ms-bs-row-2 {
          display: grid;
          grid-template-columns: 58fr 42fr;
          gap: clamp(12px, 1.67vw, 24px);
        }
        .ms-bs-card {
          background: #ffffff;
          border-radius: 16px;
          padding: clamp(14px, 1.53vw, 22px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
        }
        .ms-bs-title {
          font-weight: 800;
          font-size: clamp(14px, 1.39vw, 20px);
          color: #1a2030;
          margin: 0 0 clamp(10px, 1.25vw, 18px);
          letter-spacing: -0.02em;
        }
        /* Logo */
        .ms-bs-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(6px, 0.83vw, 12px) 0;
        }
        .ms-bs-logo-wrap img {
          max-width: min(120px, 65%);
          height: auto;
          filter: brightness(0) saturate(100%) invert(60%) sepia(30%) saturate(500%) hue-rotate(110deg) brightness(95%);
        }
        /* Buttons */
        .ms-bs-btns {
          display: flex;
          flex-direction: column;
          gap: clamp(6px, 0.69vw, 10px);
        }
        .ms-bs-btn-p {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          background: linear-gradient(171deg, rgba(81,184,159,0.9) 0%, rgba(81,184,159,0.7) 100%);
          color: white; border: none; border-radius: 14px;
          padding: clamp(6px, 0.63vw, 9px) 14px;
          font-size: clamp(10px, 0.97vw, 14px); font-weight: 500;
          cursor: default; box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          font-family: 'Inter', system-ui, sans-serif; white-space: nowrap;
        }
        .ms-bs-btn-g {
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(173deg, #6ad3a3 0%, #5babff 100%);
          color: white; border: none; border-radius: 14px;
          padding: clamp(6px, 0.63vw, 9px) 14px;
          font-size: clamp(10px, 0.97vw, 14px); font-weight: 500;
          cursor: default; font-family: 'Inter', system-ui, sans-serif;
        }
        .ms-bs-btn-row {
          display: flex; align-items: center; gap: clamp(5px, 0.56vw, 8px);
        }
        .ms-bs-btn-cancel {
          flex: 1; background: white; color: #2d3748;
          border: 1px solid #e2e8f0; border-radius: 14px;
          padding: clamp(5px, 0.56vw, 8px) 8px;
          font-size: clamp(10px, 0.97vw, 14px);
          cursor: default; font-family: 'Inter', system-ui, sans-serif;
        }
        .ms-bs-btn-add {
          display: flex; align-items: center; gap: 3px;
          background: linear-gradient(173deg, #6ad3a3 0%, #5babff 100%);
          color: white; border: none; border-radius: 14px;
          padding: clamp(5px, 0.56vw, 8px) clamp(7px, 0.69vw, 10px);
          font-size: clamp(10px, 0.97vw, 14px); font-weight: 500;
          cursor: default; font-family: 'Inter', system-ui, sans-serif;
        }
        .ms-bs-btn-arr {
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(173deg, #6ad3a3 0%, #5babff 100%);
          color: white; border: none; border-radius: 12px;
          width: clamp(26px, 2.22vw, 32px); height: clamp(26px, 2.22vw, 32px);
          cursor: default; flex-shrink: 0;
        }
        .ms-bs-ctrl {
          display: flex; align-items: center; gap: clamp(6px, 0.69vw, 10px);
        }
        .ms-bs-toggle {
          display: inline-flex;
          width: clamp(26px, 2.22vw, 32px); height: clamp(14px, 1.25vw, 18px);
          background: #e2e8f0; border-radius: 9999px; position: relative; flex-shrink: 0;
        }
        .ms-bs-toggle::after {
          content: ''; position: absolute;
          left: 2px; top: 50%; transform: translateY(-50%);
          width: clamp(10px, 0.97vw, 14px); height: clamp(10px, 0.97vw, 14px);
          background: white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .ms-bs-sym {
          font-size: clamp(11px, 1.11vw, 16px); color: #2d3748;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .ms-bs-dates { display: flex; gap: clamp(5px, 0.56vw, 8px); }
        .ms-bs-date {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          background: white; border-radius: 12px; padding: clamp(5px, 0.56vw, 8px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.07);
        }
        .ms-bs-date-act {
          background: linear-gradient(173deg, #6ad3a3 0%, #5babff 100%); color: white;
        }
        .ms-bs-dday {
          font-size: clamp(8px, 0.76vw, 11px); opacity: 0.7;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .ms-bs-dnum {
          font-size: clamp(12px, 1.39vw, 20px); font-weight: 600;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .ms-bs-slider { display: flex; flex-direction: column; gap: 2px; }
        .ms-bs-track {
          position: relative; height: 7px; background: #e8ecf0; border-radius: 9999px;
        }
        .ms-bs-fill {
          position: absolute; left: 0; top: 0; height: 100%; border-radius: 9999px;
        }
        .ms-bs-thumb {
          position: absolute; top: 50%; transform: translate(-50%,-50%);
          width: 13px; height: 13px; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .ms-bs-slabels {
          display: flex; justify-content: space-between;
          font-size: clamp(8px, 0.76vw, 11px); color: rgba(106,114,130,0.8);
          font-family: 'Inter', system-ui, sans-serif;
        }
        /* Palette */
        .ms-bs-palette { display: flex; align-items: flex-end; gap: clamp(6px, 0.97vw, 14px); }
        .ms-bs-swatch { display: flex; flex-direction: column; align-items: center; gap: 5px; }
        .ms-bs-slabel {
          font-size: clamp(7px, 0.63vw, 9px); font-weight: 600;
          letter-spacing: 0.02em; font-family: 'Inter', system-ui, sans-serif;
        }
        .ms-bs-circle {
          width: clamp(38px, 5vw, 72px); height: clamp(38px, 5vw, 72px);
          border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.14);
        }
        /* Type */
        .ms-bs-card-type {
          display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
        }
        .ms-bs-aa {
          font-size: clamp(36px, 5vw, 72px); font-weight: 700; color: #1a2030;
          line-height: 1; margin: 0 0 2px; font-family: 'Inter', system-ui, sans-serif;
        }
        .ms-bs-fname {
          font-size: clamp(11px, 1.11vw, 16px); font-weight: 700; color: #1a2030;
          margin: 0; font-family: 'Inter', system-ui, sans-serif;
        }
        /* Nav */
        .ms-bs-navbar {
          display: flex; justify-content: space-around;
          background: #f7fafc;
          border-radius: 14px; padding: clamp(8px, 0.83vw, 12px) 0;
          border: 1px solid #edf2f7;
        }
        .ms-bs-navitem {
          display: flex; flex-direction: column; align-items: center;
          gap: 3px; position: relative; padding: 3px 6px;
        }
        .ms-bs-navlabel {
          font-size: clamp(8px, 0.76vw, 11px); color: rgba(106,114,130,0.7);
          font-family: 'Inter', system-ui, sans-serif;
        }
        .ms-bs-navlabel-act { color: #3CB87A; }
        .ms-bs-nav-line {
          position: absolute; bottom: -9px; left: 50%; transform: translateX(-50%);
          width: 60%; height: 2px;
          background: linear-gradient(90deg, #00D5BE, #00BC7D); border-radius: 9999px;
        }
        /* Values */
        .ms-bs-vlist {
          list-style: disc; margin: 0; padding: 0 0 0 14px;
          display: flex; flex-direction: column; gap: 3px;
        }
        .ms-bs-vlist li {
          font-size: clamp(10px, 0.97vw, 14px); color: #2d3748;
          font-family: 'Inter', system-ui, sans-serif;
        }
        /* Moods */
        .ms-bs-moods { display: flex; align-items: center; gap: clamp(6px, 1.11vw, 16px); flex-wrap: wrap; }
        .ms-bs-mood { width: clamp(44px, 5.56vw, 80px); height: clamp(44px, 5.56vw, 80px); flex-shrink: 0; }

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

        @media (max-width: 1023px) {
          .ms-bs-wrap { grid-template-columns: 1fr; }
          .ms-bs-row-2 { grid-template-columns: 1fr; }
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
          .ms-proto-row { flex-direction: column; align-items: stretch; }
          .ms-proto-card,
          .ms-proto-text { flex: none; }
          .ms-proto-row--flip .ms-proto-card { order: -1; }
          .ms-sketch-row { flex-direction: column; }
          .ms-sketch-sq { flex: none; width: 100%; }
          .ms-feature-row { flex-direction: column; align-items: stretch; }
          .ms-feature-media,
          .ms-feature-copy { flex: none; }
          .ms-feature-row--flip .ms-feature-media { order: -1; }
          .ms-conclusion { grid-template-columns: 1fr; }
          .ms-stagger-grid { grid-template-columns: 1fr; }
          .ms-stagger-right { padding-top: clamp(40px, 8vw, 64px); }
          .ms-stagger-conclusion p { max-width: none; }
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
              <img src="/images/mindset/MindsetPersonal.jpg" alt="Personal interest — student athlete life" />
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
            <div className="ms-solution-placeholder">
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                <source src="/images/mindset/solutionhero.mp4" type="video/mp4" />
              </video>
            </div>
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

        {/* ── EXPLORING THE PROBLEM ────────────────────────────────────── */}
        <RacingStripeBand label="Exploring the Problem" linesFrom="right" animateOnScroll />

        <div className="ms-w ms-stagger">
          <motion.div className="ms-stagger-grid" {...scrollFadeUp}>

            {/* Chris – left, starts high */}
            <div>
              <div className="ms-person-row">
                <div className="ms-person-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/mindset/chris.webp" alt="Chris Lechuga" />
                </div>
                <div className="ms-person-findings">
                  <p>&ldquo;Random plans pop up at least twice a week&mdash;it&rsquo;s stressful&rdquo;</p>
                  <p>&ldquo;My mood definitely impacts the mindset and attitude I bring to whatever I&rsquo;m doing.&rdquo;</p>
                </div>
              </div>
              <p className="ms-person-name">Chris Lechuga</p>
              <p className="ms-person-meta">21, Chicago, Illinois<br />Player @ Tiffin University</p>
            </div>

            {/* Adrian – right, staggered down */}
            <div className="ms-stagger-right">
              <div className="ms-person-row">
                <div className="ms-person-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/mindset/adrian.webp" alt="Adrian Lechuga" />
                </div>
                <div className="ms-person-findings">
                  <p>&ldquo;I&rsquo;d check in for five seconds if it actually shows patterns that help my recovery or performance.&rdquo;</p>
                  <p>&ldquo;I feel burnout both physically and mentally, it&rsquo;s a 24/7 thing&rdquo;</p>
                </div>
              </div>
              <p className="ms-person-name">Adrian Lechuga</p>
              <p className="ms-person-meta">21, Chicago, Illinois<br />Player @ Tiffin University</p>
              <div className="ms-stagger-conclusion">
                <p>Any solution has to be quick and easy with anything else failing.</p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* ── AUDIENCE STRATEGY ────────────────────────────────────────── */}
        <RacingStripeBand label="Audience Strategy" linesFrom="left" animateOnScroll />

        <div className="ms-w">
          <div className="ms-feature-rows">

            {/* Mood logging — media left, copy right */}
            <motion.div className="ms-feature-row" {...scrollFadeUp}>
              <div className="ms-feature-media">
                <video autoPlay muted loop playsInline>
                  <source src="/images/mindset/quickmoodtoggle.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="ms-feature-copy">
                <span className="ms-feature-accent">Logging your mood</span>
                {' '}takes seconds — a quick tap that captures how you&rsquo;re
                feeling without interrupting your day, so patterns stay visible
                without the effort.
              </p>
            </motion.div>

            {/* Scheduling — copy left, media right */}
            <motion.div className="ms-feature-row ms-feature-row--flip" {...scrollFadeUp}>
              <p className="ms-feature-copy">
                The moment a{' '}
                <span className="ms-feature-accent">scheduling overlap is created,
                it&rsquo;s flagged instantly</span>
                {' '}— no surprises, no double-bookings, just a clear schedule
                that keeps everyone on the same page.
              </p>
              <div className="ms-feature-media">
                <video autoPlay muted loop playsInline>
                  <source src="/images/mindset/alert.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>

            {/* Messaging — media left, copy right */}
            <motion.div className="ms-feature-row" {...scrollFadeUp}>
              <div className="ms-feature-media">
                <video autoPlay muted loop playsInline>
                  <source src="/images/mindset/3mainscreens.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="ms-feature-copy">
                Everything stays in{' '}
                <span className="ms-feature-accent">one central place</span>
                {' '}— with a clear split between group chats and direct messages,
                conversations stay organised and nothing requires leaving the app.
              </p>
            </motion.div>

          </div>
        </div>

        {/* ── DESIGN PROCESS ───────────────────────────────────────────── */}
        <RacingStripeBand label="Design Process" linesFrom="right" animateOnScroll />

        <div className="ms-w">
          {/* Page sketches · Logo sketch · Logo */}
          <motion.div className="ms-sketch-row" {...scrollFadeUp}>
            <div className="ms-sketch-sq">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mindset/pagesketch.png" alt="Mindset page sketches" />
            </div>
            <div className="ms-sketch-sq">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mindset/logosketch.png" alt="Mindset logo sketch" />
            </div>
            <div className="ms-sketch-sq">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mindset/logo.png" alt="Mindset logo" />
            </div>
          </motion.div>

          {/* Wireframe to hi-fi */}
          <motion.div {...scrollFadeUp}>
            <div className="ms-dp-video">
              <video autoPlay muted loop playsInline>
                <source src="/images/mindset/lo-hi-mindset.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Lo-hi caption */}
          <motion.p className="ms-dp-copy" {...fadeUp(0.05)}>
            I started by focusing on three main tasks a user would undertake on Mindset.
            I took to sketching what exactly is needed on each page, before starting to
            build a low fidelity wireframe.
          </motion.p>

          {/* Brand style palette */}
          <motion.div className="ms-brand-block" {...scrollFadeUp}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mindset/styleguide.png"
              alt="Mindset brand style guide"
              style={{ width: '100%', height: 'auto', borderRadius: 20, display: 'block' }}
            />
          </motion.div>
        </div>

        {/* ── FINAL PRODUCT ────────────────────────────────────────────── */}
        <RacingStripeBand label="Final Product" linesFrom="left" animateOnScroll />

        <div className="ms-w">
          <div className="ms-proto-rows">

            {/* Flow 1: Mood Logging — card left, text right */}
            <motion.div className="ms-proto-row" {...scrollFadeUp}>
              <div className="ms-proto-card">
                <video autoPlay muted loop playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}>
                  <source src="/images/mindset/Mock_moodlog.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="ms-proto-text">
                <div>
                  <p className="ms-proto-title">Mood logging</p>
                  <p className="ms-proto-body">{/* Add copy here */}</p>
                </div>
                <a href="#" className="ms-btn ms-btn-filled">
                  <span className="ms-btn-content">
                    <LetterSwapPingPong label="View live" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Flow 2: Scheduling — text left, card right */}
            <motion.div className="ms-proto-row ms-proto-row--flip" {...scrollFadeUp}>
              <div className="ms-proto-text">
                <div>
                  <p className="ms-proto-title">Scheduling</p>
                  <p className="ms-proto-body">{/* Add copy here */}</p>
                </div>
                <a href="#" className="ms-btn ms-btn-filled">
                  <span className="ms-btn-content">
                    <LetterSwapPingPong label="View live" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
              <div className="ms-proto-card">
                <video autoPlay muted loop playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}>
                  <source src="/images/mindset/Mock_schedule.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>

            {/* Flow 3: Messaging — card left, text right */}
            <motion.div className="ms-proto-row" {...scrollFadeUp}>
              <div className="ms-proto-card">
                <video autoPlay muted loop playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}>
                  <source src="/images/mindset/Mock_messaging.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="ms-proto-text">
                <div>
                  <p className="ms-proto-title">Messaging</p>
                  <p className="ms-proto-body">{/* Add copy here */}</p>
                </div>
                <a href="#" className="ms-btn ms-btn-filled">
                  <span className="ms-btn-content">
                    <LetterSwapPingPong label="View live" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── CONCLUSION ───────────────────────────────────────────────── */}
        <div className="ms-w">
          <motion.div className="ms-conclusion" {...scrollFadeUp}>
            <div>
              <p className="ms-conclusion-title">What I learned</p>
              <p className="ms-conclusion-body">
                I learned that this problem is universal — not just something I
                experienced personally, but something that resonates with others too.
              </p>
            </div>
            <div>
              <p className="ms-conclusion-title">What&rsquo;s next?</p>
              <p className="ms-conclusion-body">
                Exploring an anonymous support system where teams can view their
                collective mood and receive tailored recommendations — if morale is
                running low, the suggestion might be a team movie night or something
                to bring everyone back together.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── MORE CASES ─────────────────────────────────────────────── */}
        <RelatedCases currentSlug="mindset" bg="var(--surface-card)" />

      </div>
    </>
  )
}
