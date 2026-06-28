type RRLogoProps = {
  className?: string
}

export function RRLogo({ className }: RRLogoProps) {
  return (
    <span
      className={`relative inline-block overflow-visible ${className ?? ''}`}
      role="img"
      aria-label="Ray Rodriguez logo"
    >
      <img
        src="/rrlogo.png"
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[220%] w-[220%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </span>
  )
}
