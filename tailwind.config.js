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
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      maxWidth: {
        main: '1400px'
      }
    },
  },
  plugins: [],
}
