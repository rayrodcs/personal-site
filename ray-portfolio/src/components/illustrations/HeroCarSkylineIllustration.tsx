type HeroCarSkylineIllustrationProps = {
  className?: string
}

export function HeroCarSkylineIllustration({
  className = '',
}: HeroCarSkylineIllustrationProps) {
  return (
    <figure
      className={`hero-scene ${className}`}
      aria-label="Nissan Skyline with New York City skyline"
    >
      <div className="hero-scene-glow" />

      <img
        src="/nyc-skyline.png"
        alt=""
        aria-hidden="true"
        className="hero-skyline"
      />

      <div className="hero-road-lines">
        <span className="hero-road-line hero-road-line-blue-a" />
        <span className="hero-road-line hero-road-line-blue-b" />
        <span className="hero-road-line hero-road-line-blue-c" />
        <span className="hero-road-line hero-road-line-yellow-a" />
        <span className="hero-road-line hero-road-line-yellow-b" />
      </div>

      <img
        src="/nissan-skyline.png"
        alt="Blue and yellow line-art Nissan Skyline viewed from the rear"
        className="hero-car"
      />
    </figure>
  )
}
