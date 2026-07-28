import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-7xl px-6">
        <Hero />
        <section id="platform" className="border-y border-white/10 py-16">
          <div className="grid gap-10 md:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="font-mono text-xs text-[#00fed9]">01 — THE AUTHEO STACK</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">One foundation.<br />Infinite directions.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">Stop stitching together disconnected services. Autheo makes the core of your product interoperable from day one, so you can focus on the experiences only you can build.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#00fed9]/50">
              <div className="font-mono text-xs text-[#00fed9]">LAYER 0 + 1</div>
              <h3 className="mt-12 text-xl font-bold">Sovereign network</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">A programmable, scalable base layer built for the networks you imagine.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#00fed9]/50">
              <div className="font-mono text-xs text-[#00fed9]">CLOUD + COMPUTE</div>
              <h3 className="mt-12 text-xl font-bold">Native infrastructure</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Storage, messaging, compute, and orchestration that work together by default.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#00fed9]/50">
              <div className="font-mono text-xs text-[#00fed9]">DID + THEO AI</div>
              <h3 className="mt-12 text-xl font-bold">Intelligent identity</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Quantum-safe identity and adaptive automation for every person and asset.</p>
            </article>
          </div>
        </section>
        <section id="build" className="grid gap-8 py-20 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-2xl bg-[#00fed9] p-8 text-[#0b0c17] md:p-10">
            <div className="font-mono text-xs font-medium">02 — FOR BUILDERS</div>
            <h2 className="mt-14 max-w-xl text-4xl font-extrabold leading-tight tracking-tight">Your development environment should accelerate your imagination.</h2>
            <a href="#docs" className="mt-9 inline-block rounded-lg bg-[#0b0c17] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#313847]">Open DevHub <span aria-hidden="true">→</span></a>
          </div>
          <div id="resources" className="rounded-2xl border border-white/10 bg-[#131521] p-8 md:p-10">
            <div className="font-mono text-xs text-[#00fed9]">START HERE</div>
            <div className="mt-7 space-y-0">
              <a id="docs" href="#" className="flex items-center justify-between border-b border-white/10 py-5 text-lg font-bold transition hover:text-[#00fed9]"><span>Read the documentation</span><span>↗</span></a>
              <a href="#" className="flex items-center justify-between border-b border-white/10 py-5 text-lg font-bold transition hover:text-[#00fed9]"><span>Explore SDKs</span><span>↗</span></a>
              <a href="#" className="flex items-center justify-between py-5 text-lg font-bold transition hover:text-[#00fed9]"><span>Join the builder network</span><span>↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
