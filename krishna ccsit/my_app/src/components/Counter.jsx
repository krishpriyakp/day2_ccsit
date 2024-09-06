import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const submitHandler = () => {
        setCounter(counter+1)
    }
    const submitHandler1 = () => {
        setCounter(counter - 1)
    }
    return (
      <div>
            <Typography variant='h4'>COUNT { counter}</Typography>
          
          <Button variant="contained" onClick={submitHandler}>ADD</Button>
          &nbsp;
          <Button variant="contained"onClick={submitHandler1}>SUB</Button>
          
    </div>
  )
}

export default Counter