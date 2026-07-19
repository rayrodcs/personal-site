import { Navbar } from './components/layout/Navbar'
import { Sidebar } from './components/layout/Sidebar'
import { Hero } from './sections/Hero'
import { StatusCards } from './sections/StatusCards'
import { About } from './sections/About'
import { Work } from './sections/Work'
import { Stack } from './sections/Stack'
import { Contact } from './sections/Contact'

function App() {
  return (
    <div className="min-h-svh overflow-hidden bg-[var(--background)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-0 bg-page-grid opacity-45" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_58%_8%,rgba(172,172,172,0.4),transparent_36%),radial-gradient(circle_at_78%_30%,rgba(74,180,255,0.12),transparent_30%),radial-gradient(circle_at_24%_18%,rgba(255,210,31,0.07),transparent_22%)]" />

      <div className="relative min-h-svh w-full border-x border-[var(--darkBorder)] bg-[var(--shell)] shadow-[0_0_90px_rgba(142,142,142,0.14)]">
        <Navbar />
        <Sidebar />
        <main>
          <Hero />
          <StatusCards />
          <About />
          <Work />
          <Stack />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
