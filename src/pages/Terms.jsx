import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Icon from '../components/ui/Icon'
import usePageTitle from '../hooks/usePageTitle'
import { company } from '../data/content'

const LAST_UPDATED = 'May 2026'

const intro =
  'These Terms of Service ("Terms") govern your use of the Super Duper Scooper website and the dog waste removal, lawn protection, and related services we provide in West Jordan, Utah and the surrounding Salt Lake Valley. By scheduling service or using our site, you agree to these Terms. Please read them carefully.'

const sections = [
  {
    heading: '1. Services we provide',
    paragraphs: [
      'Super Duper Scooper provides residential and commercial dog waste removal, recurring yard cleanups, one-time cleanups, and optional lawn deodorizing and sanitizing. Prices and estimates shown on our website (including the quote calculator) are estimates only; your final rate is confirmed before your first visit.',
    ],
  },
  {
    heading: '2. Scheduling and yard access',
    paragraphs: [
      'You are responsible for providing safe, unobstructed access to the areas to be serviced on your scheduled day, including unlocking gates and clearing obstacles. We send a confirmation when our technician arrives and again when the visit is complete.',
      'If we cannot access your yard on a scheduled visit due to a locked gate, an unsecured or aggressive dog, or other obstruction, we may skip that visit. Depending on your plan, skipped visits caused by access issues may still be billed.',
    ],
  },
  {
    heading: '3. Pets and safety',
    paragraphs: [
      'For everyone’s safety, please secure dogs that may be aggressive or anxious during our visit. Our technicians may decline or stop a visit if they feel unsafe, and we will contact you to reschedule.',
    ],
  },
  {
    heading: '4. Pricing, discounts, and payment',
    paragraphs: [
      'Recurring service is billed at the rate quoted for your number of dogs and visit frequency. Optional add-ons, such as deodorizing spray, are billed per visit. One-time cleanups are priced by yard size.',
      'First-time customer promotions, including the 50% off offer, apply only to a new customer’s first qualifying visit unless stated otherwise, cannot be combined with other offers, and may be changed or withdrawn at any time. Payment is due per the schedule provided at sign-up.',
    ],
  },
  {
    heading: '5. Cancellations, pauses, and our guarantee',
    paragraphs: [
      'We do not require long-term contracts. You may pause, skip, or cancel recurring service at any time by giving us reasonable advance notice before your next scheduled visit.',
      'We stand behind our work with a satisfaction guarantee: if you are not happy with a cleanup, let us know within 24 hours and we will return to make it right.',
    ],
  },
  {
    heading: '6. Weather and interruptions',
    paragraphs: [
      'Service may be delayed or rescheduled due to severe weather, snow cover, holidays, or circumstances beyond our control. We will communicate changes to your scheduled visit when possible.',
    ],
  },
  {
    heading: '7. Customer responsibilities',
    paragraphs: [
      'You agree to provide accurate information about your property and pets, to keep service areas reasonably accessible, and to notify us of hazards (such as sprinkler schedules, fragile landscaping, or fencing issues) that could affect service.',
    ],
  },
  {
    heading: '8. Disclaimers and limitation of liability',
    paragraphs: [
      'Services are provided on an "as is" and "as available" basis. We are not responsible for pre-existing lawn conditions, normal wear, pet behavior, or damage not caused by our negligence. To the fullest extent permitted by Utah law, our total liability for any claim arising from the services is limited to the amount you paid us for the service giving rise to the claim.',
    ],
  },
  {
    heading: '9. Communications consent',
    paragraphs: [
      'By providing your phone number and email, you consent to receive service-related messages such as quotes, visit confirmations, and account notices. You may opt out of marketing messages at any time; service-related messages may continue while you have active service.',
    ],
  },
  {
    heading: '10. Governing law',
    paragraphs: [
      'These Terms are governed by the laws of the State of Utah, without regard to its conflict-of-laws rules. Any dispute will be brought in the state or federal courts located in Salt Lake County, Utah.',
    ],
  },
  {
    heading: '11. Changes to these Terms',
    paragraphs: [
      'We may update these Terms from time to time. Material changes will be posted on this page with a new "last updated" date. Your continued use of our services after changes take effect means you accept the updated Terms.',
    ],
  },
]

export default function Terms() {
  usePageTitle(
    'Terms of Service — Super Duper Scooper',
    'The terms governing use of Super Duper Scooper dog waste removal and lawn protection services in West Jordan, Utah.',
  )
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-canvas pt-[72px]">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="relative max-w-site container-px py-16">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">
              <Icon.leaf className="w-4 h-4" />
              Legal
            </span>
            <h1 className="display mt-4 text-4xl font-extrabold text-ink sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-slate">
              Last updated {LAST_UPDATED} · Governed by the laws of the State of Utah
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto container-px">
          <p className="text-lg leading-relaxed text-slate">{intro}</p>

          <div className="mt-10 space-y-9">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-slate">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <p className="mt-12 rounded-2xl border border-ink/5 bg-canvas p-5 text-sm leading-relaxed text-slate">
            Questions about these Terms? Contact us at{' '}
            <a className="font-semibold text-emerald-700" href={company.emailHref}>
              {company.email}
            </a>{' '}
            or{' '}
            <a className="font-semibold text-emerald-700" href={company.phoneHref}>
              {company.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </PageTransition>
  )
}
