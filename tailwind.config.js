/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '1rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {},
  },
  plugins: [],
}

