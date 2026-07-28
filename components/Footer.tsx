export default function Footer() {
  return (
    <footer id="network" className="w-full border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">autheo</span>
          <span className="text-[#00fed9]">/</span>
          <span>© {new Date().getFullYear()} The Collective &amp; Living OS</span>
        </div>
        <div className="flex gap-5">
          <a className="transition hover:text-[#00fed9]" href="#">Terms</a>
          <a className="transition hover:text-[#00fed9]" href="#">Privacy</a>
          <a className="transition hover:text-[#00fed9]" href="#">Status</a>
        </div>
      </div>
    </footer>
  )
}
