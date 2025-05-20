// tailwind.config.js
const { heroui } = require("@heroui/theme");


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {},
  },

  plugins: [heroui()],
};