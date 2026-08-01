import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-6xl px-6">
        <Hero />
        <section id="platform" className="border-t border-emerald-50/10 py-20">
          <div className="grid gap-8 md:grid-cols-[.85fr_1.15fr]">
            <div>
              <div className="font-mono text-[10px] text-[#8dffae]">01 — THE AUTHEO PLATFORM</div>
              <h2 className="mt-4 text-3xl font-bold leading-[1.02] tracking-tight text-emerald-50 md:text-4xl">One platform. Every infrastructure layer.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-emerald-50/60">Modern applications require more than servers and databases. Autheo unifies the complete software stack into a single developer-controlled infrastructure layer.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-md border border-emerald-50/15 bg-[#08261b]/60 p-5 transition hover:border-[#35e879]/50">
              <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-50"><span className="h-1.5 w-1.5 rounded-full bg-[#35e879]" />Compute Fabric</div>
              <h3 className="mt-8 text-base font-bold text-emerald-50">Global workloads, one control plane.</h3>
              <p className="mt-3 text-xs leading-5 text-emerald-50/55">Access distributed compute resources for applications, automation, and workflows.</p>
            </article>
            <article className="rounded-md border border-emerald-50/15 bg-[#08261b]/60 p-5 transition hover:border-[#35e879]/50">
              <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-50"><span className="h-1.5 w-1.5 rounded-full bg-[#35e879]" />Data Infrastructure</div>
              <h3 className="mt-8 text-base font-bold text-emerald-50">Data systems that work together.</h3>
              <p className="mt-3 text-xs leading-5 text-emerald-50/55">Build on scalable data services including databases, storage, identity, and synchronization.</p>
            </article>
            <article className="rounded-md border border-emerald-50/15 bg-[#08261b]/60 p-5 transition hover:border-[#35e879]/50">
              <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-50"><span className="h-1.5 w-1.5 rounded-full bg-[#35e879]" />Network Fabric</div>
              <h3 className="mt-8 text-base font-bold text-emerald-50">Connected everywhere.</h3>
              <p className="mt-3 text-xs leading-5 text-emerald-50/55">Connect applications, services, and devices through secure communication layers.</p>
            </article>
          </div>
        </section>
        <section id="build" className="grid gap-8 py-20 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-xl border border-[#35e879]/25 bg-gradient-to-br from-[#0d3b27] to-[#08261b] p-8 md:p-10">
            <div className="font-mono text-[10px] font-medium text-[#8dffae]">02 — FOR BUILDERS</div>
            <h2 className="mt-12 max-w-xl text-4xl font-extrabold leading-[1.04] tracking-tight text-emerald-50">Global compute resources, available when developers need them.</h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-emerald-50/60">Autheo transforms compute into an accessible resource layer. Deploy and scale applications across distributed environments.</p>
            <a href="#docs" className="mt-8 inline-block rounded bg-[#35e879] px-4 py-2.5 text-xs font-bold text-[#031811] transition hover:bg-[#8dffae]">Explore the platform <span aria-hidden="true">→</span></a>
          </div>
          <div id="resources" className="rounded-xl border border-emerald-50/15 bg-[#08261b]/70 p-8 md:p-10">
            <div className="font-mono text-[10px] text-[#8dffae]">START HERE</div>
            <div className="mt-7 space-y-0">
              <a id="docs" href="#" className="flex items-center justify-between border-b border-emerald-50/10 py-5 text-base font-bold text-emerald-50 transition hover:text-[#8dffae]"><span>Read the documentation</span><span>↗</span></a>
              <a href="#" className="flex items-center justify-between border-b border-emerald-50/10 py-5 text-base font-bold text-emerald-50 transition hover:text-[#8dffae]"><span>Explore SDKs</span><span>↗</span></a>
              <a href="#" className="flex items-center justify-between py-5 text-base font-bold text-emerald-50 transition hover:text-[#8dffae]"><span>Join the developer network</span><span>↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
