import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({

  heroTitle: {
    fontFamily: "Allerta Stencil",
    fontSize: '130px',
    textAlign: 'center',
    marginBottom: '65px',
  },
  heroContent: {
    fontFamily: 'Special Elite',
    fontSize: '20px',
    textAlign: 'center',
    // color: '#ffffff',
  },
  heroImage: {
    textAlign: 'center',
  },
  logos: {
    textAlign: 'center',
    padding: '10px',
  },
  footerItems: {
    textAlign: 'center',
    fontFamily: 'Special Elite',
    fontSize: '30px',
    marginTop: '20px',
  },
  dividerTitle: {
    marginTop: '-90px',
  },
  hrefLinks: {
    color: 'teal',
    ':hover .links': {
      'color': 'blue',
    }
  },
  bigHeroContent: {
     background:'rgba(255,255,255,0.6)',
     textAlign: 'center',
     padding: '40px',
     marginTop: '-40px'
  },

})

export default styles
