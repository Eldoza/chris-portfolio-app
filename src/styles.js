import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  heroSegment : {
    // backgroundImage:"url(images/SeeingSpots_1400x900-1024x658.jpg)",
    // backgroundSize: "cover",
  },
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
  heroText: {
    // width: '80%',
    textAlign: 'center',
    marginBottom: '20px' ,
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
     background:'rgba(255,255,255,0.5)',
     textAlign: 'center',
     padding: '40px',
     marginTop: '-60px',

  },
  footButtons: {
    boxShadow: 'inset 0 0 0 50px white',
  },
  hover: {
    ':hover' : {
      transition: 'transition: color 500ms ease',
    }
  },
})

export default styles
