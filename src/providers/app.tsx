import React from 'react'
import {
  ThemeProvider,
  CssBaseline,
  CircularProgress
} from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { theme } from '@/themes'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<CircularProgress/>}>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Router>{children}</Router>
        </HelmetProvider>
      </ThemeProvider>
    </React.Suspense>
  )
}
