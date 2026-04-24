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

const PLAYER_PHOTO = '/images/next-gen/Myexperience.png'
const JAMES_PHOTO    = '/images/next-gen/james.jpg'
const SKETCH_FLOW_1  = '/images/next-gen/sketch-flow-1.jpg'
const SKETCH_FLOW_2  = '/images/next-gen/sketch-flow-2.jpg'
const SKETCH_FLOW_3  = '/images/next-gen/sketch-flow-3.jpg'
const LOGO_SKETCH    = '/images/next-gen/logosketch.jpg'
const LOGO_VIDEO_MP4 = '/images/logostroke-h264.mp4'
const LOW_HIFI_MP4          = '/images/Low-Hifi.mp4'
const WATCHLIST_MESSAGE_MP4 = '/images/Watchlist_Message.mp4'
const FILTER_WATCHLIST_MP4  = '/images/Filter_Watchlist.mp4'
const PROFILE_SETUP_MP4     = '/images/Profile_Setup.mp4'
const OLD_WORK_IMG   = '/images/NextGen_OldWork.png'

const INTERVIEW_FACETIME_THUMB = '/images/next-gen/facetime.png'
const DISCOVERY_FEED_MP4 = '/images/DiscoverySquare.mp4'
const FILTERS_MP4        = '/images/filters.mp4'
const NOTIF_MP4          = '/images/NotificationsHero.mp4'
const WATCHING_WATCHLIST_MP4 = '/images/watchingwatchlist.mp4'

export default function NextGenPage() {
  return (
    <>
      {/* ── Page-scoped styles ─────────────────────────────────────────── */}
      <style>{`

        /* ── Root ── */
        .ng {
          padding-top: var(--nav-h);
          background: var(--surface-card);
          --text-inverse: var(--text-primary);
          --text-inverse-muted: var(--text-primary-muted);
          --surface-dark: var(--surface-card);
          --surface-dark-strong: var(--surface-dark-soft);
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
        .ng-hero video,
        .ng-hero img {
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
        .ng-problem-ttl-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }

        /* ── Project meta — 2-col ── */
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

        /* ── Overview: title left 6-col, meta+buttons right 6-col ── */
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

        /* ── Problem: staggered two-paragraph layout ── */
        .ng-problem-stagger {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--grid-gutter);
          margin-bottom: clamp(48px, 5.5vw, 80px);
        }
        .ng-problem-stagger-coaches {
          padding-top: clamp(60px, 19.4vw, 280px);
        }
        .ng-problem-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: var(--c-orange);
        }

        /* ── Problem section spacing ── */
        .ng-problem-section {
          margin-top: clamp(80px, 12.5vw, 180px);
        }

        /* ── Problem: two columns — left: video + coaches copy; right: players copy + video ── */
        .ng-problem-cols {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--grid-gutter);
          margin-bottom: clamp(48px, 5.5vw, 80px);
          align-items: start;
        }
        .ng-problem-stack {
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 5.5vw, 80px);
          min-width: 0;
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
        .ng-problem-video {
          border-radius: 20px;
          height: clamp(160px, 21.4vw, 308px);
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }
        .ng-problem-video video {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
          object-position: center top;
        }

        /* ── Stats: flat 3 columns (tablet + desktop); staggered column only on mobile ── */
        .ng-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: var(--grid-gutter);
          align-items: start;
          padding-bottom: clamp(48px, 6.25vw, 90px);
        }
        .ng-stat-2,
        .ng-stat-3 {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 0;
        }

        .ng-stat-num {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(56px, 8.89vw, 128px);
          color: var(--text-inverse);
          line-height: 1;
          letter-spacing: -0.04em;
          margin: 0 0 clamp(12px, 1.39vw, 20px);
          text-align: center;
        }
        .ng-stat-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse-muted);
          line-height: 1.5;
          margin: 0;
          max-width: 24ch;
        }

        /* ── How may we ── */
        .ng-hmw {
          padding-top: clamp(40px, 6.25vw, 90px);
          padding-bottom: clamp(80px, 12.5vw, 180px);
          max-width: 50ch;
        }
        .ng-hmw-lead {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
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

        /* ── Exploring the problem ─────────────────────────────────────── */

        /* Photo card — player + James */
        .ng-explore-photo {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          width: clamp(200px, 29.2vw, 420px);
          height: clamp(280px, 34.7vw, 500px);
        }
        .ng-explore-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Row wrapper: photo left + wrapping quote grid right */
        .ng-explore-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--grid-gutter);
          margin-bottom: clamp(40px, 4.44vw, 64px);
        }
        .ng-explore-row--last {
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }

        /* Wrapping 2-col quote grid */
        .ng-explore-quotes {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          gap: clamp(48px, 8.89vw, 128px) var(--grid-gutter);
          align-items: flex-start;
          align-content: flex-start;
          min-width: 0;
        }
        .ng-explore-quotes--end {
          align-items: flex-end;
          align-content: flex-end;
          gap: clamp(32px, 5.97vw, 86px) var(--grid-gutter);
        }
        .ng-explore-quote {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          min-width: 0;
        }

        /* Person block — "My experience" / "James Hogan" */
        .ng-explore-person {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          min-width: 0;
        }
        .ng-explore-person-name {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(22px, 3.33vw, 48px);
          color: var(--c-orange);
          letter-spacing: -0.011em;
          line-height: 1.5;
          margin: 0 0 clamp(4px, 0.56vw, 8px);
        }
        .ng-explore-person-meta {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: var(--text-inverse);
          line-height: 1.5;
          letter-spacing: -0.011em;
          margin: 0;
        }

        /* Row 2: FaceTime thumb left + insight text right */
        .ng-explore-insight {
          display: flex;
          align-items: flex-start;
          gap: var(--grid-gutter);
          margin-bottom: clamp(40px, 4.44vw, 64px);
        }
        .ng-explore-facetime {
          width: clamp(90px, 10.9vw, 157px);
          height: clamp(190px, 23.5vw, 339px);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }
        .ng-explore-facetime img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ng-explore-insight-text {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Audience strategy ── */
        .ng-strat {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 4.44vw, 64px);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-strat-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--grid-gutter);
        }
        .ng-strat-copy {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }
        .ng-strat-media {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: var(--surface-contrast-soft);
        }
        .ng-strat-media video,
        .ng-strat-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── The Solution ── */
        .ng-solution-grid {
          display: flex;
          align-items: flex-start;
          gap: var(--grid-gutter);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-solution-placeholder {
          flex: 0 0 auto;
          width: clamp(240px, 39.2vw, 565px);
          max-width: 100%;
          aspect-ratio: 1;
          height: auto;
          background: var(--surface-contrast-strong);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .ng-solution-placeholder video {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
        }
        .ng-solution-text { flex: 1; min-width: 0; }
        .ng-solution-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(16px, 2.22vw, 32px);
          white-space: nowrap;
        }
        .ng-solution-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
        }

        /* ── Design process ─────────────────────────────────────────── */

        .ng-design-block {
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 2.78vw, 40px);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }

        /* Row 1: old work dark card (8-col) + caption bottom-right (4-col) */
        .ng-dp-old-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--grid-gutter);
        }
        .ng-dp-old-card {
          /* 8 of 12 cols = calc(66.667% - gutter/3) */
          flex: 0 0 calc(66.667% - var(--grid-gutter) / 3);
          height: clamp(220px, 32.3vw, 465px);
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .ng-dp-old-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
        .ng-dp-old-caption {
          /* 4 of 12 cols = calc(33.333% - gutter*2/3) */
          flex: 0 0 calc(33.333% - var(--grid-gutter) * 2 / 3);
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          color: var(--text-inverse);
          margin: 0;
        }

        /* Row 2: 3 equal sketch squares */
        .ng-dp-sketches-row {
          display: flex;
          gap: var(--grid-gutter);
          align-items: stretch;
        }
        .ng-dp-sketch-sq {
          flex: 1;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: var(--surface-contrast-soft);
        }
        .ng-dp-sketch-sq img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Sketch caption — left-aligned, 6-col width */
        .ng-dp-sketch-caption {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          max-width: calc(50% - var(--grid-gutter) / 2);
        }

        /* Full-width dark card — low to hi-fi video */
        .ng-dp-dark-card {
          width: 100%;
          height: clamp(300px, 51.7vw, 744px);
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .ng-dp-dark-card video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* 2-phone flow row */
        .ng-dp-flows-row {
          display: flex;
          gap: var(--grid-gutter);
          justify-content: center;
        }
        .ng-dp-flow-phone {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          aspect-ratio: 9 / 19.5;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: #1d1f1d;
        }
        .ng-dp-flow-phone video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Logo text — left-aligned, 6-col */
        .ng-dp-logo-text-block {
          max-width: calc(50% - var(--grid-gutter) / 2);
        }
        .ng-dp-logo-lead {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0 0 clamp(6px, 0.56vw, 8px);
        }
        .ng-dp-logo-sub {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          color: var(--text-inverse);
          margin: 0;
        }

        /* Logo sketches + video — squares, 8-col, right-aligned */
        .ng-dp-logo-imgs {
          display: flex;
          gap: var(--grid-gutter);
          width: calc(66.667% - var(--grid-gutter) / 3);
          margin-left: auto;
        }
        .ng-dp-logo-sq {
          flex: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: var(--surface-contrast-soft);
        }
        /* padding-bottom forces height = width (1:1) reliably in flex */
        .ng-dp-logo-sq::after {
          content: '';
          display: block;
          padding-bottom: 100%;
        }
        .ng-dp-logo-sq video,
        .ng-dp-logo-sq img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Prototype ─────────────────────────────────────────────── */
        .ng-proto {
          scroll-margin-top: calc(var(--nav-h) + 24px);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
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
        /* Dark phone card — 6 of 12 cols, 645×828 aspect */
        .ng-proto-card {
          flex: 0 0 calc(50% - var(--grid-gutter) / 2);
          aspect-ratio: 645 / 828;
          background: #1d1f1d;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        /* Centered phone screen inside card */
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
        /* Text + button block — 6 of 12 cols */
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
        .ng-proto-foot {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--grid-gutter);
        }
        .ng-proto-foot-next {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .ng-proto-foot-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(28px, 3.33vw, 48px);
          line-height: 1.2;
          letter-spacing: -0.011em;
          color: var(--c-orange);
          margin: 0 0 clamp(8px, 1.11vw, 14px);
        }
        .ng-proto-foot-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: var(--text-inverse);
          margin: 0;
          max-width: 42ch;
        }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════ */

        /* Stats: 3 columns from 640px up (incl. narrow tablets); stack + stagger only on phones */
        @media (max-width: 639px) {
          .ng-stats             { grid-template-columns: 1fr; }
          .ng-stat-2            { padding-top: clamp(32px, 8vw, 72px); }
          .ng-stat-3            { padding-top: clamp(64px, 16vw, 140px); }
        }

        @media (max-width: 1023px) {
          .ng-overview          { flex-direction: column; }
          .ng-overview-title    { flex: none; width: 100%; }
          .ng-overview-right    { flex: none; width: 100%; }
          .ng-explore-quote     { flex: none; width: 100%; }
          .ng-explore-person    { flex: none; width: 100%; }
        }

        @media (max-width: 767px) {
          .ng-meta              { grid-template-columns: 1fr; gap: 32px; }
          .ng-problem-cols      { grid-template-columns: 1fr; }
          .ng-problem-video     { width: 100%; height: clamp(200px, 56vw, 320px); }
          .ng-problem-stagger   { grid-template-columns: 1fr; }
          .ng-problem-stagger-coaches { padding-top: 0; }

          .ng-explore-row       { flex-direction: column; }
          .ng-explore-photo     {
            width: min(100%, clamp(220px, 78vw, 420px));
            height: clamp(260px, 80vw, 420px);
          }
          .ng-explore-quotes    { gap: 32px; }
          .ng-explore-facetime  {
            width: clamp(80px, 30vw, 140px);
            height: auto;
            aspect-ratio: 157 / 339;
          }

          .ng-strat-row         { flex-direction: column; align-items: stretch; }
          .ng-strat-copy        { flex: none; }
          .ng-strat-media       { flex: none; }
          /* Rows where copy comes first in DOM — pull video above text on mobile */
          .ng-strat-row--flip .ng-strat-media { order: -1; }

          .ng-solution-grid     { flex-direction: column; }
          .ng-solution-placeholder {
            width: 100%;
            max-width: min(565px, 100%);
            aspect-ratio: 1;
            height: auto;
            flex: none;
          }

          .ng-dp-old-row        { flex-direction: column; align-items: stretch; }
          .ng-dp-old-card       { flex: none; height: clamp(180px, 56vw, 300px); }
          .ng-dp-old-caption    { flex: none; }
          .ng-dp-dark-card      { height: auto; }
          .ng-dp-dark-card video { position: static; width: 100%; height: auto; object-fit: initial; }
          .ng-dp-sketch-caption { max-width: 100%; }
          .ng-dp-sketches-row   { flex-direction: column; }
          .ng-dp-sketch-sq      { flex: none; width: 100%; }
          .ng-dp-logo-text-block { max-width: 100%; }
          .ng-dp-logo-imgs      { flex-direction: column; width: 100%; margin-left: 0; }
          .ng-dp-logo-sq        { flex: none; width: 100%; }
          .ng-proto-row         { flex-direction: column; align-items: stretch; }
          .ng-proto-card        { flex: none; }
          .ng-proto-text        { flex: none; }
          .ng-proto-row--flip .ng-proto-card { order: -1; }
          .ng-proto-foot        { grid-template-columns: 1fr; }
        }

        @supports (corner-shape: squircle) {
          .ng-hero { corner-shape: squircle; }
        }
      `}</style>

      <div className="ng">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
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

        {/* ── CASE HEADER ─────────────────────────────────────────────── */}
        <RacingStripeBand label="Next Gen" linesFrom="left" animateOnScroll />

        {/* ── OVERVIEW: title left · meta + CTAs right ─────────────────── */}
        <div className="ng-w">
          <motion.div className="ng-overview" {...scrollFadeUp}>

            <h1 className="ng-problem-ttl ng-overview-title">
              A broken system with a two faced problem and 1{' '}
              <span className="ng-problem-ttl-accent">simple</span>
              {' '}solution
            </h1>

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
                <button
                  onClick={() => document.getElementById('prototype')?.scrollIntoView({ behavior: 'smooth' })}
                  className="ng-btn ng-btn-filled"
                  style={{ background: 'var(--c-orange)', border: 'none', cursor: 'pointer' }}
                >
                  <span className="ng-btn-content">
                    <LetterSwapPingPong label="View final" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </button>
                <a href="#" className="ng-btn ng-btn-outline">
                  <span className="ng-btn-content">
                    <LetterSwapPingPong label="View pdf" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
        <div className="ng-problem-section">

          <RacingStripeBand label="The Problem" linesFrom="right" animateOnScroll />

          <div className="ng-w">

            {/* Staggered: Players top-left (cols 1–6), Coaches bottom-right (cols 7–12) */}
            <motion.div className="ng-problem-stagger" {...scrollFadeUp}>
              <p className="ng-problem-body">
                <span className="ng-problem-accent">Players</span>
                {' '}rely on mass emails, expensive agencies and costly showcases,
                with no guarantee of getting into the coaches&rsquo; spotlight.
              </p>
              <p className="ng-problem-body ng-problem-stagger-coaches">
                <span className="ng-problem-accent">Coaches</span>
                {' '}are buried under a lot of unfiltered interest, leaving them
                missing out on a lot of talent and players that fit their program.
              </p>
            </motion.div>

            {/* Stats — flat 3-col, numbers centered */}
            <motion.div className="ng-stats" {...fadeUp(0.1)}>

              <div>
                <p className="ng-stat-num">1&ndash;3%</p>
                <p className="ng-stat-desc">Is the expected chance of a reply to an email</p>
              </div>

              <div className="ng-stat-2">
                <p className="ng-stat-num">30s</p>
                <p className="ng-stat-desc">Is how long a coach will typically watch your tape</p>
              </div>

              <div className="ng-stat-3">
                <p className="ng-stat-num">100+</p>
                <p className="ng-stat-desc">Is how many emails a coach can see in a day</p>
              </div>

            </motion.div>

            {/* How may we */}
            <motion.div className="ng-hmw" {...scrollFadeUp}>
              <p className="ng-hmw-lead">How may we</p>
              <p className="ng-hmw-body">
                Put the right players into the right coaches&rsquo; spotlight at the right time,
                without relying on mass outreach or expensive showcases?
              </p>
            </motion.div>

          </div>

        </div>

        {/* ── THE SOLUTION ─────────────────────────────────────────────── */}
        <RacingStripeBand label="The solution" linesFrom="left" animateOnScroll />

        <div className="ng-w">
          <motion.div className="ng-solution-grid" {...scrollFadeUp}>
            <div className="ng-solution-placeholder">
              <video
                src="/images/Hero2.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              />
            </div>
            <div className="ng-solution-text">
              <p className="ng-solution-title">Next Gen</p>
              <p className="ng-solution-body">
                An app designed to replace the stress of sending an aimless email into a
                coach&rsquo;s chaotic inbox, through a filterable discovery feed with short
                form videos bringing relevant players into a coach&rsquo;s spotlight and watchlist.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── EXPLORING THE PROBLEM ────────────────────────────────────── */}
        <RacingStripeBand label="Exploring the problem" linesFrom="right" animateOnScroll />

        <div className="ng-w">

          {/* Row 1: Player photo left · 2 quotes + My experience right (wrapping grid) */}
          <motion.div className="ng-explore-row" {...scrollFadeUp}>
            <div className="ng-explore-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PLAYER_PHOTO} alt="Soccer player on field" />
            </div>
            <div className="ng-explore-quotes">
              <p className="ng-explore-quote">
                &ldquo;I got a lot of offers through an agency, but most weren&rsquo;t the right fit&rdquo;
              </p>
              <p className="ng-explore-quote">
                &ldquo;I sent out so many emails and had 2 replies in total&rdquo;
              </p>
              <div className="ng-explore-person">
                <p className="ng-explore-person-name">My experience</p>
                <p className="ng-explore-person-meta">
                  Cayuga Community College 2021<br />
                  Bryant &amp; Stratton University 2021<br />
                  Academy of Art University 2023
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 2: FaceTime thumbnail left · insight text right */}
          <motion.div className="ng-explore-insight" {...scrollFadeUp}>
            <div className="ng-explore-facetime">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={INTERVIEW_FACETIME_THUMB} alt="FaceTime interview" />
            </div>
            <p className="ng-explore-insight-text">
              I need to understand what recruiting looks like for a Coach
            </p>
          </motion.div>

          {/* Row 3: James photo left · 2 quotes + name block + 3rd quote right (bottom-aligned) */}
          <motion.div className="ng-explore-row ng-explore-row--last" {...scrollFadeUp}>
            <div className="ng-explore-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={JAMES_PHOTO} alt="James Hogan" />
            </div>
            <div className="ng-explore-quotes ng-explore-quotes--end">
              <p className="ng-explore-quote">
                &ldquo;Most highlights I&rsquo;ll have decided within a minute whether
                I&rsquo;m watching more or not&rdquo;
              </p>
              <p className="ng-explore-quote">
                &ldquo;I&rsquo;ll rarely recruit through my emails, I&rsquo;ll get 60+
                a day so most just get lost in there&rdquo;
              </p>
              <div className="ng-explore-person">
                <p className="ng-explore-person-name">James Hogan</p>
                <p className="ng-explore-person-meta">
                  25, Memphis, Tennessee<br />
                  Assistant Coach @ Christian Brothers<br />
                  Informal Interview 3/8/26
                </p>
              </div>
              <p className="ng-explore-quote">
                &ldquo;We recruit for specific player profiles to fit specific roles&rdquo;
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── AUDIENCE STRATEGY ────────────────────────────────────────── */}
        <RacingStripeBand label="Audience strategy" linesFrom="left" animateOnScroll />

        <div className="ng-w">
          <div className="ng-strat">

            {/* Row 1: copy left · discovery video right */}
            <motion.div className="ng-strat-row ng-strat-row--flip" {...fadeUp(0)}>
              <p className="ng-strat-copy">
                We need to focus on short form videos to catch a coaches attention early.
                Especially with an increase of younger coaches.
              </p>
              <div className="ng-strat-media">
                <video
                  src={DISCOVERY_FEED_MP4}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            {/* Row 2: watchlist video left · copy right */}
            <motion.div className="ng-strat-row" {...fadeUp(0.05)}>
              <div className="ng-strat-media">
                <video
                  src={WATCHING_WATCHLIST_MP4}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              </div>
              <p className="ng-strat-copy">
                A watchlist is needed to make sure coaches don&rsquo;t lose players they
                want to keep in their spotlight, helping both player &amp; coach.
              </p>
            </motion.div>

            {/* Row 3: copy left · filters video right */}
            <motion.div className="ng-strat-row ng-strat-row--flip" {...fadeUp(0.1)}>
              <p className="ng-strat-copy">
                Filters should allow coaches to search for specific profiles while ensuring
                players are in the right coaches spotlight.
              </p>
              <div className="ng-strat-media">
                <video
                  src={FILTERS_MP4}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            {/* Row 4: notifications video left · copy right */}
            <motion.div className="ng-strat-row" {...fadeUp(0.15)}>
              <div className="ng-strat-media">
                <video
                  src={NOTIF_MP4}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              </div>
              <p className="ng-strat-copy">
                Notifications are needed to give the player clarity to whether their clips,
                profile and highlight are being seen.
              </p>
            </motion.div>

          </div>
        </div>

        {/* ── DESIGN PROCESS ───────────────────────────────────────────── */}
        <RacingStripeBand label="Design process" linesFrom="right" animateOnScroll />

        <div className="ng-w">
          <div className="ng-design-block">

            {/* Old work: dark card (8-col) + caption bottom-right (4-col) */}
            <motion.div className="ng-dp-old-row" {...scrollFadeUp}>
              <div className="ng-dp-old-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={OLD_WORK_IMG} alt="Old award winning Next Gen design — 3 app screens" />
              </div>
              <p className="ng-dp-old-caption">
                I took forward an old award winning design, as a base, with the aim of
                giving it purpose.
              </p>
            </motion.div>

            {/* 3 sketch squares */}
            <motion.div className="ng-dp-sketches-row" {...scrollFadeUp}>
              <div className="ng-dp-sketch-sq">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SKETCH_FLOW_1} alt="User flow sketch — player profile build" />
              </div>
              <div className="ng-dp-sketch-sq">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SKETCH_FLOW_2} alt="User flow sketch — coach filtering" />
              </div>
              <div className="ng-dp-sketch-sq">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SKETCH_FLOW_3} alt="User flow sketch — messaging" />
              </div>
            </motion.div>

            {/* Sketch caption — left-aligned, 6 cols */}
            <motion.p className="ng-dp-sketch-caption" {...scrollFadeUp}>
              I started by sketching out three new key user flows before turning to Figma,
              building the flows out from low to high fidelity.
            </motion.p>

            {/* Low to hi-fi progression video */}
            <motion.div className="ng-dp-dark-card" {...scrollFadeUp}>
              <video src={LOW_HIFI_MP4} autoPlay muted loop playsInline aria-hidden="true" />
            </motion.div>

            {/* Logo text — left 6 cols */}
            <motion.div className="ng-dp-logo-text-block" {...scrollFadeUp}>
              <p className="ng-dp-logo-lead">I then of course had to go and build out a logo.</p>
              <p className="ng-dp-logo-sub">This also won a Silver ADDY!</p>
            </motion.div>

            {/* Logo video + hand-drawn sketch — right-aligned 8 cols */}
            <motion.div className="ng-dp-logo-imgs" {...fadeUp(0.1)}>
              <div className="ng-dp-logo-sq">
                <video
                  src={LOGO_VIDEO_MP4}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              </div>
              <div className="ng-dp-logo-sq">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={LOGO_SKETCH} alt="Logo sketch — hand-drawn iterations" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── PROTOTYPE ───────────────────────────────────────────────── */}
        <div id="prototype">
          <RacingStripeBand label="Prototype" linesFrom="left" animateOnScroll />
        </div>

        <div className="ng-w ng-proto">
          <div className="ng-proto-rows">

            {/* Row 1: video card left · text + button right */}
            <motion.div className="ng-proto-row" {...scrollFadeUp}>
              <div className="ng-proto-card">
                <div className="ng-proto-screen">
                  <video src={PROFILE_SETUP_MP4} autoPlay muted loop playsInline aria-hidden="true" />
                </div>
              </div>
              <div className="ng-proto-text">
                <div>
                  <p className="ng-proto-title">Player profile set up</p>
                  <p className="ng-proto-body">
                    There will be 2 role options when setting up a profile. A player will have
                    to fill in all their information, which will help players get into relevant
                    coaches&rsquo; spotlight.
                  </p>
                </div>
                <a href="https://www.figma.com/proto/ulabInIps5co2N5AI3thc4/Next_Gen?node-id=114-16&p=f&viewport=62%2C376%2C0.08&t=0g0ytBTKuYVw0Ils-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=114%3A16&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="ng-btn ng-btn-filled">
                  <span className="ng-btn-content">
                    <LetterSwapPingPong label="View live" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Row 2: text + button left · video card right */}
            <motion.div className="ng-proto-row ng-proto-row--flip" {...scrollFadeUp}>
              <div className="ng-proto-text">
                <div>
                  <p className="ng-proto-title">Coach filtering feed</p>
                  <p className="ng-proto-body">
                    With coaches seeking specific player profiles they will be able to filter
                    down the players in their feed to meet the needed profile.
                  </p>
                </div>
                <a href="https://www.figma.com/proto/ulabInIps5co2N5AI3thc4/Next_Gen?node-id=129-161&p=f&viewport=62%2C376%2C0.08&t=0g0ytBTKuYVw0Ils-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=129%3A161&page-id=0%3A1&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer" className="ng-btn ng-btn-filled">
                  <span className="ng-btn-content">
                    <LetterSwapPingPong label="View live" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
              <div className="ng-proto-card">
                <div className="ng-proto-screen">
                  <video src={FILTER_WATCHLIST_MP4} autoPlay muted loop playsInline aria-hidden="true" />
                </div>
              </div>
            </motion.div>

            {/* Row 3: video card left · text + button right */}
            <motion.div className="ng-proto-row" {...scrollFadeUp}>
              <div className="ng-proto-card">
                <div className="ng-proto-screen">
                  <video src={WATCHLIST_MESSAGE_MP4} autoPlay muted loop playsInline aria-hidden="true" />
                </div>
              </div>
              <div className="ng-proto-text">
                <div>
                  <p className="ng-proto-title">Coach messaging</p>
                  <p className="ng-proto-body">
                    Only a coach will be able to send the first message, helping them avoid
                    noise and keep better track of their conversations.
                  </p>
                </div>
                <a href="https://www.figma.com/proto/ulabInIps5co2N5AI3thc4/Next_Gen?node-id=129-174&p=f&viewport=62%2C376%2C0.08&t=0g0ytBTKuYVw0Ils-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=129%3A174&page-id=0%3A1&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer" className="ng-btn ng-btn-filled">
                  <span className="ng-btn-content">
                    <LetterSwapPingPong label="View live" staggerFrom="first" staggerDuration={0.03} />
                  </span>
                </a>
              </div>
            </motion.div>

          </div>

          <motion.div className="ng-proto-foot" {...scrollFadeUp}>
            <div>
              <p className="ng-proto-foot-title">What I learned</p>
              <p className="ng-proto-foot-body">
                I learned that while things can look good, they might not be good or be for any
                good. It&rsquo;s better that things serve a purpose than just look good.
              </p>
            </div>
            <div className="ng-proto-foot-next">
              <p className="ng-proto-foot-title">Whats next?</p>
              <p className="ng-proto-foot-body">
                I plan on building this out further and sending it out to coaches and players to
                get it tested and act on their feedback.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── MORE CASES ─────────────────────────────────────────────── */}
        <RelatedCases currentSlug="next-gen" />

      </div>
    </>
  )
}
