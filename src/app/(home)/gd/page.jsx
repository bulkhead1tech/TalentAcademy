"use client"
import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import Soundplay from '@/components/soundplayer';

const page = () => {
  const [show, setshow] = useState(false);
  const [data, setdata] = useState("");
  const [dummy, setDummy] = useState(0); // State to force re-render
  const seconds = useRef(0);
  const minute = useRef(0);
  const intervalRef = useRef(null);

  const counter = () => {

    intervalRef.current = setInterval(() => {
      
      if (seconds.current === 0) {
        if (minute.current === 0) {
          Soundplay();
          clearInterval(intervalRef.current);
        } else {
          minute.current = minute.current - 1;
          seconds.current = 59;
        }
      } else {
        seconds.current = seconds.current - 1;
      }
      setDummy((prev) => prev + 1); // Force re-render
    }, 1000);
  };


  useEffect(() => {
    if (show) {
      counter();
    }
    return () => clearInterval(intervalRef.current);
  }, [show]);

  const handledata = (e) => {
setdata(e.target.value)
   }
   
  const handleminute = (e) => {

      minute.current = e.target.value;}

const toggle =()=>{
  setshow(!show);
}
const handlesubmit = (e) => {
  e.preventDefault();
  setshow(!show);
};


  return (
    <>
    <div className="h-full w-full bg-white   flex justify-center items-center bg-white-600">
  
      {show ? (
            <div className='flex flex-col bg-white justify-center items-center'>
<h1 className='text-7xl font-bold'>{data}</h1><br />
<h5 className='font-bold'>{minute.current}:{seconds.current}</h5><br />


<Button  endIcon={<RefreshIcon/>} onClick={toggle}>Refresh</Button>
         </div>
        ) : (
          <div className="h-full w-full bg-white flex justify-center items-center ">
           <form onSubmit={handlesubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="mb-4">
            <h1 className='text-slate-600 mb-1'>Enter the Topic:</h1>
              <TextField
              className='w-full mb-2'
              onChange={handledata}
          id="outlined-multiline-flexible"
          multiline
          maxRows={4}
        /> 
                    <h1 className='text-slate-600 mb-1'>Enter time:</h1>

        <div className='flex w-1/2 gap-2 justify-center items-center'>

        <TextField
              onChange={handleminute}
          id="outlined-flexible"
          label="Minutes"
          type='number'

        
        /> 
        
     
        </div>

                  </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                onClick={counter}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
 
            </div>
          </form>
 

          </div>
  
          
        )}
    </div>
  </>  )
}

export default page