import { Navbar } from './components/layout/Navbar'
import { Sidebar } from './components/layout/Sidebar'
import { Hero } from './sections/Hero'
import { StatusCards } from './sections/StatusCards'

function App() {
  return (
    <div className="min-h-svh overflow-hidden bg-[var(--background)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-0 bg-page-grid opacity-45" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(46,168,255,0.18),transparent_34%),radial-gradient(circle_at_26%_18%,rgba(255,210,31,0.08),transparent_22%)]" />

      <div className="relative min-h-svh w-full border-x border-[var(--borderBlue)] bg-[rgba(5,9,20,0.72)] shadow-[0_0_90px_rgba(46,168,255,0.08)]">
        <Navbar />
        <Sidebar />
        <main>
          <Hero />
          <StatusCards />
        </main>
      </div>
    </div>
  )
}

export default App
