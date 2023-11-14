/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        signika: ['Signika', 'sans-serif'],
      },
      colors: {
        background: '#E7EAF6',
        title: '#52525b',
      },
    },
  },
  plugins: [],
}
