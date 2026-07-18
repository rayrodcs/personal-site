# Ray Rodriguez Portfolio

Personal portfolio for Ray Rodriguez, built as a fast single-page React application with a custom visual system, section-based layout, and interactive details.

The site is designed to present full-stack engineering experience, production/client work, technical strengths, and personal creative touches in a clean public-facing format.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- Section-scoped CSS files

## Current Sections

- **Hero**: animated typing intro, resume/work actions, and room for a custom sprite interaction.
- **Status Cards**: quick overview of current availability, stack, and focus areas.
- **About**: professional background, research internship experience, current role, and interests.
- **Work**: selected company and personal projects with technologies, highlights, and links.
- **Stack**: categorized tools, system layers, and engineering strengths.

This is intentionally a single-page site for now. Navigation uses section anchors rather than a router.

## Project Structure

```text
src/
  components/
    illustrations/   Reusable visual components and custom artwork helpers
    layout/          Navbar, sidebar, and shared section cards
  data/              Profile links, project data, and stack data
  sections/          Main page sections
  styles/sections/   Section-specific CSS files
  App.tsx            Page composition
  index.css          Global theme variables, imports, and base styles

public/
  sprites/trainer/   Individual transparent trainer sprite frames
  reference/         Source/reference visual assets
  *.png, *.svg, *.pdf
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview a production build locally:

```bash
npm run preview
```

## Design Notes

The visual direction is a neutral graphite interface with electric blue accents and restrained yellow highlights. Styling is split by section to keep the CSS readable as the site grows.

The project favors:

- Component-based React structure
- Typed data files for editable content
- Responsive layout behavior
- Accessible anchor navigation
- Clear separation between content, layout, and styling

## Sprite Assets

The trainer sprite frames in `public/sprites/trainer/` are custom project assets prepared for a planned hero interaction. They are exported as transparent PNG frames on a consistent canvas so they can be animated with React and CSS.

These assets are part of this personal portfolio and are not intended as reusable public game assets.

## Notes for Reviewers

This repository is a work in progress and reflects an iterative portfolio build. Some sections and visual experiments may continue to evolve as the site is refined.

The codebase is public for review, but personal branding assets, resume files, and custom artwork should not be reused without permission.
