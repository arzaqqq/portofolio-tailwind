/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#14b8a6',
        'dark': 'rgb(15 23 42)',
        'abu': 'rgb(100 116 139)',
        'lingkaran': 'rgb(203 213 225)',
      },
      screens: {
        'xl' : '1320px',
      },
    },
  },
  plugins: [],
}

