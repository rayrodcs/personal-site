import { profileLinks } from '../data/profileLinks'
import { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'

const subtitleText = 'a Software Developer based in New York.'
const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false
  
export function Hero() {
  const [typedSubtitle, setTypedSubtitle] = useState(
    prefersReducedMotion ? subtitleText : '',
  )
  const [introComplete, setIntroComplete] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    let index = 0

    const interval = window.setInterval(() => {
      setTypedSubtitle(subtitleText.slice(0, index + 1))
      index += 1

      if (index >= subtitleText.length) {
        window.clearInterval(interval)
        window.setTimeout(() => setIntroComplete(true), 160)
      }
    }, 35)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">

        <h1 className="hero-title">
          <span className="block drop-shadow-[0_4px_0_rgba(255,255,255,0.12)]">
            RAY
          </span>
          <span className="block text-[var(--primaryBlue)] drop-shadow-[0_0_28px_rgba(46,168,255,0.28)]">
            RODRIGUEZ
          </span>
        </h1>

        <p className="hero-subtitle">
          {typedSubtitle}
          <span className="typing-cursor">|</span>
        </p>

        <p className={`hero-description hero-reveal ${introComplete ? 'is-visible' : ''}`}>
          I build full-stack systems and apps that solve real-world
          problems. I also build interactive entertainment projects that are fun to play.
        </p>

        <div className={`hero-actions hero-reveal hero-reveal-actions ${introComplete ? 'is-visible' : ''}`}>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-md border border-[var(--primaryBlue)] bg-[var(--primaryBlue)] px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--background)] shadow-[0_0_28px_rgba(46,168,255,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#58b9ff]"
          >
            View My Work <span className="ml-3">-&gt;</span>
          </a>
          <a
            href={profileLinks.resume}
            download
            className="inline-flex items-center justify-center rounded-md border border-gray bg-[rgba(143, 167, 207, 0.64)] px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[var(--text)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--primaryBlue)] hover:text-[var(--primaryBlue)]"
          >
            Download Resume <FiDownload className="ml-3 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-avatar-placement">
        <div
          className={`hero-avatar hero-reveal ${introComplete ? 'is-visible' : ''}`}
        >
          <img
            src="/sprites/trainer/running-right.png"
            alt="Pixel art avatar of Ray running"
            className="hero-avatar-image"
          />
        </div>
      </div>

      <a
        href="#status-cards"
        className={`scroll-cue hero-reveal ${introComplete ? 'is-visible' : ''}`}
      >
        <span>MORE BELOW</span>
        <span className="scroll-cue-line" aria-hidden="true" />
      </a>
    </section>
  )
}
