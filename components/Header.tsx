export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-[#0b0c17]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3" aria-label="Autheo DevHub home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00fed9] text-lg font-extrabold text-[#0b0c17] shadow-[0_0_24px_rgba(0,254,217,0.35)]">A</div>
          <div className="leading-none">
            <div className="font-bold tracking-tight text-white">autheo</div>
            <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#00fed9]">DevHub</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <a href="#platform" className="transition hover:text-[#00fed9]">Platform</a>
          <a href="#build" className="transition hover:text-[#00fed9]">Build</a>
          <a href="#resources" className="transition hover:text-[#00fed9]">Resources</a>
          <a href="#network" className="transition hover:text-[#00fed9]">Network</a>
        </nav>
        <div className="flex items-center gap-3 text-sm font-semibold">
          <a href="#docs" className="hidden text-slate-300 transition hover:text-white sm:block">Documentation</a>
          <a href="#start" className="rounded-lg bg-[#00fed9] px-4 py-2 text-[#0b0c17] transition hover:bg-white">Start building</a>
        </div>
      </div>
    </header>
  )
}
