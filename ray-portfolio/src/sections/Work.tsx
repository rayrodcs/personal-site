import { FiArrowUpRight } from 'react-icons/fi'
import { featuredProject, workProjects } from '../data/workProjects'
import type { WorkProject } from '../data/workProjects'

function TechList({ items }: { items: string[] }) {
  return (
    <div className="work-tech-list" aria-label="Technologies used">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}

function ProjectHighlights({ items }: { items: string[] }) {
  return (
    <ul className="work-highlights">
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project }: { project: WorkProject }) {
  if (!project.links?.length) {
    return null
  }

  return (
    <div className="work-links">
      {project.links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
          <FiArrowUpRight aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-header">
        <p className="section-kicker">
          WORK <span className="text-[var(--accentYellow)]">///</span>
        </p>
        <h2>Some company and personal projects.</h2>
        <p>
          A focused look at the kinds of projects I build: full-stack products,
          automation tools, research software, and interfaces that make complex
          workflows easier to operate.
        </p>
      </div>

      <article className="work-featured">
        <div className="work-featured-copy">
          <div className="work-meta-row">
            <span>{featuredProject.category}</span>
            <span>{featuredProject.status}</span>
          </div>

          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.summary}</p>

          <ProjectHighlights items={featuredProject.highlights} />
          <TechList items={featuredProject.tech} />
          <ProjectLinks project={featuredProject} />
        </div>

        <aside className="work-featured-aside" aria-label="Featured work notes">
          <span className="work-aside-label">Current Company</span>
          <strong>LT Equipment - a subsidiary of Lasertron</strong>
          <p>
            I work across web applications, distributed systems, networking, and
            embedded integrations for commercial entertainment products. A major
            part of the role is turning client needs into reliable software that
            supports sales, deployments, and long-term customer relationships.
          </p>
        </aside>
      </article>

      <div className="work-grid">
        {workProjects.map((project) => (
          <article className="work-card" key={project.title}>
            <div className="work-meta-row">
              <span>{project.category}</span>
              <span>{project.status}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.summary}</p>

            <ProjectHighlights items={project.highlights} />
            <TechList items={project.tech} />
            <ProjectLinks project={project} />
          </article>
        ))}
      </div>

      <p className="work-private-note">
        Some production work and showcases are private due to client and company
        constraints. I can still discuss architecture, tradeoffs, ownership, and
        impact in conversation.
      </p>
    </section>
  )
}
