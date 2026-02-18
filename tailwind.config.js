/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime-darker': '#1a3c0f',      // very dark lime base
        'lime-dark':   '#2f6a0f',      // dark lime for backgrounds/nav
        'lime-main':   '#65a30d',      // primary accent
        'lime-hover':  '#84cc16',
        'gold':        '#d4af37',      // golden accents
        'gold-dark':   '#b8860b',
        'slate-950':   '#020617',
        'slate-900':   '#0f172a',
        'slate-800':   '#1e293b',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.4)',
      },
      borderRadius: {
        'xl-2': '1.5rem',
      },
    },
  },
  plugins: [],
}
