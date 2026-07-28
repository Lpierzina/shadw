import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-[#0b0c17]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-4" aria-label="Autheo DevHub home">
          <Image
            src="/autheo-logo.svg"
            alt="Autheo"
            width={188}
            height={48}
            priority
            className="h-11 w-auto"
          />
          <span className="border-l border-[#00fed9]/40 pl-4 text-sm font-bold uppercase tracking-[0.16em] text-white">DevHub</span>
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
