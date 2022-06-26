import {
  AppBar,
  Toolbar,
  Typography
} from '@mui/material'

export const Header = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant="h5" component="p">
          uSlide
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
