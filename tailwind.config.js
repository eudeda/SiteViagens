/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins", "sans-serif;"'],
      },
      keyframes: {
        sideLoad: {
          '0%': { width: '0%'},
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}

