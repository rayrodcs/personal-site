import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUp, FiArrowUpRight, FiDownload, FiMail } from 'react-icons/fi'
import { mailtoLink, profileLinks } from '../data/profileLinks'

const currentYear = new Date().getFullYear()

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <span className="contact-corner contact-corner-top" aria-hidden="true" />
        <span className="contact-corner contact-corner-bottom" aria-hidden="true" />

        <div className="contact-overview">
          <div className="contact-intro">
            <p className="section-kicker">
              CONTACT <span className="text-[var(--accentYellow)]">///</span>
            </p>
            <h2>Best way to reach me.</h2>

            <div className="contact-trainer" aria-hidden="true">
              <img
                src="/sprites/trainer/idle-front-01.png"
                alt=""
                className="contact-trainer-frame contact-trainer-frame-one"
              />
              <img
                src="/sprites/trainer/idle-front-02.png"
                alt=""
                className="contact-trainer-frame contact-trainer-frame-two"
              />
            </div>
          </div>

          <div className="contact-primary">
            <span>Email</span>
            <a href={mailtoLink} className="contact-email">
              <FiMail aria-hidden="true" />
              <span>{profileLinks.email}</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="contact-links" aria-label="Contact and profile links">
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn aria-hidden="true" />
            <span>LinkedIn</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href={profileLinks.github} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href={profileLinks.resume} target="_blank" rel="noreferrer">
            <FiDownload aria-hidden="true" />
            <span>Resume</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <footer className="contact-footer">
          <p>&copy; {currentYear} Ray Rodriguez</p>
          <a href="#home" aria-label="Back to top">
            <span>Back to top</span>
            <FiArrowUp aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  )
}
