type SidebarIcon = {
  label: string
  path: string
}

const icons: SidebarIcon[] = [
  {
    label: 'GitHub',
    path: 'M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a9.7 9.7 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 4-2.4 4.8-4.7 5.1.4.3.8 1 .8 2v2.4c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z',
  },
  {
    label: 'LinkedIn',
    path: 'M6.7 9.5H3.4v10.7h3.3V9.5ZM5.1 8.1a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8Zm15.1 6.2c0-3.2-1.7-5.1-4.4-5.1-1.7 0-2.8.9-3.3 1.8V9.5H9.3v10.7h3.3v-5.8c0-1.6.9-2.5 2.2-2.5 1.2 0 2 1 2 2.5v5.8h3.4v-5.9Z',
  },
  {
    label: 'Email',
    path: 'M3.5 6.2h17v12h-17v-12Zm1.4 1.6 7.1 5.3 7.1-5.3M5.1 16.8l4.7-4M18.9 16.8l-4.7-4',
  },
  {
    label: 'Gamepad',
    path: 'M7.1 10.2h9.8c2.3 0 4.1 1.9 4.1 4.2v2.1c0 1.5-1 2.7-2.4 2.7-.8 0-1.5-.4-2-1l-1.4-1.7H8.8l-1.4 1.7c-.5.6-1.2 1-2 1A2.5 2.5 0 0 1 3 16.5v-2.1c0-2.3 1.8-4.2 4.1-4.2Zm1.1 3v3.1M6.7 14.7h3M16.5 14h.1M18.4 16h.1',
  },
]

function Icon({ icon }: { icon: SidebarIcon }) {
  return (
    <a
      href="#home"
      aria-label={icon.label}
      className="grid h-9 w-9 place-items-center text-[var(--muted)] transition duration-200 hover:text-[var(--primaryBlue)] hover:drop-shadow-[0_0_12px_rgba(46,168,255,0.55)]"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d={icon.path}
          fill={icon.label === 'GitHub' || icon.label === 'LinkedIn' ? 'currentColor' : 'none'}
          stroke={icon.label === 'GitHub' || icon.label === 'LinkedIn' ? 'none' : 'currentColor'}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}

export function Sidebar() {
  return (
    <aside className="absolute bottom-0 left-0 top-20 z-20 hidden w-20 border-r border-[var(--borderBlue)] bg-[rgba(5,9,20,0.38)] xl:flex xl:flex-col xl:items-center">
      <div className="mt-20 flex flex-col items-center gap-5">
        {icons.map((icon) => (
          <Icon key={icon.label} icon={icon} />
        ))}
      </div>

      <div className="mt-auto mb-10 flex flex-col items-center gap-5">
        <span className="h-12 w-px bg-[var(--muted)]/60" />
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text)] [writing-mode:vertical-rl]">
          Tools
        </span>
        <span className="h-2 w-2 rounded-full bg-[var(--primaryBlue)] shadow-[0_0_14px_var(--primaryBlue)]" />
      </div>
    </aside>
  )
}
