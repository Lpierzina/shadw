export default function Hero() {
  return (
    <section className="grid gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-24">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00fed9]/30 bg-[#00fed9]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#00fed9]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00fed9]" />The collective &amp; living OS
        </div>
        <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] text-white md:text-7xl">
          Build what&apos;s <span className="text-[#00fed9]">next.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Autheo brings chain, cloud, identity, compute, and AI into one sovereign foundation—so your team can turn ambitious ideas into living systems.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a id="start" className="rounded-lg bg-[#00fed9] px-5 py-3 text-sm font-bold text-[#0b0c17] transition hover:bg-white" href="#build">Explore the DevHub <span aria-hidden="true">→</span></a>
          <a className="rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-[#00fed9] hover:text-[#00fed9]" href="#docs">Read the docs</a>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
          <span><strong className="mr-2 text-white">One stack.</strong>No fragmentation.</span>
          <span><strong className="mr-2 text-white">Your rules.</strong>Sovereign by design.</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-full bg-[#00fed9]/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#131521] p-5 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs text-slate-400"><span className="h-2 w-2 rounded-full bg-[#00fed9]" />autheo / project</div>
            <span className="rounded bg-[#00fed9]/10 px-2 py-1 font-mono text-[10px] text-[#00fed9]">LIVE</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="font-mono text-[11px] text-[#00fed9]">01 / NETWORK</div>
              <div className="mt-7 text-xl font-bold">Launch</div>
              <p className="mt-1 text-xs leading-5 text-slate-400">Deploy a sovereign environment in minutes.</p>
            </div>
            <div className="rounded-xl border border-[#00fed9]/30 bg-[#00fed9]/[0.06] p-4">
              <div className="font-mono text-[11px] text-[#00fed9]">02 / IDENTITY</div>
              <div className="mt-7 text-xl font-bold">Connect</div>
              <p className="mt-1 text-xs leading-5 text-slate-400">Give people and assets a quantum-safe identity.</p>
            </div>
            <div className="col-span-full rounded-xl border border-white/10 bg-gradient-to-r from-[#3a4eff]/20 to-[#00fed9]/10 p-4">
              <div className="flex items-end justify-between">
                <div><div className="font-mono text-[11px] text-slate-400">THEO AI / ORCHESTRATION</div><div className="mt-2 text-lg font-bold">Everything speaks the same language.</div></div>
                <span className="hidden text-2xl text-[#00fed9] sm:block">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
