/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins", "sans-serif;"'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.active1': {
          transform: 'rotate(45deg) translate(30%)',
          'background-color': 'black'
        },
        '.active2': {
          transform: 'rotate(-45deg) translate(25%)',
          width: '2rem',
          'background-color': 'black'
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

