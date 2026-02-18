/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Dark Lime-Green Scale ───────────────────────────── */
        'bg-base':       '#0d1a0d',   // deepest background
        'bg-surface':    '#112211',   // card / panel surface
        'bg-elevated':   '#162916',   // slightly lifted surface
        'lime-muted':    '#1a3d1a',   // subtle fills / inactive
        'lime-border':   '#2d5a2d',   // border tint
        'lime-darker':   '#1a3c0f',   // legacy compat
        'lime-dark':     '#2f6a0f',   // legacy compat
        'lime-main':     '#4ade80',   // bright lime accent
        'lime-hover':    '#22c55e',   // deeper lime on hover

        /* ── Champagne Gold Scale ───────────────────────────── */
        'gold':          '#F7E7CE',   // primary champagne gold
        'gold-dark':     '#e0c9a6',   // hover / pressed state
        'gold-deep':     '#c9a96e',   // shadows, borders, deep accents
        'gold-subtle':   'rgba(247, 231, 206, 0.12)', // glass tint

        /* ── Text Scale ─────────────────────────────────────── */
        'text-primary':  '#F0EDE6',   // warm off-white
        'text-secondary':'#A8B89A',   // muted sage-green
        'text-muted':    '#5a7a5a',   // very muted green-grey

        /* ── Legacy slate (keep for any unreplaced references) ─ */
        'slate-950':     '#020617',
        'slate-900':     '#0f172a',
        'slate-800':     '#1e293b',
      },

      /* ── Box Shadows ─────────────────────────────────────── */
      boxShadow: {
        /* Champagne gold glows */
        'gold-glow':    '0 0 24px rgba(247, 231, 206, 0.18), 0 4px 16px rgba(247, 231, 206, 0.10)',
        'gold-glow-lg': '0 0 48px rgba(247, 231, 206, 0.22), 0 8px 32px rgba(247, 231, 206, 0.14)',
        /* Lime accent glow */
        'lime-glow':    '0 0 20px rgba(74, 222, 128, 0.25)',
        /* General dark card shadow */
        'card':         '0 4px 24px rgba(0, 0, 0, 0.45)',
        /* Inset glow for inputs on focus */
        'input-focus':  '0 0 0 3px rgba(247, 231, 206, 0.12)',
      },

      /* ── Border Radius ───────────────────────────────────── */
      borderRadius: {
        'xl-2': '1.5rem',   // legacy alias
        'xl':   '1rem',
        '2xl':  '1.5rem',
        '3xl':  '2rem',
      },

      /* ── Typography ──────────────────────────────────────── */
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['DM Sans', 'Helvetica Neue', 'sans-serif'],
        sans:    ['DM Sans', 'Helvetica Neue', 'sans-serif'],
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.8rem, 8vw, 5rem)',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem,   5vw, 3rem)',   { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.4rem, 3vw, 1.8rem)', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'label':      ['0.75rem', { lineHeight: '1', letterSpacing: '0.06em' }],
      },

      /* ── Spacing extras ──────────────────────────────────── */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },

      /* ── Backdrop blur ───────────────────────────────────── */
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },

      /* ── Keyframe animations ─────────────────────────────── */
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)' },
          '50%':      { opacity: '0.6', transform: 'scale(0.85)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center'  },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up':    'fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in':       'fade-in 0.5s ease both',
        'pulse-gold':    'pulse-gold 2s ease-in-out infinite',
        'shimmer':       'shimmer 3.5s linear infinite',
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        'scale-in':      'scale-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
      },
    },
  },
  plugins: [],
}
