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
        footer: '#20252F'
       
      },
      fontFamily: {
        'golos': ['"Golos Text VF"' , 'sans-serif'],
      }
    },
  },
  plugins: [],
}

