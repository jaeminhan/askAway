import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import globalStyles from '../../assets/globalStyles';
// import styles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
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
};

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appHeader}>
        <Toolbar>
            <h3 className={classes.logo}>askAway Header</h3>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
// export default Header;