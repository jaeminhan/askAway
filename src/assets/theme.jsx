import { createMuiTheme } from '@material-ui/core';
import globalStyles from './globalStyles';

export default createMuiTheme({
  palette: {
    text: {
      primary: globalStyles.color.black,
    },
    background: {
      default: globalStyles.color.white,
    },
  },
  typography: {
    useNextVariants: true,
    fontSize: 12,
    fontFamily:
      '-apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
});
