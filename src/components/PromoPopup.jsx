import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'
import Icon from './ui/Icon'

// One-time cleanup pricing by yard size.
const ONE_TIME_PRICES = [
  { label: 'Small', price: 50 },
  { label: 'Medium', price: 75 },
  { label: 'Big', price: 100 },
]

// True once the promo has shown during this page load. This module-level flag
// resets only on a full page load/refresh — NOT on client-side navigation
// between pages — so the popup won't re-fire when you return to Home.
let shownThisLoad = false

export default function PromoPopup() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  // Show once per full page load/refresh, a beat after the page comes up.
  // Won't re-show when navigating to Home from another page in the app.
  useEffect(() => {
    if (shownThisLoad) return
    const t = setTimeout(() => {
      shownThisLoad = true
      setOpen(true)
    }, 1400)
    return () => clearTimeout(t)
  }, [])

  // Lock background scroll while the popup is open (it blocks the page).
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const dismiss = () => setOpen(false)

  const claim = () => {
    setOpen(false)
    navigate('/contact', {
      state: {
        quote: {
          summary:
            'the 50% off first-time service offer (one-time cleanups start at $50 small, $75 medium, $100 big)',
        },
      },
    })
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop — click to close */}
          <motion.button
            type="button"
            aria-label="Close offer"
            onClick={dismiss}
            className="absolute inset-0 cursor-default bg-ink/60 backdrop-blur-sm"
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="New customer offer"
            className="relative w-full max-w-[19rem] overflow-hidden rounded-2xl bg-white shadow-lift"
            initial={{ scale: 0.92, y: 18, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            {/* Banner */}
            <div className="relative overflow-hidden bg-forest px-4 py-4 text-center text-white">
              <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/25 blur-2xl" />
              <button
                type="button"
                onClick={dismiss}
                aria-label="Close"
                className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/35 active:scale-95"
              >
                <Icon.close className="h-5 w-5" />
              </button>
              <p className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                New customer offer
              </p>
              <p className="display relative mt-1 text-3xl font-extrabold leading-none">
                50% OFF
              </p>
              <p className="relative text-xs font-semibold text-white/90">
                your first service
              </p>
            </div>

            {/* Body */}
            <div className="px-4 py-4">
              <p className="text-center text-xs leading-relaxed text-slate">
                New here? Your first cleanup is half price — no contracts.
              </p>
              <ul className="mt-3 grid grid-cols-3 gap-1.5 text-center">
                {ONE_TIME_PRICES.map((p) => (
                  <li key={p.label} className="rounded-lg border border-ink/5 bg-canvas py-1.5">
                    <span className="block font-display text-base font-extrabold text-ink">
                      ${p.price}
                    </span>
                    <span className="block text-[10px] text-slate">{p.label}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={claim} size="sm" arrow className="mt-3 w-full">
                Claim 50% off
              </Button>
              <button
                type="button"
                onClick={dismiss}
                className="mt-2 w-full text-center text-xs font-medium text-slate/70 transition hover:text-ink"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}