/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'system-ui', 'sans-serif']
      },
      colors: {
        'light-red': '#ffe7e7',
        red: '#ef1f4d',
        'bold-red': '#9b1c3d',
        'black-red': '#5a0b1f',
        black: '#2d2a32'
      }
    },
  },
  plugins: [],
}
