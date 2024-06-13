/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        'sm-land': {// landscape on mobiles/tablets
          'raw': '(max-height: 640px)' 
        }
      } },
    fontSize: {
      AgH3: '32px'
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      secondaryNine: '#512F2D',
      blackOne: '#D3D2D2'
    },
  },
  plugins: [],
}}

