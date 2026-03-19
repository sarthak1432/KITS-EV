export default function Reviews({ 
  reviewRows, 
  showReviewForm, 
  toggleReviewForm, 
  handleReviewSubmit, 
  reviewName, 
  setReviewName, 
  reviewText, 
  setReviewText, 
  reviewSubmitted, 
  setReviewSubmitted, 
  closeReviewForm 
}) {
  return (
    <section id="reviews" className="reveal scroll-mt-24 pt-6 pb-12 sm:pt-8 sm:pb-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center rounded-full border border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 to-rose-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-800 shadow-sm">
            Happy Customers
          </div>
          <h2 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
            Trust from dozens of EV owners.
          </h2>
        </div>

        <button
          type="button"
          onClick={toggleReviewForm}
          className="w-full md:w-auto h-14 rounded-2xl bg-slate-950 px-8 text-sm font-semibold tracking-wide text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-slate-800 sm:text-base"
        >
          {showReviewForm ? 'Hide Review Form' : 'Add Review'}
        </button>
      </div>

      {showReviewForm && (
        <div className="mt-10 w-full max-w-4xl">
          <form
            onSubmit={handleReviewSubmit}
            className="review-form-shell reveal rounded-[2.1rem] border border-white/90 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96)_0%,_rgba(255,251,235,0.92)_42%,_rgba(240,253,250,0.92)_100%)] p-6 shadow-2xl backdrop-blur-xl md:p-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="max-w-md">
                <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-amber-800">
                  feedback loop
                </div>
                <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold text-slate-950 leading-tight">
                  Share your service experience.
                </h3>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <div className="review-field p-0 bg-transparent border-0 shadow-none">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Customer Name</label>
                <input
                  type="text"
                  value={reviewName}
                  onChange={(e) => {
                    setReviewName(e.target.value)
                    setReviewSubmitted(false)
                  }}
                  placeholder="Enter your name"
                  className="review-input h-14"
                />
              </div>

              <div className="review-field p-0 bg-transparent border-0 shadow-none">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Your Experience</label>
                <textarea
                  rows="5"
                  value={reviewText}
                  onChange={(e) => {
                    setReviewText(e.target.value)
                    setReviewSubmitted(false)
                  }}
                  placeholder="Tell us about the service quality..."
                  className="review-input p-5"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Submit Live</span>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={closeReviewForm}
                  className="h-14 px-8 rounded-2xl border border-slate-200 font-semibold text-slate-600 transition-all hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-14 px-10 rounded-2xl bg-slate-950 text-white font-semibold shadow-lg transition-all hover:bg-slate-800 hover:-translate-y-1"
                >
                  Submit Review
                </button>
              </div>
            </div>

            {reviewSubmitted && (
              <div className="mt-6 p-4 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-700 text-sm font-medium">
                Successfully submitted! Your review is now live.
              </div>
            )}
          </form>
        </div>
      )}

      <div className="mt-10 sm:mt-12 space-y-8 sm:space-y-12 overflow-hidden">
        {reviewRows.map((row, rowIndex) => (
          <div key={rowIndex}>
            {rowIndex > 0 && (
              <div className="mx-auto mb-8 sm:mb-12 h-px w-4/5" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(148, 163, 184, 0.35) 25%, rgba(148, 163, 184, 0.35) 75%, transparent 100%)' }} />
            )}
            <div className="review-marquee">
              <div
                className={
                  'review-marquee-track ' +
                  (rowIndex === 1 ? 'review-marquee-track-reverse' : '')
                }
                style={{ '--review-duration': `${Math.max(30, row.length * 6)}s` }}
              >
                {[0, 1].map((copy) => (
                  <div key={copy} className="review-marquee-group">
                    {row.map((review) => (
                      <article
                        key={`${copy}-${review.id}`}
                        className="review-card w-[13rem] sm:w-[17rem] md:w-[22rem] shrink-0 rounded-[1.5rem] sm:rounded-[1.8rem] md:rounded-[2rem] border border-white/90 bg-white/80 p-3 sm:p-4 md:p-6 shadow-xl backdrop-blur-md"
                      >
                        <div className="flex items-start justify-between gap-2 sm:gap-3 md:gap-4">
                          <div className="min-w-0">
                            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified Client</p>
                            <h3 className="mt-1 font-display text-sm sm:text-base md:text-xl font-bold text-slate-900 truncate">
                              {review.name}
                            </h3>
                          </div>
                          <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl bg-slate-950 text-white font-bold text-xs sm:text-sm md:text-lg">
                            {review.name.charAt(0)}
                          </div>
                        </div>
                        <p className="mt-3 sm:mt-4 md:mt-6 text-[11px] sm:text-xs md:text-base leading-relaxed text-slate-600 italic line-clamp-3">
                          "{review.text}"
                        </p>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
