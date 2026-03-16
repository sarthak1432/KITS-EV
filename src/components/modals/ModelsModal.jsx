import { scooterCatalog } from '../../data/constants'

export default function ModelsModal({
  showModels,
  setShowModels,
  selectedBrand,
  setSelectedBrand,
}) {
  if (!showModels) return null

  const selectedGroup = selectedBrand
    ? scooterCatalog.find((group) => group.brand === selectedBrand)
    : null

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

          {/* Brands Selection Grid - Optimized for Mobile Focus */}
          <div className={`mt-8 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${selectedBrand ? 'hidden sm:grid' : 'grid'}`}>
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
                  
                  {/* Professional Proportions - Ultra-Refitted for Maximum Impact */}
                  <div className="relative h-full w-full p-1 sm:p-2 transition-transform duration-700 hover:scale-[1.18] hover:rotate-1">
                    <img 
                      src={group.heroImage} 
                      alt={group.brand} 
                      className={`h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] ${isActive ? '' : 'mix-blend-multiply opacity-90'}`} 
                    />
                    {/* Subtle Brand Logo for Reference */}
                    <div className="absolute top-3 right-3 h-5 w-10 sm:h-7 sm:w-14 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                      <img src={group.logo} alt="" className="h-full w-full object-contain grayscale invert brightness-0" />
                    </div>
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

          {selectedGroup && (
            <>
              <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-[2rem] border border-white/90 bg-white/82 px-8 py-6 shadow-[0_20px_50px_rgba(148,163,184,0.15)] backdrop-blur-xl">
                <div className="flex items-center gap-6">
                  {/* Perfectly Attached Brand Identifier (Product View) */}
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm sm:h-20 sm:w-20 sm:p-1.5">
                    <img 
                      src={selectedGroup.heroImage} 
                      alt={selectedGroup.brand} 
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Selected Brand
                    </p>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold text-slate-950">
                      {selectedGroup.brand}
                    </h3>
                  </div>
                </div>
                
                  <div className="flex flex-wrap items-center gap-3">
                    {selectedBrand && (
                      <button
                        onClick={() => setSelectedBrand(null)}
                        className="rounded-full border border-slate-200 bg-white px-5 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-600 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95"
                      >
                        Change Brand
                      </button>
                    )}
                    <a
                      href={`https://wa.me/919823042432?text=${encodeURIComponent(`Hello, I'm interested in service support for ${selectedGroup.brand} scooters. Can you please provide more details?`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm transition-all hover:bg-emerald-100 active:scale-95"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Expert
                    </a>
                    <div
                      className={`rounded-full border px-5 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] ${selectedGroup.tag}`}
                    >
                      {selectedGroup.models.length} Variants
                    </div>
                  </div>
              </div>

              <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {selectedGroup.models.map((model, index) => (
                  <a
                    key={`${selectedGroup.brand}-${model.name}`}
                    href={`https://wa.me/919823042432?text=${encodeURIComponent(`Hello, I am interested in service support for my ${selectedGroup.brand} ${model.name}. Can you please assist?`)}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ animationDelay: `${index * 50}ms` }}
                    className="reveal group relative h-56 sm:h-72 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white bg-white/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_100px_-20px_rgba(15,23,42,0.18)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.4)_70%,_transparent_100%)] opacity-80" />
                    
                    <div className="relative h-full w-full p-2 sm:p-4 transition-transform duration-700 group-hover:scale-[1.18] group-hover:-translate-y-1">
                      <img
                        src={model.image}
                        alt={model.name}
                        loading="lazy"
                        className="h-full w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)] mix-blend-multiply"
                      />
                    </div>

                    {/* Sophisticated Model Identity */}
                    <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                      <div className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-2.5 backdrop-blur-md border border-white/40 shadow-sm transition-all duration-500 group-hover:bg-slate-950 group-hover:text-white">
                        <svg className="h-3.5 w-3.5 transition-colors group-hover:text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <p className="text-[12px] font-bold uppercase tracking-[0.3em] font-display whitespace-nowrap">{model.name}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
