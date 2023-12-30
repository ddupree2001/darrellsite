/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
        openSans: ['Open Sans', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
