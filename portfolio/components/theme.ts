import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#faebd7',
      dark: '#f9e6cc',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
    divider: 'rgba(0, 0, 0, 0.48)',
  },
  typography: {
    fontFamily: [
      'Georgia',
      'serif',
    ].join(','),
  },
})

export default theme