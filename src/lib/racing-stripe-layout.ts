import type { CSSProperties } from 'react'

/** Break out of `.g` horizontal padding so a band can span the full grid track */
export function gridBleedFullWidth(style?: CSSProperties): CSSProperties {
  return {
    gridColumn: '1 / -1',
    marginLeft: 'calc(-1 * var(--grid-margin))',
    marginRight: 'calc(-1 * var(--grid-margin))',
    width: 'calc(100% + 2 * var(--grid-margin))',
    maxWidth: 'none',
    ...style,
  }
}
