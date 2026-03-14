export default function Footer({ scooterCatalog, navigationLinks, openModels, currentYear }) {
  return (
    <footer id="footer" className="rounded-[2.2rem] border border-white/90 bg-[linear-gradient(180deg,_rgba(15,23,42,0.97)_0%,_rgba(30,41,59,0.96)_100%)] px-6 py-10 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)]">
      <div className="grid gap-12 lg:grid-cols-[0.35fr_0.2fr_0.2fr_0.25fr]">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              KITS EV MULTIBRANDS
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl leading-tight">
              Your Trusted Multi-Brand EV Service Experts
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Your destination for top electric vehicle brands in one place.
            Driving innovation, sustainability, and smarter mobility for a better future.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Contact Info
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Address</span>
              <p className="text-sm leading-6 text-slate-300">1st floor, Mukta plaza, Income Tax Square, Gaurakshan Road Akola</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Contact No</span>
              <p className="text-sm font-semibold text-slate-100"> 9823042432 / 9226983129</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Quick Links
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {navigationLinks.map((item) => (
              <button
                key={item.label + '-footer'}
                type="button"
                onClick={item.onClick}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:border-white/30 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
            <button
              key="models-footer"
              type="button"
              onClick={() => openModels()}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Models
            </button>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Supported Brands
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {scooterCatalog.map((group) => (
              <span
                key={group.brand + '-footer'}
                className="rounded-full border border-white/5 bg-white/6 px-4 py-2 text-xs font-semibold text-slate-200"
              >
                {group.brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-slate-400">
        <p>© {currentYear} KITS EV MULTIBRANDS. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <p>EV scooter models</p>
          <span className="opacity-20">•</span>
          <p>Services</p>
          <span className="opacity-20">•</span>
          <p>Support Showcase</p>
        </div>
      </div>
    </footer>
  )
}
