/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue', 'cursive'], 
      robotoCondensed: ['Roboto Condensed', 'sans-serif'], 
      robotoFlex: ['Roboto Flex', 'sans-serif'], 
    },
    extend: {
      colors: {
        primary: '#F7F7F7', 
        secondary: '#0137FF', 
        accent: '#282828', 
      },
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