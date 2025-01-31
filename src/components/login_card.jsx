"use client"
import React, { useState, useContext } from 'react'
import { FormControlLabel, Grow } from '@mui/material'
import {Button} from '@mui/material'
import { TextField, Box } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { AppContext } from './appcontext'
import IconButton from '@mui/material/IconButton';

const login_card = () => {
    const [checked, setChecked] = useState(false);
    const { setIsAdmin } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === process.env.NEXT_PUBLIC_ADMIN && password === process.env.NEXT_PUBLIC_PASS) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    };
   
   
   const handleChange = () => {
      setChecked((prev) => !prev);
    };
  return (<>
     <FormControlLabel
        control={ <IconButton className='bg-black' onClick={handleChange}><ArrowUpwardIcon className='text-yellow-400' /></IconButton>
    }
      />
      <Grow direction="up" in={checked} mountOnEnter unmountOnExit>
    <div  className='  mr-10 rounded-lg flex justify-center items-center ease-in-out bg-custom-white backdrop-blur-md '> 
    <Box className='p-5'
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    label="Username"
                    variant="outlined"
                    color='black'
                />
                <TextField
                    required
                    value={password}
                    label="Password"
                    color='black'
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    variant="outlined"
                />
                <Button variant="contained" className='bg-black text-yellow-400 w-full' type="submit">
                    Submit
                </Button>
            </Box>
    
    </div>

    </Grow>
    </>
  )
}

export default login_card