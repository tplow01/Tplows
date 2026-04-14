import RelatedCases from '@/components/RelatedCases'
import { CaseLabel } from '@/components/CaseLabel'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'

// Figma assets — expire in 7 days; swap for production images before then
const HERO_IMG       = 'https://www.figma.com/api/mcp/asset/565f8a91-454f-43b6-9c6b-8f82336e5d4f'
const PLAYER_PHOTO   = 'https://www.figma.com/api/mcp/asset/49e9b433-282b-4aeb-9c66-a37174e7610a'
const JAMES_PHOTO    = 'https://www.figma.com/api/mcp/asset/3605c853-97ca-4255-a799-dbd72f81e114'
const FILTERS_IMG    = 'https://www.figma.com/api/mcp/asset/1ec97ba5-0c5a-47a1-a156-dc2e828b8f19'
const NOTIF_IMG      = 'https://www.figma.com/api/mcp/asset/2b9e1902-e27c-4f37-a5ac-3071bdf38efb'

// Design process assets
const SCREEN_A       = 'https://www.figma.com/api/mcp/asset/2fc9a107-6fba-4219-adae-40e58e2b3f30'
const SCREEN_B       = 'https://www.figma.com/api/mcp/asset/2a64cb04-8b08-46b4-afa7-ce8a798b9081'
const SCREEN_C       = 'https://www.figma.com/api/mcp/asset/cdf057ff-de24-4a3a-bedc-4e1ccdd2b15e'
const SKETCH_FLOW_1  = 'https://www.figma.com/api/mcp/asset/9842b8b4-9790-4e3f-ab78-4eac84e4a604'
const SKETCH_FLOW_2  = 'https://www.figma.com/api/mcp/asset/d73771ae-9cd9-4d00-8394-b89d2bffd914'
const SKETCH_FLOW_3  = 'https://www.figma.com/api/mcp/asset/fb8b5e33-ab9b-41dc-8431-d00398ebabcd'
const LOGO_SKETCH_1  = 'https://www.figma.com/api/mcp/asset/40692c14-6a02-49f7-b466-d3da49b5e0e8'
const LOGO_SKETCH_2  = 'https://www.figma.com/api/mcp/asset/52c61d5a-a4f9-4be4-91c9-568ac44f4577'
const PROTOTYPE_SCREEN = 'https://www.figma.com/api/mcp/asset/d3a22834-07c8-4c5d-b4b7-9f79997df64c'

export default function NextGenPage() {
  return (
    <>
      {/* ── Page-scoped styles ─────────────────────────────────────────── */}
      <style>{`

        /* ── Root ── */
        .ng {
          padding-top: var(--nav-h);
          background: #1d1f1d;
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
          background: #e0e0e0;
          margin-top: var(--sp-6);
          margin-bottom: clamp(20px, 2.1vw, 30px);
        }
        .ng-hero img {
          position: absolute;
          width: 100%;
          height: 127%;
          top: clamp(-62px, -8.7vw, -30px);
          object-fit: cover;
          object-position: center 60%;
        }

        /* ── Full-bleed section dividers ──────────────────────────────────
           Case header: ————————————————— Next Gen / The solution
           Line on left (no padding), label pinned right by padding-right
        ─────────────────────────────────────────────────────────────── */
        .ng-case-hdr {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.67vw, 24px);
          padding-left: 0;
          padding-right: var(--grid-margin);
          margin-bottom: clamp(32px, 4.4vw, 64px);
        }
        .ng-case-hdr-line {
          flex: 1;
          height: clamp(2px, 0.35vw + 1px, 4px);
          border-radius: 999px;
          background: #ffd500;
        }
        .ng-case-hdr-label {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #e0e0e0;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }

        /* Section header: label ——————— line
           Label pinned left by padding-left, line fills right to edge */
        .ng-section-hdr {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.67vw, 24px);
          padding-left: var(--grid-margin);
          padding-right: 0;
          margin-bottom: clamp(32px, 3.33vw, 48px);
        }
        .ng-section-hdr-label {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #e0e0e0;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }
        .ng-section-hdr-line {
          flex: 1;
          height: clamp(2px, 0.35vw + 1px, 4px);
          border-radius: 999px;
          background: #ffd500;
        }

        /* ── Overview title ── */
        .ng-problem-ttl {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0 0 clamp(40px, 5.5vw, 80px);
          max-width: 50ch;
        }
        .ng-problem-ttl-accent {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          color: #ffd500;
        }

        /* ── Project meta — 3-col ── */
        .ng-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          margin-bottom: clamp(32px, 4.4vw, 64px);
        }
        .ng-meta-lbl {
          display: block;
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #e0e0e0;
          margin-bottom: clamp(16px, 2.2vw, 32px);
          letter-spacing: -0.02em;
        }
        .ng-meta-val {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: rgba(224,224,224,0.7);
          line-height: 1.6;
        }

        /* ── CTA buttons ── */
        .ng-cta-row {
          display: flex;
          gap: clamp(10px, 1.11vw, 16px);
          margin-bottom: clamp(80px, 12.5vw, 180px);
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
          background: #ffd500;
          color: #1d1f1d;
          border: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .ng-btn-filled:hover { background: #e8c100; }
        .ng-btn-outline {
          background: transparent;
          color: #ffd500;
          border: clamp(2px, 0.28vw, 4px) solid #ffd500;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .ng-btn-outline:hover {
          background: #ffd500;
          color: #1d1f1d;
          border-color: #ffd500;
        }

        /* ── Problem section spacing ── */
        .ng-problem-section {
          margin-top: clamp(80px, 12.5vw, 180px);
        }

        /* ── Two-col problem with frosted boxes ── */
        .ng-problem-cols {
          display: flex;
          gap: var(--grid-gutter);
          margin-bottom: clamp(48px, 5.5vw, 80px);
        }
        .ng-problem-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 5.5vw, 80px);
        }
        .ng-problem-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0;
        }
        .ng-frosted-box {
          background: rgba(247, 247, 251, 0.25);
          border-radius: 20px;
          height: clamp(160px, 21.4vw, 308px);
          flex-shrink: 0;
        }

        /* ── Stats cascade ─────────────────────────────────────────────
           Figma offsets: stat-1 = 0, stat-2 = 178px, stat-3 = 374px   */
        .ng-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: var(--grid-gutter);
          align-items: start;
          padding-bottom: clamp(48px, 6.25vw, 90px);
        }
        .ng-stat-2 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: clamp(0px, 12.4vw, 178px);
        }
        .ng-stat-3 {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
          padding-top: clamp(0px, 26vw,  374px);
        }

        .ng-stat-num {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(56px, 8.89vw, 128px);
          color: #e0e0e0;
          line-height: 1;
          letter-spacing: -0.04em;
          margin: 0 0 clamp(12px, 1.39vw, 20px);
        }
        .ng-stat-desc {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: rgba(224,224,224,0.5);
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
          color: #ffd500;
          margin: 0 0 clamp(12px, 1.67vw, 24px);
        }
        .ng-hmw-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0;
        }

        /* ── Exploring the problem ─────────────────────────────────────── */

        /* Photo card — shared between player + James */
        .ng-photo-card {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: #2e2e2e;
          flex-shrink: 0;
        }
        .ng-photo-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Top row: quotes + photo (left) + experience (right, bottom-aligned) */
        .ng-explore-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: clamp(32px, 4.44vw, 64px);
        }
        .ng-explore-left {
          display: flex;
          gap: clamp(16px, 2.08vw, 30px);
          align-items: flex-end;
        }

        /* Two player quotes stacked, space-between to create the Figma stagger */
        .ng-player-quotes {
          width: clamp(200px, 29.2vw, 420px);
          height: clamp(240px, 33.6vw, 484px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
        }
        .ng-player-quote {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(16px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0;
        }

        /* Player photo */
        .ng-player-photo {
          width:  clamp(200px, 29.2vw, 420px);
          height: clamp(240px, 36.8vw, 530px);
        }
        .ng-player-photo img {
          left: 8px;
        }

        /* "My experience" block — bottom-aligned by parent items-end */
        .ng-experience {
          flex-shrink: 0;
          max-width: clamp(200px, 29.1vw, 419px);
        }
        .ng-experience-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(22px, 3.33vw, 48px);
          color: #ffd500;
          letter-spacing: -0.011em;
          line-height: 1.2;
          margin: 0 0 clamp(8px, 1.11vw, 14px);
        }
        .ng-experience-list {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: #e0e0e0;
          line-height: 1.5;
          letter-spacing: -0.011em;
          margin: 0;
        }

        /* "I need to understand..." — right-half insight */
        .ng-insight-row {
          display: flex;
          gap: var(--grid-gutter);
          margin-bottom: clamp(48px, 4.44vw, 64px);
        }
        .ng-insight-spacer { flex: 1; }
        .ng-insight-text {
          flex: 1;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0;
        }

        /* ── James Hogan interview ─────────────────────────────────────── */
        .ng-interview {
          display: flex;
          gap: clamp(24px, 3.47vw, 50px);
          align-items: flex-start;
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-interview-person {
          flex-shrink: 0;
          width: clamp(200px, 29.2vw, 421px);
        }
        .ng-james-photo {
          width:  100%;
          height: clamp(240px, 36.8vw, 530px);
          margin-bottom: clamp(20px, 4.4vw, 64px);
        }
        .ng-interview-name {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(22px, 3.33vw, 48px);
          color: #ffd500;
          letter-spacing: -0.011em;
          line-height: 1.5;
          margin: 0;
        }
        .ng-interview-meta {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          color: #e0e0e0;
          line-height: 1.5;
          letter-spacing: -0.011em;
          margin: 0;
        }

        /* Waterfall quotes — diagonal staircase rightward + downward */
        .ng-interview-quotes {
          flex: 1;
          position: relative;
          min-height: clamp(380px, 51.4vw, 740px);
        }
        .ng-iq {
          position: absolute;
          width: 50%;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(16px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0;
        }
        /* Quote 1: top-left */
        .ng-iq-1 { left: 0;   top: 0; }
        /* Quote 2: shifted ~26% right, ~286px down */
        .ng-iq-2 { left: 26%; top: clamp(90px, 19.9vw, 286px); }
        /* Quote 3: shifted 50% right, ~573px down */
        .ng-iq-3 { left: 50%; top: clamp(190px, 39.8vw, 573px); }

        /* ── Audience strategy insights ── */
        .ng-insights {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 4.44vw, 64px);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-insight-pair {
          display: flex;
          gap: clamp(16px, 2.08vw, 30px);
          align-items: flex-end;
        }
        .ng-insight-copy {
          flex: 1;
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0;
        }
        /* Phone mockup card */
        .ng-phone {
          width: clamp(140px, 21.3vw, 307px);
          height: clamp(240px, 38vw, 547px);
          border-radius: 20px;
          overflow: hidden;
          background: #2a2a2a;
          flex-shrink: 0;
          position: relative;
        }
        .ng-phone img {
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
          flex: 1;
          height: clamp(240px, 39.2vw, 565px);
          background: #545555;
          border-radius: 4px;
          flex-shrink: 0;
        }
        .ng-solution-text { flex: 1; }
        .ng-solution-title {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(20px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #ffd500;
          margin: 0 0 clamp(16px, 2.22vw, 32px);
          white-space: nowrap;
        }
        .ng-solution-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0;
        }

        /* ── Design process ─────────────────────────────────────────── */

        /* Simplified iPhone mockup */
        .ng-iphone {
          position: relative;
          width: clamp(150px, 21.4vw, 307px);
          height: clamp(290px, 42.9vw, 618px);
          background: #000;
          border-radius: clamp(28px, 3.76vw, 54px);
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 0 0 1.5px #585657, 0 0 0 4px #555, 0 0 0 5px #1a1a1a;
        }
        .ng-iphone-notch {
          position: absolute;
          top: clamp(12px, 1.64vw, 24px);
          left: 50%;
          transform: translateX(-50%);
          width: clamp(44px, 5.79vw, 83px);
          height: clamp(13px, 1.69vw, 24px);
          background: #040404;
          border-radius: 12px;
          z-index: 2;
        }
        .ng-iphone-screen {
          position: absolute;
          inset: clamp(7px, 1.04vw, 15px);
          border-radius: clamp(19px, 3.28vw, 47px);
          overflow: hidden;
          background: #111;
        }
        .ng-iphone-screen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Process block — outer container */
        .ng-design-block {
          display: flex;
          flex-direction: column;
          gap: clamp(60px, 6.6vw, 95px);
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }

        /* Phone group: horizontal row of iPhones */
        .ng-iphones {
          display: flex;
          gap: clamp(14px, 2.08vw, 30px);
          align-items: center;
          flex-shrink: 0;
        }

        /* Part 1: phones left + caption right, bottom-aligned */
        .ng-dp-row-1 {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .ng-dp-caption {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          max-width: clamp(180px, 21.3vw, 307px);
          flex-shrink: 0;
          margin: 0;
        }

        /* Part 2: sketches + text, centered */
        .ng-dp-sketches {
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 4.44vw, 64px);
          align-items: center;
        }
        .ng-sketches-row {
          display: flex;
          gap: clamp(14px, 2.08vw, 30px);
          align-items: center;
        }
        .ng-sketch {
          width:  clamp(180px, 29.2vw, 420px);
          height: clamp(180px, 29.2vw, 420px);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: #2a2a2a;
        }
        .ng-sketch img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ng-sketch-caption {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0;
          max-width: none;
          width: 100%;
          align-self: stretch;
          text-align: right;
        }

        /* Part 3: phones + logo section, right-aligned */
        .ng-dp-logo-block {
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 4.44vw, 64px);
          align-items: flex-end;
        }
        .ng-dp-logo-content {
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 4.44vw, 64px);
          align-items: flex-start;
          width: 100%;
        }
        .ng-dp-logo-text { max-width: clamp(240px, 44.8vw, 645px); }
        .ng-dp-logo-lead {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(18px, 2.78vw, 40px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0 0 clamp(6px, 0.55vw, 8px);
        }
        .ng-dp-logo-sub {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: rgba(224,224,224,0.6);
          margin: 0;
        }
        .ng-logo-sketches {
          display: flex;
          gap: clamp(14px, 2.08vw, 30px);
          justify-content: flex-end;
          width: 100%;
        }
        .ng-logo-sketch {
          width:  clamp(180px, 29.2vw, 420px);
          height: clamp(180px, 29.2vw, 420px);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: #2a2a2a;
        }
        .ng-logo-sketch img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Prototype ─────────────────────────────────────────────── */
        .ng-proto {
          margin-bottom: clamp(80px, 12.5vw, 180px);
        }
        .ng-proto-hdr {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.67vw, 24px);
          margin-bottom: clamp(32px, 4.44vw, 64px);
        }
        .ng-proto-line {
          flex: 1;
          height: clamp(2px, 0.35vw + 1px, 4px);
          border-radius: 999px;
          background: #ffd500;
        }
        .ng-proto-label {
          font-family: var(--font-hubot-sans), sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(16px, 1.67vw, 24px);
          color: #e0e0e0;
          letter-spacing: -0.02em;
          margin: 0;
          flex-shrink: 0;
        }
        .ng-proto-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--grid-gutter);
          align-items: start;
          margin-bottom: clamp(48px, 6.25vw, 90px);
        }
        .ng-proto-col-mid {
          padding-top: clamp(70px, 10.5vw, 151px);
        }
        .ng-proto-phone-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: clamp(24px, 4.44vw, 64px);
        }
        .ng-proto-copy-title {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(24px, 2.78vw, 40px);
          line-height: 1.3;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0 0 2px;
        }
        .ng-proto-copy-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
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
          color: #ffd500;
          margin: 0 0 clamp(8px, 1.11vw, 14px);
        }
        .ng-proto-foot-body {
          font-family: var(--font-mona-sans), var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.39vw, 20px);
          line-height: 1.5;
          letter-spacing: -0.011em;
          color: #e0e0e0;
          margin: 0;
          max-width: 42ch;
        }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════ */

        @media (min-width: 768px) and (max-width: 1023px) {
          .ng-stat-2, .ng-stat-3  { padding-top: 0; }
          .ng-iq-2                 { top: 0; left: 0; position: static; margin-top: 32px; }
          .ng-iq-3                 { top: 0; left: 0; position: static; margin-top: 32px; }
          .ng-interview-quotes     { min-height: auto; position: static; }
          .ng-iq                   { position: static; width: 100%; }
        }

        @media (max-width: 767px) {
          .ng-meta              { grid-template-columns: 1fr; gap: 32px; }
          .ng-problem-cols      { flex-direction: column; }
          .ng-stats             { grid-template-columns: 1fr; }
          .ng-stat-2,
          .ng-stat-3            { padding-top: 32px; }

          .ng-explore-top       { flex-direction: column; align-items: flex-start; gap: 32px; }
          .ng-experience        { order: 1; }
          .ng-explore-left      { order: 2; }
          .ng-explore-left      { flex-direction: column; align-items: flex-start; }
          .ng-player-quotes     { width: 100%; height: auto; gap: 32px; }
          .ng-player-photo      {
            width: min(100%, clamp(220px, 78vw, 420px));
            height: clamp(280px, 95vw, 530px);
          }
          .ng-insight-spacer    { display: none; }
          .ng-insight-text      { flex: none; width: 100%; }

          .ng-interview         { flex-direction: column; }
          .ng-interview-person  { width: 100%; }
          .ng-james-photo       {
            width: min(100%, clamp(220px, 78vw, 420px));
            height: clamp(280px, 95vw, 530px);
          }
          .ng-interview-quotes  { min-height: auto; position: static; }
          .ng-iq                { position: static; width: 100%; margin-bottom: 32px; }

          .ng-insight-pair      { flex-direction: column; align-items: flex-start; }
          .ng-phone             {
            width: min(100%, clamp(160px, 52vw, 307px));
            height: auto;
            aspect-ratio: 307 / 547;
            align-self: center;
          }

          .ng-solution-grid     { flex-direction: column; }
          .ng-solution-placeholder { height: clamp(200px, 56vw, 320px); }

          .ng-dp-row-1          { flex-direction: column; gap: 32px; align-items: center; }
          .ng-iphones           { width: 100%; flex-wrap: wrap; justify-content: center; }
          .ng-sketches-row      {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: clamp(12px, 3vw, 20px);
            align-items: start;
          }
          .ng-sketch            {
            width: 100%;
            height: auto;
            aspect-ratio: 1 / 1;
          }
          .ng-dp-logo-block     { align-items: center; }
          .ng-logo-sketches     { justify-content: flex-start; flex-wrap: wrap; }
          .ng-logo-sketch       { width: clamp(140px, 44vw, 300px); height: clamp(140px, 44vw, 300px); }
          .ng-proto-grid        { grid-template-columns: 1fr; }
          .ng-proto-col-mid     { padding-top: 0; }
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_IMG} alt="Next Gen — iPhone 16 Pro mockup" />
          </div>
        </div>

        {/* ── CASE HEADER — full-bleed yellow line + "Next Gen" label ─── */}
        <div className="ng-case-hdr">
          <div className="ng-case-hdr-line" aria-hidden="true" />
          <CaseLabel label="Next Gen" accent="#ffd500" className="ng-case-hdr-label" />
        </div>

        {/* ── OVERVIEW: title + meta + CTAs ────────────────────────────── */}
        <div className="ng-w">

          <h1 className="ng-problem-ttl">
            A broken system with a two faced problem and 1{' '}
            <span className="ng-problem-ttl-accent">simple</span>
            {' '}solution
          </h1>

          <div className="ng-meta">
            <div>
              <span className="ng-meta-lbl">My position</span>
              <span className="ng-meta-val">Product designer<br />Brand designer</span>
            </div>
            <div>
              <span className="ng-meta-lbl">My gear</span>
              <span className="ng-meta-val">Figma<br />Illustrator</span>
            </div>
            <div>
              <span className="ng-meta-lbl">Timeline</span>
              <span className="ng-meta-val">February 2026 &ndash; April 2026</span>
            </div>
          </div>

          <div className="ng-cta-row">
            <a href="#" className="ng-btn ng-btn-filled">
              <span className="ng-btn-content">
                <LetterSwapPingPong
                  label="View prototype"
                  staggerFrom="first"
                  staggerDuration={0.03}
                />
              </span>
            </a>
            <a href="#" className="ng-btn ng-btn-outline">
              <span className="ng-btn-content">
                <LetterSwapPingPong
                  label="View pdf"
                  staggerFrom="first"
                  staggerDuration={0.03}
                />
              </span>
            </a>
          </div>

        </div>

        {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
        <div className="ng-problem-section">

          <div className="ng-section-hdr">
            <CaseLabel label="The Problem" accent="#ffd500" className="ng-section-hdr-label" />
            <div className="ng-section-hdr-line" aria-hidden="true" />
          </div>

          <div className="ng-w">

            {/* Two-col: text + frosted box staggered */}
            <div className="ng-problem-cols">
              <div className="ng-problem-col">
                <p className="ng-problem-body">
                  Players rely on mass emails, expensive agencies and costly showcases,
                  with no guarantee of getting into the coaches&rsquo; spotlight.
                </p>
                <div className="ng-frosted-box" aria-hidden="true" />
              <p className="ng-problem-body">
                Coaches are buried under a lot of unfiltered interest, leaving them
                missing out on a lot of talent and players that fit their program.
              </p>
              </div>
              <div className="ng-problem-col">
                <div className="ng-frosted-box" aria-hidden="true" />
              </div>
            </div>

            {/* Staircase cascade — each stat drops 178px further than the last */}
            <div className="ng-stats">

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

            </div>

            {/* How may we */}
            <div className="ng-hmw">
              <p className="ng-hmw-lead">How may we</p>
              <p className="ng-hmw-body">
                Put the right players into the right coaches&rsquo; spotlight at the right time,
                without relying on mass outreach or expensive showcases?
              </p>
            </div>

          </div>

        </div>

        {/* ── THE SOLUTION ─────────────────────────────────────────────── */}
        <div className="ng-case-hdr">
          <div className="ng-case-hdr-line" aria-hidden="true" />
          <CaseLabel label="The solution" accent="#ffd500" className="ng-case-hdr-label" />
        </div>

        <div className="ng-w">
          <div className="ng-solution-grid">
            <div className="ng-solution-placeholder" aria-hidden="true" />
            <div className="ng-solution-text">
              <p className="ng-solution-title">Next Gen</p>
              <p className="ng-solution-body">
                An app designed to replace the stress of sending an aimless email into a
                coach&rsquo;s chaotic inbox, through a filterable discovery feed with short
                form videos bringing relevant players into a coach&rsquo;s spotlight and watchlist.
              </p>
            </div>
          </div>
        </div>

        {/* ── EXPLORING THE PROBLEM ────────────────────────────────────── */}
        <div className="ng-section-hdr">
          <CaseLabel label="Exploring the problem" accent="#ffd500" className="ng-section-hdr-label" />
          <div className="ng-section-hdr-line" aria-hidden="true" />
        </div>

        <div className="ng-w">

          {/* Top row: player quotes + photo left | My experience right (bottom-aligned) */}
          <div className="ng-explore-top">

            <div className="ng-photo-card ng-player-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PLAYER_PHOTO} alt="Player interview" />
            </div>

            <div className="ng-explore-left">
              {/* Two player quotes, space-between to stagger top/bottom */}
              <div className="ng-player-quotes">
                <p className="ng-player-quote">
                  &ldquo;I got a lot of offers through an agency, but most weren&rsquo;t the right fit&rdquo;
                </p>
                <p className="ng-player-quote">
                  &ldquo;I sent out so many emails and had 2 replies in total&rdquo;
                </p>
              </div>
            </div>

            {/* My experience block — aligns to bottom of row via parent items-end */}
            <div className="ng-experience">
              <p className="ng-experience-title">My experience</p>
              <p className="ng-experience-list">
                Cayuga Community College 2021<br />
                Bryant &amp; Stratton University 2021<br />
                Academy of Art University 2023
              </p>
            </div>

          </div>

          {/* Insight: right-half paragraph */}
          <div className="ng-insight-row">
            <div className="ng-insight-spacer" aria-hidden="true" />
            <p className="ng-insight-text">
              I need to understand what recruiting looks like for a Coach
            </p>
          </div>

          {/* ── James Hogan interview ── */}
          <div className="ng-interview">

            {/* Left: photo + name + details */}
            <div className="ng-interview-person">
              <div className="ng-photo-card ng-james-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={JAMES_PHOTO} alt="James Hogan" />
              </div>
              <p className="ng-interview-name">James Hogan</p>
              <p className="ng-interview-meta">
                25, Memphis, Tennessee<br />
                Assistant coach @ Christian Brothers<br />
                Informal Interview 3/8/26
              </p>
            </div>

            {/* Right: waterfall quotes — each shifts right + down */}
            <div className="ng-interview-quotes">
              <p className="ng-iq ng-iq-1">
                &ldquo;Most highlights I&rsquo;ll have decided within a minute whether
                I&rsquo;m watching more or not&rdquo;
              </p>
              <p className="ng-iq ng-iq-2">
                &ldquo;I&rsquo;ll rarely recruit through my emails, I&rsquo;ll get 60+ a day
                so most just get lost in there&rdquo;
              </p>
              <p className="ng-iq ng-iq-3">
                &ldquo;We recruit for specific player profiles to fit specific roles&rdquo;
              </p>
            </div>

          </div>

        </div>

        {/* ── AUDIENCE STRATEGY ────────────────────────────────────────── */}
        <div className="ng-case-hdr">
          <div className="ng-case-hdr-line" aria-hidden="true" />
          <CaseLabel label="Audience strategy" accent="#ffd500" className="ng-case-hdr-label" />
        </div>

        <div className="ng-w">
          <div className="ng-insights">

            {/* Row 1: insight text left + 2 phone cards right */}
            <div className="ng-insight-pair">
              <p className="ng-insight-copy">
                We need to focus on short form videos to catch a coaches attention early.
                Especially with an increase of younger coaches.
              </p>
              <div className="ng-phone" aria-hidden="true" />
              <div className="ng-phone" aria-hidden="true" />
            </div>

            {/* Row 2: 2 phone cards left + insight text right */}
            <div className="ng-insight-pair">
              <div className="ng-phone" aria-hidden="true" />
              <div className="ng-phone" aria-hidden="true" />
              <p className="ng-insight-copy">
                A watchlist is needed to make sure coaches don&rsquo;t lose players they
                want to keep in their spotlight, helping both player &amp; coach.
              </p>
            </div>

            {/* Row 3: insight text left + 2 phone cards right (filters screen on second) */}
            <div className="ng-insight-pair">
              <p className="ng-insight-copy">
                Filters should allow coaches to search for specific profiles while ensuring
                players are in the right coaches spotlight.
              </p>
              <div className="ng-phone" aria-hidden="true" />
              <div className="ng-phone">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={FILTERS_IMG} alt="Filters screen" />
              </div>
            </div>

            {/* Row 4: notifications phone left + insight text right */}
            <div className="ng-insight-pair">
              <div className="ng-phone">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={NOTIF_IMG} alt="Notifications screen" />
              </div>
              <p className="ng-insight-copy">
                Notifications are needed to give the player clarity to whether their clips,
                profile and highlight are being seen.
              </p>
            </div>

          </div>
        </div>

        {/* ── DESIGN PROCESS ───────────────────────────────────────────── */}
        <div className="ng-section-hdr">
          <CaseLabel label="Design process" accent="#ffd500" className="ng-section-hdr-label" />
          <div className="ng-section-hdr-line" aria-hidden="true" />
        </div>

        <div className="ng-w">
          <div className="ng-design-block">

            {/* Part 1: Old screens left + caption bottom-right */}
            <div className="ng-dp-row-1">
              <div className="ng-iphones">
                <div className="ng-iphone">
                  <div className="ng-iphone-notch" aria-hidden="true" />
                  <div className="ng-iphone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={SCREEN_A} alt="App screen — discovery feed" />
                  </div>
                </div>
                <div className="ng-iphone">
                  <div className="ng-iphone-notch" aria-hidden="true" />
                  <div className="ng-iphone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={SCREEN_B} alt="App screen — player profile" />
                  </div>
                </div>
                <div className="ng-iphone">
                  <div className="ng-iphone-notch" aria-hidden="true" />
                  <div className="ng-iphone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={SCREEN_C} alt="App screen — watchlist" />
                  </div>
                </div>
              </div>
              <p className="ng-dp-caption">
                I took forward an old award winning design, as a base, making it into something
                that has purpose
              </p>
            </div>

            {/* Part 2: Sketch photos (centered) + caption below */}
            <div className="ng-dp-sketches">
              <div className="ng-sketches-row">
                <div className="ng-sketch">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SKETCH_FLOW_1} alt="User flow sketch — profile build" />
                </div>
                <div className="ng-sketch">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SKETCH_FLOW_2} alt="User flow sketch — flow 2" />
                </div>
                <div className="ng-sketch">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SKETCH_FLOW_3} alt="User flow sketch — flow 3" />
                </div>
              </div>
              <p className="ng-sketch-caption">
                I started by sketching out three new key user flows before turning to Figma,
                building the flows out from low to high fidelity.
              </p>
            </div>

            {/* Part 3: New screens (right-aligned) + logo section below */}
            <div className="ng-dp-logo-block">
              <div className="ng-iphones">
                <div className="ng-iphone">
                  <div className="ng-iphone-notch" aria-hidden="true" />
                  <div className="ng-iphone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={SCREEN_A} alt="App screen — discovery feed" />
                  </div>
                </div>
                <div className="ng-iphone">
                  <div className="ng-iphone-notch" aria-hidden="true" />
                  <div className="ng-iphone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={SCREEN_B} alt="App screen — player profile" />
                  </div>
                </div>
                <div className="ng-iphone">
                  <div className="ng-iphone-notch" aria-hidden="true" />
                  <div className="ng-iphone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={SCREEN_C} alt="App screen — watchlist" />
                  </div>
                </div>
              </div>

              <div className="ng-dp-logo-content">
                <div className="ng-dp-logo-text">
                  <p className="ng-dp-logo-lead">
                    I then of course had to go and build out a logo.
                  </p>
                  <p className="ng-dp-logo-sub">This also won a Silver ADDY!</p>
                </div>
                <div className="ng-logo-sketches">
                  <div className="ng-logo-sketch">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={LOGO_SKETCH_1} alt="Logo sketch" />
                  </div>
                  <div className="ng-logo-sketch">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={LOGO_SKETCH_2} alt="Logo sketch" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── PROTOTYPE ───────────────────────────────────────────────── */}
        <div className="ng-w ng-proto">
          <div className="ng-proto-hdr">
            <div className="ng-proto-line" aria-hidden="true" />
            <p className="ng-proto-label">Prototype</p>
          </div>

          <div className="ng-proto-grid">
            <div>
              <div className="ng-proto-phone-wrap">
                <div className="ng-iphone">
                  <div className="ng-iphone-notch" aria-hidden="true" />
                  <div className="ng-iphone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={PROTOTYPE_SCREEN} alt="Prototype screen — player profile setup" />
                  </div>
                </div>
              </div>
              <p className="ng-proto-copy-title">Player profile set up</p>
              <p className="ng-proto-copy-body">
                There will be 2 role options when setting up a profile. A player will have
                to fill in all their information, which will help players get into relevant
                coaches spotlight,
              </p>
            </div>

            <div className="ng-proto-col-mid">
              <div className="ng-proto-phone-wrap">
                <div className="ng-iphone">
                  <div className="ng-iphone-notch" aria-hidden="true" />
                  <div className="ng-iphone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={PROTOTYPE_SCREEN} alt="Prototype screen — coach filtering feed" />
                  </div>
                </div>
              </div>
              <p className="ng-proto-copy-title">Coach filtering feed</p>
              <p className="ng-proto-copy-body">
                With coaches seeking specific player profiles they will be able to filter
                down the players in their feed to meet the needed profile.
              </p>
            </div>

            <div>
              <div className="ng-proto-phone-wrap">
                <div className="ng-iphone">
                  <div className="ng-iphone-notch" aria-hidden="true" />
                  <div className="ng-iphone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={PROTOTYPE_SCREEN} alt="Prototype screen — coach messaging" />
                  </div>
                </div>
              </div>
              <p className="ng-proto-copy-title">Coach messaging</p>
              <p className="ng-proto-copy-body">
                Only a coach will be able to send the first message, helping them avoid noise
                and keep better track of their conversations.
              </p>
            </div>
          </div>

          <div className="ng-proto-foot">
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
          </div>
        </div>

        {/* ── MORE CASES ─────────────────────────────────────────────── */}
        <RelatedCases currentSlug="next-gen" dark />

      </div>
    </>
  )
}
