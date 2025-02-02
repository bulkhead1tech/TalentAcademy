"use client"
import React from 'react'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'




const attendchart = () => {
    const [date, setdate] = useState("")
    const [user, setuser] = useState([])

    const finder=async()=>{
        try {
            const response = await fetch("/api/fetchat", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ date }),
            });
            const data = await response.json();
            console.log(data.data)
            setuser(data.data)

        } catch (error) {
            console.log(error);
          }
        
    }
  return (
    <div className='h-full w-full flex flex-col justify-center items-center px-5'>
        <div className='h-16 w-full lg:w-4/5 py-2 flex gap-4 justify-center items-center'>
             <TextField
                      label="Date"
                      name="date"
                      type="date"
                      value={date}
                      onChange={(e)=>setdate(e.target.value)}
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className=" "
                      
                    />
                <Button className='py-2 ml-5' onClick={finder}  variant='outlined'>Search</Button>
                   
        </div>
        <div className='w-full h-full flex justify-center'>
        <div className='w-full h-full lg:h-full lg:w-4/5 md:w-4/5 mt-5 p-3 rounded-3xl shadow-lg shadow-slate-300  bg-white overflow-y-scroll no-scrollbar '>
        {user.map(user => (
              <li className='px-5 my-1' key={user._id}>
                {user.user}
              </li>
            ))}</div>

        </div>
    </div>
  )
}

export default attendchart