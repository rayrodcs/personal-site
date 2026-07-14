export type WorkLink = {
  label: string
  href: string
}

export type WorkProject = {
  title: string
  category: string
  status: string
  summary: string
  highlights: string[]
  tech: string[]
  links?: WorkLink[]
}

export const featuredProject: WorkProject = {
  title: 'Client Operations Platform',
  category: 'Full-stack / Internal Tools',
  status: 'Company Work',
  summary:
    'A private web platform for streamlining client workflows, surfacing operational data, and turning repeated manual processes into reusable product features.',
  highlights: [
    'Owned feature work across frontend, backend, and database layers',
    'Translated client pain points into production-ready tools',
    'Improved maintainability across long-running application code',
  ],
  tech: ['React', 'TypeScript', 'Node.js', 'SQL', 'AWS', 'DigitalOcean'],
}

export const workProjects: WorkProject[] = [
  {
    title: 'Social Game Attraction Platforms',
    category: 'Full-stack / Distributed Systems',
    status: 'Company Work',
    summary:
      'Commercially deployed social gaming platforms for client venues, built as Electron-powered web apps that integrate with multiple embedded systems.',
    highlights: [
      '#1 and #2 Brass Ring Award winners for IAAPA Expo Best New Products',
      'Supported sales and strengthened client relationships by building venue-specific integrations',
      'Lead developer across both projects, responsible for key design decisions and critical issue resolution',
    ],
    tech: ['POS System APIs', 'Attraction APIs', 'Electron', 'React', 'TypeScript', 'Tailwind'],
    links: [
      {
        label: 'IAAPA 2025',
        href: 'https://iaapa.org/about/press-room/iaapa-expo-2025-recognizes-best-exhibit-and-best-new-product-award-winners',
      },
    ],
  },
  {
    title: 'Automation Tooling',
    category: 'AI / Workflow Systems',
    status: 'Scripting',
    summary:
      'Small tools and experiments focused on reducing repeated work, improving handoffs, and making technical workflows easier to operate.',
    highlights: [
      'Designed for practical developer and business workflows',
      'Focused on fast, ready-to-use interfaces that make an immediate impact for others at the company',
      'Streamlined testing and DevOps workflows to support smoother development pipelines',
    ],
    tech: ['Node.js', 'AI Tools', 'Jira API', 'Python', 'CI/CD Pipelines'],
  },
  {
    title: 'Interactive Portfolio',
    category: 'Frontend / Design Systems',
    status: 'In Progress',
    summary:
      'This portfolio site, built as a fast, responsive React experience with a custom visual system and component-based sections.',
    highlights: [
      'Vite, React, TypeScript, and Tailwind CSS',
      'Custom dark interface with reusable section patterns',
      'Always in progress to showcase more of my abilities. Come back regularly if you want to see new changes!',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
  },
]
