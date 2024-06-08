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
  plugins: [],
}}

