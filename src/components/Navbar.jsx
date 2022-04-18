import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  displat:""
})

const Navbar = () => {
  return (
    <AppBar position='stick'>
      <Toolbar>
        Navbar
      </Toolbar>
    </AppBar>
  )
}

export default Navbar