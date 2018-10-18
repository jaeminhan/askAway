import globalStyles from '../../assets/globalStyles';

const styles = () => ({
  root: {
    bottom: 0,
    width: '100%',
    position: 'fixed',
  },
  appFooter: {
    backgroundColor:'#2196f3',
  },
  logo: {
    fontFamily: globalStyles.fontFamily.roboto,
    color: globalStyles.color.white,
    fontSize: 24,
  },
});

export default styles;