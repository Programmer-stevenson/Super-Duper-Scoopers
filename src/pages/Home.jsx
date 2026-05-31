import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Button from '../components/ui/Button'
import Reveal, { stagger, staggerItem } from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Icon from '../components/ui/Icon'
import usePageTitle from '../hooks/usePageTitle'
import { company, services, whyChoose, serviceAreas } from '../data/content'

// Hero stats — positive, non-rating business proof points.
const heroStats = [
  { value: '500+', label: 'Yards scooped' },
  { value: 'Same-Day', label: 'Free quotes' },
  { value: '100%', label: 'Satisfaction guarantee' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-[72px]">
      {/* atmospheric background */}
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute inset-0 bg-grid-emerald [background-size:26px_26px] opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative max-w-site container-px">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* Copy column */}
          <div>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Icon.leaf className="w-4 h-4" />
              {company.serviceLine}
            </motion.span>

            <motion.h1
              className="display mt-5 text-5xl font-extrabold text-ink sm:text-6xl lg:text-7xl text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              A clean yard.
              <br />
              <span className="text-forest">A happy dog.</span>
            </motion.h1>

            {/* MOBILE-ONLY hero image — sits between the headline and the copy */}
            <motion.div
              className="relative mt-8 lg:hidden"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-emerald-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] shadow-lift ring-1 ring-ink/5">
                <img
                  src="/assets/hero-retriever.png"
                  alt="A happy golden retriever running across a freshly cleaned, healthy green lawn"
                  className="h-auto w-full object-contain"
                />
              </div>
            </motion.div>

            <motion.p
              className="mt-8 max-w-md text-lg leading-relaxed text-slate text-pretty lg:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
            >
              Professional dog waste removal and lawn protection you can trust.
              Reliable visits, photo confirmations, and a 100% satisfaction
              guarantee — without a single contract.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
            >
              <Button to="/contact" size="lg" arrow>
                Get Free Quote
              </Button>
              <Button href={company.phoneHref} size="lg" variant="outline">
                <Icon.phone className="w-5 h-5 text-emerald-600" />
                {company.phone}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.dl
              className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-8"
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              {heroStats.map((s) => (
                <motion.div key={s.label} variants={staggerItem}>
                  <dt className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-sm text-slate">{s.label}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          {/* DESKTOP-ONLY hero image column */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-emerald-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink/5">
              <img
                src="/assets/hero-retriever.png"
                alt="A happy golden retriever running across a freshly cleaned, healthy green lawn"
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-soft ring-1 ring-ink/5 backdrop-blur"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Icon.check className="w-6 h-6" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">
                  Visit complete
                </p>
                <p className="text-xs text-slate">Photo sent · gate secured</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Service area marquee */}
      <div className="relative border-y border-ink/5 bg-white/40 py-5">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...serviceAreas, ...serviceAreas].map((area, i) => (
              <span
                key={i}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-slate/70"
              >
                <Icon.pin className="w-4 h-4 text-emerald-500" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="relative bg-canvas py-24">
      <div className="max-w-site container-px">
        <SectionHeading
          eyebrow="What we do"
          title="Service built around your weekend"
          lead="Pick the plan that fits your yard. Every visit ends with a sanitized, photo-confirmed cleanup so you never have to check our work."
        />

        <motion.div
          className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {services.map((s) => {
            const Glyph = Icon[s.icon]
            return (
              <motion.article
                key={s.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex flex-col rounded-3xl border border-ink/5 bg-white p-5 shadow-soft sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white sm:h-14 sm:w-14">
                  {Glyph && <Glyph className="w-6 h-6 sm:w-7 sm:h-7" />}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink sm:mt-6 sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate sm:mt-3">
                  {s.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function WhyChoose() {
  return (
    <section className="relative bg-canvas py-24">
      <div className="max-w-site container-px">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Why choose us"
              title="The most dependable crew on your street"
              lead="We obsess over the boring details — showing up, communicating, and protecting your home — because that is what makes a service worth keeping."
            />
            <Reveal delay={0.15} className="mt-8">
              <Button to="/about" variant="dark" arrow>
                Meet the team
              </Button>
            </Reveal>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {whyChoose.map((item) => {
              const Glyph = Icon[item.icon]
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="rounded-3xl border border-ink/5 bg-white p-5 shadow-soft sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest/5 text-forest sm:h-12 sm:w-12">
                    {Glyph && <Glyph className="w-6 h-6" />}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink sm:mt-5 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="relative bg-canvas py-24">
      <div className="max-w-site container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest px-8 py-16 text-center shadow-lift sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow text-emerald-300">
                <Icon.paw className="w-4 h-4" />
                It's scoopin' time
              </span>
              <h2 className="display mt-5 text-4xl font-extrabold text-white sm:text-5xl text-balance">
                Ready for a yard you'll actually want to walk in?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-white/80">
                Get a flat weekly price in minutes. No contracts, no surprises —
                just a clean yard and a happy dog.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button to="/contact" size="lg" arrow>
                  Get Free Quote
                </Button>
                <Button href={company.phoneHref} size="lg" variant="ghost">
                  Call {company.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  usePageTitle(
    'Super Duper Scooper — Dog Waste Removal + Lawn Protection',
    'Professional dog waste removal and lawn protection you can trust. Reliable weekly visits, photo confirmations, and a 100% satisfaction guarantee.',
  )
  return (
    <PageTransition>
      <Hero />
      <Services />
      <WhyChoose />
      <FinalCTA />
    </PageTransition>
  )
}