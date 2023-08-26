/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... } 
    },
    extend: {
      fontFamily : {
        "font1" : ["Gugi", "Gugi"],
        "font2" : ["Caveat", "Caveat"],
      }
    },
    colors : {
      "primary" : "#F9C982",
      "bgcolor" : "#191919",
      "secondary" : "#B2B2B2",
      "white-color" : "#fff",
      "input" : '#313131' 
    }
  },
  plugins: [],
}