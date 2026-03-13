import { useState } from 'react'
import { scooterCatalog, sparesCategories } from '../../data/constants'

export default function SparesModal({
  showSpares,
  setShowSpares,
}) {
  const [activeCategoryId, setActiveCategoryId] = useState(null)

  if (!showSpares) return null

  const activeCategory = sparesCategories.find(c => c.id === activeCategoryId)

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/40 px-0 sm:px-4 py-0 sm:py-6 backdrop-blur-md"
      onClick={() => {
        setShowSpares(false)
        setActiveCategoryId(null)
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="spares-dialog-title"
        onClick={(event) => event.stopPropagation()}
        className="reveal relative w-full h-[92vh] sm:h-auto sm:max-w-4xl overflow-hidden rounded-t-[2.5rem] sm:rounded-[2rem] border border-white/85 bg-[linear-gradient(180deg,_#ffffff_0%,_#fffbf2_46%,_#f0fdfa_100%)] shadow-[0_32px_90px_rgba(15,23,42,0.24)]"
      >
        {/* Mobile Drag Handle */}
        <div className="flex justify-center pt-4 sm:hidden">
          <div className="h-1.5 w-12 rounded-full bg-slate-200/50" />
        </div>

        <div className="absolute inset-x-10 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.08),_transparent_66%)] blur-3xl" />
        
        <div className="relative h-full sm:max-h-[85vh] overflow-y-auto px-5 py-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="inline-flex items-center rounded-full border border-rose-200 bg-gradient-to-r from-rose-50 to-orange-100 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-rose-800 shadow-sm">
                  Spares Catalog
                </div>
                {activeCategory && (
                  <button 
                    onClick={() => setActiveCategoryId(null)}
                    className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-950 transition-colors py-2"
                  >
                    ← Back
                  </button>
                )}
              </div>
              <h2
                id="spares-dialog-title"
                className="mt-4 font-display text-xl font-bold leading-tight text-slate-950 sm:text-3xl lg:text-4xl"
              >
                {activeCategory ? activeCategory.label : 'Genuine Spares & Components'}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-base">
                {activeCategory 
                  ? `Specific components and spare parts available for ${activeCategory.label.toLowerCase()}.` 
                  : 'Select a category to enquire about genuine spare parts for Ola, Ather, Chetak, and iQube.'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowSpares(false)
                setActiveCategoryId(null)
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-slate-300 hover:text-slate-950 sm:h-11 sm:w-11"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {!activeCategory ? (
            <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
              {sparesCategories.map((category, index) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  style={{ animationDelay: `${index * 40}ms` }}
                  className="group reveal relative overflow-hidden rounded-[1.6rem] border border-white bg-white/60 p-5 text-left shadow-[0_12px_30px_rgba(148,163,184,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(148,163,184,0.15)] sm:rounded-[1.8rem] sm:p-6"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.02)_0%,_rgba(15,23,42,0.04)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-center gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-[1.2rem] sm:text-2xl">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-slate-950 group-hover:text-rose-600 transition-colors sm:text-lg">
                        {category.label}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
                        <span className="h-1 w-1 rounded-full bg-rose-500/60 sm:h-1.5 sm:w-1.5" />
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[11px]">
                          {category.parts.length} Parts
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:gap-3">
              {activeCategory.parts.map((part, index) => (
                <div
                  key={part}
                  style={{ animationDelay: `${index * 30}ms` }}
                  className="reveal flex items-center justify-between rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:px-5 sm:py-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 text-[10px] font-bold border border-slate-100 sm:h-8 sm:w-8 sm:text-xs">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {part}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="reveal mt-10 rounded-[2rem] border border-slate-200 bg-white/40 p-6 text-center shadow-inner sm:p-8">
            <h4 className="font-display text-lg font-bold text-slate-950 sm:text-xl">Direct Spare Enquiries</h4>
            <p className="mt-2 text-sm font-bold text-slate-950 underline decoration-slate-300">Call: 9823042432</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">Speak with our experts directly for availability and pricing.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a 
                href="tel:9823042432" 
                className="flex items-center justify-center rounded-2xl bg-slate-950 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:translate-y-[-2px] hover:shadow-2xl active:scale-95 sm:px-6 sm:py-3.5"
              >
                Call 9823042432
              </a>
              <a 
                href="https://wa.me/919823042432" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-4 text-sm font-bold text-emerald-700 shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md active:scale-95 sm:px-6 sm:py-3.5"
              >
                WhatsApp 9823042432
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
