/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: { md: {max: '1050px'}, sm: {max: '550px'}},
    extend: {
      colors: {
        black: "#222222",
        primary: '#008000',
        gray: '#444444',
        gray1: '#F1F1F1',
        blue_gray: '#585981'
      },
      fontFamily: { sourcesanspro: 'Source Sans Pro', inter: 'Inter', poppins: 'Poppins', montserrat: 'Montserrat'},
      backgroundImage: {
        gradient2: "linear-gradient(180deg, #8bff79,#f0fff2)"
      }
    },
  },
  plugins: [],
}

