/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        '50': '#f4f2ff',
        '100': '#ece7ff',
        '200': '#dbd3ff',
        '300': '#c0afff',
        '400': '#a282ff',
        '500': '#864fff',
        '600': '#782bfc',
        '700': '#6316db',
        '800': '#5814c3',
        '900': '#4a139f',
        '950': '#2c096c',
      },
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
}