import { scooterCatalog } from '../../data/constants'

export default function ModelsModal({
  showModels,
  setShowModels,
  selectedBrand,
  setSelectedBrand,
}) {
  if (!showModels) return null

  const selectedGroup =
    scooterCatalog.find((group) => group.brand === selectedBrand) ?? scooterCatalog[0]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/40 px-0 sm:px-4 py-0 sm:py-6 backdrop-blur-md"
      onClick={() => setShowModels(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="models-dialog-title"
        onClick={(event) => event.stopPropagation()}
        className="reveal relative w-full h-[90vh] sm:h-auto sm:max-w-6xl overflow-hidden rounded-t-[2rem] sm:rounded-[2rem] border border-white/85 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96)_0%,_rgba(255,251,235,0.96)_46%,_rgba(240,253,250,0.96)_100%)] shadow-[0_32px_90px_rgba(15,23,42,0.24)]"
      >
        <div className="absolute inset-x-10 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.26),_transparent_66%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-32 w-32 bg-[radial-gradient(circle,_rgba(45,212,191,0.24),_transparent_68%)] blur-3xl" />
        
        <div className="relative h-full sm:max-h-[calc(100vh-6rem)] overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-800 shadow-sm">
                Models
              </div>
              <h2
                id="models-dialog-title"
                className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl"
              >
                Browse supported EV scooter variants.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Select a brand to see the scooter variants currently included in the website for service and spare support.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowModels(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 shadow-[0_10px_24px_rgba(148,163,184,0.12)] transition duration-300 hover:border-slate-300 hover:text-slate-950"
              aria-label="Close models"
            >
              ×
            </button>
          </div>

          <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {scooterCatalog.map((group, index) => {
              const isActive = selectedBrand === group.brand

              return (
                <button
                  key={group.brand}
                  type="button"
                  onClick={() => setSelectedBrand(group.brand)}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className={`reveal rounded-[1.5rem] border px-4 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 ${isActive
                    ? group.active
                    : `${group.idle} shadow-[0_14px_30px_rgba(148,163,184,0.12)]`
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-[1rem] font-display text-xs md:text-sm font-semibold ${isActive ? 'bg-white/15 text-white' : 'bg-slate-950 text-white'
                        }`}
                    >
                      {group.mark}
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] ${isActive ? 'text-white/70' : 'text-slate-500'
                          }`}
                      >
                        EV Brand
                      </p>
                      <p className="mt-1 font-display text-sm md:text-base font-semibold truncate">
                        {group.brand}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-[1.5rem] border border-white/90 bg-white/82 px-5 py-4 shadow-[0_16px_36px_rgba(148,163,184,0.12)] backdrop-blur-xl">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Supported Range
              </p>
              <h3 className="mt-1 font-display text-xl md:text-2xl font-semibold text-slate-950">
                {selectedGroup.brand}
              </h3>
            </div>
            <div
              className={`rounded-full border px-4 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] ${selectedGroup.tag}`}
            >
              {selectedGroup.models.length} Variants
            </div>
          </div>

          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {selectedGroup.models.map((model, index) => (
              <article
                key={`${selectedGroup.brand}-${model.name}`}
                style={{ animationDelay: `${index * 50}ms` }}
                className="reveal group overflow-hidden rounded-[1.8rem] border border-white/90 bg-white shadow-[0_18px_50px_rgba(148,163,184,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(148,163,184,0.22)]"
              >
                <div
                  className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden px-5 pb-5 pt-14 ${selectedGroup.cardSurface}`}
                >
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${selectedGroup.tag}`}
                    >
                      {selectedGroup.brand}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.16),_transparent_62%)] blur-2xl" />
                  <img
                    src={model.image}
                    alt={model.name}
                    loading="lazy"
                    className="relative z-10 h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {selectedGroup.brand}
                  </p>
                  <h4 className="mt-2 font-display text-lg md:text-xl font-semibold leading-snug text-slate-950">
                    {model.name}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
