export type StackIconKey =
  | 'api'
  | 'aws'
  | 'digitalOcean'
  | 'docker'
  | 'electron'
  | 'express'
  | 'git'
  | 'githubActions'
  | 'githubCopilot'
  | 'javascript'
  | 'jira'
  | 'mongodb'
  | 'next'
  | 'node'
  | 'postgres'
  | 'python'
  | 'react'
  | 'tailwind'
  | 'typescript'
  | 'vite'

export type StackItem = {
  name: string
  icon: StackIconKey
  color: string
  confidence: string
  strength: number
  usage: string
}

export type StackCategory = {
  title: string
  eyebrow: string
  summary: string
  items: StackItem[]
}

export type StackLayer = {
  label: string
  title: string
  description: string
  tools: string[]
}

export const stackSnapshot = [
  {
    label: 'Primary Language',
    value: 'TypeScript',
    detail: 'Typed interfaces across frontend, Node workflows, and integration-heavy code.',
  },
  {
    label: 'Comfort Zone',
    value: 'Back-end leaning Full-stack',
    detail: 'Web app experiences, API layers, database work, and implementation tradeoffs.',
  },
  {
    label: 'Core Strength',
    value: 'Systems Work',
    detail: 'Client integrations, automation, distributed systems, and operational debugging.',
  },
]

export const stackLayers: StackLayer[] = [
  {
    label: '01',
    title: 'Interface',
    description: 'Fast, clear React views with reusable components and responsive CSS systems.',
    tools: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    label: '02',
    title: 'Application',
    description: 'Node services and APIs that keep product behavior understandable and maintainable.',
    tools: ['Node.js', 'REST APIs', 'Electron'],
  },
  {
    label: '03',
    title: 'Integration',
    description: 'Practical glue code for client systems, POS APIs, hardware flows, and automation.',
    tools: ['Jira API', 'POS APIs', 'Python'],
  },
  {
    label: '04',
    title: 'Data',
    description: 'Relational and document storage shaped around real workflows and reporting needs.',
    tools: ['PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    label: '05',
    title: 'Delivery',
    description: 'Deployments and environment decisions with production reliability in mind.',
    tools: ['AWS', 'DigitalOcean', 'CI/CD'],
  },
]

export const stackCategories: StackCategory[] = [
  {
    title: 'Frontend',
    eyebrow: 'Interface Layer',
    summary:
      'The tools I use to build polished, responsive product surfaces that stay readable as they grow.',
    items: [
      {
        name: 'TypeScript',
        icon: 'typescript',
        color: '#3178C6',
        confidence: 'Core',
        strength: 88,
        usage: 'Types, refactors, and a safer javascript.',
      },
      {
        name: 'React',
        icon: 'react',
        color: '#61DAFB',
        confidence: 'Strong',
        strength: 78,
        usage: 'Component systems, app flows, UI hooks, and interactive interfaces.',
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwind',
        color: '#06B6D4',
        confidence: 'Working',
        strength: 62,
        usage: 'Fast styling, responsive layouts, and bringing a page to life.',
      },
      {
        name: 'Next.js',
        icon: 'next',
        color: '#F5F7FA',
        confidence: 'Strong',
        strength: 76,
        usage: 'React architecture, routing patterns, and production app structure.',
      },
      {
        name: 'Vite',
        icon: 'vite',
        color: '#A855F7',
        confidence: 'Strong',
        strength: 82,
        usage: 'Fast development loops and lightweight React application builds.',
      },
    ],
  },
  {
    title: 'Backend',
    eyebrow: 'Service Layer',
    summary:
      'API and system features for business logic, automation, integrations, and application depth.',
    items: [
      {
        name: 'Node.js',
        icon: 'node',
        color: '#5FA04E',
        confidence: 'Core',
        strength: 88,
        usage: 'API services, tooling, scripts, and server-side application logic.',
      },
      {
        name: 'Express / APIs',
        icon: 'express',
        color: '#F5F7FA',
        confidence: 'Strong',
        strength: 82,
        usage: 'REST endpoints, integrations, and practical service boundaries.',
      },
      {
        name: 'Python',
        icon: 'python',
        color: '#FFD43B',
        confidence: 'Working',
        strength: 72,
        usage: 'Automation scripts, utility tooling, and data-oriented tasks.',
      },
      {
        name: 'Electron',
        icon: 'electron',
        color: '#9FEAF9',
        confidence: 'Strong',
        strength: 82,
        usage: 'Desktop-like web apps that connect to local systems and devices.',
      },
      {
        name: 'JavaScript',
        icon: 'javascript',
        color: '#F7DF1E',
        confidence: 'Core',
        strength: 95,
        usage: 'Runtime behavior, browser APIs, and platform fundamentals.',
      },
    ],
  },
  {
    title: 'Data & Cloud',
    eyebrow: 'Storage / Delivery',
    summary:
      'The database and deployment tools I reach for when product work needs to become reliable software.',
    items: [
      {
        name: 'PostgreSQL',
        icon: 'postgres',
        color: '#4169E1',
        confidence: 'Working',
        strength: 74,
        usage: 'Relational modeling, queries, reporting needs, and product data.',
      },
      {
        name: 'MongoDB',
        icon: 'mongodb',
        color: '#47A248',
        confidence: 'Strong',
        strength: 76,
        usage: 'Document data, flexible schemas, and application persistence.',
      },
      {
        name: 'AWS',
        icon: 'aws',
        color: '#FF9900',
        confidence: 'Working',
        strength: 63,
        usage: 'Cloud hosting, service decisions, and production deployment tradeoffs.',
      },
      {
        name: 'DigitalOcean',
        icon: 'digitalOcean',
        color: '#0080FF',
        confidence: 'Strong',
        strength: 78,
        usage: 'App hosting, server setup, and straightforward production delivery.',
      },
      {
        name: 'Docker',
        icon: 'docker',
        color: '#2496ED',
        confidence: 'Working',
        strength: 66,
        usage: 'Local environments, repeatable setup, and deployment packaging.',
      },
    ],
  },
  {
    title: 'Workflow',
    eyebrow: 'Operations / Automation',
    summary:
      'The practical tooling around the code: source control, issue systems, APIs, and repeatable pipelines.',
    items: [
      {
        name: 'Git',
        icon: 'git',
        color: '#F05032',
        confidence: 'Core',
        strength: 90,
        usage: 'Branching, review, recovery, and collaborative code ownership.',
      },
      {
        name: 'Github Copilot',
        icon: 'githubCopilot',
        color: '#8e48f0',
        confidence: 'Strong',
        strength: 80,
        usage: 'Accelerates development by helping with boilerplates, predicting complex function logic, and writing unit tests.'
      },
      {
        name: 'CI/CD',
        icon: 'githubActions',
        color: '#2EA8FF',
        confidence: 'Working',
        strength: 74,
        usage: 'Build checks, release workflows, and safer deployment habits.',
      },
      {
        name: 'Jira API',
        icon: 'jira',
        color: '#2684FF',
        confidence: 'Working',
        strength: 76,
        usage: 'Automation around tickets, handoffs, and team process improvements.',
      },
      {
        name: 'Client APIs',
        icon: 'api',
        color: '#FFD21F',
        confidence: 'Strong',
        strength: 82,
        usage: 'POS systems, attraction APIs, and venue-specific integrations.',
      },
    ],
  },
]
