import { useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Button from '../components/ui/Button'
import Reveal, { stagger, staggerItem } from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Icon from '../components/ui/Icon'
import usePageTitle from '../hooks/usePageTitle'
import { company, serviceAreas } from '../data/content'

const initialForm = { name: '', email: '', phone: '', message: '' }

// Labels used to rebuild a readable message from the quote URL params
// (e.g. if someone refreshes the Contact page and router state is gone).
const DOG_LABELS = { '1': '1 dog', '2': '2 dogs', '3': '3+ dogs' }
const FREQ_LABELS = {
  twice: 'twice a week',
  weekly: 'weekly',
  biweekly: 'every other week',
  monthly: 'once a month',
}

// Build a pre-filled message from the quote calculator, if one was passed.
function buildQuoteMessage(state, params) {
  const quote = state?.quote
  if (quote?.summary) {
    return `Hi! I'd like to get started with this plan from your quote tool: ${quote.summary}.`
  }
  const dogs = params.get('dogs')
  if (dogs) {
    const deo = params.get('deodorize') === 'true'
    const dogLabel = DOG_LABELS[dogs] || `${dogs} dogs`
    const freqLabel = FREQ_LABELS[params.get('frequency')] || params.get('frequency') || 'regular'
    return `Hi! I'd like a quote for ${dogLabel}, ${freqLabel} service${
      deo ? ' with deodorizing spray' : ''
    }.`
  }
  return ''
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  else if (values.name.trim().length < 2) errors.name = 'That name looks too short.'

  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Please enter a valid email address.'

  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.'
  else if (values.phone.replace(/\D/g, '').length < 10)
    errors.phone = 'Please enter a valid 10-digit phone number.'

  if (!values.message.trim()) errors.message = 'Tell us a little about your yard.'
  else if (values.message.trim().length < 10)
    errors.message = 'A few more details would help (10+ characters).'

  return errors
}

const fields = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Jordan Avery', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '(801) 555-0148', autoComplete: 'tel' },
]

function ContactForm() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  // Pre-filled message from the home-page quote calculator (if any).
  const quoteMessage = buildQuoteMessage(location.state, searchParams)

  const [values, setValues] = useState({ ...initialForm, message: quoteMessage })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, phone: true, message: true })
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      // Simulated submission. Swap for your real endpoint / email service.
      await new Promise((res) => setTimeout(res, 1100))
      setStatus('success')
      setValues(initialForm)
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (name) =>
    `w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all placeholder:text-slate/40 focus:ring-4 ${
      errors[name] && touched[name]
        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
        : 'border-ink/10 focus:border-emerald-400 focus:ring-emerald-100'
    }`

  return (
    <div className="rounded-[2rem] border border-ink/5 bg-white p-7 shadow-soft sm:p-9">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
            >
              <Icon.check className="w-9 h-9" />
            </motion.span>
            <h3 className="mt-6 font-display text-2xl font-bold text-ink">
              Request received!
            </h3>
            <p className="mt-3 max-w-sm text-slate">
              Thanks for reaching out. A member of our team will text you a flat
              weekly quote within one business hour.
            </p>
            <Button className="mt-8" variant="outline" onClick={() => setStatus('idle')}>
              Send another request
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            {/* Quote-prefilled confirmation banner */}
            {quoteMessage && (
              <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-forest">
                <Icon.check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span>
                  We've added your quote below — just fill in your details and hit
                  send, and we'll lock it in.
                </span>
              </div>
            )}

            {fields.map((f) => (
              <div key={f.name}>
                <label
                  htmlFor={f.name}
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  placeholder={f.placeholder}
                  value={values[f.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass(f.name)}
                  aria-invalid={Boolean(errors[f.name] && touched[f.name])}
                />
                <AnimatePresence>
                  {errors[f.name] && touched[f.name] && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1.5 text-sm text-red-500"
                    >
                      {errors[f.name]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="I have 2 dogs and a medium backyard in South Jordan. Looking for weekly service..."
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputClass('message')} resize-none`}
                aria-invalid={Boolean(errors.message && touched.message)}
              />
              <AnimatePresence>
                {errors.message && touched.message && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1.5 text-sm text-red-500"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {status === 'error' && (
              <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
                Something went wrong sending your request. Please try again or
                call us at {company.phone}.
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              arrow={status !== 'submitting'}
              className="w-full"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Get my free quote'}
            </Button>
            <p className="text-center text-xs text-slate/70">
              No spam, no contracts. We only use your info to send your quote.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

const contactCards = [
  {
    icon: 'phone',
    label: 'Call or text',
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: 'mail',
    label: 'Email us',
    value: company.email,
    href: company.emailHref,
  },
  {
    icon: 'clock',
    label: 'Hours',
    value: company.hours,
  },
]

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-[72px]">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="relative max-w-site container-px py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          {/* Left: info */}
          <div className="lg:pt-6">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Icon.paw className="w-4 h-4" />
              It's scoopin' time
            </motion.span>
            <motion.h1
              className="display mt-5 text-5xl font-extrabold text-ink sm:text-6xl text-balance"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Let's get your
              <br />
              <span className="text-forest">yard sparkling.</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-md text-lg leading-relaxed text-slate"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Tell us about your yard and we'll send a flat weekly price within
              one business hour. Prefer to talk? Call or text us anytime.
            </motion.p>

            <motion.div
              className="mt-10 grid gap-4 sm:grid-cols-1"
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              {contactCards.map((c) => {
                const Glyph = Icon[c.icon]
                const Inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-soft transition-shadow hover:shadow-lift">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      {Glyph && <Glyph className="w-6 h-6" />}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate/60">
                        {c.label}
                      </p>
                      <p className="font-display text-lg font-bold text-ink">
                        {c.value}
                      </p>
                    </div>
                  </div>
                )
                return (
                  <motion.div key={c.label} variants={staggerItem}>
                    {c.href ? (
                      <a href={c.href} className="block">
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-site container-px">
        <SectionHeading
          eyebrow="Service area"
          title="Neighborhoods we serve"
          lead="We're scooping across West Jordan and the greater Salt Lake Valley — and expanding to new cities every season. Don't see yours? Reach out and we'll let you know when we arrive."
        />
        <motion.div
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {serviceAreas.map((area) => (
            <motion.div
              key={area}
              variants={staggerItem}
              className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-canvas px-5 py-4 text-ink shadow-soft"
            >
              <Icon.pin className="w-5 h-5 shrink-0 text-emerald-500" />
              <span className="font-semibold">{area}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function Contact() {
  usePageTitle(
    'Contact — Super Duper Scooper',
    'Get a free dog waste removal quote in minutes. Call, text, or send a message and our team will respond within one business hour.',
  )
  return (
    <PageTransition>
      <ContactHero />
      <ServiceArea />
    </PageTransition>
  )
}