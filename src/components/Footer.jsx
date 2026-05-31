import { Link } from 'react-router-dom'
import { company, nav, serviceAreas } from '../data/content'
import Icon from './ui/Icon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* atmospheric background */}
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[110px]" />

      <div className="relative max-w-site container-px py-16">
        {/* ===== Centered brand block ===== */}
        <div className="flex flex-col items-center text-center">
          {/* Big glowing logo */}
          <Link to="/" aria-label={company.name} className="group relative">
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-500/30 blur-2xl transition-opacity duration-300 group-hover:bg-emerald-400/40" />
            <img
              src="/assets/logo-badge.png"
              alt={company.name}
              className="h-32 w-32 object-contain drop-shadow-[0_8px_24px_rgba(16,185,129,0.35)] transition-transform duration-300 group-hover:scale-105 sm:h-40 sm:w-40"
            />
          </Link>

          <span className="mt-6 font-display text-2xl font-extrabold tracking-tightest sm:text-3xl">
            Super Duper Scooper
          </span>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
            Professional dog waste removal and lawn protection you can trust —
            one clean yard at a time.
          </p>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-2">
            <span className="flex gap-0.5 text-emerald-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon.star key={i} className="w-4 h-4" />
              ))}
            </span>
            <span className="text-sm font-semibold text-white/80">
              4.9 / 5 from 800+ neighbors
            </span>
          </div>

          {/* Nav links */}
          <nav className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-semibold text-white/70 transition-colors hover:text-emerald-400"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm font-semibold text-white/70 transition-colors hover:text-emerald-400"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Contact row */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-emerald-400"
            >
              <Icon.phone className="w-5 h-5 text-emerald-400" />
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-emerald-400"
            >
              <Icon.mail className="w-5 h-5 text-emerald-400" />
              {company.email}
            </a>
            <span className="flex items-center gap-2 text-sm text-white/80">
              <Icon.clock className="w-5 h-5 text-emerald-400" />
              {company.hours}
            </span>
          </div>
        </div>

        {/* ===== Service areas ===== */}
        <div className="mt-12 flex flex-col items-center text-center">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Service Areas
          </h4>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75"
              >
                <Icon.pin className="w-4 h-4 text-emerald-400" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/10 pt-7 text-center">
          <p className="text-xs text-white/40">
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Licensed · Insured · {company.serviceLine}
          </p>
        </div>
      </div>
    </footer>
  )
}