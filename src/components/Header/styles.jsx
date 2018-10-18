import globalStyles from '../../assets/globalStyles';

const styles = () => ({
  root: {
    top: 0,
    width: '100%',
    position: 'fixed',
  },
  appHeader: {
    backgroundColor:'#2196f3',
  },
  logo: {
    fontFamily: globalStyles.fontFamily.roboto,
    color: globalStyles.color.white,
    fontSize: 24,
  },
});

export default styles;