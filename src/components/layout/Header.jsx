import { useState } from 'react'

export default function Header({ navigationLinks, scrollToTop, openModels }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-3 z-40 sm:top-4">
      <div className="relative flex flex-wrap items-center justify-between gap-3 rounded-[1.6rem] border border-white/90 bg-[linear-gradient(135deg,_rgba(255,255,255,0.94)_0%,_rgba(255,255,255,0.82)_100%)] px-4 py-4 shadow-[0_25px_65px_-15px_rgba(15,23,42,0.14)] backdrop-blur-2xl sm:gap-4 sm:rounded-[2rem] sm:px-5">
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-3.5 transition-all duration-300"
        >
          {/* Restored Thunder Logo - Gold Edition */}
          <div className="relative flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">
            <div className="absolute inset-0 rounded-xl bg-slate-950 shadow-[0_8px_20px_rgba(15,23,42,0.15)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
            <svg 
              viewBox="0 0 24 24" 
              className="relative h-6 w-6 sm:h-7 sm:w-7" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" className="stroke-[url(#bolt-grad)]" />
              <defs>
                <linearGradient id="bolt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col items-start leading-none">
            <div className="flex items-center gap-1">
              <span className="font-display text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                KITS
              </span>
              <span className="bg-gradient-to-br from-yellow-400 via-amber-500 to-amber-700 bg-clip-text font-display text-2xl font-black tracking-tight text-transparent sm:text-3xl">
                EV
              </span>
            </div>
            
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.45em] text-amber-800 sm:text-[11px]">
              MULTIBRANDS
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navigationLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={item.onClick}
              className={`rounded-full border px-4 py-2 text-center text-sm font-semibold shadow-[0_10px_24px_rgba(148,163,184,0.1)] transition duration-300 hover:-translate-y-0.5 ${item.style}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative flex h-5 w-5 flex-col items-center justify-center gap-1.5">
            <span className={`h-0.5 w-5 rounded-full bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>

        <div className="hidden xl:inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Multi-brand support desk
        </div>
      </div>

      {/* Mobile Menu Overlay & Backdrop */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-30 bg-slate-900/10 backdrop-blur-[2px] transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-x-4 top-[5.5rem] rounded-[2rem] border border-white/90 bg-white/95 p-6 shadow-[0_30px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
        >
          <nav className="flex flex-col gap-3">
            {navigationLinks.map((item) => (
              <button
                key={item.label + '-mobile'}
                type="button"
                onClick={() => {
                  item.onClick()
                  setIsMobileMenuOpen(false)
                }}
                className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left font-semibold shadow-sm transition duration-300 ${item.style}`}
              >
                {item.label}
                <span className="opacity-40">→</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Contact Desk</p>
            <div className="mt-4 space-y-3">
              <a href="tel:9823042432" className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 italic">📞</span>
                9823042432
              </a>
              <p className="flex items-center gap-3 text-xs leading-relaxed text-slate-500">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 italic">📍</span>
                Mukta plaza, Income Tax Square, Akola
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
