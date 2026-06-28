import type { ReactNode } from 'react'

type SectionCardProps = {
  title: string
  cta: string
  href: string
  children: ReactNode
  className?: string
}

export function SectionCard({
  title,
  cta,
  href,
  children,
  className = '',
}: SectionCardProps) {
  return (
    <article className={`section-card ${className}`}>
      <div className="section-card-corner section-card-corner-top" />
      <div className="section-card-corner section-card-corner-bottom" />

      <div className="section-card-header">
        <h2 className="section-card-title">{title}</h2>
        <span className="section-card-slashes">///</span>
      </div>

      <div className="section-card-body">{children}</div>

      <a className="section-card-cta" href={href}>
        {cta} <span aria-hidden="true">-&gt;</span>
      </a>
    </article>
  )
}
