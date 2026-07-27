export default function Hero() {
  return (
    <section className="rounded-2xl bg-white/90 p-10 shadow flex flex-col md:flex-row items-start gap-8">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold">Developer platform, reimagined.</h1>
        <p className="mt-4 text-slate-700">A flexible, secure, and beautiful platform to build and ship developer experiences fast.</p>

        <div className="mt-6 flex gap-3">
          <a className="px-5 py-2 bg-indigo-600 text-white rounded-md" href="#">Get started</a>
          <a className="px-5 py-2 border rounded-md" href="#">Learn more</a>
        </div>
      </div>

      <aside className="w-full md:w-80 bg-slate-50 p-4 rounded-lg">
        <div className="text-sm text-slate-500">Quick stats</div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded">
            <div className="text-xs text-slate-400">Active orgs</div>
            <div className="font-semibold text-lg">1,254</div>
          </div>
          <div className="bg-white p-3 rounded">
            <div className="text-xs text-slate-400">API latency</div>
            <div className="font-semibold text-lg">28ms</div>
          </div>
        </div>
      </aside>
    </section>
  )
}
