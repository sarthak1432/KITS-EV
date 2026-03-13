import { scooterCatalog, sparesCategories } from '../../data/constants'

export default function SparesModal({
  showSpares,
  setShowSpares,
}) {
  if (!showSpares) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/40 px-0 sm:px-4 py-0 sm:py-6 backdrop-blur-md"
      onClick={() => setShowSpares(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="spares-dialog-title"
        onClick={(event) => event.stopPropagation()}
        className="reveal relative w-full h-[90vh] sm:h-auto sm:max-w-4xl overflow-hidden rounded-t-[2rem] sm:rounded-[2rem] border border-white/85 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96)_0%,_rgba(255,251,235,0.96)_46%,_rgba(240,253,250,0.96)_100%)] shadow-[0_32px_90px_rgba(15,23,42,0.24)]"
      >
        <div className="absolute inset-x-10 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.1),_transparent_66%)] blur-3xl" />
        
        <div className="relative h-full sm:max-h-[calc(100vh-6rem)] overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-rose-200 bg-gradient-to-r from-rose-50 to-orange-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-800 shadow-sm">
                Spares Catalog
              </div>
              <h2
                id="spares-dialog-title"
                className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl"
              >
                Genuine Spares & Components
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Select a category to enquire about genuine spare parts for Ola, Ather, Chetak, and iQube.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowSpares(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 shadow-[0_10px_24px_rgba(148,163,184,0.12)] transition duration-300 hover:border-slate-300 hover:text-slate-950"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {sparesCategories.map((category, index) => (
              <button
                key={category.id}
                type="button"
                style={{ animationDelay: `${index * 40}ms` }}
                className="group reveal relative overflow-hidden rounded-[1.5rem] border border-white/90 bg-white p-5 text-left shadow-[0_14px_35px_rgba(148,163,184,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(148,163,184,0.18)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {category.label}
                    </h3>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mt-1">
                      Check Availability
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 p-6 text-white text-center">
            <h4 className="font-display text-lg font-semibold">Don't see what you need?</h4>
            <p className="mt-2 text-sm text-slate-400">Call our support desk directly for specific model-wise part enquiries.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a href="tel:9823042432" className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition-colors">
                <span>📞</span> 9823042432
              </a>
              <a href="https://wa.me/919823042432" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/30 transition-colors border border-emerald-500/20">
                <span>💬</span> WhatsApp enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
