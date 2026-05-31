import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from './Icon'

const variants = {
  primary:
    'bg-emerald-500 text-white shadow-glow hover:bg-emerald-600 focus-visible:ring-emerald-500',
  dark:
    'bg-ink text-white hover:bg-[#1c2636] shadow-soft focus-visible:ring-ink',
  outline:
    'bg-white/0 text-ink border border-ink/15 hover:border-ink/30 hover:bg-ink/[0.03] focus-visible:ring-ink',
  ghost:
    'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus-visible:ring-white',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-7 py-4 text-base',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${variants[variant]} ${sizes[size]} ${className}`

  const inner = (
    <>
      {children}
      {arrow && (
        <Icon.arrow className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  )

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={classes} {...rest}>
          {inner}
        </Link>
      </motion.div>
    )
  }
  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...rest}>
        {inner}
      </motion.a>
    )
  }
  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps} {...rest}>
      {inner}
    </motion.button>
  )
}
