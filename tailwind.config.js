const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: '#F8F5E4'
        },
        night: {
          DEFAULT: '#F8F5E4'
        }
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
