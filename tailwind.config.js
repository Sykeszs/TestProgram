/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        philadelphian: ['Philadelphian-Gothic', 'serif'],
        dhyana: ['Dhyana', 'serif'],
      },
    },
  },
  plugins: [],
};
