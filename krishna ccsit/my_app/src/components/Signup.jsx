import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h1>Sign up</h1>
          <TextField label="usernme" variant="outlined"></TextField><br /><br />
          <TextField label="password" variant="outlined"></TextField><br/><br/>
          <Button variant="contained">SUBMIT</Button>
          <Button variant="contained">RESET</Button>

       
        </div >
) }

export default Signup