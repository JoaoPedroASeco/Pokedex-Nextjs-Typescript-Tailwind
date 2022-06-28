/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: 'Popins, sans-serif',
      },
      fontWeight: {
        black: 'black'
      }
    },
  },
  plugins: [],
}
