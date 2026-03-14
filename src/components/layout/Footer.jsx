export default function Footer({ scooterCatalog, navigationLinks, openModels, currentYear, scrollToTop }) {
  return (
    <footer id="footer" className="reveal mt-10 rounded-[2.5rem] border border-white/90 bg-[linear-gradient(180deg,_rgba(15,23,42,0.98)_0%,_rgba(30,41,59,0.98)_100%)] px-5 py-8 sm:p-10 lg:p-16 text-white shadow-[0_32px_90px_rgba(15,23,42,0.25)]">
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-16">
        {/* 1. Brand Identity */}
        <div className="space-y-6 sm:space-y-8">
          <button 
            onClick={scrollToTop}
            className="group block text-left"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-amber-400 transition-colors">
              KITS EV MULTIBRANDS
            </p>
            <h2 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Elevating the EV <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-400">Service Standard.</span>
            </h2>
          </button>
          
          <p className="max-w-sm text-sm leading-8 text-slate-300">
            Akola's premier multi-brand EV center. We provide factory-grade service, genuine spares, and expert support for the next generation of urban mobility.
          </p>

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg sm:text-xl shadow-inner">⚡</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Tech Ready</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Advanced diagnostic support</p>
            </div>
          </div>
        </div>

        {/* 2. Quick Access */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">Navigation</h3>
          <nav className="flex flex-col items-start gap-4">
            {navigationLinks.map((link) => (
              <button
                key={link.label + '-footer'}
                type="button"
                onClick={link.onClick}
                className="group flex items-center gap-3 text-sm font-medium text-slate-300 transition hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-700 transition-all group-hover:w-3 group-hover:bg-amber-400" />
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => openModels()}
              className="group flex items-center gap-3 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-slate-700 transition-all group-hover:w-3 group-hover:bg-amber-400" />
              Models Catalogue
            </button>
          </nav>
        </div>

        {/* 3. Brand Network */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">Service Network</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            {scooterCatalog.slice(0, 6).map((group) => (
              <button
                key={group.brand + '-footer'}
                onClick={() => openModels(group.brand)}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/2 px-3 py-2 text-xs font-semibold text-slate-400 transition hover:bg-white/5 hover:text-slate-200"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
                {group.brand}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Connect & Support */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">Contact Desk</h3>
          <div className="space-y-4 sm:space-y-6">
            <a 
              href="https://maps.google.com/?q=Mukta+plaza,+Income+Tax+Square,+Akola" 
              target="_blank" 
              rel="noreferrer"
              className="group flex gap-4 rounded-2xl border border-white/5 bg-white/2 p-3.5 sm:p-4 transition hover:bg-white/5"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                📍
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Workshop</p>
                <p className="mt-1 text-[11px] sm:text-xs leading-5 text-slate-300">Mukta plaza, Income Tax Square, Akola</p>
              </div>
            </a>

            <div className="group flex gap-4 rounded-2xl border border-white/5 bg-white/2 p-3.5 sm:p-4 transition hover:bg-white/5">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                📞
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Support Line</p>
                <p className="mt-1 text-sm font-bold text-slate-100">9823042432</p>
                <p className="text-[10px] text-slate-500">Daily 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-6 sm:gap-8 border-t border-white/5 pt-8 sm:pt-10 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <p>© {currentYear} KITS EV</p>
          <span className="hidden sm:inline h-1 w-1 rounded-full bg-slate-800" />
          <p className="hover:text-slate-300 cursor-pointer transition-colors">Service Standards</p>
          <span className="hidden sm:inline h-1 w-1 rounded-full bg-slate-800" />
          <p className="hover:text-slate-300 cursor-pointer transition-colors">Spare Policy</p>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Operations Live</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
