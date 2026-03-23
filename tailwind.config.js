/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4377B6',
        secondary: '#D5802C',
        accent: '#f5a623',
        brand: '#655e7a'
      }
    }
  },
  plugins: []
};