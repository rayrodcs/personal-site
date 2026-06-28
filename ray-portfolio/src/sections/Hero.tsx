export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="hero-kicker">
          Hey, I'm <span className="text-[var(--accentYellow)]">///</span>
        </p>

        <h1 className="hero-title">
          <span className="block drop-shadow-[0_4px_0_rgba(255,255,255,0.12)]">
            RAY
          </span>
          <span className="block text-[var(--primaryBlue)] drop-shadow-[0_0_28px_rgba(46,168,255,0.28)]">
            RODRIGUEZ
          </span>
        </h1>

        <p className="hero-subtitle">
          Software Engineer based in New York.
        </p>

        <p className="hero-description">
          I build full-stack systems and delightful experiences that solve real-world
          problems. Clean code. Thoughtful design. Built to scale.
        </p>

        <div className="hero-actions">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-md border border-[var(--primaryBlue)] bg-[var(--primaryBlue)] px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--background)] shadow-[0_0_28px_rgba(46,168,255,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#58b9ff]"
          >
            View My Work <span className="ml-3">-&gt;</span>
          </a>
          <a
            href="#resume"
            className="inline-flex items-center justify-center rounded-md border border-[var(--borderBlue)] bg-[rgba(13,22,38,0.64)] px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--text)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--primaryBlue)] hover:text-[var(--primaryBlue)]"
          >
            Download Resume <span className="ml-3">v</span>
          </a>
        </div>
      </div>
    </section>
  )
}
