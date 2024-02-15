/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  darkMode: 'class',
  theme: {
    screens: {
      'mobile-menu': '850px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

