import { createTheme } from '@mui/material'
import type {} from '@mui/lab/themeAugmentation'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#607d8b'
    },
    secondary: {
      main: '#ffc400'
    }
  },
  typography: {
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: '3.2rem'
    },
    h2: {
      fontSize: '2.4rem'
    },
    h3: {
      fontSize: '1.8rem'
    },
    h4: {
      fontSize: '1.6rem'
    },
    h5: {
      fontSize: '1.3rem'
    },
    h6: {
      fontSize: '1rem'
    },
    body1: {
      fontSize: '1rem'
    },
    button: {
      fontSize: '1rem'
    }
  }
})
