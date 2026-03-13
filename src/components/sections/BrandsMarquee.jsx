export default function BrandsMarquee({ scooterCatalog, openModels }) {
  return (
    <section id="brands" className="reveal scroll-mt-24 pt-6 pb-8 sm:pt-8 sm:pb-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 shadow-sm">
            Supported Brands
          </div>
          <h2 className="mt-4 font-display text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight">
            Brands we support for service and spare enquiries.
          </h2>
        </div>
      </div>

      <div className="brand-marquee mt-8">
        <div className="brand-marquee-track">
          {[0, 1].map((row) => (
            <div key={row} className="brand-marquee-group">
              {scooterCatalog.map((group) => (
                <button
                  key={row + '-' + group.brand}
                  type="button"
                  onClick={() => openModels(group.brand)}
                  className="group w-[12rem] md:w-[16.5rem] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/90 bg-slate-50 p-3 text-left shadow-[0_18px_50px_rgba(148,163,184,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(148,163,184,0.22)] sm:rounded-[1.85rem]"
                >
                  <div className={'relative overflow-hidden rounded-[1.45rem] border border-white/80 bg-[linear-gradient(135deg,_#f8fafc_0%,_#f1f5f9_100%)] p-4 ' + group.cardSurface}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_65%)]" />
                    <img
                      src={group.models[0].image}
                      alt={group.brand}
                      loading="lazy"
                      className="relative z-10 h-32 md:h-44 w-full object-contain transition duration-500 group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-4 text-center">
                    <h3 className="font-display text-lg md:text-xl font-semibold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      {group.brand}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
