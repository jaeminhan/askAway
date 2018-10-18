import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import globalStyles from '../../assets/globalStyles';
// import styles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
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
};

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appFooter}>
        <Toolbar>
            <h3 className={classes.logo}>When's your next travel?</h3>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
// export default Header;