/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#DC143C',
          dark: '#B01030',
          light: '#E63E5E',
        },
        gold: {
          DEFAULT: '#FFD700',
          dark: '#DAA520',
          light: '#FFF4CC',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
