import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import globalStyles from '../../assets/globalStyles';
// import styles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  logo: {
    fontFamily: globalStyles.fontFamily.roboto,
    color: 'tomato',
    fontSize: 24,
  },
};

const Header = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
            <h3 className={classes.logo}>askAway</h3>
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