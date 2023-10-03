import { grey, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7fb3fd',
    },
    secondary: {
      main: '#ffacac',
      light: '#fce2e1'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
