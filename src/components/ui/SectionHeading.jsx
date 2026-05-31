import Reveal from './Reveal'
import Icon from './Icon'

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  light = false,
  className = '',
}) {
  const isCenter = align === 'center'
  return (
    <div
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? 'text-emerald-400' : ''}`}>
            <Icon.leaf className="w-4 h-4" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`display mt-4 text-4xl sm:text-5xl font-extrabold text-balance ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-lg leading-relaxed text-pretty ${
              light ? 'text-white/70' : 'text-slate'
            } ${isCenter ? 'mx-auto' : ''}`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  )
}
