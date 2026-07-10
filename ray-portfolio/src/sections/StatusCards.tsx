import type { CSSProperties } from 'react'
import { FaAws } from 'react-icons/fa'
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { SectionCard } from '../components/layout/SectionCard'

const stackItems = [
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#F5F7FA' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
]

const focusItems = [
  'Full-Stack Development',
  'Real-Time Systems',
  'AI & Automation Tools',
  'Interactive Experiences',
  'Clean Architecture',
]

export function StatusCards() {
  return (
    <section id="status-cards" className="status-cards-section" aria-label="Portfolio status cards">
      <div className="status-cards-grid">
        <SectionCard title="CURRENTLY" cta="MORE ABOUT ME" href="#about">
          <div className="current-status">
            <span className="status-dot" />
            <span>EMPLOYED, OPEN TO NEW OPPORTUNITIES</span>
          </div>

          <div className="current-copy">
            <p>Building scalable web apps, agent tools, and sleek interfaces.</p>
            <p>Exploring AI, real-time systems, and performance at scale.</p>
          </div>
        </SectionCard>

        <SectionCard title="TECH STACK" cta="VIEW FULL STACK" href="#stack" className="tech-stack-card">
          <div className="stack-grid" aria-label="Technology stack">
            {stackItems.map((item) => (
              <div
                className="stack-item"
                key={item.name}
                style={{ '--stack-color': item.color } as CSSProperties}
              >
                <span className="stack-glyph" aria-hidden="true">
                  <item.Icon className="stack-icon" />
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="FOCUS" cta="WHAT I WORK ON" href="#work" className="focus-card">
          <ul className="focus-list">
            {focusItems.map((item) => (
              <li key={item}>
                <span className="focus-icon" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </section>
  )
}
