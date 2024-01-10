/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Figtree: ['Figtree']
      },
      colors: {
        primary: '#f4d04e',
        secondary: '#808080',
        whity: '#FFFFFF',
        darky: '#121212',
      },
    },
  },
  plugins: [],
}

