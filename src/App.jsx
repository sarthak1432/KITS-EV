import { useEffect, useState } from 'react'

// Layout & Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ModelsModal from './components/modals/ModelsModal'
import SparesModal from './components/modals/SparesModal'

// Sections
import Hero from './components/sections/Hero'
import BrandsMarquee from './components/sections/BrandsMarquee'
import ServiceHighlights from './components/sections/ServiceHighlights'
import WhyChooseUsSection from './components/sections/WhyChooseUs'
import Reviews from './components/sections/Reviews'

// Data
import { 
  scooterCatalog, 
  heroSlides, 
  heroStats, 
  heroSupport, 
  serviceHighlights, 
  whyChooseUs, 
  initialReviews 
} from './data/constants'
import { reviewService } from './services/reviewService'

function App() {
  const [showModels, setShowModels] = useState(false)
  const [showSpares, setShowSpares] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState(scooterCatalog[0].brand)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [customerReviews, setCustomerReviews] = useState(initialReviews)
  const [reviewName, setReviewName] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [reviewSubmitted, setReviewSubmitted] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false)

  // Carousel Logic
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroSlides.length)
    }, 4000)
    return () => window.clearInterval(intervalId)
  }, [])

  // Fetch reviews from Firestore
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await reviewService.getReviews();
        if (reviews.length > 0) {
          setCustomerReviews(reviews);
        }
      } catch (error) {
        console.error("Failed to fetch reviews from Firestore:", error);
      }
    };
    fetchReviews();
  }, [])

  // Modal Scroll Lock
  useEffect(() => {
    if (!showModels && !showSpares) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModels(false)
        setShowSpares(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [showModels, showSpares])

  const openModels = (brand) => {
    if (brand) setSelectedBrand(brand)
    setShowModels(true)
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleReviewSubmit = async (e) => {
    e.preventDefault()
    const name = reviewName.trim()
    const text = reviewText.trim()
    if (!name || !text) return

    try {
      const newReview = await reviewService.addReview(name, text);
      setCustomerReviews([newReview, ...customerReviews].slice(0, 10))
      setReviewName('')
      setReviewText('')
      setReviewSubmitted(true)
    } catch (error) {
      console.error("Failed to submit review to Firestore:", error);
      // Optional: show error message to user
    }
  }

  const handleServiceCardMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
    card.style.setProperty('--service-rotate-x', `${y}deg`)
    card.style.setProperty('--service-rotate-y', `${x}deg`)
  }

  const resetServiceCardMotion = (e) => {
    const card = e.currentTarget
    card.style.setProperty('--service-rotate-x', '0deg')
    card.style.setProperty('--service-rotate-y', '0deg')
  }

  const navigationLinks = [
    { label: 'Brands', onClick: () => scrollToSection('brands'), style: 'bg-blue-50 text-blue-700 border-blue-100 hover:border-blue-300' },
    { label: 'Services', onClick: () => scrollToSection('services'), style: 'bg-amber-50 text-amber-700 border-amber-100 hover:border-amber-300' },
    { label: 'Reviews', onClick: () => scrollToSection('reviews'), style: 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:border-emerald-300' },
  ]

  const heroActions = [
    { 
      label: 'Models', 
      active: showModels, 
      onClick: () => openModels(), 
      surface: 'bg-[linear-gradient(135deg,_#0f172a_0%,_#1e293b_45%,_#334155_100%)] border-white/10 text-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.4)]', 
      indicator: 'bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.6)]', 
      rail: 'bg-white/20' 
    },
    { 
      label: 'Spares', 
      active: showSpares, 
      onClick: () => setShowSpares(true), 
      surface: 'bg-[linear-gradient(135deg,_#ea580c_0%,_#f97316_45%,_#fbbf24_100%)] border-white/20 text-white shadow-[0_20px_50px_-12px_rgba(234,88,12,0.4)]', 
      indicator: 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]', 
      rail: 'bg-white/30' 
    },
    { 
      label: 'Contact', 
      active: false, 
      onClick: () => scrollToSection('footer'), 
      surface: 'bg-[linear-gradient(135deg,_#0d9488_0%,_#06b6d4_45%,_#10b981_100%)] border-white/20 text-white shadow-[0_20px_50px_-12px_rgba(13,148,136,0.4)]', 
      indicator: 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]', 
      rail: 'bg-white/30' 
    },
  ]

  const reviewRows = [
    customerReviews.filter((_, i) => i % 2 === 0),
    customerReviews.filter((_, i) => i % 2 !== 0)
  ]

  return (
    <main className="relative min-h-screen bg-[#fffdfa] px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-8 text-slate-950">
      {/* Decorative Orbs */}
      <div className="fixed -top-20 -left-20 h-80 w-80 rounded-full bg-amber-100/40 blur-[100px] pointer-events-none" />
      <div className="fixed -bottom-20 -right-20 h-80 w-80 rounded-full bg-teal-100/40 blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-[1440px] mx-auto flex flex-col gap-8 sm:gap-10">
        <Header 
          navigationLinks={navigationLinks} 
          scrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          openModels={openModels} 
        />

        <Hero 
          heroSlides={heroSlides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          heroStats={heroStats}
          heroSupport={heroSupport}
          openModels={openModels}
          scrollToSection={scrollToSection}
          heroActions={heroActions}
        />

        <BrandsMarquee 
          scooterCatalog={scooterCatalog} 
          openModels={openModels} 
        />

        <ServiceHighlights 
          serviceHighlights={serviceHighlights}
          handleServiceCardMove={handleServiceCardMove}
          resetServiceCardMotion={resetServiceCardMotion}
        />

        <WhyChooseUsSection whyChooseUs={whyChooseUs} />

        <Reviews 
          reviewRows={reviewRows}
          showReviewForm={showReviewForm}
          toggleReviewForm={() => setShowReviewForm(!showReviewForm)}
          handleReviewSubmit={handleReviewSubmit}
          reviewName={reviewName}
          setReviewName={setReviewName}
          reviewText={reviewText}
          setReviewText={setReviewText}
          reviewSubmitted={reviewSubmitted}
          setReviewSubmitted={setReviewSubmitted}
          closeReviewForm={() => setShowReviewForm(false)}
        />

        <Footer 
          scooterCatalog={scooterCatalog}
          navigationLinks={navigationLinks}
          openModels={openModels}
          currentYear={new Date().getFullYear()}
        />
      </div>

      <ModelsModal 
        showModels={showModels}
        setShowModels={setShowModels}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />

      <SparesModal 
        showSpares={showSpares}
        setShowSpares={setShowSpares}
      />
    </main>
  )
}

export default App
