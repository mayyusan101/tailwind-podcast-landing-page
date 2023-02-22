/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'], 
  theme: {
    extend: {
      colors: {
        primary: "#ED7F39",
      },
      backgroundImage: {
       'cta-image': "url('/images/mic.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
