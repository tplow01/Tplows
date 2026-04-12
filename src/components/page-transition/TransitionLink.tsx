'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { usePathname } from 'next/navigation'
import { usePageTransition, pathOnly } from './PageTransitionProvider'

export type TransitionLinkProps = ComponentProps<typeof Link>

export function TransitionLink({
  href,
  onClick,
  replace,
  prefetch,
  scroll,
  ...rest
}: TransitionLinkProps) {
  const { navigateWithTransition } = usePageTransition()
  const pathname = usePathname()

  if (typeof href !== 'string') {
    return (
      <Link
        href={href}
        onClick={onClick}
        replace={replace}
        prefetch={prefetch}
        scroll={scroll}
        {...rest}
      />
    )
  }

  const hrefStr = href
  const internal = hrefStr.startsWith('/')
  const studio =
    hrefStr.startsWith('/studio') || pathOnly(hrefStr).startsWith('/studio')

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (e.button !== 0) return
    const target = e.currentTarget.getAttribute('target')
    if (target === '_blank') return
    if (!internal || studio) return
    if (pathOnly(hrefStr) === pathname) return

    e.preventDefault()
    navigateWithTransition(hrefStr)
  }

  return (
    <Link
      href={hrefStr}
      onClick={handleClick}
      replace={replace}
      prefetch={prefetch}
      scroll={scroll}
      {...rest}
    />
  )
}
