'use client'

/**
 * Skewed parallelogram frame + three pill bars (middle longest) — matches design reference.
 * Bars use counter-skew so they stay horizontal inside the slanted frame.
 */
export function NavMenuIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <span
      className={`nav-menu-visual${open ? ' nav-menu-visual--open' : ''}${className ? ` ${className}` : ''}`}
      aria-hidden
    >
      <span className="nav-menu-visual__frame">
        <span className="nav-menu-visual__bars">
          <span className="nav-menu-visual__bar nav-menu-visual__bar--top" />
          <span className="nav-menu-visual__bar nav-menu-visual__bar--mid" />
          <span className="nav-menu-visual__bar nav-menu-visual__bar--bot" />
        </span>
      </span>
    </span>
  )
}
