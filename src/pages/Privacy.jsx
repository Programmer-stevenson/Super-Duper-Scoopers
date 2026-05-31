import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Icon from '../components/ui/Icon'
import usePageTitle from '../hooks/usePageTitle'
import { company } from '../data/content'

const LAST_UPDATED = 'May 2026'

const intro =
  'This Privacy Policy explains how Super Duper Scooper collects, uses, and protects your information when you visit our website or use our dog waste removal and lawn protection services in West Jordan, Utah and the surrounding Salt Lake Valley.'

const sections = [
  {
    heading: '1. Information we collect',
    paragraphs: ['We collect information you provide and a limited amount of technical data, including:'],
    list: [
      'Contact details — your name, email address, phone number, and service address.',
      'Service details — the number of dogs, yard size, visit frequency, add-ons, and any quote selections you make.',
      'Payment information — processed securely by our third-party payment processor; we do not store full card numbers.',
      'Website usage — basic analytics such as pages visited and device type, used to improve the site.',
    ],
  },
  {
    heading: '2. How we use your information',
    paragraphs: ['We use your information to:'],
    list: [
      'Provide, schedule, and confirm your service visits.',
      'Generate quotes and process billing and payments.',
      'Send service-related messages such as visit confirmations and account notices.',
      'Respond to your questions and provide customer support.',
      'Improve our website, services, and routes.',
    ],
  },
  {
    heading: '3. Text messages and email',
    paragraphs: [
      'With your consent, we send service-related texts and emails, including quotes, visit confirmations, and reminders. We may also send occasional promotions. You can opt out of marketing messages at any time by replying STOP to a text or using the unsubscribe link in an email. Service-related messages may continue while you have active service.',
    ],
  },
  {
    heading: '4. How we share information',
    paragraphs: [
      'We do not sell your personal information. We share it only with trusted service providers who help us operate — such as payment processors, scheduling and communication tools, and analytics providers — and only as needed to provide our services. We may also disclose information if required by law or to protect our rights, customers, or staff.',
    ],
  },
  {
    heading: '5. Cookies and analytics',
    paragraphs: [
      'Our website may use cookies and similar technologies to remember preferences and understand how the site is used. You can control cookies through your browser settings; disabling them may affect some site features.',
    ],
  },
  {
    heading: '6. Data retention and security',
    paragraphs: [
      'We keep your information for as long as needed to provide services, comply with our legal obligations, resolve disputes, and enforce our agreements. We use reasonable administrative and technical safeguards to protect your information, though no method of transmission or storage is completely secure.',
    ],
  },
  {
    heading: '7. Your choices and rights',
    paragraphs: [
      'You may request to access, correct, or delete the personal information we hold about you, and you may opt out of marketing communications at any time. To make a request, contact us using the details below. We will respond as required by applicable Utah and federal law.',
    ],
  },
  {
    heading: '8. Children’s privacy',
    paragraphs: [
      'Our services and website are intended for adults. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, please contact us so we can remove it.',
    ],
  },
  {
    heading: '9. Third-party links',
    paragraphs: [
      'Our site may link to third-party sites or services (for example, social media or payment pages). We are not responsible for the privacy practices of those third parties, and we encourage you to review their policies.',
    ],
  },
  {
    heading: '10. Governing law',
    paragraphs: [
      'This Privacy Policy is governed by the laws of the State of Utah, without regard to its conflict-of-laws rules.',
    ],
  },
  {
    heading: '11. Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. Material changes will be posted on this page with a new "last updated" date.',
    ],
  },
]

export default function Privacy() {
  usePageTitle(
    'Privacy Policy — Super Duper Scooper',
    'How Super Duper Scooper collects, uses, and protects your information for dog waste removal and lawn services in West Jordan, Utah.',
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
              Privacy Policy
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
                {s.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate">
                    {s.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <p className="mt-12 rounded-2xl border border-ink/5 bg-canvas p-5 text-sm leading-relaxed text-slate">
            Privacy questions or requests? Contact us at{' '}
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
