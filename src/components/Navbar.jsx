import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { nav, company } from '../data/content'
import Button from './ui/Button'
import Icon from './ui/Icon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // "Areas" link: go to the Contact page, then ease down to the service-area
  // section. Retries briefly so it still works while the page is transitioning in.
  const scrollToServiceArea = (tries = 0) => {
    const el = document.getElementById('service-area')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else if (tries < 12) setTimeout(() => scrollToServiceArea(tries + 1), 120)
  }

  const goToAreas = () => {
    setOpen(false)
    navigate('/contact')
    setTimeout(() => scrollToServiceArea(), 300)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`bg-gradient-to-r from-emerald-100/90 via-emerald-50/85 to-emerald-100/90 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'border-b border-emerald-600/10 shadow-[0_6px_24px_-12px_rgba(6,95,70,0.25)]'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="max-w-site container-px flex h-[72px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" aria-label={company.name}>
            <img
              src="/assets/logo-badge.png"
              alt=""
              className="h-12 w-12 object-contain drop-shadow-sm"
            />
            <span className="block leading-tight">
              <span className="block font-display text-[15px] font-extrabold tracking-tightest text-ink sm:text-[17px]">
                Super Duper Scooper
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-600">
                Waste Removal + Lawn Care
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[15px] font-semibold transition-colors ${
                    isActive ? 'text-ink' : 'text-slate hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={goToAreas}
              className="relative px-4 py-2 text-[15px] font-semibold text-slate transition-colors hover:text-ink"
            >
              Areas
            </button>
          </div>

          <div className="hidden md:block">
            <Button to="/contact" size="sm" arrow>
              Get Free Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <Icon.close className="w-6 h-6" /> : <Icon.menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] z-40 bg-canvas md:hidden"
          >
            <motion.div
              className="container-px flex flex-col items-center gap-1 pt-8 text-center"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            >
              {nav.map((item) => (
                <motion.div
                  key={item.to}
                  className="w-full"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-2xl px-5 py-4 text-center font-display text-2xl font-bold tracking-tight ${
                        isActive ? 'bg-emerald-50 text-forest' : 'text-ink'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                className="w-full"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <button
                  type="button"
                  onClick={goToAreas}
                  className="block w-full rounded-2xl px-5 py-4 text-center font-display text-2xl font-bold tracking-tight text-ink"
                >
                  Areas
                </button>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <Button to="/contact" size="lg" arrow>
                  Get Free Quote
                </Button>
                <a
                  href={company.phoneHref}
                  className="flex items-center justify-center gap-2 text-slate"
                >
                  <Icon.phone className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold">{company.phone}</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}