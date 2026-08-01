export default function Footer() {
  return (
    <footer id="network" className="w-full border-t border-emerald-50/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-emerald-50/50 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-emerald-50">DevHub</span>
          <span className="text-[#35e879]">/</span>
          <span>© {new Date().getFullYear()} Developer infrastructure</span>
        </div>
        <div className="flex gap-5">
          <a className="transition hover:text-[#8dffae]" href="#">Terms</a>
          <a className="transition hover:text-[#8dffae]" href="#">Privacy</a>
          <a className="transition hover:text-[#8dffae]" href="#">Status</a>
        </div>
      </div>
    </footer>
  )
}
