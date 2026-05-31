// Lightweight inline SVG icons — keeps the bundle small and fully themeable.
// Each icon inherits currentColor and accepts a className.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
}

function Svg({ children, className = 'w-6 h-6', ...rest }) {
  return (
    <svg className={className} {...base} {...rest} aria-hidden="true">
      {children}
    </svg>
  )
}

export const Icon = {
  calendar: (p) => (
    <Svg {...p}>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
      <path d="M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01" />
    </Svg>
  ),
  sparkles: (p) => (
    <Svg {...p}>
      <path d="M12 3l1.7 4.6L18 9.3l-4.3 1.7L12 15.6l-1.7-4.6L6 9.3l4.3-1.7L12 3Z" />
      <path d="M18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </Svg>
  ),
  shield: (p) => (
    <Svg {...p}>
      <path d="M12 3l7 3v5.5c0 4.3-3 7.4-7 9-4-1.6-7-4.7-7-9V6l7-3Z" />
      <path d="M9.2 12l2 2 3.6-4" />
    </Svg>
  ),
  building: (p) => (
    <Svg {...p}>
      <path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
      <path d="M15 9h3a2 2 0 0 1 2 2v10M4 21h16" />
      <path d="M8 7h2M8 11h2M8 15h2" />
    </Svg>
  ),
  badge: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 13.5 7.5 21l4.5-2.5L16.5 21 15 13.5" />
      <path d="m9.5 9 1.7 1.7L15 7" />
    </Svg>
  ),
  bell: (p) => (
    <Svg {...p}>
      <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </Svg>
  ),
  paw: (p) => (
    <Svg {...p}>
      <ellipse cx="6" cy="11" rx="1.8" ry="2.4" />
      <ellipse cx="18" cy="11" rx="1.8" ry="2.4" />
      <ellipse cx="9.6" cy="7.4" rx="1.7" ry="2.2" />
      <ellipse cx="14.4" cy="7.4" rx="1.7" ry="2.2" />
      <path d="M12 12.5c-2.4 0-4.4 1.7-4.9 3.9-.3 1.5.9 2.6 2.4 2.6.9 0 1.7-.4 2.5-.4s1.6.4 2.5.4c1.5 0 2.7-1.1 2.4-2.6-.5-2.2-2.5-3.9-4.9-3.9Z" />
    </Svg>
  ),
  check: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5L16 9" />
    </Svg>
  ),
  clock: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 1.8" />
    </Svg>
  ),
  home: (p) => (
    <Svg {...p}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </Svg>
  ),
  heart: (p) => (
    <Svg {...p}>
      <path d="M12 20s-7-4.3-9.3-8.5C1.2 8.7 2.6 5.5 6 5.5c2 0 3.2 1.3 4 2.5.8-1.2 2-2.5 4-2.5 3.4 0 4.8 3.2 3.3 6C19 15.7 12 20 12 20Z" />
    </Svg>
  ),
  grow: (p) => (
    <Svg {...p}>
      <path d="M12 20v-7" />
      <path d="M12 13c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6Z" />
      <path d="M12 11c0-2.8 2.2-5 5-5 0 2.8-2.2 5-5 5Z" />
      <path d="M7 20h10" />
    </Svg>
  ),
  leaf: (p) => (
    <Svg {...p}>
      <path d="M5 19c0-8 6-14 15-14 0 9-6 14-15 14Z" />
      <path d="M5 19c2.5-5 6-8 11-9.5" />
    </Svg>
  ),
  phone: (p) => (
    <Svg {...p}>
      <path d="M5 4h3l1.6 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.6V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </Svg>
  ),
  mail: (p) => (
    <Svg {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Svg>
  ),
  pin: (p) => (
    <Svg {...p}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  ),
  star: (p) => (
    <svg
      className={p?.className || 'w-5 h-5'}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.95 6 6.6.96-4.78 4.66 1.13 6.58L12 17.6 6.1 20.7l1.13-6.58L2.45 9.46l6.6-.96L12 2.5Z" />
    </svg>
  ),
  arrow: (p) => (
    <Svg {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  ),
  menu: (p) => (
    <Svg {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  ),
  close: (p) => (
    <Svg {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  ),
  quote: (p) => (
    <svg className={p?.className || 'w-8 h-8'} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.5 6C6.5 7 5 9.4 5 13v5h6v-6H8c0-2.3 1-3.8 3-4.4L9.5 6Zm9 0c-3 1-4.5 3.4-4.5 7v5h6v-6h-3c0-2.3 1-3.8 3-4.4L18.5 6Z" />
    </svg>
  ),
}

export default Icon
