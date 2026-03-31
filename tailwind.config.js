/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bottle-green': {
          DEFAULT: '#006A4E',
          50: '#E6F4F1',
          100: '#CDE9E3',
          200: '#9BD3C7',
          300: '#69BCAA',
          400: '#37A68E',
          500: '#006A4E',
          600: '#005F46',
          700: '#004D39',
          800: '#003B2C',
          900: '#00291F',
          950: '#001A14',
        },
      },
    },
  },
  plugins: [],
}
