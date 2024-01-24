/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ['Work Sans']
      },
      colors: {
        primary: '#2f1533',
        secondary: '#f9f0ff',
        whity: '#FFFFFF',
        info: '#8c6991',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}

