import { useEffect, useState } from 'react'
import { RRLogo } from '../illustrations/RRLogo'
import { profileLinks } from '../../data/profileLinks'

type NavItem = {
  label: string
  href: string
  sectionId?: string
  external?: boolean
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Work', href: '#work', sectionId: 'work' },
  { label: 'Stack', href: '#stack', sectionId: 'stack' },
  { label: 'Resume', href: profileLinks.resume, external: true },
]

const sectionIds = [
  ...navItems.flatMap((item) => (item.sectionId ? [item.sectionId] : [])),
  'contact',
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let animationFrame = 0

    const updateActiveSection = () => {
      if (window.scrollY < 120) {
        setActiveSection('home')
        return
      }

      const activationLine = Math.min(window.innerHeight * 0.35, 320)
      let currentSection = 'home'

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId)

        if (
          section &&
          section.getBoundingClientRect().top <= activationLine
        ) {
          currentSection = sectionId
        }
      })

      setActiveSection(currentSection)
    }

    const handleScroll = () => {
      if (animationFrame) return

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0
        updateActiveSection()
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--darkBorder)] bg-[var(--navSurface)] backdrop-blur-xl">
      <nav className="flex h-24 w-full items-center justify-between px-5 sm:px-8 lg:px-6 xl:px-8">
        <a
          href="#home"
          className="group inline-flex items-center"
          aria-label="Ray Rodriguez home"
          onClick={() => setActiveSection('home')}
        >
          <RRLogo className="h-12 w-[96px] transition duration-200 group-hover:drop-shadow-[0_0_18px_rgba(46,168,255,0.45)]" />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.sectionId
            const isActive = sectionId === activeSection

            return (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                {...(isActive ? { 'aria-current': 'location' as const } : {})}
                onClick={sectionId ? () => setActiveSection(sectionId) : undefined}
                className={`navbar-link relative font-mono text-sm uppercase tracking-[0.08em] transition duration-200 ${isActive
                  ? 'is-active text-[var(--primaryBlue)]'
                  : 'text-[var(--text)] hover:text-[var(--primaryBlue)]'
                  }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <a
          href="#contact"
          aria-current={activeSection === 'contact' ? 'location' : undefined}
          onClick={() => setActiveSection('contact')}
          className={`navbar-contact hidden rounded border border-[var(--primaryBlue)] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--text)] transition duration-200 hover:bg-[rgba(46,168,255,0.12)] hover:text-white hover:shadow-[0_0_24px_rgba(46,168,255,0.22)] sm:inline-flex ${
            activeSection === 'contact' ? 'is-active' : ''
          }`}
        >
          Let's Connect <span className="ml-3 text-[var(--primaryBlue)]">-&gt;</span>
        </a>
      </nav>
    </header>
  )
}
