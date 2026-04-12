'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export function pathOnly(href: string): string {
  try {
    const base =
      typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
    const u = new URL(href, base)
    return u.pathname
  } catch {
    return href.split('?')[0]?.split('#')[0] ?? href
  }
}

type PageTransitionContextValue = {
  navigateWithTransition: (href: string) => void
}

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null)

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext)
  if (!ctx) throw new Error('usePageTransition must be used within PageTransitionProvider')
  return ctx
}

/** Longer, symmetric ease — reads smoother than a short snappy out-only curve */
const SWEEP = { duration: 0.72, ease: [0.45, 0, 0.55, 1] as const }

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const pathnameRef = useRef(pathname)
  pathnameRef.current = pathname
  const reduceMotion = useReducedMotion()
  const controls = useAnimationControls()
  const busy = useRef(false)
  const pendingPath = useRef<string | null>(null)
  const pathResolve = useRef<(() => void) | null>(null)
  const [overlayBlocks, setOverlayBlocks] = useState(false)

  useEffect(() => {
    if (!pendingPath.current || !pathResolve.current) return
    if (pathname === pathOnly(pendingPath.current)) {
      const r = pathResolve.current
      pendingPath.current = null
      pathResolve.current = null
      r()
    }
  }, [pathname])

  const waitForPath = useCallback((href: string) => {
    const p = pathOnly(href)
    return new Promise<void>((resolve) => {
      if (pathnameRef.current === p) {
        queueMicrotask(resolve)
        return
      }
      pendingPath.current = href
      pathResolve.current = resolve
    })
  }, [])

  const runTransition = useCallback(
    async (href: string) => {
      const targetPath = pathOnly(href)
      if (targetPath === pathnameRef.current) return
      if (busy.current) return
      if (reduceMotion) {
        router.push(href, { scroll: true })
        return
      }
      if (href.startsWith('/studio') || targetPath.startsWith('/studio')) {
        router.push(href, { scroll: true })
        return
      }

      busy.current = true
      setOverlayBlocks(true)
      try {
        await controls.start({ x: '0%', transition: SWEEP })
        router.push(href, { scroll: true })
        await waitForPath(href)
        if (typeof window !== 'undefined') {
          const hash = href.split('#')[1]
          if (hash) {
            const el = document.getElementById(decodeURIComponent(hash))
            el?.scrollIntoView({ behavior: 'instant' })
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
          }
        }
        await controls.start({ x: '-100%', transition: SWEEP })
        await controls.start({ x: '100%', transition: { duration: 0 } })
      } finally {
        busy.current = false
        setOverlayBlocks(false)
      }
    },
    [controls, reduceMotion, router, waitForPath]
  )

  const navigateWithTransition = useCallback((href: string) => {
    void runTransition(href)
  }, [runTransition])

  const ctxValue: PageTransitionContextValue = { navigateWithTransition }

  return (
    <PageTransitionContext.Provider value={ctxValue}>
      {children}
      <motion.div
        aria-hidden={!overlayBlocks}
        className="page-transition-curtain"
        initial={{ x: '100%' }}
        animate={controls}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--c-orange)',
          pointerEvents: overlayBlocks ? 'auto' : 'none',
          willChange: overlayBlocks ? 'transform' : undefined,
        }}
      >
        <div
          className="relative shrink-0"
          style={{
            height: 'clamp(72px, 10vh, 120px)',
            width: 'clamp(40px, 5.6vh, 68px)',
            filter: 'brightness(0) invert(1)',
          }}
        >
          <Image
            src="/logo-icon.svg"
            alt=""
            fill
            sizes="68px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </motion.div>
    </PageTransitionContext.Provider>
  )
}
