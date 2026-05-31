/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827', // Primary
        forest: '#065F46', // Secondary
        emerald: {
          DEFAULT: '#10B981', // Accent
          50: '#ECFDF5',
          100: '#D1FAE5',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        canvas: '#F9FAFB', // Background
        slate: {
          DEFAULT: '#374151', // Text
          ink: '#374151',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17,24,39,0.04), 0 8px 24px -8px rgba(17,24,39,0.10)',
        lift: '0 24px 48px -16px rgba(6,95,70,0.20)',
        glow: '0 0 0 1px rgba(16,185,129,0.18), 0 12px 40px -8px rgba(16,185,129,0.30)',
      },
      backgroundImage: {
        'grid-emerald':
          'radial-gradient(circle at 1px 1px, rgba(16,185,129,0.10) 1px, transparent 0)',
        'mesh':
          'radial-gradient(60% 60% at 15% 10%, rgba(16,185,129,0.10) 0%, transparent 60%), radial-gradient(50% 50% at 95% 0%, rgba(6,95,70,0.08) 0%, transparent 55%)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
