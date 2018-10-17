import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../assets/theme';

import LandingContainer from '../containers/LandingContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Routes = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={LandingContainer} />
          <Footer />
        </div>
      </Router>
    </CssBaseline>
  </MuiThemeProvider>
);

export default Routes;