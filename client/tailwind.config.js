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
        'ec-yellow-hover' : '#ffa500',
        'ec-light-green': '#15413A',
        'ec-grey' : '#808080',
        'ec-red' : '#FF0000',
        'ec-green-border' : '#142625',
        'ec-green-inner' : '#0B201E',
        'ec-green-footer' : '#142625',
        'ec-light-grey' : '#9ca3af',
        'ec-bright-green' : '#06FA06',
        'ec-cost-green' : '#9CCEC3',
        'ec-fee-green' : '#568076'
      },
      animation: {
        'spin': 'spin 0.7s linear'
      }
    },
  },
  plugins: [],
}

