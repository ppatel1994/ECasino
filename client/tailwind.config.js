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
      },
    },
  },
  plugins: [],
}

