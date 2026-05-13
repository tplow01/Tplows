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

const PLAYER_PHOTO             = '/images/next-gen/Myexperience.png'
const OLD_WORK_IMG             = '/images/NextGen_OldWork.png'
const JAMES_PHOTO              = '/images/next-gen/james.jpg'
const INTERVIEW_FACETIME_THUMB = '/images/next-gen/facetime.png'

export default function NextGenV2Page() {
  return (
    <>
      <style>{`

        /* ── Root ── */
        .ng {
          padding-top: var(--nav-h);
          background: var(--surface-card);
          --text-inverse: var(--text-primary);
          --text-inverse-muted: var(--text-primary-muted);
          --surface-dark: var(--surface-card);
          overflow-x: hidden;
        }

        /* Content wrapper */
        .ng-w {
          max-width: var(--grid-max);
          margin-left:  auto;
          margin-right: auto;
          padding-left:  var(--grid-margin);
          padding-right: var(--grid-margin);
        }

        /* ── Hero ── */
        .ng-hero {
          border-radius: var(--radius-card);
          overflow: hidden;
          height: clamp(280px, 47.9vw, 690px);
          position: relative;
          background: var(--text-inverse);
          margin-top: var(--sp-6);
          margin-bottom: clamp(20px, 2.1vw, 30px);
        }
        .ng-hero video {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
          object-position: center top;
        }

        /* ── Overview title ── */
        .ng-problem-ttl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Project meta ── */
        .ng-meta {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--grid-gutter);
        }
        .ng-meta-lbl {
          display: block;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--text-inverse);
          margin-bottom: clamp(16px, 2.2vw, 32px);
          letter-spacing: -0.02em;
        }
        .ng-meta-val {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.6;
        }

        /* ── CTA buttons ── */
        .ng-cta-row {
          display: flex;
          gap: clamp(10px, 1.11vw, 16px);
        }
        .ng-btn {
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
        .ng-btn-content {
          display: inline-block;
          transform: skewX(10deg);
        }
        .ng-btn .letter,
        .ng-btn .letter-secondary {
          color: inherit;
          transition: color 0.2s ease;
        }
        .ng-btn-filled {
          background: var(--c-orange);
          color: var(--surface-dark);
          border: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .ng-btn-filled:hover { background: var(--c-orange-strong); }
        .ng-btn-outline {
          background: transparent;
          color: var(--c-orange);
          border: clamp(2px, 0.28vw, 4px) solid var(--c-orange);
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .ng-btn-outline:hover {
          background: var(--c-orange);
          color: var(--surface-dark);
          border-color: var(--c-orange);
        }

        /* ── Overview layout ── */
        .ng-overview {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-overview-title {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
        }
        .ng-overview-right {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 2.78vw, 40px);
        }
        .ng-overview-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.39vw, 20px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: clamp(12px, 1.39vw, 20px) 0 0;
          max-width: 44ch;
        }

        /* ── Discovering the Problem ───────────────────────────────── */

        .ng-old-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--grid-gutter);
          margin-bottom: clamp(64px, 9vw, 130px);
        }
        .ng-old-card {
          flex: 0 0 calc(66.667% - var(--grid-gutter) / 3);
          height: clamp(220px, 32.3vw, 465px);
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .ng-old-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
        .ng-old-caption {
          flex: 0 0 calc(33.333% - var(--grid-gutter) * 2 / 3);
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.39vw, 20px);
        }
        .ng-old-caption-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        .ng-story-row {
          display: flex;
          align-items: flex-start;
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-story-copy {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.25vw, 18px);
          overflow: hidden;
        }
        .ng-story-media {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          min-width: 0;
        }
        .ng-story-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .ng-story-subheading {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0;
        }
        .ng-story-quote {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 400;
          font-size: clamp(18px, 2.22vw, 32px);
          line-height: 1.4;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .ng-story-caption {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }
        .ng-story-photo {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 1;
        }
        .ng-story-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        /* ── The Reality stats ── */
        .ng-reality {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: var(--grid-gutter);
          row-gap: clamp(40px, 5.56vw, 80px);
          margin-bottom: clamp(40px, 5.56vw, 80px);
        }
        .ng-reality-lbl {
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
        .ng-reality-stat {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 0.83vw, 12px);
        }
        .ng-reality-stat-1 { grid-column: 9 / 13; grid-row: 1; }
        .ng-reality-stat-2 { grid-column: 5 / 9;  grid-row: 2; }
        .ng-reality-stat-3 { grid-column: 1 / 5;  grid-row: 3; }
        .ng-reality-num {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(56px, 8.89vw, 128px);
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: var(--c-orange);
          margin: 0;
        }
        .ng-reality-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.4;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }

        /* ── The Problem ── */
        .ng-problem-section { margin-top: clamp(80px, 12.5vw, 180px); }

        .ng-problem-stagger {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--grid-gutter);
          margin-bottom: clamp(48px, 5.5vw, 80px);
        }
        .ng-problem-stagger-coaches {
          padding-top: clamp(60px, 19.4vw, 280px);
        }
        .ng-problem-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          min-width: 0;
        }
        .ng-problem-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }

        /* ── How May We ── */
        .ng-hmw {
          padding-top: clamp(16px, 2.22vw, 32px);
          padding-bottom: clamp(80px, 12.5vw, 180px);
          max-width: 50ch;
          margin-left: auto;
        }
        .ng-hmw-lead {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(12px, 1.67vw, 24px);
        }
        .ng-hmw-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Interviewing ── */
        .ng-interview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-interview-photo-col {
          display: flex;
          flex-direction: column;
        }
        .ng-interview-photo {
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          margin-bottom: clamp(16px, 1.67vw, 24px);
          flex-shrink: 0;
        }
        .ng-interview-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .ng-interview-name {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(18px, 2.22vw, 32px);
          color: var(--c-orange);
          letter-spacing: -0.011em;
          line-height: 1.3;
          margin: 0 0 clamp(4px, 0.56vw, 8px);
        }
        .ng-interview-meta {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.5;
          letter-spacing: -0.011em;
          margin: 0;
        }
        .ng-interview-quotes-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: clamp(32px, 4.44vw, 64px);
        }
        .ng-interview-quote {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(16px, 1.94vw, 28px);
          line-height: 1.4;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .ng-interview-right-col {
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 2.22vw, 32px);
        }
        .ng-interview-facetime {
          width: clamp(100px, 13.89vw, 200px);
          aspect-ratio: 3 / 4;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          align-self: flex-start;
        }
        .ng-interview-facetime img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ng-interview-insight {
          flex: 1;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(16px, 1.94vw, 28px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Solution overview ── */
        .ng-solution-overview {
          display: flex;
          align-items: flex-start;
          gap: clamp(20px, 2.22vw, 32px);
          padding-top: clamp(48px, 6.25vw, 90px);
          margin-bottom: clamp(64px, 8.33vw, 120px);
          max-width: calc(50% - var(--grid-gutter) / 2);
        }
        .ng-solution-text { flex: 1; min-width: 0; }
        .ng-solution-lbl {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: var(--c-orange);
          letter-spacing: -0.02em;
          margin: 0 0 clamp(8px, 0.83vw, 12px);
        }
        .ng-solution-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.6;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .ng-solution-logo {
          flex-shrink: 0;
          align-self: flex-end;
          width: clamp(80px, 8.33vw, 120px);
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        .ng-solution-logo video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Proto CTA ── */
        .ng-proto-cta {
          display: flex;
          gap: clamp(10px, 1.11vw, 16px);
          margin-top: clamp(32px, 3.33vw, 48px);
          margin-bottom: clamp(40px, 4.44vw, 64px);
        }

        /* ── Strategy grid (2-across) ── */
        .ng-strat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(40px, 5.56vw, 80px) var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-strat-grid-media {
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: var(--surface-dark-soft);
          margin-bottom: clamp(16px, 1.67vw, 24px);
        }
        .ng-strat-grid-media video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ng-strat-grid-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(15px, 1.53vw, 22px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }

        /* ── Prototype rows ── */
        .ng-proto-rows {
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 2.78vw, 40px);
          margin-bottom: clamp(48px, 6.25vw, 90px);
        }
        .ng-proto-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--grid-gutter);
        }
        .ng-proto-card {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          aspect-ratio: 645 / 828;
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .ng-proto-screen {
          position: absolute;
          width: 56.4%;
          height: 88.5%;
          left: 21.9%;
          top: 5.7%;
          border-radius: 17%;
          overflow: hidden;
        }
        .ng-proto-screen video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ng-proto-text {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: clamp(24px, 2.78vw, 40px);
          min-width: 0;
        }
        .ng-proto-title {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(24px, 2.78vw, 40px);
          line-height: 1.3;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(4px, 0.28vw, 4px);
        }
        .ng-proto-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Prototype grid (3-across) ── */
        .ng-proto-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          margin-bottom: clamp(32px, 4.44vw, 64px);
        }
        .ng-proto-grid-card {
          aspect-ratio: 645 / 828;
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          margin-bottom: clamp(20px, 2.22vw, 32px);
        }
        .ng-proto-grid-screen {
          position: absolute;
          width: 56.4%;
          height: 88.5%;
          left: 21.9%;
          top: 5.7%;
          border-radius: 17%;
          overflow: hidden;
        }
        .ng-proto-grid-screen video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ng-proto-grid-title {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(15px, 1.53vw, 22px);
          line-height: 1.3;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(6px, 0.56vw, 8px);
        }
        .ng-proto-grid-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 18px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse-muted);
          margin: 0;
        }
        .ng-proto-grid-cta {
          padding-bottom: clamp(80px, 12.5vw, 180px);
        }

        /* ── Lessons / Next Steps ── */
        .ng-foot {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--grid-gutter);
          padding-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-foot-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(28px, 3.33vw, 48px);
          line-height: 1.2;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(8px, 1.11vw, 14px);
        }
        .ng-foot-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .ng-foot-item {
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
        .ng-foot-item::before {
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
        .ng-foot-item:last-child { margin-bottom: 0; }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════ */

        @media (max-width: 1023px) {
          .ng-overview       { flex-direction: column; }
          .ng-overview-title { flex: none; width: 100%; }
          .ng-overview-right { flex: none; width: 100%; }
        }

        @media (max-width: 767px) {
          .ng-meta             { grid-template-columns: 1fr; gap: 32px; }
          .ng-story-row        { flex-direction: column; }
          .ng-story-copy       { flex: none; width: 100%; }
          .ng-story-media      { flex: none; width: 100%; }
          .ng-old-row          { flex-direction: column; }
          .ng-old-card         { flex: none; width: 100%; height: clamp(200px, 56vw, 320px); }
          .ng-old-caption      { flex: none; width: 100%; }
          .ng-reality              { grid-template-columns: 1fr; row-gap: clamp(32px, 8vw, 48px); }
          .ng-reality-lbl,
          .ng-reality-stat-1,
          .ng-reality-stat-2,
          .ng-reality-stat-3     { grid-column: 1 / -1; grid-row: auto; }
          .ng-hmw                     { margin-left: 0; }
          .ng-interview-grid          { grid-template-columns: 1fr; }
          .ng-problem-stagger         { grid-template-columns: 1fr; }
          .ng-problem-stagger-coaches { padding-top: 0; }
          .ng-explore-row             { flex-direction: column; }
          .ng-explore-photo           { width: min(100%, clamp(220px, 78vw, 420px)); height: clamp(260px, 80vw, 420px); }
          .ng-explore-quotes          { gap: 32px; }
          .ng-explore-quote           { flex: none; width: 100%; }
          .ng-explore-person          { flex: none; width: 100%; }
          .ng-explore-facetime        { width: clamp(80px, 30vw, 140px); height: auto; aspect-ratio: 157 / 339; }
          .ng-solution-overview       { max-width: 100%; }
          .ng-proto-grid              { grid-template-columns: 1fr; }
          .ng-strat-grid              { grid-template-columns: 1fr; }
          .ng-foot                    { grid-template-columns: 1fr; }
        }

        @supports (corner-shape: squircle) {
          .ng-hero { corner-shape: squircle; }
        }
      `}</style>

      <div className="ng">

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <div className="ng-w">
          <div className="ng-hero">
            <video
              src="/images/Hero1.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          </div>
        </div>

        <RacingStripeBand label="Next Gen" linesFrom="left" animateOnScroll />

        <div className="ng-w">
          <motion.div className="ng-overview" {...scrollFadeUp}>

            <div className="ng-overview-title">
              <h1 className="ng-problem-ttl">
                A modern solution to college recruitment.
              </h1>
              <p className="ng-overview-desc">
                A broken system with a two faced problem and 1 simple solution.
              </p>
            </div>

            <div className="ng-overview-right">
              <div className="ng-meta">
                <div>
                  <span className="ng-meta-lbl">My position</span>
                  <span className="ng-meta-val">Product designer<br />Brand designer</span>
                </div>
                <div>
                  <span className="ng-meta-lbl">My gear</span>
                  <span className="ng-meta-val">Figma<br />Illustrator</span>
                </div>
              </div>

              <div className="ng-cta-row">
                <a href="https://www.figma.com/proto/ulabInIps5co2N5AI3thc4/Next_Gen?node-id=114-16&p=f&viewport=62%2C376%2C0.08&t=0g0ytBTKuYVw0Ils-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=114%3A16&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="ng-btn ng-btn-filled">
                  <span className="ng-btn-content">
                    <LetterSwapPingPong label="View prototype" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
                <a href="/pdf/Next_Gen_PDF.pdf" target="_blank" rel="noopener noreferrer" className="ng-btn ng-btn-outline">
                  <span className="ng-btn-content">
                    <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* ── 2. PAST MISTAKES + MY STORY ─────────────────────────────── */}
        <RacingStripeBand label="Discovering the Problem" linesFrom="right" animateOnScroll />

        <div className="ng-w">

          {/* Old work: 8-col dark card + 4-col caption */}
          <motion.div className="ng-old-row" {...scrollFadeUp}>
            <div className="ng-old-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={OLD_WORK_IMG} alt="3 old Next Gen screens" />
            </div>
            <div className="ng-old-caption">
              <p className="ng-story-subheading" style={{ margin: 0 }}>Past Mistakes</p>
              <p className="ng-old-caption-body">
                I previously made Next Gen as a youth social media. It won me two silver ADDY
                awards for its UI, but it didn&rsquo;t solve any real problems, so I came back
                to it, with a real problem I experienced.
              </p>
            </div>
          </motion.div>

          {/* My Story: copy + quotes left · soccer photo right */}
          <motion.div className="ng-story-row" {...scrollFadeUp}>
            <div className="ng-story-copy">
              <p className="ng-story-subheading">My Story</p>
              <p className="ng-story-body">
                I played at 3 different Colleges, each coming at me in a different way.
                An agency, a mutual and an email. I was very lucky to be presented these
                opportunities in a difficult recruitment system.
              </p>
              <p className="ng-story-quote">
                &ldquo;I sent out 100+ emails and only managed to get 2 replies&rdquo;
              </p>
              <p className="ng-story-quote">
                &ldquo;I tried an agency and got lots of offers, but none of them fitted
                what I was looking for&rdquo;
              </p>
              <p className="ng-story-caption">Academy of Art was one of the two replies!</p>
            </div>
            <div className="ng-story-media">
              <div className="ng-story-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PLAYER_PHOTO} alt="Thomas Plowman in goalkeeper kit" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── 3. THE PROBLEM ───────────────────────────────────────────── */}
        <div className="ng-problem-section">

          <RacingStripeBand label="The Problem" linesFrom="right" animateOnScroll />

          <div className="ng-w">

            {/* Players top-left · Coaches bottom-right */}
            <motion.div className="ng-problem-stagger" {...scrollFadeUp}>
              <p className="ng-problem-body">
                <span className="ng-problem-accent">Players</span>
                {' '}rely on mass emails, expensive agencies and costly showcases,
                with no guarantee of getting into the coaches&rsquo; spotlight.
              </p>
              <p className="ng-problem-body ng-problem-stagger-coaches">
                <span className="ng-problem-accent">Coaches</span>
                {' '}are buried under a lot of unfiltered interest, leaving them
                missing out on a lot of talented players that fit their program.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div className="ng-reality" {...scrollFadeUp}>
              <p className="ng-reality-lbl">The Reality</p>

              <div className="ng-reality-stat ng-reality-stat-1">
                <p className="ng-reality-num">1-3%</p>
                <p className="ng-reality-desc">Is the expected chance of a reply to an email</p>
              </div>

              <div className="ng-reality-stat ng-reality-stat-2">
                <p className="ng-reality-num">100+</p>
                <p className="ng-reality-desc">Is how many emails a Coach can receive daily in peak times</p>
              </div>

              <div className="ng-reality-stat ng-reality-stat-3">
                <p className="ng-reality-num">30s</p>
                <p className="ng-reality-desc">Is how long a coach will typically watch your tape</p>
              </div>
            </motion.div>

            {/* How May We */}
            <motion.div className="ng-hmw" {...scrollFadeUp}>
              <p className="ng-hmw-lead">How May We</p>
              <p className="ng-hmw-body">
                Put the right players into the right coaches&rsquo; spotlight at the right time,
                without relying on mass outreach or expensive showcases.
              </p>
            </motion.div>

          </div>

        </div>

        {/* ── 4. INSIGHT ───────────────────────────────────────────────── */}
        <RacingStripeBand label="Interviewing" linesFrom="right" animateOnScroll />

        <div className="ng-w">

          <motion.div className="ng-interview-grid" {...scrollFadeUp}>

            {/* Col 1: photo + name/meta */}
            <div className="ng-interview-photo-col">
              <div className="ng-interview-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={JAMES_PHOTO} alt="James Hogan" />
              </div>
              <p className="ng-interview-name">James Hogan</p>
              <p className="ng-interview-meta">
                25, Memphis, Tennessee<br />
                Soccer Assistant Coach<br />
                @ Christian Brothers University
              </p>
            </div>

            {/* Col 2: all three quotes, same weight */}
            <div className="ng-interview-quotes-col">
              <p className="ng-interview-quote">
                &ldquo;I&rsquo;ll rarely recruit through my emails, I&rsquo;ll get 60+
                a day so most just get lost in there&rdquo;
              </p>
              <p className="ng-interview-quote">
                &ldquo;We recruit very specific player profiles&rdquo;
              </p>
              <p className="ng-interview-quote">
                &ldquo;Most highlights I&rsquo;ll have decided within a minute whether
                I&rsquo;m watching more or not&rdquo;
              </p>
            </div>

            {/* Col 3: FaceTime snapshot + insight */}
            <div className="ng-interview-right-col">
              <div className="ng-interview-facetime">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={INTERVIEW_FACETIME_THUMB} alt="FaceTime interview with James Hogan" />
              </div>
              <p className="ng-interview-insight">
                Coaches get buried under so many emails a day it becomes a matter of right time,
                right place. They hold the most power in recruitment — so any solution has to
                serve them first.
              </p>
            </div>

          </motion.div>

        </div>

        {/* ── 5. THE SOLUTION ──────────────────────────────────────────── */}
        <RacingStripeBand label="The Solution" linesFrom="left" animateOnScroll />

        <div className="ng-w">

          {/* Solution overview — max 6-col, text left + small logo bottom-right */}
          <motion.div className="ng-solution-overview" {...scrollFadeUp}>
            <div className="ng-solution-text">
              <p className="ng-solution-lbl">Next Gen</p>
              <p className="ng-solution-body">
                A discovery feed focused app for players to upload 30 second clips to get
                into coaches&rsquo; spotlights, taking them onto their full profile where
                they can find all other recruitment related information.
              </p>
            </div>
            <motion.div
              className="ng-solution-logo"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 160, damping: 24, delay: 0.15 }}
              style={{ originX: 1, originY: 0 }}
            >
              <video src="/images/logostroke-h264.mp4" autoPlay muted loop playsInline aria-hidden="true" />
            </motion.div>
          </motion.div>

          {/* 3 prototype cards */}
          <motion.div className="ng-proto-grid" {...scrollFadeUp}>
            <div>
              <div className="ng-proto-grid-card">
                <div className="ng-proto-grid-screen">
                  <video src="/images/Profile_Setup.mp4" autoPlay muted loop playsInline aria-hidden="true" />
                </div>
              </div>
              <p className="ng-proto-grid-title">Player profile set up</p>
              <p className="ng-proto-grid-body">
                Next Gen gives players a platform to create a quick and easy profile to put
                themselves into relevant coaches&rsquo; spotlight.
              </p>
            </div>
            <div>
              <div className="ng-proto-grid-card">
                <div className="ng-proto-grid-screen">
                  <video src="/images/Filter_Watchlist.mp4" autoPlay muted loop playsInline aria-hidden="true" />
                </div>
              </div>
              <p className="ng-proto-grid-title">Coach filtering feed</p>
              <p className="ng-proto-grid-body">
                Next Gen gives Coaches a discovery feed filled with players that match their
                College and can be filtered down further for specific recruiting roles.
              </p>
            </div>
            <div>
              <div className="ng-proto-grid-card">
                <div className="ng-proto-grid-screen">
                  <video src="/images/Watchlist_Message.mp4" autoPlay muted loop playsInline aria-hidden="true" />
                </div>
              </div>
              <p className="ng-proto-grid-title">Coach messaging</p>
              <p className="ng-proto-grid-body">
                Next Gen gives Coaches a watchlist where they can keep updates on players.
                They are also able to make the first contact, with Coaches having to send
                the first message.
              </p>
            </div>
          </motion.div>

          {/* CTAs below prototype cards */}
          <motion.div className="ng-proto-cta" {...scrollFadeUp}>
            <a href="https://www.figma.com/proto/ulabInIps5co2N5AI3thc4/Next_Gen?node-id=114-16&p=f&viewport=62%2C376%2C0.08&t=0g0ytBTKuYVw0Ils-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=114%3A16&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="ng-btn ng-btn-filled">
              <span className="ng-btn-content">
                <LetterSwapPingPong label="View prototype" staggerFrom="first" staggerDuration={0.03} />
              </span>
            </a>
            <a href="/pdf/Next_Gen_PDF.pdf" target="_blank" rel="noopener noreferrer" className="ng-btn ng-btn-outline">
              <span className="ng-btn-content">
                <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
              </span>
            </a>
          </motion.div>

        </div>

        {/* ── 5b. DESIGN DECISION ──────────────────────────────────────── */}
        <RacingStripeBand label="Design Decision" linesFrom="right" animateOnScroll />

        <div className="ng-w">

          {/* Strategy — 2-column video grid */}
          <motion.div className="ng-strat-grid" {...scrollFadeUp}>
            <div>
              <div className="ng-strat-grid-media">
                <video src="/images/DiscoverySquare.mp4" autoPlay muted loop playsInline aria-hidden="true" />
              </div>
              <p className="ng-strat-grid-desc">
                We need to focus on short form videos to catch a coach&rsquo;s attention early,
                with most coaches deciding within a minute.
              </p>
            </div>
            <div>
              <div className="ng-strat-grid-media">
                <video src="/images/watchingwatchlist.mp4" autoPlay muted loop playsInline aria-hidden="true" />
              </div>
              <p className="ng-strat-grid-desc">
                A watchlist is needed to make sure coaches don&rsquo;t lose players they
                want to keep in their spotlight, helping both player &amp; coach.
              </p>
            </div>
            <div>
              <div className="ng-strat-grid-media">
                <video src="/images/filters.mp4" autoPlay muted loop playsInline aria-hidden="true" />
              </div>
              <p className="ng-strat-grid-desc">
                Filters should allow coaches to search for specific profiles while ensuring
                players are in the right coaches&rsquo; spotlight.
              </p>
            </div>
            <div>
              <div className="ng-strat-grid-media">
                <video src="/images/NotificationsHero.mp4" autoPlay muted loop playsInline aria-hidden="true" />
              </div>
              <p className="ng-strat-grid-desc">
                Notifications are needed to give players clarity on whether their clips,
                profile and highlight are being seen.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── 6. CONCLUSIONS ───────────────────────────────────────────── */}
        <RacingStripeBand label="Conclusions" linesFrom="left" animateOnScroll />

        <div className="ng-w">
          <motion.div className="ng-foot" {...scrollFadeUp}>
            <div>
              <p className="ng-foot-title">Lessons</p>
              <ul className="ng-foot-list">
                <li className="ng-foot-item">The ADDY version looked good but didn&rsquo;t serve any real purpose — it must be purposeful first, beautiful second</li>
                <li className="ng-foot-item">You can learn a lot from indirect competitors — LinkedIn&rsquo;s notification model shaped how I thought about player visibility</li>
                <li className="ng-foot-item">Interviewing the right target market users changed the direction of the whole solution</li>
                <li className="ng-foot-item">Simple and easy to use is always best</li>
              </ul>
            </div>
            <div>
              <p className="ng-foot-title">Next Steps</p>
              <ul className="ng-foot-list">
                <li className="ng-foot-item">Test the prototype with more active college coaches to validate the solution</li>
                <li className="ng-foot-item">Validate the 30-second clip format with players — is that enough time to get a coach onto a player&rsquo;s profile?</li>
                <li className="ng-foot-item">Define the business model — if agencies profit from the broken system, Next Gen needs a clear answer for how it sustains itself</li>
              </ul>
            </div>
            <div style={{ gridColumn: '1 / -1', marginTop: 'clamp(24px, 2.78vw, 40px)', display: 'flex', gap: 'clamp(10px, 1.11vw, 16px)' }}>
              <a href="https://www.figma.com/proto/ulabInIps5co2N5AI3thc4/Next_Gen?node-id=114-16&p=f&viewport=62%2C376%2C0.08&t=0g0ytBTKuYVw0Ils-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=114%3A16&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="ng-btn ng-btn-filled">
                <span className="ng-btn-content">
                  <LetterSwapPingPong label="View prototype" staggerFrom="first" staggerDuration={0.03} />
                </span>
              </a>
              <a href="/pdf/Next_Gen_PDF.pdf" target="_blank" rel="noopener noreferrer" className="ng-btn ng-btn-outline">
                <span className="ng-btn-content">
                  <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── MORE CASES ─────────────────────────────────────────────── */}
        <RelatedCases currentSlug="next-gen" />

      </div>
    </>
  )
}
