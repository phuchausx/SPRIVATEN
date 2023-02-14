/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}