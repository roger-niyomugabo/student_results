/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body : ['Nunito']
      },
      colors: {
        primary: '#f3e8ff',
        backblue: '#029DDD',
        darkblue: '#036F9D'
      }
    },
  },
  plugins: [],
}
