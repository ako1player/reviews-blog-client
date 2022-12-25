/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      'cobaltBlue': {
        800: '#21368B',
        900: '#18286B'
      },
      'jadeGreen': {
        700: '#91C9BB',
        800: '#169385',
        900: '#017F71'
      }
    }
  },
  plugins: [],
}