import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
  const [val, setVal] = useState()
  const submitHandler = () => {
    setVal("krishna")
  }
  const submitHandler1= () => {
    setVal("fathima")
  }
  const submitHandler2 = () => {
    setVal("amina")
  }
  useEffect(() => {
    submitHandler
  ()}, [])
  

  return (
    
    <div>
      <Typography variant='h4'>Welcome {val}</Typography>
      
      <Button variant="contained" onClick={submitHandler}>krishna</Button>
      &nbsp;
      <Button variant="contained" onClick={submitHandler1}>fathima</Button>
      &nbsp;
      <Button variant="contained" onClick={submitHandler2}>amina</Button> 
       


    
      
    </div>
  )
}

export default Name