module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // 'Quick-Contact': "url('./public/images/Quick Contact/background.png')",
      }
    },
  },
  variants: {
    extend: {
      padding:['hover'],
    },
  },
  plugins: [],
}
