import { useEffect, useState } from 'react'

const scooterCatalog = [
  {
    brand: 'Ola Electric',
    mark: 'OE',
    active:
      'border-transparent bg-[linear-gradient(135deg,_#0f172a_0%,_#ef4444_52%,_#fb923c_100%)] text-white shadow-[0_18px_40px_rgba(239,68,68,0.24)]',
    idle: 'border-rose-100 bg-white text-slate-900 hover:border-rose-200 hover:bg-rose-50/80',
    cardSurface: 'bg-[linear-gradient(180deg,_#fff1f2_0%,_#ffffff_54%,_#fff7ed_100%)]',
    tag: 'border-rose-200 bg-rose-50 text-rose-700',
    models: [
      {
        name: 'S1 Pro+ 5.2 kWh',
        image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_pro_plus_gen3_product_web_image_v3.webp',
      },
      {
        name: 'S1 Pro+ 4 kWh',
        image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_pro_plus_gen3_product_web_image_v3.webp',
      },
      {
        name: 'S1 Pro 4 kWh',
        image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_pro_gen3_product_web_image_v3.webp',
      },
      {
        name: 'S1 Pro 3 kWh',
        image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_pro_gen3_product_web_image_v3.webp',
      },
      {
        name: 'S1 X+ 4 kWh',
        image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_x_plus_gen3_product_web_image_v2.webp',
      },
      {
        name: 'S1 X 4 kWh',
        image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_x_plus_gen3_product_web_image_v2.webp',
      },
      {
        name: 'S1 X 3 kWh',
        image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_x_plus_gen3_product_web_image_v2.webp',
      },
      {
        name: 'S1 X 2 kWh',
        image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_x_plus_gen3_product_web_image_v2.webp',
      },
    ],
  },
  {
    brand: 'Ather Energy',
    mark: 'AE',
    active:
      'border-transparent bg-[linear-gradient(135deg,_#0f172a_0%,_#65a30d_52%,_#bef264_100%)] text-white shadow-[0_18px_40px_rgba(101,163,13,0.24)]',
    idle: 'border-lime-100 bg-white text-slate-900 hover:border-lime-200 hover:bg-lime-50/80',
    cardSurface: 'bg-[linear-gradient(180deg,_#f7fee7_0%,_#ffffff_54%,_#ecfccb_100%)]',
    tag: 'border-lime-200 bg-lime-50 text-lime-700',
    models: [
      {
        name: 'Rizta S',
        image: 'https://www.atherenergy.com/_next/image?q=75&url=https%3A%2F%2Fmedia.atherenergy.com%2FRizta-Red-Super-Matte.webp&w=3840',
      },
      {
        name: 'Rizta Z',
        image: 'https://www.atherenergy.com/_next/image?q=75&url=https%3A%2F%2Fmedia.atherenergy.com%2FBlue-Duo.png&w=3840',
      },
      {
        name: '450 S',
        image: 'https://www.atherenergy.com/_next/image?q=75&url=https%3A%2F%2Fmedia.atherenergy.com%2FAther-450-colours-Hyper-Sand.webp&w=1920',
      },
      {
        name: '450 X',
        image: 'https://www.atherenergy.com/_next/image?q=75&url=https%3A%2F%2Fmedia.atherenergy.com%2FAther-450-colours-Hyper-Sand.webp&w=1920',
      },
      {
        name: '450 Apex',
        image: 'https://www.atherenergy.com/_next/image?q=75&url=https%3A%2F%2Fmedia.atherenergy.com%2FAther-450-colours-Hyper-Sand.webp&w=1920',
      },
    ],
  },
  {
    brand: 'Bajaj Chetak',
    mark: 'BC',
    active:
      'border-transparent bg-[linear-gradient(135deg,_#0f172a_0%,_#0f766e_52%,_#5eead4_100%)] text-white shadow-[0_18px_40px_rgba(15,118,110,0.24)]',
    idle: 'border-teal-100 bg-white text-slate-900 hover:border-teal-200 hover:bg-teal-50/80',
    cardSurface: 'bg-[linear-gradient(180deg,_#f0fdfa_0%,_#ffffff_54%,_#ccfbf1_100%)]',
    tag: 'border-teal-200 bg-teal-50 text-teal-700',
    models: [
      {
        name: 'Chetak C2501',
        image: 'https://cdn.bajajauto.com/-/media/chetakv2/image/red-chetak-dev.webp',
      },
      {
        name: 'Chetak 3001',
        image: 'https://cdn.bajajauto.com/-/media/chetakv2/image/red-chetak-dev.webp',
      },
      {
        name: 'Chetak 3501',
        image: 'https://cdn.bajajauto.com/-/media/chetakv2/image/red-chetak-dev.webp',
      },
      {
        name: 'Chetak 3502',
        image: 'https://cdn.bajajauto.com/-/media/chetakv2/image/red-chetak-dev.webp',
      },
      {
        name: 'Chetak 3503',
        image: 'https://cdn.bajajauto.com/-/media/chetakv2/image/red-chetak-dev.webp',
      },
    ],
  },
  {
    brand: 'TVS iQube',
    mark: 'TI',
    active:
      'border-transparent bg-[linear-gradient(135deg,_#0f172a_0%,_#2563eb_52%,_#7dd3fc_100%)] text-white shadow-[0_18px_40px_rgba(37,99,235,0.24)]',
    idle: 'border-sky-100 bg-white text-slate-900 hover:border-sky-200 hover:bg-sky-50/80',
    cardSurface: 'bg-[linear-gradient(180deg,_#eff6ff_0%,_#ffffff_54%,_#e0f2fe_100%)]',
    tag: 'border-sky-200 bg-sky-50 text-sky-700',
    models: [
      {
        name: 'iQube 2.2 kWh',
        image: 'https://www.tvsmotor.com/electric-scooters/tvs-iqube/-/media/Vehicles/Feature/Iqube/Variant/TVS-iQube/Color_Images/Titanium-Grey-Glossy/titanim-grey-glossy01.webp',
      },
      {
        name: 'iQube 3.1 kWh',
        image: 'https://www.tvsmotor.com/electric-scooters/tvs-iqube/-/media/Vehicles/Feature/Iqube/Variant/TVS-iQube/Color_Images/Titanium-Grey-Glossy/titanim-grey-glossy01.webp',
      },
      {
        name: 'iQube 3.5 kWh',
        image: 'https://www.tvsmotor.com/electric-scooters/tvs-iqube/-/media/Vehicles/Feature/Iqube/Variant/TVS-iQube-S/Color_Images/Mercury-Grey-Glossy/mercury-grey07.webp',
      },
      {
        name: 'iQube S 3.5 kWh',
        image: 'https://www.tvsmotor.com/electric-scooters/tvs-iqube/-/media/Vehicles/Feature/Iqube/Variant/TVS-iQube-S/Color_Images/Copper-Bronze-Glossy/copper-bronze-c45-01.webp',
      },
      {
        name: 'iQube ST 5.3 kWh',
        image: 'https://www.tvsmotor.com/electric-scooters/tvs-iqube/-/media/Vehicles/Feature/Iqube/Variant/TVS-iQube-ST/Color_Images/Titanium-Grey-Matte/titanim-grey-matte01.webp',
      },
    ],
  },
]

const heroSlides = [
  {
    brand: 'Ola Electric',
    name: 'S1 Pro+ 5.2 kWh',
    image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_pro_plus_gen3_product_web_image_v3.webp',
    surface: 'from-rose-100 via-white to-orange-50',
    badge: 'border-rose-200 bg-rose-50 text-rose-700',
  },
  {
    brand: 'Ather Energy',
    name: 'Rizta Z',
    image: 'https://www.atherenergy.com/_next/image?q=75&url=https%3A%2F%2Fmedia.atherenergy.com%2FBlue-Duo.png&w=3840',
    surface: 'from-lime-100 via-white to-emerald-50',
    badge: 'border-lime-200 bg-lime-50 text-lime-700',
  },
  {
    brand: 'Bajaj Chetak',
    name: 'Chetak 3501',
    image: 'https://cdn.bajajauto.com/-/media/chetakv2/image/red-chetak-dev.webp',
    surface: 'from-teal-100 via-white to-cyan-50',
    badge: 'border-teal-200 bg-teal-50 text-teal-700',
  },
  {
    brand: 'TVS iQube',
    name: 'iQube ST 5.3 kWh',
    image: 'https://www.tvsmotor.com/electric-scooters/tvs-iqube/-/media/Vehicles/Feature/Iqube/Variant/TVS-iQube-ST/Color_Images/Titanium-Grey-Matte/titanim-grey-matte01.webp',
    surface: 'from-sky-100 via-white to-blue-50',
    badge: 'border-sky-200 bg-sky-50 text-sky-700',
  },
]

const heroStats = [
  { value: '4', label: 'leading EV scooter brands supported' },
  { value: 'Multi-brand', label: 'service and spare help from one desk' },
  { value: 'Quick', label: 'response-first flow for customer enquiries' },
]

const heroSupport = [
  {
    title: 'Service booking support',
    text: 'Routine checkups, inspection scheduling, and follow-up support for everyday EV ownership.',
  },
  {
    title: 'Genuine spare requests',
    text: 'Model-wise assistance for brake parts, body panels, tyres, electrical items, and fast-moving components.',
  },
  {
    title: 'Single service desk',
    text: 'One cleaner process for Ola, Ather, Bajaj Chetak, and TVS iQube owners.',
  },
]

const serviceHighlights = [
  {
    title: 'Periodic Service',
    tag: 'Workshop care',
    text: 'Routine inspection, cleaning, brake tuning, tyre checks, and ride-readiness review.',
    surface: 'from-sky-100 via-white to-cyan-100',
    tagTone: 'border-sky-200 bg-sky-50 text-sky-700',
    glow: 'bg-sky-300/40',
    accent: 'from-sky-500/55 via-cyan-400/30 to-transparent',
  },
  {
    title: 'Diagnostics & Repair',
    tag: 'Electrical support',
    text: 'Inspection guidance for electrical issues, warning lights, charging concerns, and ride behaviour.',
    surface: 'from-amber-100 via-white to-orange-100',
    tagTone: 'border-amber-200 bg-amber-50 text-amber-700',
    glow: 'bg-amber-300/40',
    accent: 'from-amber-500/55 via-orange-400/30 to-transparent',
  },
  {
    title: 'Brake & Tyre Care',
    tag: 'Safety checks',
    text: 'Brake pad wear checks, tyre replacement planning, and everyday running maintenance support.',
    surface: 'from-emerald-100 via-white to-teal-100',
    tagTone: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    glow: 'bg-emerald-300/38',
    accent: 'from-emerald-500/55 via-teal-400/30 to-transparent',
  },
  {
    title: 'Spares Assistance',
    tag: 'Model-wise parts',
    text: 'Part-name matching and model-specific follow-up for fast-moving service and repair spares.',
    surface: 'from-rose-100 via-white to-fuchsia-100',
    tagTone: 'border-rose-200 bg-rose-50 text-rose-700',
    glow: 'bg-rose-300/38',
    accent: 'from-rose-500/55 via-fuchsia-400/30 to-transparent',
  },
]

const whyChooseUs = [
  {
    title: 'Multi-brand expertise',
    text: 'A single point of contact for multiple EV scooter brands keeps the customer journey simpler and faster.',
  },
  {
    title: 'Service-first communication',
    text: 'The UI is built around enquiries, callbacks, spare requests, and workshop support, not just product browsing.',
  },
  {
    title: 'Model-wise spare guidance',
    text: 'Customers can identify their scooter brand and variant before raising a spare or support request.',
  },
  {
    title: 'Professional brand presentation',
    text: 'Clean sections, strong hierarchy, and focused actions make the website feel trustworthy for service customers.',
  },
]


const initialReviews = [
  {
    id: 1,
    name: 'Rahul S.',
    text: 'Quick service support and clear model guidance made the experience very smooth.',
  },
  {
    id: 2,
    name: 'Pooja K.',
    text: 'The team helped me identify the right scooter variant and the service flow felt professional.',
  },
  {
    id: 3,
    name: 'Vikram R.',
    text: 'Clean presentation, fast response, and a much better service experience than I expected.',
  },
  {
    id: 4,
    name: 'Sneha M.',
    text: 'Multi-brand support in one place is very useful when you want quick answers for EV care.',
  },
  {
    id: 5,
    name: 'Akhil P.',
    text: 'The showroom-style website feels premium and makes it easy to understand the services offered.',
  },
  {
    id: 6,
    name: 'Nisha T.',
    text: 'I liked how simple it was to browse brands and understand the support available.',
  },
]

function App() {
  const [showModels, setShowModels] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState(scooterCatalog[0].brand)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [customerReviews, setCustomerReviews] = useState(initialReviews)
  const [reviewName, setReviewName] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [reviewSubmitted, setReviewSubmitted] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroSlides.length)
    }, 3200)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (!showModels) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowModels(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [showModels])

  const selectedGroup =
    scooterCatalog.find((group) => group.brand === selectedBrand) ?? scooterCatalog[0]
  const activeSlide = heroSlides[currentSlide]
  const previousSlide = heroSlides[(currentSlide + heroSlides.length - 1) % heroSlides.length]
  const nextSlide = heroSlides[(currentSlide + 1) % heroSlides.length]
  const reviewRows = [0, 1].map((rowIndex) => {
    const row = customerReviews.filter((_, index) => index % 2 === rowIndex)

    return row.length ? row : customerReviews
  })

  const openModels = (brand) => {
    if (brand) {
      setSelectedBrand(brand)
    }

    setShowModels(true)
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleServiceCardMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 10
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -10

    card.style.setProperty('--service-rotate-x', rotateX.toFixed(2) + 'deg')
    card.style.setProperty('--service-rotate-y', rotateY.toFixed(2) + 'deg')
    card.style.setProperty('--service-glow-x', 50 + rotateY * 3 + '%')
    card.style.setProperty('--service-glow-y', 50 - rotateX * 3 + '%')
  }

  const resetServiceCardMotion = (event) => {
    const card = event.currentTarget

    card.style.setProperty('--service-rotate-x', '0deg')
    card.style.setProperty('--service-rotate-y', '0deg')
    card.style.setProperty('--service-glow-x', '50%')
    card.style.setProperty('--service-glow-y', '50%')
  }

  const handleReviewSubmit = (event) => {
    event.preventDefault()

    const name = reviewName.trim()
    const message = reviewText.trim()

    if (!name || !message) {
      return
    }

    setCustomerReviews((currentReviews) => [
      {
        id: Date.now(),
        name,
        text: message,
      },
      ...currentReviews,
    ].slice(0, 14))
    setReviewName('')
    setReviewText('')
    setReviewSubmitted(true)
  }

  const toggleReviewForm = () => {
    if (!showReviewForm) {
      setReviewSubmitted(false)
    }

    setShowReviewForm((open) => !open)
  }

  const closeReviewForm = () => {
    setShowReviewForm(false)
    setReviewSubmitted(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigationLinks = [
    { label: 'Brands', onClick: () => scrollToSection('brands') },
    { label: 'Services', onClick: () => scrollToSection('services') },
    { label: 'Reviews', onClick: () => scrollToSection('reviews') },
  ]

  const currentYear = new Date().getFullYear()

  const heroActions = [
    {
      label: 'Models',
      active: showModels,
      onClick: () => openModels(),
      surface:
        'border-slate-950/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.98)_0%,_rgba(30,41,59,0.96)_52%,_rgba(71,85,105,0.92)_100%)] text-white shadow-[0_24px_55px_rgba(15,23,42,0.18)]',
      indicator: 'bg-white/85 shadow-[0_0_20px_rgba(255,255,255,0.45)]',
      rail: 'bg-white/70',
    },
    {
      label: 'Spares',
      active: false,
      onClick: () => scrollToSection('services'),
      surface:
        'border-amber-100 bg-[linear-gradient(180deg,_rgba(255,251,235,0.98)_0%,_rgba(255,255,255,0.98)_100%)] text-slate-950 shadow-[0_18px_42px_rgba(148,163,184,0.14)]',
      indicator: 'bg-amber-500/35',
      rail: 'bg-amber-500/40',
    },
    {
      label: 'Contact Us',
      active: false,
      onClick: () => scrollToSection('footer'),
      surface:
        'border-teal-100 bg-[linear-gradient(180deg,_rgba(240,253,250,0.98)_0%,_rgba(255,255,255,0.98)_100%)] text-slate-950 shadow-[0_18px_42px_rgba(148,163,184,0.14)]',
      indicator: 'bg-teal-500/35',
      rail: 'bg-teal-500/40',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.22),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.22),_transparent_28%),linear-gradient(180deg,_#fff7ed_0%,_#fffdfa_46%,_#f0fdfa_100%)] px-4 py-5 text-slate-950 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
      <div className="absolute left-[-4rem] top-12 h-52 w-52 rounded-full bg-amber-200/45 blur-3xl" />
      <div className="absolute bottom-10 right-[-3rem] h-64 w-64 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col gap-8">
        <header className="sticky top-3 z-30 sm:top-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.6rem] border border-white/85 bg-[linear-gradient(135deg,_rgba(255,255,255,0.88)_0%,_rgba(255,255,255,0.72)_100%)] px-4 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:gap-4 sm:rounded-[2rem] sm:px-5">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-left transition duration-300 hover:opacity-85"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                KITS EV MULTIBRANDS
              </p>
              <h1 className="mt-2 font-display text-lg font-semibold leading-tight text-slate-950 sm:text-2xl">
                EV Scooter Service & Genuine Spares
              </h1>
            </button>

            <nav className="order-3 grid w-full grid-cols-3 gap-2 lg:order-none lg:flex lg:w-auto lg:flex-wrap">
              {navigationLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.onClick}
                  className="rounded-full border border-white/90 bg-white/82 px-3 py-2 text-center text-xs font-semibold text-slate-700 shadow-[0_10px_24px_rgba(148,163,184,0.1)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 sm:px-4 sm:text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
              <div className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 xl:inline-flex">
                Multi-brand support desk
              </div>
              <button
                type="button"
                onClick={() => openModels()}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(15,23,42,0.18)] transition duration-300 hover:bg-slate-800 sm:w-auto"
              >
                Models
              </button>
            </div>
          </div>
        </header>

        <section className="reveal flex flex-col gap-6 pb-6 sm:gap-8">
          <div className="grid w-full gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
            <aside className="rounded-[1.7rem] border border-white/85 bg-white/82 p-5 shadow-[0_22px_60px_rgba(148,163,184,0.14)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Service & Spares Center
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Professional support for EV scooter service, repairs, and spare requests.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                KITS EV Multibrands is presented as a cleaner service-first website where customers can browse supported models, understand workshop support, and request spare parts or follow-up assistance.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.4rem] border border-slate-200 bg-slate-50/90 p-4 shadow-[0_10px_24px_rgba(148,163,184,0.08)]"
                  >
                    <p className="font-display text-2xl font-semibold text-slate-950">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-7 space-y-4">
                {heroSupport.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.45rem] border border-slate-200 bg-white/90 p-4 shadow-[0_12px_28px_rgba(148,163,184,0.08)]"
                  >
                    <h3 className="font-display text-xl font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </aside>

            <div className="w-full space-y-4 overflow-hidden rounded-[2rem] border border-white/85 bg-white/70 p-3 shadow-[0_30px_90px_rgba(148,163,184,0.16)] backdrop-blur-xl sm:rounded-[2.6rem] sm:p-6">
              <div
                className={"relative min-h-[20rem] overflow-hidden rounded-[1.7rem] border border-white/90 bg-gradient-to-br " + activeSlide.surface + " p-4 sm:min-h-[26rem] sm:rounded-[2rem] sm:p-6 lg:min-h-[30rem]"}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_58%)]" />
                <div className="absolute left-4 top-4 z-20 flex flex-wrap items-center gap-2 sm:left-6 sm:top-6">
                  <span
                    className={"rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] " + activeSlide.badge}
                  >
                    {activeSlide.brand}
                  </span>
                  <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Service Ready
                  </span>
                </div>

                <div className="pointer-events-none absolute left-4 top-1/2 hidden w-40 -translate-y-1/2 md:block xl:left-8 xl:w-52">
                  <div className="rounded-[1.7rem] border border-white/70 bg-white/45 p-4 shadow-[0_18px_40px_rgba(148,163,184,0.12)] backdrop-blur">
                    <img
                      src={previousSlide.image}
                      alt={previousSlide.name}
                      className="h-32 w-full object-contain opacity-40 xl:h-40"
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute right-4 top-1/2 hidden w-40 -translate-y-1/2 md:block xl:right-8 xl:w-52">
                  <div className="rounded-[1.7rem] border border-white/70 bg-white/45 p-4 shadow-[0_18px_40px_rgba(148,163,184,0.12)] backdrop-blur">
                    <img
                      src={nextSlide.image}
                      alt={nextSlide.name}
                      className="h-32 w-full object-contain opacity-40 xl:h-40"
                    />
                  </div>
                </div>

                <div className="relative mx-auto flex min-h-[16rem] max-w-4xl items-center justify-center sm:min-h-[22rem] lg:min-h-[28rem]">
                  {heroSlides.map((slide, index) => (
                    <img
                      key={slide.name}
                      src={slide.image}
                      alt={slide.name}
                      className={
                        "absolute inset-0 m-auto h-[68%] w-[86%] object-contain drop-shadow-[0_24px_40px_rgba(15,23,42,0.16)] transition-all duration-700 sm:h-[72%] lg:h-[76%] " +
                        (index === currentSlide
                          ? 'float-slow translate-y-0 scale-100 opacity-100'
                          : 'translate-y-4 scale-95 opacity-0')
                      }
                    />
                  ))}
                </div>

                <div className="absolute inset-x-4 bottom-4 z-20 flex flex-col gap-4 sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="rounded-[1.3rem] border border-white/80 bg-white/82 px-4 py-4 text-left shadow-[0_16px_36px_rgba(148,163,184,0.14)] backdrop-blur-xl sm:max-w-sm sm:px-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Supported Range
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                      {activeSlide.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Built into the website as part of the supported model lineup for service and spare requests.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-2 shadow-[0_12px_30px_rgba(148,163,184,0.12)] backdrop-blur-xl">
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.name}
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        aria-label={"Show " + slide.name}
                        className={
                          'h-3 rounded-full transition-all duration-300 ' +
                          (index === currentSlide ? 'w-10 bg-slate-950' : 'w-3 bg-slate-300 hover:bg-slate-400')
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroActions.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={action.onClick}
                    className={
                      'group relative min-h-[5.1rem] overflow-hidden rounded-[1.55rem] border px-5 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.14)] ' +
                      action.surface
                    }
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.26),_transparent_42%)] opacity-80" />
                    <div className="relative flex h-full items-center justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold tracking-[0.04em] sm:text-xl">
                        {action.label}
                      </h3>
                      <span
                        className={
                          'h-3 w-3 rounded-full transition duration-300 ' +
                          (action.active ? action.indicator : 'bg-slate-400/35')
                        }
                      />
                    </div>
                    <div
                      className={
                        'absolute bottom-0 left-0 h-1 w-full origin-left rounded-full transition duration-300 ' +
                        (action.active
                          ? 'scale-x-100 ' + action.rail
                          : 'scale-x-0 group-hover:scale-x-100 ' + action.rail)
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="brands" className="reveal scroll-mt-24 pt-6 pb-8 sm:pt-8 sm:pb-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                Supported Brands
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold text-slate-950 sm:text-4xl">
                Brands we support for service and spare enquiries.
              </h2>
            </div>
          </div>

          <div className="brand-marquee mt-6">
            <div className="brand-marquee-track">
              {[0, 1].map((row) => (
                <div key={row} className="brand-marquee-group">
                  {scooterCatalog.map((group) => (
                    <button
                      key={row + '-' + group.brand}
                      type="button"
                      onClick={() => openModels(group.brand)}
                      className="group w-[14rem] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/90 bg-white/92 p-3 text-left shadow-[0_18px_50px_rgba(148,163,184,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(148,163,184,0.22)] sm:w-[16.5rem] sm:rounded-[1.85rem]"
                    >
                      <div className={'relative overflow-hidden rounded-[1.45rem] border border-white/80 bg-gradient-to-br p-4 ' + group.cardSurface}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.56),_transparent_58%)]" />
                        <img
                          src={group.models[0].image}
                          alt={group.brand}
                          loading="lazy"
                          className="relative z-10 h-36 w-full object-contain transition duration-500 group-hover:scale-[1.05] sm:h-44"
                        />
                      </div>
                      <div className="px-2 pb-2 pt-4 text-center">
                        <h3 className="font-display text-xl font-semibold text-slate-950 sm:text-2xl">
                          {group.brand}
                        </h3>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="reveal scroll-mt-24 pt-6 pb-8 sm:pt-8 sm:pb-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                Services
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                  <span className={'rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ' + item.tagTone}>
                    {item.tag}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-slate-950 sm:text-[1.75rem]">
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

        <section id="why-us" className="reveal scroll-mt-24 pt-6 pb-10 sm:pt-8 sm:pb-12">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Why Choose Us
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
            Unique ideas that make the website feel more professional.
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.8rem] border border-white/90 bg-white/86 p-5 shadow-[0_18px_50px_rgba(148,163,184,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 font-display text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>


        <section id="reviews" className="reveal scroll-mt-24 pt-6 pb-12 sm:pt-8 sm:pb-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                Happy Customers
              </div>
            </div>

            <button
              type="button"
              onClick={toggleReviewForm}
              className="w-full rounded-[1.2rem] bg-[linear-gradient(135deg,_rgba(15,23,42,0.98)_0%,_rgba(30,41,59,0.96)_55%,_rgba(71,85,105,0.92)_100%)] px-5 py-3 text-sm font-semibold tracking-[0.04em] text-white shadow-[0_22px_48px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_60px_rgba(15,23,42,0.22)] sm:w-auto sm:rounded-[1.35rem] sm:px-6 sm:py-4 sm:text-base"
            >
              {showReviewForm ? 'Hide Review Form' : 'Add Review'}
            </button>
          </div>

          {showReviewForm ? (
            <div className="mt-8 w-full max-w-3xl">
              <form
                onSubmit={handleReviewSubmit}
                className="review-form-shell reveal rounded-[2.1rem] border border-white/90 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96)_0%,_rgba(255,251,235,0.92)_42%,_rgba(240,253,250,0.92)_100%)] p-6 shadow-[0_24px_65px_rgba(148,163,184,0.16)] backdrop-blur-xl sm:p-8"
              >
                  <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                    <div className="w-full max-w-md">
                      <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Review Form
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                        Share your service experience in a cleaner way.
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        Add your name and feedback below. Your review will appear in the happy customers flow after submission.
                      </p>
                    </div>


                  </div>

                  <div className="relative z-10 mt-7 space-y-4">
                    <label className="review-field block">
                      <span className="review-field-label">Customer Name</span>
                      <span className="mt-3 block text-base font-semibold text-slate-950">Your Name</span>
                      <input
                        type="text"
                        value={reviewName}
                        onChange={(event) => {
                          setReviewName(event.target.value)
                          setReviewSubmitted(false)
                        }}
                        placeholder="Enter your name"
                        className="review-input mt-3"
                      />
                      <span className="mt-3 block text-xs font-medium leading-6 text-slate-500">
                        This name will be visible on your review card.
                      </span>
                    </label>

                    <label className="review-field block">
                      <span className="review-field-label">Customer Review</span>
                      <span className="mt-3 block text-base font-semibold text-slate-950">Your Experience</span>
                      <textarea
                        rows="6"
                        value={reviewText}
                        onChange={(event) => {
                          setReviewText(event.target.value)
                          setReviewSubmitted(false)
                        }}
                        placeholder="Tell us about your service experience, support quality, or overall satisfaction"
                        className="review-input review-input-textarea mt-3"
                      />
                      <span className="mt-3 block text-xs font-medium leading-6 text-slate-500">
                        A short and honest review works best for the live customer flow.
                      </span>
                    </label>
                  </div>

                  <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="review-chip">Live on page</span>
                      <span className="review-chip">Name visible</span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={closeReviewForm}
                        className="rounded-full border border-slate-200 bg-white/92 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(148,163,184,0.1)] transition duration-300 hover:border-slate-300 hover:text-slate-950"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition duration-300 hover:bg-slate-800"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>

                  {reviewSubmitted ? (
                    <div className="relative z-10 mt-5 rounded-[1.3rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-700">
                      Your review has been added to the happy customers section.
                    </div>
                  ) : null}
              </form>
            </div>
          ) : null}

          <div className="mt-8 space-y-4">
              {reviewRows.map((row, rowIndex) => (
                <div key={rowIndex} className="review-marquee">
                  <div
                    className={
                      'review-marquee-track ' +
                      (rowIndex === 1 ? 'review-marquee-track-reverse' : '')
                    }
                    style={{ '--review-duration': `${Math.max(24, row.length * 6)}s` }}
                  >
                    {[0, 1].map((copy) => (
                      <div key={copy} className="review-marquee-group">
                        {row.map((review) => (
                          <article
                            key={`${copy}-${review.id}`}
                            className="review-card w-[17rem] shrink-0 rounded-[1.6rem] border border-white/90 bg-white/88 p-4 shadow-[0_18px_48px_rgba(148,163,184,0.12)] backdrop-blur-xl sm:w-[20rem] sm:rounded-[1.8rem] sm:p-5"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                  Customer Review
                                </p>
                                <h3 className="mt-2 font-display text-xl font-semibold text-slate-950">
                                  {review.name}
                                </h3>
                              </div>
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-lg font-semibold text-white">
                                {review.name.charAt(0)}
                              </div>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-slate-600">
                              {review.text}
                            </p>
                          </article>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </section>

        <footer id="footer" className="rounded-[2.2rem] border border-white/90 bg-[linear-gradient(180deg,_rgba(15,23,42,0.97)_0%,_rgba(30,41,59,0.96)_100%)] px-6 py-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)]">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.28fr_0.36fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                KITS EV MULTIBRANDS
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                Professional EV scooter service and spares presentation.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                Built to showcase supported brands, workshop services, and customer trust in one cleaner premium layout.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Quick Links
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {navigationLinks.map((item) => (
                  <button
                    key={item.label + '-footer'}
                    type="button"
                    onClick={item.onClick}
                    className="rounded-full border border-slate-700 bg-slate-900/55 px-4 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:border-slate-500 hover:bg-slate-800/80"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => openModels()}
                  className="rounded-full border border-slate-700 bg-slate-900/55 px-4 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:border-slate-500 hover:bg-slate-800/80"
                >
                  Models
                </button>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Supported Brands
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {scooterCatalog.map((group) => (
                  <span
                    key={group.brand + '-footer'}
                    className="rounded-full border border-slate-700 bg-white/6 px-4 py-2 text-sm font-semibold text-slate-100"
                  >
                    {group.brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm text-slate-400">
            <p>Copyright {currentYear} KITS EV MULTIBRANDS. All rights reserved.</p>
            <p>EV scooter models, services, reviews, and support showcase.</p>
          </div>
        </footer>
      </div>

      {showModels ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-6 backdrop-blur-md"
          onClick={() => setShowModels(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="models-dialog-title"
            onClick={(event) => event.stopPropagation()}
            className="reveal relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/85 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96)_0%,_rgba(255,251,235,0.96)_46%,_rgba(240,253,250,0.96)_100%)] shadow-[0_32px_90px_rgba(15,23,42,0.24)]"
          >
            <div className="absolute inset-x-10 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.26),_transparent_66%)] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-32 w-32 bg-[radial-gradient(circle,_rgba(45,212,191,0.24),_transparent_68%)] blur-3xl" />

            <div className="relative max-h-[calc(100vh-3rem)] overflow-y-auto p-5 sm:p-7 lg:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-700">
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

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {scooterCatalog.map((group, index) => {
                  const isActive = selectedBrand === group.brand

                  return (
                    <button
                      key={group.brand}
                      type="button"
                      onClick={() => setSelectedBrand(group.brand)}
                      style={{ animationDelay: `${index * 60}ms` }}
                      className={`reveal rounded-[1.5rem] border px-4 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                        isActive
                          ? group.active
                          : `${group.idle} shadow-[0_14px_30px_rgba(148,163,184,0.12)]`
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] font-display text-sm font-semibold ${
                            isActive ? 'bg-white/15 text-white' : 'bg-slate-950 text-white'
                          }`}
                        >
                          {group.mark}
                        </div>
                        <div className="min-w-0">
                          <p
                            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                              isActive ? 'text-white/70' : 'text-slate-500'
                            }`}
                          >
                            EV Brand
                          </p>
                          <p className="mt-1 font-display text-base font-semibold">
                            {group.brand}
                          </p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-white/90 bg-white/82 px-5 py-4 shadow-[0_16px_36px_rgba(148,163,184,0.12)] backdrop-blur-xl">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Supported Range
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-slate-950">
                    {selectedGroup.brand}
                  </h3>
                </div>
                <div
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${selectedGroup.tag}`}
                >
                  {selectedGroup.models.length} Variants
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                      <h4 className="mt-2 font-display text-xl font-semibold leading-snug text-slate-950">
                        {model.name}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  )
}

export default App


