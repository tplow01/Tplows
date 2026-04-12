'use client'

import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TransitionLink } from '@/components/page-transition/TransitionLink'
import { CaseStudyCardContent } from '@/components/CaseStudyCard'
import { PROJECTS } from '@/lib/projects'

const EXPAND: Parameters<typeof motion.div>[0]['transition'] = {
  type: 'spring', stiffness: 420, damping: 38,
}
const COLLAPSE: Parameters<typeof motion.div>[0]['transition'] = {
  type: 'spring', stiffness: 500, damping: 42,
}

type Props = {
  /** Fixed height strip (home) */
  heightPx?: number
  /** Fill parent height (cases page) */
  fill?: boolean
  className?: string
}

export default function CasesHoverStrip({ heightPx = 700, fill = false, className }: Props) {
  const [active, setActive] = useState<number | null>(null)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const desktopShellStyle: CSSProperties = fill
    ? { display: 'flex', gap: '12px', flex: 1, minHeight: 0, height: '100%', overflow: 'hidden' }
    : { display: 'flex', gap: '12px', height: `${heightPx}px`, overflow: 'hidden' }

  return (
    <div className={className} style={fill ? { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' } : undefined}>
      {isDesktop ? (
        <div style={desktopShellStyle} onMouseLeave={() => setActive(null)}>
          {PROJECTS.map((project, i) => {
            const isActive = active === i
            const anyActive = active !== null
            return (
              <motion.div
                key={project.slug}
                layout
                animate={{ flexGrow: isActive ? 1.25 : anyActive ? 0.875 : 1 }}
                transition={anyActive && !isActive ? COLLAPSE : EXPAND}
                style={{
                  flexBasis: 0,
                  minWidth: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-card)',
                  cursor: 'pointer',
                }}
                onHoverStart={() => setActive(i)}
              >
                <TransitionLink
                  href={project.href}
                  style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                  aria-label={`View ${project.title} case study`}
                />
                <CaseStudyCardContent project={project} isActive={isActive} />
              </motion.div>
            )
          })}
        </div>
      ) : fill ? (
        <div style={{
          display: 'grid',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: '12px',
          height: 'calc(100svh - var(--nav-h) - 36px)',
          overflow: 'hidden',
        }}>
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', minHeight: 0 }}
            >
              <TransitionLink
                href={project.href}
                style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                aria-label={`View ${project.title} case study`}
              />
              <CaseStudyCardContent project={project} alwaysShowDetails />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', height: 'calc(100svh - var(--nav-h) - 104px)' }}
            >
              <TransitionLink
                href={project.href}
                style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                aria-label={`View ${project.title} case study`}
              />
              <CaseStudyCardContent project={project} alwaysShowDetails />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
