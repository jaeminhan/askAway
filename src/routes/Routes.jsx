import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../assets/theme';

import LandingContainer from '../containers/LandingContainer';

// const theme = createMuiTheme({
//   typography: {
//     useNextVariants: true,
//   },
// });

const Routes = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <Router>
        <Route path="/" exact component={LandingContainer} />
      </Router>
    </CssBaseline>
  </MuiThemeProvider>
);

export default Routes;