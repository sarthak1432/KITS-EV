export default function ServiceHighlights({ serviceHighlights, handleServiceCardMove, resetServiceCardMotion }) {
  return (
    <section id="services" className="reveal scroll-mt-24 pt-6 pb-8 sm:pt-8 sm:pb-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
            Services
          </div>
          <h2 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
            Complete EV care solutions in one place.
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {serviceHighlights.map((item, index) => (
          <article
            key={item.title}
            onMouseMove={handleServiceCardMove}
            onMouseLeave={resetServiceCardMotion}
            style={{ '--service-delay': `${index * 140}ms` }}
            className={'service-card group overflow-hidden rounded-[2rem] border border-white/95 bg-gradient-to-br p-6 shadow-[0_20px_55px_rgba(148,163,184,0.14)] ' + item.surface}
          >
            <div className={'service-card-orb ' + item.glow} />
            <div className={'service-card-ribbon bg-gradient-to-r ' + item.accent} />
            <div className="relative z-10">
              <span className={'rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ' + item.tagTone}>
                {item.tag}
              </span>
              <h3 className="mt-6 font-display text-xl md:text-2xl font-semibold leading-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:max-w-[18rem]">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
