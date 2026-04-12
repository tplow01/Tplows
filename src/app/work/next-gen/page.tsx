import RelatedCases from '@/components/RelatedCases'

// Temporary Figma wireframe asset — replace with final production image
const HERO_IMG = 'https://www.figma.com/api/mcp/asset/a52353f5-4db5-4fa5-9fc7-605679c82dfd'

// Wireframe placeholder box — bordered label tile
function Wbox({
  label,
  variant = 'square',
  className = '',
}: {
  label: string
  variant?: 'square' | 'tall' | 'land' | 'img'
  className?: string
}) {
  return (
    <div className={`ng-wbox ng-wbox--${variant}${className ? ' ' + className : ''}`}>
      <span className="ng-wbox__lbl">{label}</span>
    </div>
  )
}

export default function NextGenPage() {
  return (
    <>
      {/* ── Page-scoped styles ─────────────────────────────────────────── */}
      <style>{`

        /* ── Root ── */
        .ng { padding-top: var(--nav-h); background: var(--c-white); overflow-x: hidden; }

        /* Content wrapper: max-width + horizontal margins */
        .ng-w {
          max-width: var(--grid-max);
          margin-left:  auto;
          margin-right: auto;
          padding-left:  var(--grid-margin);
          padding-right: var(--grid-margin);
        }

        /* Full-bleed wrapper (for screens section) */
        .ng-full {
          padding-left:  var(--grid-margin);
          padding-right: var(--grid-margin);
        }

        /* Standard large section gap — 8pt max (104 = 13×8) */
        .ng-gap   { padding-bottom: clamp(48px,  7.2vw, 104px); }
        /* Tighter gap — 8pt (32→64) */
        .ng-gap-s { padding-bottom: clamp(32px,  4.4vw,  64px); }

        /* ── Hero ── */
        .ng-hero {
          background: #151515;
          border-radius: var(--radius-card);
          overflow: hidden;
          height: clamp(200px, 43vw, 624px); /* 624 = 78×8 */
          position: relative;
          margin-bottom: clamp(48px, 7.2vw, 104px);
          margin-top: var(--sp-6);
        }
        .ng-hero img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 115%;
          object-fit: cover;
          object-position: center -8%;
        }

        /* ── Problem title ── */
        .ng-h1 {
          font-family: 'Mona Sans', 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(28px, 7.5vw, 120px);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #151515;
          margin: 0;
        }
        .ng-h1-accent {
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          color: var(--c-orange);
          letter-spacing: -0.03em;
        }

        /* ── Project meta — 3-col grid matching 9-col page grid ── */
        .ng-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 var(--grid-gutter);
        }
        .ng-meta-item {
          border-top: 1px solid rgba(21,21,21,0.15);
          padding-top: clamp(14px, 1.8vw, 24px);
        }
        .ng-meta-lbl {
          display: block;
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          font-size: clamp(11px, 1vw, 13px);
          color: var(--c-orange);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: clamp(8px, 1vw, 14px);
        }
        .ng-meta-val {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: clamp(13px, 1.3vw, 18px);
          color: var(--c-black);
          line-height: 1.6;
        }

        /* ── Problem description paragraph ──
           Sits at col 5 (right 8 of 12 cols).
           12-col offset = 4 col-widths + 4 gutters.
           At 1440px (80px margin, 24px gutter):
           col-width = (1440-160-11×24)/12 ≈ 84.67px
           4 cols + 4 gutters = 338.67 + 96 = 434.67px → 432px (54×8) */
        .ng-desc-wrap {
          margin-top: clamp(32px, 4.4vw, 64px);
          margin-left: clamp(0px, 30vw, 432px);
        }
        .ng-desc {
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' 0;
          font-size: clamp(16px, 2.5vw, 36px);
          letter-spacing: -0.022em;
          line-height: 1.4;
          color: #151515;
          margin: 0;
        }

        /* ── Stats cascade ──
           Staircase: stat-2 drops 210px, stat-3 drops 420px.
           Each stat = 3 grid cols. Left-aligned for legibility. */
        .ng-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: var(--grid-gutter);
          align-items: start;
        }
        .ng-stat-2 { padding-top: clamp(0px, 14.4vw, 208px); } /* 208 = 26×8 */
        .ng-stat-3 { padding-top: clamp(0px, 28.9vw, 416px); } /* 416 = 52×8 */

        /* Orange rule runs across each stat item */
        .ng-stat {
          border-top: 2px solid var(--c-orange);
          padding-top: clamp(16px, 2vw, 24px); /* 24 = 3×8 */
        }

        .ng-stat-num {
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          font-size: clamp(52px, 9vw, 128px);
          color: var(--c-black);
          margin: 0 0 clamp(10px, 1.2vw, 16px);
          line-height: 0.9;
          text-align: left;
          letter-spacing: -0.04em;
        }
        .ng-stat-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: clamp(13px, 1.3vw, 18px);
          color: rgba(21,21,21,0.6);
          margin: 0;
          line-height: 1.55;
          text-align: left;
          max-width: 22ch;
        }

        /* ── Sketch images ── */
        .ng-sketch-img {
          width: 100%;
          aspect-ratio: 1 / 1;
          display: block;
          border-radius: var(--radius-card);
          object-fit: cover;
          object-position: center;
        }

        /* ── Coaches side image ── */
        .ng-coaches-side-img {
          width: 100%;
          aspect-ratio: 268 / 480;
          object-fit: cover;
          object-position: center top;
          border-radius: var(--radius-card);
          display: block;
        }

        /* ── Filled dark tile — replaces wireframe outline placeholders ── */
        .ng-wbox {
          background: var(--c-black);
          border-radius: var(--radius-card);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 16px;
          overflow: hidden;
        }
        /* aspect-ratio variants */
        .ng-wbox--square { aspect-ratio: 1 / 1; }
        .ng-wbox--tall   { aspect-ratio: 420 / 700; }
        .ng-wbox--land   { aspect-ratio: 420 / 300; }
        .ng-wbox--img    { aspect-ratio: 268 / 480; }

        .ng-wbox__lbl {
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          font-size: clamp(12px, 1.5vw, 22px);
          color: rgba(241, 94, 34, 0.25);
          line-height: 1.15;
          white-space: pre-line;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* ── Interview row (image 3col + card 6col) ── */
        .ng-interview {
          display: flex;
          gap: var(--grid-gutter);
          align-items: stretch;
        }
        /* Image = flex 3 of 9 columns  */
        .ng-interview-img { flex: 3; }
        .ng-interview-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: var(--radius-card);
          display: block;
        }
        /* Card = flex 6 of 9 columns   */
        .ng-interview-card {
          flex: 6;
          padding: clamp(24px, 4vw, 64px) clamp(24px, 4vw, 64px) clamp(24px, 4vw, 64px) 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;
        }
        .ng-interview-ttl {
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          font-size: clamp(24px, 3.5vw, 58px);
          color: #151515;
          margin: 0;
        }
        .ng-interview-who {
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          font-size: clamp(13px, 1.2vw, 16px);
          color: var(--c-orange);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0;
        }
        .ng-interview-body {
          font-family: 'Mona Sans', 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.3vw, 18px);
          color: rgba(21,21,21,0.65);
          line-height: 1.65;
          margin: 0;
          max-width: 52ch;
        }
        .ng-interview-findings {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .ng-interview-findings li {
          font-family: 'Mona Sans', 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 17px);
          color: rgba(21,21,21,0.65);
          line-height: 1.55;
          padding-left: 1.2em;
          position: relative;
        }
        .ng-interview-findings li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--c-orange);
        }

        /* ── A/B result findings ── */
        .ng-ab-results {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: clamp(24px, 3vw, 40px);
          padding: 0;
          list-style: none;
        }
        .ng-ab-results li {
          font-family: 'Mona Sans', 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 17px);
          color: rgba(21,21,21,0.65);
          line-height: 1.55;
          padding-left: 1.2em;
          position: relative;
        }
        .ng-ab-results li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--c-orange);
        }
        .ng-ab-results strong {
          color: #151515;
          font-weight: 600;
        }
        .ng-ab img {
          width: 100%;
          aspect-ratio: 420 / 300;
          object-fit: cover;
          object-position: center top;
          display: block;
          border-radius: var(--radius-card);
        }

        /* ── Coaches + HMW section ──
           Layout: [image 4col] [insight + HMW 8col] = 12 cols total */
        .ng-coaches {
          display: grid;
          grid-template-columns: 4fr 8fr;
          gap: var(--grid-gutter);
          align-items: start;
        }
        .ng-coaches-center {
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 4.2vw, 60px);
        }

        /* Research insight card */
        .ng-tcard {
          border-top: 2px solid var(--c-orange);
          padding: clamp(20px, 3vw, 40px) 0 clamp(16px, 2.5vw, 32px);
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.2vw, 16px);
        }
        .ng-tcard p {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.4vw, 20px);
          line-height: 1.65;
          letter-spacing: -0.011em;
          color: var(--c-black);
          margin: 0;
        }

        /* HMW callout — dark branded card */
        .ng-tcard--hmw {
          background: var(--c-black);
          border-top: none;
          border-radius: var(--radius-card);
          padding: clamp(20px, 3vw, 40px) clamp(20px, 2.5vw, 36px);
          gap: clamp(8px, 1vw, 14px);
        }
        .ng-tcard--hmw .ng-tcard-lead {
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          font-size: clamp(11px, 1vw, 14px);
          color: var(--c-orange);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .ng-tcard--hmw p {
          color: var(--c-white);
          font-size: clamp(14px, 1.5vw, 22px);
          font-weight: 400;
        }
        .ng-tcard--hmw strong {
          color: var(--c-orange);
          font-weight: 700;
        }

        /* ── Ideation / Sketches ──
           3-column grid (each cell = 3 grid cols = 1/3 of content width).
           Row 1: 3 square sketches.
           Row 2: 1 square logo sketch + 2 tall phone-screen tiles. */
        .ng-ideation {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
          align-items: start;
        }

        /* ── A/B Testing: 3-col grid — each tile = 3 grid cols ── */
        .ng-ab {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--grid-gutter);
        }

        /* ── Prototype screen rows ──
           12-col math at 1440px (80px margin, 24px gutter):
           col-width = (1440-160-11×24)/12 = 84.67px
           col-2 start = 80 + 84.67 + 24 = 188.67px → 192px (24×8)
           Each screen = 4 cols = 4×84.67 + 3×24 = 338.67+72 = 410.67px → 416px (52×8) */
        .ng-screens {
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 4.2vw, 64px);
          padding-bottom: clamp(48px, 7.2vw, 104px);
        }
        .ng-screen-row {
          display: flex;
          gap: var(--grid-gutter);
          padding-left:  clamp(16px, 13.3vw, 192px);
          padding-right: clamp(16px, 13.3vw, 192px);
        }
        .ng-screen-row--end { justify-content: flex-end; }
        /* Each screen = 4 of 12 grid columns = 416px at desktop */
        .ng-screen-row > * {
          flex: 0 0 clamp(140px, 28.9vw, 416px);
        }

        /* ── Racing stripe section header ──
           Full-bleed double bar: two thick orange stripes with the eyebrow
           label sitting in the gap between them.
           Breaks out of .ng-w padding via negative side margins so the bars
           run all the way to the container edge. */
        .ng-racing-header {
          margin-left:  calc(-1 * var(--grid-margin));
          margin-right: calc(-1 * var(--grid-margin));
          border-top:    18px solid var(--c-orange);
          border-bottom: 18px solid var(--c-orange);
          padding: 10px var(--grid-margin);
          margin-bottom: clamp(32px, 4.4vw, 64px);
          background: var(--c-white);
        }
        /* Inside .ng-full the wrapper already has grid-margin padding,
           so the header only needs to negate that. Same technique. */
        .ng-racing-header--dark {
          background: var(--c-black);
        }
        .ng-racing-header--dark .eyebrow {
          color: rgba(243,240,234,0.55);
          border-color: rgba(243,240,234,0.2);
        }

        /* ── What's Next ── */
        .ng-next-lbl {
          display: block;
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          font-size: clamp(16px, 1.7vw, 24px);
          color: #151515;
          margin-bottom: var(--sp-4);
        }
        .ng-next-body {
          font-family: 'Mona Sans', 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(14px, 1.4vw, 20px);
          line-height: 1.65;
          color: rgba(21,21,21,0.65);
          margin: 0;
          max-width: 55ch;
        }

        /* ══ RESPONSIVE ═══════════════════════════════════════════════════ */

        /* ── Tablet (6-col, 40px margin, 20px gutter) ── */
        @media (min-width: 768px) and (max-width: 1023px) {

          /* Meta: items shrink equally */
          .ng-meta-item { flex: 1 1 0; min-width: 0; }

          /* Description: no left offset on tablet */
          .ng-desc-wrap { margin-left: 0; }

          /* Stats: flatten cascade */
          .ng-stat-2, .ng-stat-3 { padding-top: 0; }

          /* Interview: equal halves */
          .ng-interview-img  { flex: 1; }
          .ng-interview-card { flex: 1; }

          /* Coaches: equal halves on tablet */
          .ng-coaches { grid-template-columns: 1fr 1fr; }
          .ng-coaches-side-img { aspect-ratio: 1 / 1; }
          /* Meta: equal halves on tablet */
          .ng-meta { grid-template-columns: repeat(3, 1fr); }

          /* Ideation: 3-col grid scales naturally, no override needed */

          /* Screen rows: reduce padding */
          .ng-screen-row {
            padding-left:  var(--grid-margin);
            padding-right: var(--grid-margin);
          }
          .ng-screen-row > * { flex: 1; max-width: 420px; }
          .ng-screen-row--end { justify-content: flex-end; }
        }

        /* ── Mobile (3-col, 20px margin, 12px gutter) ── */
        @media (max-width: 767px) {

          /* Meta: stack vertically */
          .ng-meta { flex-direction: column; gap: 24px; }
          .ng-meta-item { flex: auto; width: 100%; }

          /* Description: no offset, add top gap */
          .ng-desc-wrap { margin-left: 0; margin-top: 24px; }

          /* Stats: single column, no cascade */
          .ng-stats { grid-template-columns: 1fr; }
          .ng-stat-2, .ng-stat-3 { padding-top: 0; }
          .ng-stat-num, .ng-stat-desc { text-align: left; }

          /* Interview: stack */
          .ng-interview { flex-direction: column; }
          .ng-interview-card { padding-left: 0; }
          .ng-interview-img  { flex: auto; }
          .ng-sketch-img     { aspect-ratio: 4 / 3; }

          /* Coaches: single col, hide image */
          .ng-coaches { grid-template-columns: 1fr; }
          .ng-coaches-side { display: none; }
          /* Meta: single col */
          .ng-meta { grid-template-columns: 1fr; }
          /* Stats: flatten cascade */

          /* Ideation: single col on mobile */
          .ng-ideation        { grid-template-columns: 1fr; }
          .ng-wbox--tall      { aspect-ratio: 4 / 3; }

          /* A/B: single col on mobile */
          .ng-ab { grid-template-columns: 1fr; }
          .ng-wbox--land { aspect-ratio: 4 / 3; }

          /* Screen rows: no offset, stack */
          .ng-screen-row {
            flex-direction: column;
            padding-left:  var(--grid-margin);
            padding-right: var(--grid-margin);
          }
          .ng-screen-row > * { flex: auto; width: 100%; }
          .ng-screen-row--end { justify-content: flex-start; }
        }

        @supports (corner-shape: squircle) {
          .ng-hero,
          .ng-sketch-img,
          .ng-coaches-side-img,
          .ng-wbox,
          .ng-interview-img img,
          .ng-ab img,
          .ng-tcard--hmw {
            corner-shape: squircle;
          }
        }
      `}</style>

      <div className="ng">

        {/* ── HERO ───────────────────────────────────────────────────────────
            Dark rounded container with iPhone 16 Pro mockup.
            Plain <img> intentionally — Figma URL is a short-lived
            wireframe asset; swap for a next/image + production URL later.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w">
          <div className="ng-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_IMG} alt="Next Gen — iPhone 16 Pro mockup" />
          </div>
        </div>

        {/* ── PROBLEM TITLE ──────────────────────────────────────────────────
            "A double sided problem with one simple solution"
            Mona Sans Medium body + Hubot Sans ExtraBold Italic accent.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">
          <h1 className="ng-h1">
            A double sided problem with one{' '}
            <span className="ng-h1-accent">simple</span>
            {' '}solution
          </h1>
        </div>

        {/* ── PROJECT CONTEXT ────────────────────────────────────────────────
            Figma 73:226 — meta row (cols 1–6) then description (cols 5–9)
            separated by ~60px vertical gap.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">

          {/* Meta row: My role | My tools | Why this */}
          <div className="ng-meta">
            <div className="ng-meta-item">
              <span className="ng-meta-lbl">My role</span>
              <span className="ng-meta-val">Product designer</span>
            </div>
            <div className="ng-meta-item">
              <span className="ng-meta-lbl">Tools</span>
              <span className="ng-meta-val">Figma<br />Illustrator</span>
            </div>
            <div className="ng-meta-item">
              <span className="ng-meta-lbl">Why this</span>
              <span className="ng-meta-val">
                Soccer took me from New York to California &mdash; through an agency first, then
                cold emails. I met talented players who never got the call, not for lack of skill
                but for lack of visibility. I&rsquo;d already built a version of this that won a
                silver ADDY. It looked great and solved nothing real. So I started over with
                the actual problem.
              </span>
            </div>
          </div>

          {/* Description paragraph — pushed right to col 5 */}
          <div className="ng-desc-wrap">
            <p className="ng-desc">
              Players rely on mass emails, expensive agencies and costly showcases,
              with no guarantee of getting into the coaches&rsquo; spotlight.
            </p>
          </div>

        </div>

        {/* ── STATISTICS ─────────────────────────────────────────────────────
            Three stats in a 3-col cascade: each 3 columns wide, each 210px
            lower than the last (staircase descending right).
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">
          <div className="ng-stats">

            <div className="ng-stat">
              <p className="ng-stat-num">1–3%</p>
              <p className="ng-stat-desc">Of players ever get a reply to their cold emails.</p>
            </div>

            <div className="ng-stat ng-stat-2">
              <p className="ng-stat-num">30s</p>
              <p className="ng-stat-desc">Is all the time a coach gives a highlight reel.</p>
            </div>

            <div className="ng-stat ng-stat-3">
              <p className="ng-stat-num">100+</p>
              <p className="ng-stat-desc">Players a coach can receive emails from in a single day.</p>
            </div>

          </div>
        </div>

        {/* ── RESEARCH: INTERVIEW ────────────────────────────────────────────
            Figma 73:205 — flex justify-between:
            [image 420×420 / 3 cols]  [Interview card 870px / 6 cols]
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">
          <div className="ng-interview">

            <div className="ng-interview-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/NextGen_James.jpg" alt="James Hogan — Assistant Coach, Christian Brothers University" />
            </div>

            <div className="ng-interview-card">
              <p className="ng-interview-ttl">Interview</p>
              <p className="ng-interview-who">James Hogan &mdash; 25, Memphis TN &mdash; Asst. Coach, Christian Brothers University</p>
              <p className="ng-interview-body">
                We spoke to the coach, not the player &mdash; the one with the ultimate
                power. James gave us a clear window into how recruitment actually works
                on the other side of the inbox.
              </p>
              <ul className="ng-interview-findings">
                <li>Receiving 60+ emails a day, mixed into personal and work threads &mdash; almost none get opened.</li>
                <li>A coach decides in under a minute whether they&rsquo;ll keep watching a highlight reel.</li>
                <li>Recruitment isn&rsquo;t a broadcast &mdash; coaches are building for specific roles and player profiles.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── RESEARCH: COACHES + HMW ────────────────────────────────────────
            Figma 73:209 — 268px flanking images, centre 5-col text stack.
            [image 268×480]  [coaches card + HMW card, gap 60px]  [image 268×480]
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">
          <div className="ng-coaches">

            <div className="ng-coaches-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="ng-coaches-side-img" src="/images/Next_Gen_1.jpg" alt="Next Gen — player" />
            </div>

            <div className="ng-coaches-center">
              <div className="ng-tcard">
                <p>
                  Coaches are drowning in emails and wasting time on players who don&rsquo;t
                  fit their roster. Smart filters &mdash; age, position, eligibility &mdash; cut
                  the noise and surface only the players that actually match what a coach needs.
                </p>
              </div>
              <div className="ng-tcard ng-tcard--hmw">
                <span className="ng-tcard-lead">Design question</span>
                <p>
                  <strong>How might we&nbsp;</strong>
                  put the right players into the right coaches&rsquo; spotlight at the right
                  time &mdash; without mass outreach or expensive showcases?
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── IDEATION / SKETCHES ────────────────────────────────────────────
            Figma 73:216 — left 3-col stack (2 sketches) + right 6-col
            block (row A: 2 sketches / row B: 2 portrait video tiles).
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">
          <div className="ng-racing-header">
            <span className="eyebrow">Ideation</span>
          </div>
          {/* 3-col grid — row 1: sketches, row 2: logo + phone tiles */}
          <div className="ng-ideation">

            {/* Row 1 — 3 sketches, each 3 cols wide */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ng-sketch-img" src="/images/NextGen_Sketch_Flow1.jpg" alt="Sketch — flow 1" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ng-sketch-img" src="/images/NextGen_Sketch_Flow2.jpg" alt="Sketch — flow 2" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ng-sketch-img" src="/images/NextGen_Sketch_Flow3.jpg" alt="Sketch — flow 3" />

            {/* Row 2 — logo sketch + 2 phone-screen tiles */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ng-sketch-img" src="/images/NextGen_Sketch_Logo.jpg" alt="Sketch — logo" />
            <Wbox label={"Old version"} variant="tall" />
            <Wbox label={"Lo-Mid"} variant="tall" />

          </div>
        </div>

        {/* ── A/B TESTING ────────────────────────────────────────────────────
            Three landscape tiles (420×300) spanning all 9 columns.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">
          <div className="ng-racing-header">
            <span className="eyebrow">A/B Testing</span>
          </div>
          <div className="ng-ab">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/NextGen_AB_1.png" alt="A/B test 1 — video feed layout" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/NextGen_AB_2.png" alt="A/B test 2 — account creation form" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/NextGen_AB_3.png" alt="A/B test 3 — player profile card" />
          </div>
          <ul className="ng-ab-results">
            <li><strong>Paul</strong> &mdash; Take the boxed profile card forward, adjusting the nav and button clash.</li>
            <li><strong>Paul &amp; Ali</strong> &mdash; Take forward Space Grotesk as the typeface.</li>
            <li><strong>Paul &amp; Ali</strong> &mdash; Take forward the pill-shaped buttons.</li>
          </ul>
        </div>

        {/* ── PROTOTYPE SCREEN ROWS ──────────────────────────────────────────
            Figma 73:252 — full-width container, px-211px both sides.
            At 1440px viewport: 211px ≈ col-2 start (margin 60 + col 120 + gutter 30).
            Rows alternate justify-start (col 2-4 | 5-7) and
            justify-end (col 3-5 | 6-8) for a staircase rhythm.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-full">
          <div className="ng-racing-header">
            <span className="eyebrow">Prototype</span>
          </div>
          <div className="ng-screens">

            {/* Row 1 — left-aligned: cols 2–4 + 5–7 */}
            <div className="ng-screen-row">
              <Wbox label={"coach\nscrolling"} variant="tall" />
              <Wbox label={"Writing\nabout it"} variant="tall" />
            </div>

            {/* Row 2 — right-aligned: cols 3–5 + 6–8 */}
            <div className="ng-screen-row ng-screen-row--end">
              <Wbox label={"coach\nscrolling"} variant="tall" />
              <Wbox label={"Writing\nabout it"} variant="tall" />
            </div>

            {/* Row 3 — left-aligned */}
            <div className="ng-screen-row">
              <Wbox label={"coach\nscrolling"} variant="tall" />
              <Wbox label={"Writing\nabout it"} variant="tall" />
            </div>

            {/* Row 4 — right-aligned */}
            <div className="ng-screen-row ng-screen-row--end">
              <Wbox label={"coach\nscrolling"} variant="tall" />
              <Wbox label={"Writing\nabout it"} variant="tall" />
            </div>

          </div>
        </div>

        {/* ── WHAT'S NEXT ────────────────────────────────────────────────────
            Figma 68:168 — 6-col text block.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">
          <span className="ng-next-lbl">What&rsquo;s next</span>
          <p className="ng-next-body">
            I plan to get the product tested by coaches to get their feedback to polish
            everything as I build it out, with the hope to gain their support.
          </p>
        </div>

        {/* ── MORE CASES ─────────────────────────────────────────────────── */}
        <RelatedCases currentSlug="next-gen" />

      </div>
    </>
  )
}
