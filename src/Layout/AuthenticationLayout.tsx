import { Outlet } from 'react-router-dom'
import {
  Box,
  Grid
} from '@mui/material'

import { Header } from '@/components/Header'
import { Copyright } from '@/components/Footer'

export const AuthenticationLayout = () => {
  return (
    <>
      <Header/>
      <Grid
        container
        justifyContent="center"
      >
        <Outlet/>
      </Grid>
      <Box>
        <Copyright/>
      </Box>
    </>
  )
}
