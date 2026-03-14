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
        className="reveal relative w-full h-[90dvh] sm:h-auto sm:max-w-6xl overflow-hidden rounded-t-[2rem] sm:rounded-[2rem] border border-white/85 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96)_0%,_rgba(255,251,235,0.96)_46%,_rgba(240,253,250,0.96)_100%)] shadow-[0_32px_90px_rgba(15,23,42,0.24)]"
      >
        <div className="absolute inset-x-10 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.26),_transparent_66%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-32 w-32 bg-[radial-gradient(circle,_rgba(45,212,191,0.24),_transparent_68%)] blur-3xl" />
        
        <div className="relative h-full sm:max-h-[calc(100dvh-6rem)] overflow-y-auto p-6 sm:p-8">
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
                Select a brand to see the scooter variants for service and spare support.
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

          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {scooterCatalog.map((group, index) => {
              const isActive = selectedBrand === group.brand

              return (
                <button
                  key={group.brand}
                  type="button"
                  onClick={() => setSelectedBrand(group.brand)}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className={`reveal relative h-48 sm:h-64 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_100px_-20px_rgba(15,23,42,0.18)] active:scale-[0.97] ${isActive
                    ? group.active + " border-white/60 ring-2 ring-rose-500/10 shadow-[0_30px_70px_-10px_rgba(244,63,94,0.2)]"
                    : `${group.idle} bg-white/40 border-white shadow-[0_10px_25px_rgba(0,0,0,0.02)]`
                    }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.4)_70%,_transparent_100%)] opacity-80" />
                  
                  {/* Professional Proportions - Pure Visual */}
                  <div className="relative h-full w-full p-6 transition-transform duration-700 hover:scale-[1.12] hover:rotate-1">
                    <img 
                      src={group.heroImage} 
                      alt={group.brand} 
                      className={`h-full w-full object-contain drop-shadow-[0_50px_85px_rgba(0,0,0,0.25)] ${isActive ? '' : 'mix-blend-multiply'}`} 
                    />
                  </div>

                  {/* Sophisticated Brand Identity */}
                  <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                    <div className={`rounded-full px-5 py-2 backdrop-blur-md border shadow-sm transition-all duration-500 ${isActive ? 'bg-slate-950 text-white border-white/20' : 'bg-white/20 border-white/40 hover:bg-slate-950 hover:text-white'}`}>
                      <p className="text-[11px] font-bold uppercase tracking-[0.3em] font-display">{group.brand}</p>
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

          <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {selectedGroup.models.map((model, index) => (
              <article
                key={`${selectedGroup.brand}-${model.name}`}
                style={{ animationDelay: `${index * 50}ms` }}
                className="reveal group relative h-56 sm:h-72 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white bg-white/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_100px_-20px_rgba(15,23,42,0.18)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.4)_70%,_transparent_100%)] opacity-80" />
                
                <div className="relative h-full w-full p-8 transition-transform duration-700 group-hover:scale-[1.12] group-hover:-translate-y-1">
                  <img
                    src={model.image}
                    alt={model.name}
                    loading="lazy"
                    className="h-full w-full object-contain drop-shadow-[0_55px_95px_rgba(0,0,0,0.28)] mix-blend-multiply"
                  />
                </div>

                {/* Sophisticated Model Identity */}
                <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                  <div className="rounded-full bg-white/20 px-6 py-2.5 backdrop-blur-md border border-white/40 shadow-sm transition-all duration-500 group-hover:bg-slate-950 group-hover:text-white">
                    <p className="text-[12px] font-bold uppercase tracking-[0.3em] font-display whitespace-nowrap">{model.name}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
