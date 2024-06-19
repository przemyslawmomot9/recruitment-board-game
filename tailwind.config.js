/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-grey': '#EDC7B7',
        'light-cream': '#EEE2DC',
        'light-cream-dark': '#BEB5B0',
        pink: '#AC3B61',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
