import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <Hero />

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 rounded-2xl p-6 shadow">
            <h3 className="text-lg font-semibold">Integrations</h3>
            <p className="mt-2 text-sm text-slate-600">Plug your favorite services with simple adapters.</p>
          </div>

          <div className="bg-white/80 rounded-2xl p-6 shadow">
            <h3 className="text-lg font-semibold">Auth & Security</h3>
            <p className="mt-2 text-sm text-slate-600">Enterprise-grade authentication and RBAC out of the box.</p>
          </div>

          <div className="bg-white/80 rounded-2xl p-6 shadow">
            <h3 className="text-lg font-semibold">Observability</h3>
            <p className="mt-2 text-sm text-slate-600">Built-in metrics, logging, and tracing integrations.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
