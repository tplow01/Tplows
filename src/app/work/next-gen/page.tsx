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
        .ng { padding-top: var(--nav-h); background: #f7f7fb; overflow-x: hidden; }

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

        /* Standard large section gap (≈ Figma 106px) */
        .ng-gap   { padding-bottom: clamp(48px,  7.4vw, 106px); }
        /* Tighter gap (60px) for within-section spacing  */
        .ng-gap-s { padding-bottom: clamp(28px,  4.2vw,  60px); }

        /* ── Hero ── */
        .ng-hero {
          background: #151515;
          border-radius: 8px;
          overflow: hidden;
          height: clamp(200px, 43vw, 620px);
          position: relative;
          margin-bottom: clamp(48px, 7.4vw, 106px);
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

        /* ── Project meta ── */
        .ng-meta {
          display: flex;
          gap: var(--grid-gutter);
          flex-wrap: wrap;
        }
        /* Each meta item = 2 cols (270px at desktop) */
        .ng-meta-item { flex: 0 0 270px; }

        .ng-meta-lbl {
          display: block;
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          font-size: clamp(14px, 1.5vw, 22px);
          color: #151515;
          margin-bottom: 6px;
        }
        .ng-meta-val {
          font-family: 'Mona Sans', 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.3vw, 20px);
          color: rgba(21,21,21,0.7);
          line-height: 1.55;
        }

        /* ── Problem description paragraph ──
           Sits at col 5 (right 5 cols). Desktop offset = 4 cols + 4 gutters
           = 4 × 120 + 4 × 30 = 480 + 120 = 600px from content-left. */
        .ng-desc-wrap {
          margin-top: clamp(32px, 4.2vw, 60px);
          margin-left: clamp(0px, 41.7vw, 600px);
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
           Figma: stat-1 at (0,0), stat-2 at (450px, 210px), stat-3 at (900px, 420px).
           450px = 1 col-span-3 width. 210px = 1 col-span-3 height × 0.5.
           Reproduced via padding-top on nth-child to create staircase. */
        .ng-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: var(--grid-gutter);
          align-items: start;
        }
        .ng-stat-2 { padding-top: clamp(0px, 14.6vw, 210px); }
        .ng-stat-3 { padding-top: clamp(0px, 29.2vw, 420px); }

        .ng-stat-num {
          font-family: 'Hubot Sans', sans-serif;
          font-weight: 800;
          font-variation-settings: 'wght' 800, 'slnt' -10;
          font-size: clamp(48px, 9vw, 128px);
          color: #151515;
          margin: 0 0 12px;
          line-height: 0.9;
          text-align: center;
        }
        .ng-stat-desc {
          font-family: 'Mona Sans', 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.4vw, 20px);
          color: rgba(21,21,21,0.7);
          margin: 0;
          line-height: 1.5;
          text-align: center;
        }

        /* ── Wireframe placeholder box ── */
        .ng-wbox {
          border: 1px solid #151515;
          border-radius: 4px;
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
          font-size: clamp(14px, 2.5vw, 52px);
          color: #151515;
          line-height: 1.15;
          white-space: pre-line;
        }

        /* ── Interview row (image 3col + card 6col) ── */
        .ng-interview {
          display: flex;
          gap: var(--grid-gutter);
          align-items: stretch;
        }
        /* Image = flex 3 of 9 columns  */
        .ng-interview-img { flex: 3; }
        /* Card = flex 6 of 9 columns   */
        .ng-interview-card {
          flex: 6;
          border: 1px solid #151515;
          border-radius: 4px;
          padding: clamp(24px, 4vw, 64px);
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
        .ng-interview-body {
          font-family: 'Mona Sans', 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.3vw, 18px);
          color: rgba(21,21,21,0.65);
          line-height: 1.65;
          margin: 0;
          max-width: 52ch;
        }

        /* ── Coaches + HMW section ──
           Layout: [image 268px] [center 5 cols] [image 268px]
           Center = coaches card + HMW card, 60px gap between.
           Images span full height of center via align-items: stretch. */
        .ng-coaches {
          display: grid;
          grid-template-columns: 268px 1fr 268px;
          gap: var(--grid-gutter);
          align-items: center;
        }
        .ng-coaches-center {
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 4.2vw, 60px);
        }
        .ng-tcard {
          border: 1px solid #151515;
          border-radius: 4px;
          padding: clamp(16px, 2.5vw, 32px) clamp(20px, 2.5vw, 40px);
          min-height: clamp(100px, 14.6vw, 210px);
          display: flex;
          align-items: center;
        }
        .ng-tcard p {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: clamp(13px, 1.25vw, 16px);
          line-height: 1.65;
          letter-spacing: -0.011em;
          color: #151515;
          margin: 0;
        }
        .ng-tcard strong { display: block; margin-bottom: 4px; }

        /* ── Ideation / Sketches ──
           Layout (Figma 73:216):
             Left 3 cols (w=420): 2 stacked sketches, gap=60
             Right 6 cols (w=870):
               Row A: sketch | sketch
               Row B: old-vid (h=700) | lo-mid-vid (h=700) */
        .ng-ideation {
          display: flex;
          gap: var(--grid-gutter);
          align-items: flex-start;
        }
        .ng-ideation-left {
          flex: 0 0 420px;
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 4.2vw, 60px);
        }
        .ng-ideation-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 4.2vw, 60px);
        }
        .ng-ideation-pair {
          display: flex;
          gap: var(--grid-gutter);
        }
        .ng-ideation-pair > * { flex: 1; }

        /* ── A/B Testing: 3 landscape tiles ── */
        .ng-ab {
          display: flex;
          gap: var(--grid-gutter);
        }
        .ng-ab > * { flex: 1; }

        /* ── Prototype screen rows ──
           Figma: px-[211px] on full-width, 2 screens of 420px with 30px gap.
           211px from 1440px viewport ≈ col-2 start (60 margin + 120 col1 + 30 gutter = 210px).
           justify-start → screens at col 2-4 + col 5-7
           justify-end   → screens at col 3-5 + col 6-8  */
        .ng-screens {
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 4.2vw, 60px);
          padding-bottom: clamp(48px, 7.4vw, 106px);
        }
        .ng-screen-row {
          display: flex;
          gap: 30px;
          /* 211px ≈ col-2 start = grid-margin + col-width + gutter
             Using calc based on CSS grid math:
             = var(--grid-margin) + (100vw − 2*grid-margin − 8*gutter)/9 + gutter */
          padding-left:  clamp(20px, 14.65vw, 211px);
          padding-right: clamp(20px, 14.65vw, 211px);
        }
        .ng-screen-row--end { justify-content: flex-end; }
        /* Each screen = 420px = 3 grid columns */
        .ng-screen-row > * {
          flex: 0 0 clamp(140px, 29.2vw, 420px);
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

          /* Coaches: narrower flanking images */
          .ng-coaches {
            grid-template-columns: 140px 1fr 140px;
          }
          .ng-wbox--img { aspect-ratio: 1; }

          /* Ideation: left col shrinks */
          .ng-ideation-left { flex-basis: 200px; }

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
          .ng-interview-img  { flex: auto; }
          .ng-wbox--square   { aspect-ratio: 4 / 3; }

          /* Coaches: single col, hide flanking images */
          .ng-coaches {
            grid-template-columns: 1fr;
          }
          .ng-coaches-side { display: none; }

          /* Ideation: single col */
          .ng-ideation        { flex-direction: column; }
          .ng-ideation-left   { flex-basis: auto; width: 100%; }
          .ng-ideation-pair   { flex-direction: column; }
          .ng-wbox--tall      { aspect-ratio: 4 / 3; }

          /* A/B: single col */
          .ng-ab { flex-direction: column; }
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

          {/* Meta row: My position | My gear | My reason */}
          <div className="ng-meta">
            <div className="ng-meta-item">
              <span className="ng-meta-lbl">My position</span>
              <span className="ng-meta-val">Product designer</span>
            </div>
            <div className="ng-meta-item">
              <span className="ng-meta-lbl">My gear</span>
              <span className="ng-meta-val">Figma<br />Illustrator</span>
            </div>
            <div className="ng-meta-item">
              <span className="ng-meta-lbl">My reason</span>
              <span className="ng-meta-val">— to be written —</span>
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

            <div>
              <p className="ng-stat-num">1–3%</p>
              <p className="ng-stat-desc">Of players see a reply from their emails.</p>
            </div>

            <div className="ng-stat-2">
              <p className="ng-stat-num">30s</p>
              <p className="ng-stat-desc">
                Is how long a coach will typically watch your tape.
              </p>
            </div>

            <div className="ng-stat-3">
              <p className="ng-stat-num">100+</p>
              <p className="ng-stat-desc">Is how many players a coach can see in a day.</p>
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
              <Wbox label="image" />
            </div>

            <div className="ng-interview-card">
              <p className="ng-interview-ttl">Interview</p>
              <p className="ng-interview-body">
                Highlight — talking to the coach instead of the player to make sure we
                are working with the one with the ultimate power.
              </p>
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
              <Wbox label="image" variant="img" />
            </div>

            <div className="ng-coaches-center">
              <div className="ng-tcard">
                <p>The coaches are struggling too.</p>
              </div>
              <div className="ng-tcard">
                <p>
                  <strong>How might we</strong>
                  Put the right players into the right coaches&rsquo; spotlight at the right
                  time, without relying on mass outreach or expensive showcases?
                </p>
              </div>
            </div>

            <div className="ng-coaches-side">
              <Wbox label="image" variant="img" />
            </div>

          </div>
        </div>

        {/* ── IDEATION / SKETCHES ────────────────────────────────────────────
            Figma 73:216 — left 3-col stack (2 sketches) + right 6-col
            block (row A: 2 sketches / row B: 2 portrait video tiles).
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">
          <div className="ng-gap-s">
            <span className="eyebrow">Ideation</span>
          </div>
          <div className="ng-ideation">

            {/* Left 3 cols — 2 stacked sketches */}
            <div className="ng-ideation-left">
              <Wbox label="sketch" />
              <Wbox label="sketch" />
            </div>

            {/* Right 6 cols — 2 rows */}
            <div className="ng-ideation-right">
              {/* Row A: sketch pair */}
              <div className="ng-ideation-pair">
                <Wbox label="sketch" />
                <Wbox label="sketch" />
              </div>
              {/* Row B: tall video tiles */}
              <div className="ng-ideation-pair">
                <Wbox label={"Old version\nvid"} variant="tall" />
                <Wbox label={"Lo-Mid\nvid"} variant="tall" />
              </div>
            </div>

          </div>
        </div>

        {/* ── A/B TESTING ────────────────────────────────────────────────────
            Three landscape tiles (420×300) spanning all 9 columns.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-w ng-gap">
          <div className="ng-gap-s">
            <span className="eyebrow">A/B Testing</span>
          </div>
          <div className="ng-ab">
            <Wbox label="A/B" variant="land" />
            <Wbox label="A/B" variant="land" />
            <Wbox label="A/B" variant="land" />
          </div>
        </div>

        {/* ── PROTOTYPE SCREEN ROWS ──────────────────────────────────────────
            Figma 73:252 — full-width container, px-211px both sides.
            At 1440px viewport: 211px ≈ col-2 start (margin 60 + col 120 + gutter 30).
            Rows alternate justify-start (col 2-4 | 5-7) and
            justify-end (col 3-5 | 6-8) for a staircase rhythm.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="ng-full">
          <div className="ng-gap-s">
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
