import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Premium splash loader featuring the Super Duper Scooper logo.
// Plays on every visit and page refresh.
export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const DURATION = 3900
    let raf

    const tick = (now) => {
      const elapsed = now - start
      // ease-out so the bar decelerates near the end
      const linear = Math.min(1, elapsed / DURATION)
      const eased = 1 - Math.pow(1 - linear, 2)
      setProgress(Math.round(eased * 100))
      if (linear < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setDone(true), 280)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Ambient pulsing glow */}
          <motion.div
            className="pointer-events-none absolute h-[26rem] w-[26rem] rounded-full bg-emerald-500/25 blur-[110px]"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.08, 0.95] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-grid-emerald [background-size:30px_30px] opacity-30 [mask-image:radial-gradient(50%_40%_at_50%_45%,black,transparent)]" />

          <div className="relative flex flex-col items-center">
            {/* Logo card with pop-in + gentle float */}
            <motion.div
              initial={{ scale: 0.78, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.1 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-full shadow-glow"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              >
                <img
                  src="/assets/logo-badge.png"
                  alt="Super Duper Scooper"
                  className="h-48 w-48 select-none sm:h-56 sm:w-56"
                  draggable="false"
                />
                {/* Sweeping shimmer */}
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  initial={{ x: '-120%' }}
                  animate={{ x: '130%' }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut', delay: 0.7 }}
                >
                  <div className="h-full w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              A clean yard · a happy dog
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="mt-7 h-1 w-60 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </motion.div>
            <motion.span
              className="mt-3 text-xs font-medium tabular-nums text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}