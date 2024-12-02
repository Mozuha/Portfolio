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
      main: '#f9e6cc', // '#faebd7'
      dark: '#f9e6cc',
    },
    text: {
      primary: '#2c2217', // 'hsl(0 0% 15%)'
      secondary: '#5f4b32', // '#666'
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
