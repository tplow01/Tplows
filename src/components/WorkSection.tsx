'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TransitionLink } from '@/components/page-transition/TransitionLink'
import { RacingStripeBand } from '@/components/RacingStripeBand'
import Image from 'next/image'
import { PROJECTS } from '@/lib/projects'

// ─── Springs ───────────────────────────────────────────────────────────────
const EXPAND: Parameters<typeof motion.div>[0]['transition'] = {
  type: 'spring', stiffness: 420, damping: 38,
}
const COLLAPSE: Parameters<typeof motion.div>[0]['transition'] = {
  type: 'spring', stiffness: 500, damping: 42,
}

// ─── Shared card internals ─────────────────────────────────────────────────
function CardContent({
  project,
  alwaysShowDetails = false,
  isActive = false,
}: {
  project: typeof PROJECTS[number]
  alwaysShowDetails?: boolean
  isActive?: boolean
}) {
  const showDesc = isActive || alwaysShowDetails

  return (
    <>
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, background: project.bg }}>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 899px) 100vw, 33vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        )}
      </div>

      {/* Flat dark overlay */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(21,21,21,0.5)', pointerEvents: 'none' }} />

      {/* Bottom text — anchored to bottom, grows upward as description appears */}
      <div style={{ position: 'absolute', bottom: '24px', left: '27px', right: '27px' }}>
        <h3
          className="font-display"
          style={{
            fontSize: 'clamp(28px, 3.2vw, 48px)',
            lineHeight: 1.05,
            color: '#f7f7fb',
            margin: 0,
          }}
        >
          {project.title}
        </h3>

        <AnimatePresence initial={false}>
          {showDesc && (
            <motion.p
              key="desc"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                height: { type: 'spring', stiffness: 420, damping: 38 },
                opacity: { duration: 0.18, ease: [0, 0, 0.2, 1] },
              }}
              style={{
                overflow: 'hidden',
                margin: '10px 0 0',
                fontFamily: "'Mona Sans', 'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(13px, 1.4vw, 18px)',
                lineHeight: 1.45,
                color: 'rgba(247,247,251,0.8)',
              }}
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>
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
    <section
      style={{
        backgroundColor: '#f7f7fb',
        paddingTop: 'calc(clamp(var(--sp-2), 1.5vw, var(--sp-4)) + 40px)',
        paddingLeft: 'var(--grid-margin)',
        paddingRight: 'var(--grid-margin)',
        paddingBottom: 'clamp(120px, 14vw, 200px)',
      }}
    >

      {/* ── Racing stripe: double line left, label right ───────────────────── */}
      <RacingStripeBand label="Case Studies" linesFrom="left" />

      <div style={{ maxWidth: 'var(--grid-max)', margin: '0 auto' }}>

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
                  style={{ flexBasis: 0, minWidth: 0, position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', cursor: 'pointer' }}
                  onHoverStart={() => setActive(i)}
                >
                  {/* Full-card link */}
                  <TransitionLink
                    href={project.href}
                    style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                    aria-label={`View ${project.title} case study`}
                  />
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
                style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', height: '340px' }}
              >
                <TransitionLink
                  href={project.href}
                  style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                  aria-label={`View ${project.title} case study`}
                />
                <CardContent project={project} alwaysShowDetails />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
