import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">MY APP</Typography>
          <Link to='/'>
            
        
          <Button variant="contained" color="secondary" >SIGNUP</Button>
          </Link>
          &nbsp;
          <Link to='/login'>
          <Button variant="contained" color="secondary">Login</Button>
          </Link>
          &nbsp;
          <Link to='/S'>


            <Button variant="contained" color="secondary">STATE</Button>
          </Link>
          &nbsp;
          <Link to='/C'>
            <Button variant="contained" color="secondary">COUNTER</Button>
          </Link>
          &nbsp;
          <Link to='/N'>
          <Button variant="contained" color="secondary">NAME</Button>
        </Link>
        &nbsp;
          
          <Link to='/A'>
            <Button variant="contained" color="secondary">API</Button>
          </Link>
          &nbsp;
          <Link to='/P'>
            <Button variant="contained" color="secondary">Pokemon</Button>
          </Link>
          &nbsp;
            
          


        </Toolbar>
        </AppBar>
         

    </div>
  )
  
  
}

export default Navbar