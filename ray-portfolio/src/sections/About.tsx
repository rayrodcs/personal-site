export function About() {
  const interests = [
    'NFL',
    'NBA',
    'Formula 1',
    'Cars',
    'Video Games',
    'Game development',
    'Anime',
    'Fitness'
  ]

  return (
    <section id="about" className="about-section">
      <div className="about-panel">
        <div className="about-copy">
          <p className="section-kicker">ABOUT <span className="text-[var(--accentYellow)]">///</span></p>
          <h2>Developer, Builder, and Problem Solver.</h2>

          <div className="about-body">
            <p>
              Hey! I'm Ray Rodriguez, a software engineer based in New York with full-time
              experience building web applications, internal tools, and asynchronous
              distributed systems.
            </p>
            <p>
              Before that, I spent two years as a paid part-time research intern
              through my university on the flight software team for GLADOS, a
              U.S. Army-sponsored nanosatellite mission focused on identifying and
              classifying space debris with a light camera. I primarily built API
              functionality around gyroscopic systems and magnetometers, which gave me
              an early appreciation for reliable software in constrained, high-stakes
              environments.
            </p>
            <p>
              More recently, I was promoted to lead software developer at my current
              company, taking ownership across our codebases, speaking directly with
              clients, and turning long-standing technical problems into profitable
              product opportunities.
            </p>
            <p>
              Thanks to the work I do at my current company, I am comfortable working under pressure,
              navigating tight deadlines, and making practical engineering decisions when the work
              has real business impact. I care about clean code, reliable systems, and interfaces that
              feel sharp without getting in the user's way.
            </p>
            <p>I also have too many interests and hobbies. Definitely ask me about any of these below!</p>
          </div>

          <div className="about-interests-wrap" aria-label="Personal interests">
            <span className="about-interests-label">Interests</span>
            <div className="about-interests">
              {interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </div>
        </div>

        <aside className="about-highlights" aria-label="About highlights">
          <div className="about-highlight">
            <span className="about-highlight-label">Experience</span>
            <strong>2+ years</strong>
            <span>Full-time software engineering</span>
          </div>
          <div className="about-highlight">
            <span className="about-highlight-label">Current Role (Full-time)</span>
            <strong>Software Engineer</strong>
            <span>Codebase ownership and client-facing delivery</span>
          </div>
          <div className="about-highlight">
            <span className="about-highlight-label">Research Internship</span>
            <strong>GLADOS</strong>
            <span>U.S. Army-sponsored nanosatellite flight software</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
