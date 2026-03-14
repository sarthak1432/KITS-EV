import { useState } from 'react'
import { scooterCatalog } from '../../data/constants'


export default function SparesModal({
  showSpares,
  setShowSpares,
}) {
  const [activeBrandName, setActiveBrandName] = useState(null)
  const [activeModelName, setActiveModelName] = useState(null)

  if (!showSpares) return null

  const activeBrand = scooterCatalog.find(b => b.brand === activeBrandName)
  const activeModel = activeBrand?.models.find(m => m.name === activeModelName)

  const handleBack = () => {
    if (activeModelName) {
      setActiveModelName(null)
    } else if (activeBrandName) {
      setActiveBrandName(null)
    }
  }

  const handleClose = () => {
    setShowSpares(false)
    setActiveBrandName(null)
    setActiveModelName(null)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/40 px-0 sm:px-4 py-0 sm:py-6 backdrop-blur-md"
      onClick={handleClose}
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
                {(activeBrandName || activeModelName) && (
                  <button
                    onClick={handleBack}
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
                {!activeBrandName && 'Select Your EV Brand'}
                {activeBrandName && !activeModelName && `Select ${activeBrandName} Model`}
                {activeModelName && `${activeModelName} Spares Enquiry`}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-base">
                {!activeBrandName && 'Identify your brand to see model-specific genuine spare parts.'}
                {activeBrandName && !activeModelName && `Explore available ${activeBrandName} scooter models for part requests.`}
                {activeModelName && !activeModel?.spares && 'Enquire about genuine components for your ride directly via WhatsApp.'}
                {activeModelName && activeModel?.spares && `Genuine Spares for ${activeModelName}`}
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-slate-300 hover:text-slate-950 sm:h-11 sm:w-11"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          {/* 1. Brand Selection - Image-Only Maximized */}
          {!activeBrandName && (
            <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {scooterCatalog.map((brand, index) => (
                <button
                  key={brand.brand}
                  onClick={() => setActiveBrandName(brand.brand)}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className={"group reveal relative h-64 overflow-hidden rounded-[2.5rem] border border-white bg-white/40 p-0 text-left transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_100px_-20px_rgba(15,23,42,0.18)] active:scale-[0.97] " + brand.idle}
                >
                  {/* Deep Studio Spotlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.4)_70%,_transparent_100%)] opacity-80" />
                  
                  {/* Professional Proportions - Full Card */}
                  <div className="relative h-full w-full p-6 transition-transform duration-700 group-hover:scale-[1.12] group-hover:rotate-1">
                    <img 
                      src={brand.heroImage} 
                      alt={brand.brand} 
                      className="h-full w-full object-contain drop-shadow-[0_45px_70px_rgba(0,0,0,0.22)] mix-blend-multiply" 
                    />
                  </div>

                  {/* Sophisticated Brand Identity */}
                  <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                    <div className="rounded-full bg-white/20 px-5 py-2 backdrop-blur-md border border-white/40 shadow-sm transition-all duration-500 group-hover:bg-slate-950 group-hover:text-white">
                      <p className="text-[11px] font-bold uppercase tracking-[0.3em] font-display">{brand.brand}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* 2. Model Selection - Image-Only Maximized */}
          {activeBrandName && !activeModelName && (
            <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {activeBrand.models.map((model, index) => (
                <button
                  key={model.name}
                  onClick={() => setActiveModelName(model.name)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="group reveal relative h-72 overflow-hidden rounded-[2.5rem] border border-white bg-white/40 p-0 text-left transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_100px_-20px_rgba(15,23,42,0.18)] active:scale-[0.97]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.4)_70%,_transparent_100%)] opacity-80" />
                  
                  <div className="relative h-full w-full p-8 transition-transform duration-700 group-hover:scale-[1.12] group-hover:-translate-y-1">
                    <img 
                      src={model.image} 
                      alt={model.name} 
                      className="h-full w-full object-contain drop-shadow-[0_50px_85px_rgba(0,0,0,0.25)] mix-blend-multiply" 
                    />
                  </div>

                  {/* Sophisticated Model Identity */}
                  <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                    <div className="rounded-full bg-white/20 px-6 py-2.5 backdrop-blur-md border border-white/40 shadow-sm transition-all duration-500 group-hover:bg-slate-950 group-hover:text-white">
                      <p className="text-[12px] font-bold uppercase tracking-[0.3em] font-display whitespace-nowrap">{model.name}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
          {/* 3. Dynamic Spares Content */}
          {activeModelName && (
            <>
              {activeModel?.spares ? (
                /* Visual Gallery for Models with Data */
                <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {activeModel.spares.map((part, index) => (
                    <a
                      key={part.name}
                      href={`https://wa.me/919823042432?text=I'm%20enquiring%20about%20the%20${encodeURIComponent(part.name)}%20for%20my%20${encodeURIComponent(activeModelName)}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ animationDelay: `${index * 40}ms` }}
                      className="group reveal relative h-72 overflow-hidden rounded-[2.5rem] border border-white bg-white shadow-[0_15px_40px_-15px_rgba(15,23,42,0.1)] p-0 text-left transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_100px_-20px_rgba(15,23,42,0.18)] active:scale-[0.97]"
                    >
                      {/* Subtle Studio Lighting */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_rgba(248,250,252,0.8)_100%)] opacity-90" />
                      
                      <div className="relative h-full w-full p-10 transition-transform duration-700 group-hover:scale-[1.1]">
                        <img 
                          src={part.image} 
                          alt={part.name} 
                          className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]" 
                        />
                      </div>

                      {/* Part Label */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent pt-6 pb-6 px-4 text-center border-t border-slate-50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] font-display text-slate-400">
                          Genuine Component
                        </p>
                        <h3 className="mt-1 text-[13px] font-bold text-slate-900 line-clamp-1">
                          {part.name}
                        </h3>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                /* Standard Enquiry for Models without Data */
                <div className="reveal mt-10 rounded-[2rem] border border-slate-200 bg-white/40 p-6 text-center shadow-inner sm:p-8">
                  <h4 className="font-display text-lg font-bold text-slate-950 sm:text-xl">
                    Direct Enquiries for {activeModelName}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">Speak with our experts directly for availability and pricing.</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                      href={`https://wa.me/919823042432?text=I'm%20enquiring%20about%20spares%20for%20my%20${activeModelName}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700 shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md active:scale-95 sm:p-5"
                      aria-label="Enquire on WhatsApp"
                    >
                      <svg className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] overflow-visible" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="12" fill="#25D366" />
                        <path
                          d="M17.5 14.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 .1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6s.3-.3.4-.5c.1-.2.2-.3.3-.5s.1-.4 0-.5c-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 3 1.2 3.2c.1.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8s-.4-.3-.7-.4z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-sm font-bold sm:text-base"> 9823042432</span>
                    </a>
                  </div>
                </div>
              )}
            </>
          )}

          {/* 4. General Spare Enquiries (Only shown on brand selection screen) */}
          {!activeBrandName && (
            <div className="reveal mt-10 rounded-[2rem] border border-slate-200 bg-white/40 p-6 text-center shadow-inner sm:p-8">
              <h4 className="font-display text-lg font-bold text-slate-950 sm:text-xl">
                Direct Spare Enquiries
              </h4>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">Speak with our experts directly for availability and pricing.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://wa.me/919823042432"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700 shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md active:scale-95 sm:p-5"
                  aria-label="Enquire on WhatsApp"
                >
                  <svg className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] overflow-visible" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#25D366" />
                    <path
                      d="M17.5 14.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 .1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6s.3-.3.4-.5c.1-.2.2-.3.3-.5s.1-.4 0-.5c-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 3 1.2 3.2c.1.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8s-.4-.3-.7-.4z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-sm font-bold sm:text-base"> 9823042432</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
