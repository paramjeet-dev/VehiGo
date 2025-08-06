/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff8ff',
          100: '#dff0ff',
          200: '#b9e2ff',
          300: '#7ccbff',
          400: '#36aeff',
          500: '#0c8eff',
          600: '#0070e1',
          700: '#005ac8',
          800: '#004ba4',
          900: '#003e87',
          950: '#002654',
        }
      }
    },
  },
  plugins: [],
}