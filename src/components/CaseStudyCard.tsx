'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Project } from '@/lib/projects'

const DESC_EASE = [0.16, 1, 0.3, 1] as const

export function CaseStudyCardContent({
  project,
  alwaysShowDetails = false,
  isActive = false,
}: {
  project: Project
  alwaysShowDetails?: boolean
  isActive?: boolean
}) {
  const showDesc = isActive || alwaysShowDetails

  return (
    <>
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

      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(21,21,21,0.5)', pointerEvents: 'none' }} />

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

        {/* 0fr / 1fr row keeps final line breaks stable — avoids height:auto reflow jank */}
        <div
          style={{
            display: 'grid',
            gridTemplateRows: showDesc ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.42s cubic-bezier(0.16, 1, 0.3, 1)',
            marginTop: '10px',
          }}
        >
          <div style={{ minHeight: 0, overflow: 'hidden' }}>
            <motion.p
              initial={false}
              animate={{
                opacity: showDesc ? 1 : 0,
                y: showDesc ? 0 : 8,
              }}
              transition={{
                duration: 0.32,
                ease: DESC_EASE,
              }}
              style={{
                margin: 0,
                paddingRight: '1px',
                fontFamily: "'Mona Sans', 'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(13px, 1.4vw, 18px)',
                lineHeight: 1.45,
                color: 'rgba(247,247,251,0.8)',
                textWrap: 'balance',
              }}
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  )
}
