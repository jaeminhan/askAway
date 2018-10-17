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
  },
});
