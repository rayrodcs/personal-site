export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-panel">
        <div className="about-copy">
          <p className="section-kicker">ABOUT <span className="text-[var(--accentYellow)]">///</span></p>
          <h2>Engineer. Builder. Systems thinker.</h2>

          <div className="about-body">
            <p>
              I’m Ray Rodriguez, a software engineer based in New York with two years
              of full-time experience building web applications, internal tools, and
              asynchronous distributed systems.
            </p>
            <p>
              Recently, I was promoted to lead software developer at my current
              company. That role gave me ownership across our codebases, direct
              client communication, and the chance to turn long-standing technical
              problems into profitable new product opportunities.
            </p>
            <p>
              I’m comfortable working under pressure, navigating tight deadlines, and
              making practical engineering decisions when the work has real business
              impact. I care about clean code, reliable systems, and interfaces that
              feel sharp without getting in the user’s way.
            </p>
          </div>
        </div>

        <aside className="about-highlights" aria-label="About highlights">
          <div className="about-highlight">
            <span className="about-highlight-label">Experience</span>
            <strong>2+ years</strong>
            <span>Full-time software engineering</span>
          </div>
          <div className="about-highlight">
            <span className="about-highlight-label">Current Role</span>
            <strong>Lead Developer</strong>
            <span>Codebase ownership and client-facing delivery</span>
          </div>
          <div className="about-highlight">
            <span className="about-highlight-label">Focus</span>
            <strong>Systems + UI</strong>
            <span>Scalable apps, automation, and polished interfaces</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
