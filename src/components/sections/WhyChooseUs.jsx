export default function WhyChooseUs({ whyChooseUs }) {
  return (
    <section id="why-us" className="reveal scroll-mt-24 pt-6 pb-10 sm:pt-8 sm:pb-12">
      <div className="inline-flex items-center rounded-full border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-800 shadow-sm">
        Why Choose Us
      </div>
      <h2 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
        Committed to excellence in every service we provide.
      </h2>

      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item, index) => (
          <article
            key={item.title}
            className={`rounded-[1.8rem] border border-white/90 bg-gradient-to-br ${item.surface} p-6 shadow-[0_18px_50px_rgba(148,163,184,0.12)] transition-transform duration-300 hover:-translate-y-1`}
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-full ${item.dot} font-display text-sm font-semibold text-white shadow-lg`}>
              0{index + 1}
            </div>
            <h3 className="mt-5 font-display text-xl md:text-2xl font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
