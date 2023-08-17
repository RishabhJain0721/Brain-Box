/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    'sm': {'min': '576px', 'max': '767px'},
    'md': {'min': '768px', 'max': '991px'},
    'lg': {'min': '992px', 'max': '1199px'},
    'xl': {'min': '1200px'},
  },
}