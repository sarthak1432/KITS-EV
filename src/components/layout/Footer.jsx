export default function Footer({ scooterCatalog, navigationLinks, openModels, currentYear }) {
  return (
    <footer id="footer" className="rounded-[2.2rem] border border-white/90 bg-[linear-gradient(180deg,_rgba(15,23,42,0.97)_0%,_rgba(30,41,59,0.96)_100%)] px-4 py-4 sm:px-6 sm:py-10 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)]">
      <div className="grid gap-4 lg:gap-12 grid-cols-2 lg:grid-cols-[0.35fr_0.2fr_0.2fr_0.25fr]">
        <div className="col-span-2 lg:col-span-1 space-y-3 sm:space-y-6">
         {/* Professional Glass-Stroke Top Border - Multi-Spectrum */}
        <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/30 via-emerald-500/40 via-cyan-500/30 to-transparent opacity-90" />
        
        {/* Subtle Atmospheric Inner Glow - Multi-Spectrum */}
        <div className="absolute inset-x-24 top-0 h-12 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.08),_rgba(16,185,129,0.08)_50%,_transparent_80%)] blur-2xl pointer-events-none" />
          <div>
            <div className="flex items-center gap-2.5 leading-none">
              <div className="relative flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-slate-900 border border-amber-900/30 shadow-[0_8px_25px_rgba(0,0,0,0.3)]" />
                <svg 
                  viewBox="0 0 24 24" 
                  className="relative h-4.5 w-4.5 sm:h-6 sm:w-6" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" className="stroke-[url(#footer-bolt-grad)]" />
                  <defs>
                    <linearGradient id="footer-bolt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-lg font-black tracking-tight text-white sm:text-3xl">
                    KITS
                  </span>
                  <span className="bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 bg-clip-text font-display text-lg font-black tracking-tight text-transparent sm:text-3xl">
                    EV
                  </span>
                </div>
                <p className="mt-0.5 text-[8px] sm:text-[11px] font-bold uppercase tracking-[0.45em] text-slate-400">
                  MULTIBRANDS
                </p>
              </div>
            </div>
       <h2 className="mt-3 sm:mt-8 font-display text-base sm:text-3xl leading-tight font-semibold text-white">
              Your Trusted Multi-Brand EV Service Experts
            </h2>
          </div>
          <p className="max-w-md text-[11px] sm:text-sm leading-5 sm:leading-7 text-slate-300">
            Your destination for top electric vehicle brands in one place.
            Driving innovation, sustainability, and smarter mobility.
          </p>
        </div>

        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Contact Info
          </p>
          <div className="mt-2 sm:mt-6 space-y-2 sm:space-y-6">
            <div className="flex flex-col gap-0.5">
              <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-slate-500">Address</span>
              <p className="text-[11px] sm:text-sm leading-4 sm:leading-6 text-slate-300">1st floor, Mukta plaza, Income Tax Square, Gaurakshan Road Akola</p>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-slate-500">Contact No</span>
              <p className="text-[11px] sm:text-sm font-semibold text-slate-100"> 9823042432 / 9226983129</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Quick Links
          </p>
          <div className="mt-2 sm:mt-6 flex flex-wrap gap-1.5">
            {navigationLinks.map((item) => (
              <button
                key={item.label + '-footer'}
                type="button"
                onClick={item.onClick}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-1 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-semibold text-slate-100 transition duration-300 hover:border-white/30 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
            <button
              key="models-footer"
              type="button"
              onClick={() => openModels()}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-semibold text-slate-100 transition duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Models
            </button>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Supported Brands
          </p>
          <div className="mt-2 sm:mt-6 flex flex-wrap gap-1.5">
            {scooterCatalog.map((group) => (
              <span
                key={group.brand + '-footer'}
                className="rounded-full border border-white/5 bg-white/6 px-2 py-1 text-[10px] sm:text-xs font-semibold text-slate-200"
              >
                {group.brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-3 sm:pt-8 text-[10px] sm:text-xs text-slate-400">
        <p>© {currentYear} KITS EV MULTI-BRANDS. All rights reserved.</p>
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
