/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'logo': '3.5rem',
      },
      width: {
        'logo': '3.5rem',
      },
      colors: {
        primary: '#F55A36',
        footer: '#20252F',
        gray: '#42444C',
        sgray: '#707176',
        ssgray: '#9B9B9B',
        sssgray: '#B9C2D3'
       
      },
      fontFamily: {
        'golos': ['"Golos Text VF"' , 'sans-serif'],
      }
    },
  },
  plugins: [],
}

