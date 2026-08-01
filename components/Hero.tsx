export default function Hero() {
  return (
    <section className="grid gap-12 py-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-20">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#35e879]/30 bg-[#35e879]/10 px-3 py-1.5 text-[10px] font-bold tracking-wide text-[#8dffae]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#35e879]" />Developer infrastructure
        </div>
        <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[.98] tracking-[-0.055em] text-emerald-50 md:text-7xl">
          The programmable<br />fabric for the next<br />generation of <span className="text-[#8dffae]">applications.</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-6 text-emerald-50/65">
          Autheo DevHub gives developers a unified infrastructure layer for building, deploying, and scaling modern applications. Connect compute, resources, data systems, and developer tooling through one programmable platform.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a id="start" className="rounded bg-[#35e879] px-4 py-2.5 text-xs font-bold text-[#031811] transition hover:bg-[#8dffae]" href="#build">Build with Autheo <span aria-hidden="true">→</span></a>
          <a className="rounded border border-emerald-50/20 px-4 py-2.5 text-xs font-bold text-emerald-50 transition hover:border-[#35e879] hover:text-[#8dffae]" href="#docs">Explore Architecture</a>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-2 gap-y-2 text-[9px] font-medium text-emerald-50/60">
          {['Global Compute', 'Developer Platform', 'Edge Runtime', 'Data Infrastructure'].map((item) => (
            <span key={item} className="rounded-full border border-emerald-50/15 px-3 py-1.5">{item}</span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-full bg-[#35e879]/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-xl border border-[#35e879]/25 bg-[#08261b]/90 p-5 shadow-2xl shadow-black/40 md:p-6">
          <div className="flex items-center justify-between border-b border-emerald-50/10 pb-4">
            <div className="flex items-center gap-2 text-xs text-emerald-50/60"><span className="h-1.5 w-1.5 rounded-full bg-[#35e879]" />The Autheo Stack</div>
            <span className="rounded bg-[#35e879]/10 px-2.5 py-1 font-mono text-[10px] text-[#8dffae]">READY</span>
          </div>
          <p className="mt-3 text-[10px] leading-5 text-emerald-50/45">A complete infrastructure ecosystem connecting developers with the resources needed to build globally distributed software.</p>
          <div className="mt-4 space-y-2.5">
            {[
              ['Developer Layer', 'SDKs, APIs, and tooling'],
              ['Application Runtime', 'Deployments, services, and workloads'],
              ['Compute Fabric', 'Global compute and resources'],
              ['Data Infrastructure', 'Storage, identity, and data systems'],
              ['Network Fabric', 'Secure, distributed connectivity'],
            ].map(([title, description]) => (
              <div key={title} className="flex items-center justify-between rounded-md border border-emerald-50/10 bg-[#031811]/40 px-4 py-3">
                <div><div className="text-xs font-bold text-emerald-50">{title}</div><div className="mt-1 text-[9px] text-emerald-50/45">{description}</div></div>
                <span className="h-1.5 w-1.5 rounded-full bg-[#35e879] shadow-[0_0_8px_#35e879]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
