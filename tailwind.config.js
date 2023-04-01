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
      'base': '17px',
      'lg': '18px',
      'md':'20px',
      'xl': '24px',
      '2xl': '36px',
      '3xl': '48px',
      '4xl': '60px',
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl':'1390px',
      '2xl': '1536px',
      '3xl':'1800px',
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
      width:{
        '100':'450px',
        '110':'470px',
      },
      height:{
        '100':'450px',
        '110':'470px',
      },
      maxWidth: {
       
        'screen-xxl':'1500px',
        'screen-2xl': '1720px',
      },
      lineHeight: {
        '12': '68px',
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
