import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../assets/theme';

import LandingContainer from '../containers/LandingContainer';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

const Routes = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <Router>
        <React.Fragment>
          <Header />
          <Route path="/" component={LandingContainer} />
          <Footer />
        </React.Fragment>
      </Router>
    </CssBaseline>
  </MuiThemeProvider>
);

export default Routes;