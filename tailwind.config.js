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
      },
      background: {
        rock: '#B69E31',
        ghost: 'rgba(144, 101, 176, 1)',
        psychic: 'rgba(193, 76, 138, 1)',
        electric: 'rgba(203, 145, 47, 1)',
        bug: 'rgba(68, 131, 97, 1)',
        poison: '#A43E9E',
        normal: 'rgba(159, 107, 83, 1)',
        steel: 'rgba(120, 119, 116, 1)',
        flying: '#A891EC',
        fire: '#E29345',
        grass: '#74CB48',
        water: '#6493EB',
      },
      colors: {
        rock: '#B69E31',
        ghost: 'rgba(144, 101, 176, 1)',
        psychic: 'rgba(193, 76, 138, 1)',
        electric: 'rgba(203, 145, 47, 1)',
        bug: 'rgba(68, 131, 97, 1)',
        poison: '#A43E9E',
        normal: 'rgba(159, 107, 83, 1)',
        steel: 'rgba(120, 119, 116, 1)',
        flying: '#A891EC',
        fire: '#E29345',
        grass: '#74CB48',
        water: '#6493EB',
      },
      borderColor: {
        rock: '#B69E31',
        ghost: 'rgba(144, 101, 176, 1)',
        psychic: 'rgba(193, 76, 138, 1)',
        electric: 'rgba(203, 145, 47, 1)',
        bug: 'rgba(68, 131, 97, 1)',
        poison: '#A43E9E',
        normal: 'rgba(159, 107, 83, 1)',
        steel: 'rgba(120, 119, 116, 1)',
        flying: '#A891EC',
        fire: '#E29345',
        grass: '#74CB48',
        water: '#6493EB',
      }
    },
    screens: {
      'desktop-1': {max: '1920px'},
      'desktop-2': {max: '1680px'},
      'desktop-3': {max: '1369px'},
      'desktop-4': {max: '1094px'},
      'desktop-5': {max: '768px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1094px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
