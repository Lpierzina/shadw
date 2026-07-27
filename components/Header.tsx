export default function Header() {
  return (
    <header className="w-full bg-transparent border-b border-slate-100/40">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold">A</div>
          <div className="font-semibold">autheo.dev</div>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-700">
          <a href="#" className="hover:underline">Docs</a>
          <a href="#" className="hover:underline">API</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Sign in</a>
        </nav>
      </div>
    </header>
  )
}
