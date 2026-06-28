import { RRLogo } from '../illustrations/RRLogo'
import { mailtoLink, profileLinks } from '../../data/profileLinks'

const navItems = ['Home', 'About', 'Work', 'Stack', 'Resume', 'Contact']

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--borderBlue)] bg-[rgba(5,9,20,0.82)] backdrop-blur-xl">
      <nav className="flex h-24 w-full items-center justify-between px-5 sm:px-8 lg:px-6 xl:px-8">
        <a href="#home" className="group inline-flex items-center" aria-label="Ray Rodriguez home">
          <RRLogo className="h-12 w-[96px] transition duration-200 group-hover:drop-shadow-[0_0_18px_rgba(46,168,255,0.45)]" />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => {
            const isActive = item === 'Home'

            return (
              <a
                key={item}
                href={
                  item === 'Home'
                    ? '#home'
                    : item === 'Resume'
                      ? profileLinks.resume
                      : item === 'Contact'
                        ? mailtoLink
                        : `#${item.toLowerCase()}`
                }
                {...(item === 'Resume' ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={`relative font-mono text-sm uppercase tracking-[0.08em] transition duration-200 ${
                  isActive
                    ? 'text-[var(--primaryBlue)]'
                    : 'text-[var(--text)] hover:text-[var(--primaryBlue)]'
                }`}
              >
                {item}
                {isActive ? (
                  <span className="absolute -bottom-4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--primaryBlue)] shadow-[0_0_16px_var(--primaryBlue)]" />
                ) : null}
              </a>
            )
          })}
        </div>

        <a
          href={mailtoLink}
          className="hidden rounded border border-[var(--primaryBlue)] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--text)] transition duration-200 hover:bg-[rgba(46,168,255,0.12)] hover:text-white hover:shadow-[0_0_24px_rgba(46,168,255,0.22)] sm:inline-flex"
        >
          Let's Connect <span className="ml-3 text-[var(--primaryBlue)]">-&gt;</span>
        </a>
      </nav>
    </header>
  )
}
