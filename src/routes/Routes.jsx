import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import TopicsContainer from '../containers/TopicsContainer';

const Routes = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <Router history={history}>
        <Route path='/' exact={true} component={TopicsContainer} />
      </Router>
    </CssBaseline>
  </MuiThemeProvider>
)

export default Routes;