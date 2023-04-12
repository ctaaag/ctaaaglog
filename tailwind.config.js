const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: '#F2E3DB'
        },
        night: {
          DEFAULT: '#F2E3DB'
        }
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
