'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TransitionLink } from '@/components/page-transition/TransitionLink'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import { CaseStudyCardContent } from '@/components/CaseStudyCard'
import { PROJECTS } from '@/lib/projects'

const EXPAND  = { type: 'spring', stiffness: 420, damping: 38 } as const
const COLLAPSE = { type: 'spring', stiffness: 500, damping: 42 } as const

interface Props {
  currentSlug: string
  /** Dark-bg mode: flips label text to white. */
  dark?: boolean
  /** Background colour when dark=true (default #1d1f1d). */
  darkBg?: string
  /** Background colour override for light-themed pages (default #f7f7fb). */
  bg?: string
}

export default function RelatedCases({ currentSlug, dark = false, darkBg = '#1d1f1d', bg }: Props) {
  const others = PROJECTS.filter(p => p.slug !== currentSlug)
  const [active, setActive] = useState<number | null>(null)
  const [isDesktop, setIsDesktop] = useState(true)
  const sectionBg = dark ? darkBg : (bg ?? '#f7f7fb')

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section style={{ backgroundColor: sectionBg }}>

      {/* Header — line runs right-to-left from page edge */}
      <div
        className="related-cases-heading-row"
        {...(dark ? { 'data-dark': '' } : {})}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--sp-1)',
          paddingLeft: 'var(--grid-margin)',
          paddingRight: 0,
          marginBottom: 'var(--sp-4)',
        }}
      >
        <TransitionLink
          href="/cases"
          style={{ flexShrink: 0, textDecoration: 'none' }}
          aria-label="View all case studies"
        >
          <LetterSwapPingPong
            label="More Cases"
            staggerFrom="first"
            staggerDuration={0.03}
            className="related-cases-shuffle font-display"
            style={{ fontSize: 'clamp(14px, 1.45vw, 20px)' }}
          />
        </TransitionLink>
        <div
          style={{
            flex: 1,
            height: 'clamp(2px, 0.45vw + 1px, 5px)',
            borderRadius: '999px',
            backgroundColor: 'var(--c-orange)',
          }}
        />
      </div>

      {/* Card strip */}
      <div style={{ maxWidth: 'var(--grid-max)', margin: '0 auto', padding: '0 var(--grid-margin)', paddingBottom: 'clamp(60px, 8vw, 120px)' }}>

        {isDesktop ? (
          /* Desktop — side-by-side with flex-grow hover */
          <div
            style={{ display: 'flex', gap: '12px', height: '560px', overflow: 'hidden' }}
            onMouseLeave={() => setActive(null)}
          >
            {others.map((project, i) => {
              const isActive  = active === i
              const anyActive = active !== null
              return (
                <motion.div
                  key={project.slug}
                  animate={{ flexGrow: isActive ? 1.2 : anyActive ? 0.8 : 1 }}
                  transition={anyActive && !isActive ? COLLAPSE : EXPAND}
                  style={{ flexBasis: 0, minWidth: 0, position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', cursor: 'pointer' }}
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
        ) : (
          /* Mobile — single column, each card full-screen height */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {others.map((project) => (
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
    </section>
  )
}
