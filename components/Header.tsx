export default function Header() {
  return (
    <header className="w-full border-b border-emerald-300/10 bg-[#031811]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3" aria-label="DevHub home">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#35e879] text-sm font-extrabold text-[#031811] shadow-[0_0_24px_rgba(53,232,121,0.3)]">D</div>
          <div className="leading-none">
            <div className="text-sm font-extrabold tracking-tight text-white">DevHub</div>
            <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.16em] text-emerald-200/60">Developer infrastructure</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-[10px] font-medium text-emerald-50/70 md:flex">
          <a href="#platform" className="transition hover:text-[#35e879]">Docs</a>
          <a href="#build" className="transition hover:text-[#35e879]">Platform</a>
          <a href="#resources" className="transition hover:text-[#35e879]">Developers</a>
          <a href="#network" className="transition hover:text-[#35e879]">Resources</a>
        </nav>
        <div className="flex items-center gap-3 text-xs font-semibold">
          <a href="#docs" className="hidden text-emerald-50/70 transition hover:text-white sm:block">Sign in</a>
          <a href="#start" className="rounded bg-[#35e879] px-3 py-2 text-[#031811] transition hover:bg-[#8dffae]">Start Building</a>
        </div>
      </div>
    </header>
  )
}
