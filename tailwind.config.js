/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime-dark': '#2f6a0f',     // darker lime green base
        'lime-main': '#65a30d',     // primary accent
        'lime-hover': '#84cc16',
        'gold':    '#d4af37',       // golden accent
        'gold-dark': '#b8860b',
        'slate-950': '#020617',
        'slate-900': '#0f172a',
        'slate-800': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
