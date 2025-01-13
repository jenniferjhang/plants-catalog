/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.25rem',
      'md': '0.375rem',
      'lg': '1rem',
      'full': '9999px',
      'large': '12px',
    },
    // colors: {
    //   transparent: 'transparent',
    //   'white': '#ffffff',
    //   'purple': '#3f3cbb',
    //   'midnight': '#121063',
    //   'metal': '#565584',
    //   'tahiti': '#3ab7bf',
    //   'silver': '#ecebff',
    //   'bubble-gum': '#ff77e9',
    //   'bermuda': '#78dcca',
    // },
    extend: {
      fontFamily: {
        display: 'DM Serif Text, ui-serif', // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}

