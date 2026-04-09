'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

// ─── Springs ───────────────────────────────────────────────────────────────
const EXPAND: Parameters<typeof motion.div>[0]['transition'] = {
  type: 'spring', stiffness: 420, damping: 38,
}
const COLLAPSE: Parameters<typeof motion.div>[0]['transition'] = {
  type: 'spring', stiffness: 500, damping: 42,
}
const BG_SCALE: Parameters<typeof motion.div>[0]['transition'] = {
  type: 'spring', stiffness: 360, damping: 36,
}
const REVEAL_IN  = { duration: 0.18, ease: [0.0, 0.0, 0.2, 1.0] as [number,number,number,number] }
const REVEAL_OUT = { duration: 0.10, ease: [0.4, 0.0, 1.0, 0.6] as [number,number,number,number] }

// ─── Data ──────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    slug: 'next-gen',  index: '01', title: 'Next Gen',
    category: 'UX / UI Design',   year: '2025',
    description: 'Sports performance app redesign centred on intuitive data visualisation and athlete-first interaction.',
    href: '/work/next-gen',
    bg: 'linear-gradient(160deg, #1a1208 0%, #2d1a0e 45%, #111010 100%)',
  },
  {
    slug: 'paywall-fc', index: '02', title: 'Paywall Fc',
    category: 'Product Design',    year: '2025',
    description: 'End-to-end subscription platform for football communities — onboarding to retention, zero to shipped.',
    href: '/work/paywall-fc',
    bg: 'linear-gradient(160deg, #080d18 0%, #0f1f35 45%, #060a12 100%)',
  },
  {
    slug: 'mindset',   index: '03', title: 'Mindset',
    category: 'Brand & UX',        year: '2025',
    description: 'Mental performance brand identity and digital experience built for elite athletes at the edge.',
    href: '/work/mindset',
    bg: 'linear-gradient(160deg, #100f0d 0%, #221f1b 45%, #0d0c0b 100%)',
  },
]

// ─── Shared card internals ─────────────────────────────────────────────────
// Extracted so both layouts render identical content
function CardContent({
  project,
  alwaysShowDetails = false,
  isActive = false,
}: {
  project: typeof PROJECTS[number]
  alwaysShowDetails?: boolean
  isActive?: boolean
}) {
  return (
    <>
      {/* Background */}
      <motion.div
        animate={{ scale: isActive ? 1.05 : 1 }}
        transition={isActive ? BG_SCALE : COLLAPSE}
        style={{ position: 'absolute', inset: 0, background: project.bg, transformOrigin: 'center' }}
      />

      {/* Grain */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.045, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '180px 180px', pointerEvents: 'none' }} />

      {/* Vignette */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Index top-left */}
      <div style={{ position: 'absolute', top: '18px', left: '20px' }}>
        <span style={{ fontFamily: GeistMono.style.fontFamily, fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(243,240,234,0.2)' }}>
          {project.index}
        </span>
      </div>

      {/* Orange dot top-right */}
      <motion.div
        animate={{ opacity: (isActive || alwaysShowDetails) ? 1 : 0.25, scale: (isActive || alwaysShowDetails) ? 1 : 0.65 }}
        transition={isActive ? EXPAND : COLLAPSE}
        style={{ position: 'absolute', top: '20px', right: '20px', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--c-orange)' }}
      />

      {/* Floating text */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '26px 24px' }}>

        {/* Metadata */}
        <motion.div
          animate={{ opacity: (isActive || alwaysShowDetails) ? 1 : 0.45 }}
          transition={isActive ? { duration: 0.14, ease: [0, 0, 0.2, 1] } : { duration: 0.08 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}
        >
          <span style={{ fontFamily: GeistMono.style.fontFamily, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(243,240,234,0.65)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {project.category}
          </span>
          <span style={{ fontFamily: GeistMono.style.fontFamily, fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(243,240,234,0.38)', flexShrink: 0, marginLeft: '8px' }}>
            {project.year}
          </span>
        </motion.div>

        {/* Title */}
        <h3 style={{ fontFamily: GeistSans.style.fontFamily, fontWeight: 700, fontSize: 'clamp(24px, 2.4vw, 34px)', letterSpacing: '-0.03em', color: '#f3f0ea', margin: 0, lineHeight: 1 }}>
          {project.title}
        </h3>

        {/* Details — peek-a-boo on desktop, always visible on mobile */}
        {alwaysShowDetails ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}>
            <p style={{ fontFamily: GeistSans.style.fontFamily, fontSize: '14px', lineHeight: 1.6, color: 'rgba(243,240,234,0.55)', margin: 0 }}>
              {project.description}
            </p>
            <Link
              href={project.href}
              style={{ fontFamily: GeistMono.style.fontFamily, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-orange)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px', width: 'fit-content' }}
            >
              View Project <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : (
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                key="peek"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { ...REVEAL_IN, delay: 0.04 } }}
                exit={{ opacity: 0, y: 4, transition: REVEAL_OUT }}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}
              >
                <p style={{ fontFamily: GeistSans.style.fontFamily, fontSize: '13px', lineHeight: 1.6, color: 'rgba(243,240,234,0.5)', margin: 0 }}>
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  style={{ fontFamily: GeistMono.style.fontFamily, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-orange)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px', width: 'fit-content' }}
                >
                  View Project <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        )}

      </div>
    </>
  )
}

// ─── Main component ────────────────────────────────────────────────────────
export default function WorkSection() {
  const [active,    setActive]    = useState<number | null>(null)
  const [isDesktop, setIsDesktop] = useState(true) // default true avoids layout flash on SSR

  // 3 columns above 900px, 1 column below — never 2.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section style={{ backgroundColor: '#f7f7fb', padding: '0 var(--grid-margin) clamp(60px, 8vw, 120px)' }}>
      <div style={{ maxWidth: 'var(--grid-max)', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-5)', marginBottom: 'var(--sp-4)' }}>
          <div style={{ flex: 1, height: '1.5px', backgroundColor: 'var(--c-orange)' }} />
          <span style={{ fontFamily: GeistSans.style.fontFamily, fontWeight: 700, fontSize: 'clamp(16px, 1.8vw, 24px)', letterSpacing: '-0.02em', color: 'var(--c-black)', flexShrink: 0 }}>
            Case Studies
          </span>
        </div>

        {isDesktop ? (
          /* ── Desktop: 3-col expansion strip ─────────────────────── */
          <div
            style={{ display: 'flex', gap: '12px', height: '700px', overflow: 'hidden' }}
            onMouseLeave={() => setActive(null)}
          >
            {PROJECTS.map((project, i) => {
              const isActive  = active === i
              const anyActive = active !== null
              return (
                <motion.div
                  key={project.slug}
                  layout
                  animate={{ flexGrow: isActive ? 1.25 : anyActive ? 0.875 : 1 }}
                  transition={anyActive && !isActive ? COLLAPSE : EXPAND}
                  style={{ flexBasis: 0, minWidth: 0, position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}
                  onHoverStart={() => setActive(i)}
                  aria-label={`View ${project.title} case study`}
                >
                  <CardContent project={project} isActive={isActive} />
                </motion.div>
              )
            })}
          </div>
        ) : (
          /* ── Mobile: 1-col stack — all info always visible ─────── */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {PROJECTS.map((project) => (
              <div
                key={project.slug}
                style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', height: '340px' }}
                aria-label={`View ${project.title} case study`}
              >
                <CardContent project={project} alwaysShowDetails />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
