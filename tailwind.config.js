/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue', 'cursive'], // Bebas Neue font
      robotoCondensed: ['Roboto Condensed', 'sans-serif'], // Roboto Condensed font
      robotoFlex: ['Roboto Flex', 'sans-serif'], // Roboto Flex font
    },
    extend: {
      
    },
    screens: {
      'mm': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

