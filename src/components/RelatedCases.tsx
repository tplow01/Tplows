'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TransitionLink } from '@/components/page-transition/TransitionLink'
import { LetterSwapPingPong } from '@/components/ui/letter-swap'
import Image from 'next/image'
import { PROJECTS } from '@/lib/projects'

const EXPAND  = { type: 'spring', stiffness: 420, damping: 38 } as const
const COLLAPSE = { type: 'spring', stiffness: 500, damping: 42 } as const
const REVEAL_IN  = { duration: 0.18, ease: [0.0, 0.0, 0.2, 1.0] as [number,number,number,number] }
const REVEAL_OUT = { duration: 0.10, ease: [0.4, 0.0, 1.0, 0.6] as [number,number,number,number] }

interface Props {
  currentSlug: string
}

export default function RelatedCases({ currentSlug }: Props) {
  const others = PROJECTS.filter(p => p.slug !== currentSlug)
  const [active, setActive] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: '#f7f7fb', padding: '0 var(--grid-margin) clamp(60px, 8vw, 120px)' }}>
      <div style={{ maxWidth: 'var(--grid-max)', margin: '0 auto' }}>

        {/* Header */}
        <div
          className="related-cases-heading-row"
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-1)', marginBottom: 'var(--sp-4)' }}
        >
          <div
            style={{
              flex: 1,
              height: 'clamp(2px, 0.45vw + 1px, 5px)',
              borderRadius: '999px',
              backgroundColor: 'var(--c-orange)',
            }}
          />
          <LetterSwapPingPong
            label="More Cases"
            staggerFrom="first"
            staggerDuration={0.03}
            className="related-cases-shuffle font-display"
            style={{ fontSize: 'clamp(14px, 1.45vw, 20px)', flexShrink: 0 }}
          />
        </div>

        {/* 2-col card strip */}
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
                className="card-corners"
                layout
                animate={{ flexGrow: isActive ? 1.2 : anyActive ? 0.8 : 1 }}
                transition={anyActive && !isActive ? COLLAPSE : EXPAND}
                style={{ flexBasis: 0, minWidth: 0, position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-card)', cursor: 'pointer' }}
                onHoverStart={() => setActive(i)}
              >
                {/* Background */}
                <div style={{ position: 'absolute', inset: 0, background: project.bg }}>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="50vw"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  )}
                </div>

                {/* Grain */}
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.045, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '180px 180px', pointerEvents: 'none' }} />

                {/* Vignette */}
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)', pointerEvents: 'none' }} />

                {/* Index */}
                <div style={{ position: 'absolute', top: '18px', left: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(243,240,234,0.2)' }}>
                    {project.index}
                  </span>
                </div>

                {/* Orange dot */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.25, scale: isActive ? 1 : 0.65 }}
                  transition={isActive ? EXPAND : COLLAPSE}
                  style={{ position: 'absolute', top: '20px', right: '20px', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--c-orange)' }}
                />

                {/* Text */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '26px 24px' }}>
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0.45 }}
                    transition={isActive ? { duration: 0.14, ease: [0, 0, 0.2, 1] } : { duration: 0.08 }}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}
                  >
                    <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(243,240,234,0.65)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {project.category}
                    </span>
                    <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(243,240,234,0.38)', flexShrink: 0, marginLeft: '8px' }}>
                      {project.year}
                    </span>
                  </motion.div>

                  <h3 style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.4vw, 34px)', letterSpacing: '-0.03em', color: '#f3f0ea', margin: 0, lineHeight: 1 }}>
                    {project.title}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="peek"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0, transition: { ...REVEAL_IN, delay: 0.04 } }}
                        exit={{ opacity: 0, y: 4, transition: REVEAL_OUT }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}
                      >
                        <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'rgba(243,240,234,0.5)', margin: 0 }}>
                          {project.description}
                        </p>
                        <TransitionLink
                          href={project.href}
                          style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-orange)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px', width: 'fit-content' }}
                        >
                          View Project <span aria-hidden="true">→</span>
                        </TransitionLink>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
