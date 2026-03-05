
import Seo from "../components/seo/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Home"
        description="Build faster with a bold, modern web presence. Nova Starter helps you launch responsive, high-converting product experiences."
        path="/"
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.2),transparent_40%)]" />
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-200">
              New generation platform
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Build faster with a bold, modern web presence
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
              Launch your product with a clear message, beautiful interface,
              and responsive experience that feels premium on every screen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Start Free
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs text-slate-400">Growth</p>
                  <p className="mt-2 text-2xl font-semibold text-cyan-300">
                    +128%
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs text-slate-400">Users</p>
                  <p className="mt-2 text-2xl font-semibold">24.8k</p>
                </div>
                <div className="col-span-2 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs text-slate-400">Conversion Rate</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-cyan-300" />
                  </div>
                  <p className="mt-2 text-sm text-slate-300">75% this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
