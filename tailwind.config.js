/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hedamo-navy': '#1E293B',
        'hedamo-gray': '#F9FAFB',
        'hedamo-charcoal': '#111827',
      },
    },
  },
  plugins: [],
}