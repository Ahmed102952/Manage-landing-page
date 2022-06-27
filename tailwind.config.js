module.exports = {
  content: ['./public/index.html'],
  theme: {
    fontFamily: {
      'beVietnam': ['Be Vietnam Pro', 'sans-serif']
    },
    screens: {
      sm: '40em', // 640px
      md: '59.375em', // 950px
      lg: '75em', // 1200px
      xl: '90em' // 1440px
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        
      },
      gridTemplateColumns: {
        'footer' : '1fr 2fr 1fr',
      }
    },
  },
  plugins: [],
}
