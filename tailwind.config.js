/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.ejs', './views/**/*.ejs'],
  theme: {
    extend: {
      colors:{
        primary : '#efab23',
        secondary : '2b2d42',
      }
    },
  },
  plugins: [],
}
