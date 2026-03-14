export default function Hero({ 
  heroSlides, 
  currentSlide, 
  setCurrentSlide, 
  heroStats, 
  heroSupport, 
  openModels, 
  scrollToSection,
  heroActions
}) {
  const activeSlide = heroSlides[currentSlide]
  const previousSlide = heroSlides[(currentSlide + heroSlides.length - 1) % heroSlides.length]
  const nextSlide = heroSlides[(currentSlide + 1) % heroSlides.length]

  return (
    <section className="reveal flex flex-col gap-6 pb-6 sm:gap-8 lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:gap-10 lg:items-stretch lg:pb-0">
      {/* Wrapper for Slideshow, Actions, and Map - Uses 'contents' on mobile to allow interleaving with Aside */}
      <div className="contents lg:flex lg:flex-col lg:gap-4 lg:bg-white/70 lg:rounded-[2.6rem] lg:border lg:border-white/85 lg:p-6 lg:shadow-[0_32px_90px_rgba(15,23,42,0.16)] lg:backdrop-blur-xl lg:order-2">
        
        {/* 1. Scooter Slideshow (First on Mobile) */}
        <div 
          className={"reveal order-1 relative min-h-[22rem] overflow-hidden rounded-[1.7rem] border border-white/90 bg-gradient-to-br " + activeSlide.surface + " p-4 sm:min-h-[26rem] sm:rounded-[2rem] sm:p-6 lg:min-h-[30rem] lg:border-none lg:shadow-none"}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_58%)]" />
          <div className="absolute left-4 top-4 z-20 flex flex-wrap items-center gap-2 sm:left-6 sm:top-6">
            <span className={"rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] " + activeSlide.badge}>
              {activeSlide.brand}
            </span>
            <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Service Ready
            </span>
          </div>

          <div className="pointer-events-none absolute left-4 top-1/2 hidden md:block w-32 xl:left-8 xl:w-44 -translate-y-1/2 opacity-30">
             <div className="rounded-[1.5rem] border border-white/70 bg-white/45 p-3 backdrop-blur">
              <img src={previousSlide.image} alt="" className="h-24 w-full object-contain" />
            </div>
          </div>

          <div className="pointer-events-none absolute right-4 top-1/2 hidden md:block w-32 xl:right-8 xl:w-44 -translate-y-1/2 opacity-30">
            <div className="rounded-[1.5rem] border border-white/70 bg-white/45 p-3 backdrop-blur">
              <img src={nextSlide.image} alt="" className="h-24 w-full object-contain" />
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[16rem] max-w-4xl items-center justify-center sm:min-h-[22rem] lg:min-h-[28rem]">
            {heroSlides.map((slide, index) => (
              <img
                key={slide.name}
                src={slide.image}
                alt={slide.name}
                className={
                  "absolute inset-0 m-auto h-[70%] w-[90%] md:h-[75%] lg:h-[80%] object-contain drop-shadow-[0_24px_40px_rgba(15,23,42,0.16)] transition-all duration-700 " +
                  (index === currentSlide ? 'float-slow translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0')
                }
              />
            ))}
          </div>

          <div className="absolute inset-x-4 bottom-4 z-20 flex flex-col gap-4 sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="rounded-[1.3rem] border border-white/80 bg-white/82 px-4 py-4 text-left shadow-[0_16px_36px_rgba(148,163,184,0.14)] backdrop-blur-xl md:max-w-xs lg:max-w-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Supported Range</p>
              <h3 className="mt-1 font-display text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-slate-950">{activeSlide.name}</h3>
              <p className="mt-1 text-xs md:text-sm leading-relaxed text-slate-600">Ready for service and spare requests in our workshop.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/80 bg-white/75 px-3 py-2 shadow-[0_12px_30px_rgba(148,163,184,0.12)] backdrop-blur-xl">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={'h-2.5 rounded-full transition-all duration-300 ' + (index === currentSlide ? 'w-8 bg-slate-950' : 'w-2.5 bg-slate-300 hover:bg-slate-400')}
                />
              ))}
            </div>
          </div>
        </div>


        {/* 4. Company Map (Fourth on Mobile) */}
        <div className="reveal reveal-delay-3 order-4 flex-1 min-h-[500px] md:min-h-[450px] overflow-hidden rounded-[1.7rem] border border-white/90 bg-white/50 shadow-[0_12px_32px_rgba(148,163,184,0.1)] backdrop-blur lg:border-none lg:shadow-none lg:p-0">
          <iframe
            src="https://maps.google.com/maps?q=Mukta%20plaza,%20Income%20Tax%20Square,%20Gaurakshan%20Road%20Akola&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
            className="opacity-90 grayscale-[20%] transition-opacity duration-500 hover:opacity-100"
          ></iframe>
        </div>
      </div>

      {/* 2. Service & Spares Center Aside (Second on Mobile) */}
      <aside className="reveal reveal-delay-1 order-2 lg:order-1 lg:col-start-1 lg:row-span-3 rounded-[1.7rem] border border-white/85 bg-white/82 p-6 shadow-[0_22px_60px_rgba(148,163,184,0.14)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
        <div className="inline-flex items-center rounded-full border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 shadow-sm">
          Service & Spares Center
        </div>
        <h2 className="mt-5 font-display text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight text-slate-950">
          Professional support for EV scooter service, repairs, and spare requests.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          Complete Service for Every Electric Ride keeping your EV efficient, reliable, and road-ready.
        </p>

        <div className="mt-7 grid gap-3 grid-cols-1 sm:grid-cols-3">
          {heroStats.map((item) => (
            <article key={item.label} className="rounded-[1.4rem] border border-slate-200 bg-slate-50/90 p-4 shadow-[0_10px_24px_rgba(148,163,184,0.08)]">
              <p className="font-display text-xl md:text-2xl font-semibold text-slate-950">{item.value}</p>
              <p className="mt-2 text-xs md:text-sm leading-6 text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 space-y-4">
          {heroSupport.map((item) => (
            <article key={item.title} className="rounded-[1.45rem] border border-slate-200 bg-white/90 p-4 shadow-[0_12px_28px_rgba(148,163,184,0.08)]">
              <h3 className="font-display text-lg md:text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        {/* Relocated Action Buttons */}
        <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {heroActions.map((action) => (
            <button
              key={action.label}
              type="button"
              onClick={action.onClick}
              className={
                'group relative min-h-[4rem] overflow-hidden rounded-[1.2rem] border px-4 py-3 text-left transition-all duration-300 hover:shadow-[0_16px_36px_rgba(15,23,42,0.1)] active:scale-95 ' +
                action.surface
              }
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.26),_transparent_42%)] opacity-80" />
                <div className="relative flex h-full items-center justify-between gap-3">
                  <h3 className="font-display text-sm md:text-base font-semibold tracking-wide">{action.label}</h3>
                  <span className={'h-2 w-2 rounded-full ' + (action.active ? action.indicator : 'bg-slate-300')} />
                </div>
              <div className={'absolute bottom-0 left-0 h-1 w-full origin-left rounded-full transition duration-300 ' + (action.active ? 'scale-x-100 ' + action.rail : 'scale-x-0 group-hover:scale-x-100 ' + action.rail)} />
            </button>
          ))}
        </div>
      </aside>
    </section>
  )
}
