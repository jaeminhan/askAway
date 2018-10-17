import { createMuiTheme } from '@material-ui/core';
import globalStyles from './globalStyles';

export default createMuiTheme({
  palette: {
    text: {
      primary: '#000000',
    },
    background: {
      default: '#FFFFFF',
    },
    typography: {
      useNextVariants: true,
    },
  },
});
