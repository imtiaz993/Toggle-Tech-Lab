module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'dual': ['Dual'],
      'body': ['Montserrat']
    },
    fontSize: {
      'sm':'14px',
      'base': '18px',
      'lg': '16px',
      'md':'24px',
      'xl': '22px',
      '2xl': '48px',
      '3xl': '64px',
      '4xl': '77px',
    },
    extend: {
      colors: {
        'gold': '#FFC815',
        'grey':'#999999',
        'dark':'#171719',
        'lighter-grey':'#090909',
        'light-grey':'#3C3C3C',
        'dark-grey':'#404040',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(136.04deg, #131313 0.89%, rgba(8, 8, 8, 0) 100.93%)',
        'navbar-gredient': 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
      },
      boxShadow: {
        'custom': '0px 25px 50px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        'screen-2xl': '1720px',
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
