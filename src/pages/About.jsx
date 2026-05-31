import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Reveal, { stagger, staggerItem } from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Icon from '../components/ui/Icon'
import { FinalCTA } from './Home'
import usePageTitle from '../hooks/usePageTitle'
import { values, team, heroStats } from '../data/content'

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[72px] text-white">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-80" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="relative max-w-site container-px py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            className="eyebrow text-emerald-400"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Icon.leaf className="w-4 h-4" />
            Our story
          </motion.span>
          <motion.h1
            className="display mt-5 text-5xl font-extrabold sm:text-6xl text-balance"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Started in one backyard.
            <br />
            <span className="text-emerald-400">Built for every neighborhood.</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Super Duper Scooper began when our founder got tired of choosing
            between playing with his dogs and policing the yard. What started as
            a favor for a few neighbors became a service trusted by thousands.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="relative bg-canvas py-24">
      <div className="max-w-site container-px">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-emerald-500/10 blur-2xl" />
              <img
                src="/assets/hero-retriever.png"
                alt="A golden retriever enjoying a clean, healthy backyard lawn"
                className="h-[440px] w-full rounded-[2rem] object-cover shadow-lift ring-1 ring-ink/5"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Why we exist"
              title="A yard should be a place to play"
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate">
              <Reveal delay={0.05} as="p">
                We believe a backyard is for barbecues, bare feet, and dogs doing
                zoomies — not for stepping carefully and holding your breath.
                Pet waste is more than an eyesore; it carries bacteria that
                damages turf and puts kids and pets at risk.
              </Reveal>
              <Reveal delay={0.1} as="p">
                So we built a service obsessed with two things: showing up like
                clockwork, and leaving every yard genuinely cleaner than we found
                it. No long contracts, no hidden fees, no chasing us down.
              </Reveal>
              <Reveal delay={0.15} as="p">
                Today we serve thousands of homes and communities, and we are
                growing city by city — keeping the friendly, neighborly standard
                that started it all.
              </Reveal>
            </div>

            <motion.div
              className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              {heroStats.map((s) => (
                <motion.div key={s.label} variants={staggerItem}>
                  <p className="font-display text-3xl font-extrabold text-forest">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-slate">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-site container-px">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">
            <Icon.heart className="w-4 h-4" />
            Our mission
          </span>
          <p className="display mt-6 text-3xl font-bold leading-snug text-ink sm:text-4xl text-balance">
            To give every family more time in a yard they love — by making pet
            waste removal and lawn protection so reliable you forget it's even a
            chore.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="relative bg-canvas py-24">
      <div className="max-w-site container-px">
        <SectionHeading
          eyebrow="Core values"
          title="What we stand for"
          lead="Four principles guide every route we run and every home we visit."
        />
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {values.map((v) => {
            const Glyph = Icon[v.icon]
            return (
              <motion.div
                key={v.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex gap-5 rounded-3xl border border-ink/5 bg-white p-8 shadow-soft"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  {Glyph && <Glyph className="w-7 h-7" />}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}



export default function About() {
  usePageTitle(
    'About — Super Duper Scooper',
    'Learn the story, mission, and values behind Super Duper Scooper, the dependable dog waste removal and lawn protection service.',
  )
  return (
    <PageTransition>
      <AboutHero />
      <Story />
      <Mission />
      <Values />
      
      <FinalCTA />
    </PageTransition>
  )
}
