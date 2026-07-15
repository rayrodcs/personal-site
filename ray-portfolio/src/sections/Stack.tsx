import type { CSSProperties, ComponentType } from 'react'
import { FaAws, FaDocker, FaGitAlt, FaPython } from 'react-icons/fa'
import {
  FiBox,
  FiCloud,
  FiGitBranch,
  FiMonitor,
  FiServer,
  FiTerminal,
  FiZap,
} from 'react-icons/fi'
import {
  SiGithubcopilot,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import {
  stackCategories,
  stackLayers,
  stackSnapshot,
} from '../data/stack'
import type { StackIconKey, StackItem } from '../data/stack'

const iconMap: Record<StackIconKey, ComponentType<{ className?: string }>> = {
  api: FiTerminal,
  aws: FaAws,
  digitalOcean: FiCloud,
  docker: FaDocker,
  electron: FiMonitor,
  express: FiServer,
  git: FaGitAlt,
  githubActions: FiGitBranch,
  githubCopilot: SiGithubcopilot,
  javascript: SiJavascript,
  jira: FiBox,
  mongodb: SiMongodb,
  next: SiNextdotjs,
  node: SiNodedotjs,
  postgres: SiPostgresql,
  python: FaPython,
  react: SiReact,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  vite: FiZap,
}

function StackTechTile({ item }: { item: StackItem }) {
  const Icon = iconMap[item.icon]

  return (
    <li
      className="stack-tech-tile"
      style={
        {
          '--stack-accent': item.color,
          '--stack-strength': `${item.strength}%`,
        } as CSSProperties
      }
    >
      <div className="stack-tech-heading">
        <span className="stack-tech-icon" aria-hidden="true">
          <Icon className="stack-tech-svg" />
        </span>
        <div>
          <h4>{item.name}</h4>
          <span>{item.confidence}</span>
        </div>
      </div>
      <p>{item.usage}</p>
      <div className="stack-tech-meter" aria-hidden="true">
        <span />
      </div>
    </li>
  )
}

export function Stack() {
  return (
    <section id="stack" className="stack-section">
      <div className="stack-header">
        <p className="section-kicker">
          STACK <span className="text-[var(--accentYellow)]">///</span>
        </p>
        <h2>Tools I use to ship real systems.</h2>
        <p>
          My stack is centered on TypeScript, React, Node.js, and practical
          deployment work, with enough range to handle product interfaces,
          integrations, automation, and production debugging.
        </p>
      </div>

      <div className="stack-showcase">
        <div className="stack-console" aria-label="Stack snapshot">
          <div className="stack-console-top" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="stack-console-lines">
            <p>
              <span>$</span> inspect --stack ray-rodriguez
            </p>
            <p>profile: full-stack software engineer</p>
            <p>mode: production-minded, integration-ready</p>
          </div>

          <div className="stack-snapshot-grid">
            {stackSnapshot.map((item) => (
              <div className="stack-snapshot" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stack-layer-map" aria-label="System build path">
          <span className="stack-map-label">Build Path</span>
          {stackLayers.map((layer) => (
            <article className="stack-layer-row" key={layer.label}>
              <span className="stack-layer-index">{layer.label}</span>
              <div>
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
                <div className="stack-layer-tools">
                  {layer.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="stack-category-grid">
        {stackCategories.map((category) => (
          <article className="stack-category" key={category.title}>
            <div className="stack-category-header">
              <span>{category.eyebrow}</span>
              <h3>{category.title}</h3>
              <p>{category.summary}</p>
            </div>

            <ul className="stack-tech-list">
              {category.items.map((item) => (
                <StackTechTile item={item} key={item.name} />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
