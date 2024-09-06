import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateaBasics = () => {
    var [fname, setFname] = useState('krishna')
    var [val, setVal] = useState()
    const handleInput = (e) => {
        console.log(e.target.value)
        setFname(e.target.value)

    }
    const submitHandler = () => {
        console.log("clicked");
        setVal(fname)
    }
    return (
        <div>
            <Typography variant='h4'>welcome {val}</Typography>
            <TextField variant="outlined" label='type your name' onChange={handleInput} />
            <Button variant="cont" onClick={submitHandler}>Click me</Button>

        </div>
    )
}

export default StateaBasics