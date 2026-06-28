type RRLogoProps = {
  className?: string
}

export function RRLogo({ className }: RRLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 92 48"
      role="img"
      aria-label="Ray Rodriguez logo"
    >
      <path
        d="M10 34 20 14h26c8 0 12 4 10 11-2 6-8 9-18 9H25l-4 8H8l4-8h-2Z"
        fill="none"
        stroke="var(--primaryBlue)"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="m39 34 11 9H34l-9-9h14Z"
        fill="var(--primaryBlue)"
      />
      <path
        d="M51 42 64 14h15c7 0 11 4 9 11-1 5-5 8-11 9l6 8H68l-6-8h-2l-4 8H51Z"
        fill="none"
        stroke="var(--accentYellow)"
        strokeWidth="7"
        strokeLinejoin="round"
      />
    </svg>
  )
}
