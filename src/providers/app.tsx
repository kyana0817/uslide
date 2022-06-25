import React from 'react'
import {
  ThemeProvider,
  CssBaseline,
  CircularProgress
} from '@mui/material'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<CircularProgress/>}>
      <CssBaseline/>
      <ThemeProvider theme={{}}>
        {children}
      </ThemeProvider>
    </React.Suspense>
  )
}
