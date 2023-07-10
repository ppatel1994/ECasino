/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ec-green': '#091a19',
        'ec-yellow': '#f4b641',
        'ec-light-green': '#15413A',
        'ec-grey' : '#808080',
        'ec-red' : '#FF0000',
        'ec-green-border' : '#142625',
        'ec-green-inner' : '#0B201E'
      },
      animation: {
        'spin': 'spin 0.7s linear'
      }
    },
  },
  plugins: [],
}

