import { createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';

declare module '@mui/material/styles' {
  interface Palette {
    darkGreen: Palette['primary'];
  }

  interface PaletteOptions {
    darkGreen?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#f6d4b1', // '#faebd7'
      dark: '#f6d4b1',
    },
    text: {
      primary: '#525252', // 'hsl(0 0% 15%)'
      secondary: '#666',
    },
    divider: 'rgba(0, 0, 0, 0.48)',
    darkGreen: {
      main: '#346751',
      light: '#478d6f',
    },
  },
  typography: {
    fontFamily: ['Georgia', 'Meiryo UI', 'serif'].join(','),
  },
});

export default theme;
