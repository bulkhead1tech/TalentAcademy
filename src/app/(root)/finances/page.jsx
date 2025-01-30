"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Transcform from "@/components/transcform"
import { useEffect } from 'react';
import Transaction from "@/components/transc"
import dynamic from 'next/dynamic';
const page = () => {
  const [show, setshow] = useState(false);
  const [credit, setCredit] = useState("none");
  const [data, setdata] = useState([])
  const handleChange = (event) => {
    setCredit(event.target.value);
  };
  useEffect(() => {
    const fetcher=async()=>{ 
    const response =await fetch("/api/transactions");
    const data = await response.json();
    setdata(data)
  }
  fetcher();
   }, [])
  return (
    <div className='h-full w-full flex flex-col justify-start items-center bg-slate-100'> 
    {!show?<><div className='h-16 bg-slate-100 w-full flex justify-end items-center'>
    <Button className='mr-10' variant="contained" onClick={()=>setshow(!show)} startIcon={<AddIcon />}>
  New Transaction
</Button>
<InputLabel  id="demo-select-small-label" className='mr-3'>Filter</InputLabel>
        <Select className='mr-10'
                  labelId="demo-select-small-label"
             id="demo-select-small"
          value={credit}
          onChange={handleChange}
        >
                    <MenuItem value="none">None</MenuItem>

          <MenuItem value={true}>Credit</MenuItem>
          <MenuItem value={false} >Debit</MenuItem>
        </Select>
    </div>
       <Box className="overflow-y-scroll" sx={{ width: '90%', alignItems: 'start' }}>
      <Stack spacing={2}>
      {credit=="none"?<>
      {data.map((data)=>{
         return <Transaction key={data._id} name={data.name} amount={data.amount} credit={data.transactionType} date={data.date.toString().split("T")[0]}/>
      })}
      </>:<>
        {data.filter((data)=>{                  
         return credit===true?data.transactionType:!data.transactionType;
      }).map((data)=>{
         return <Transaction key={data._id} name={data.name} amount={data.amount} credit={data.transactionType} date={data.date}/>
      })
                   }
</>

      }
            </Stack>

    </Box>
</>:<>
<div className='h-16 bg-slate-100 w-full flex justify-end items-center'>
    <Button className='mr-10' onClick={()=>setshow(!show)} variant="contained" startIcon={<ArrowBackOutlinedIcon />}></Button></div>
    <div className='h-full w-full flex items-center justify-center'>
    <Transcform/>
    </div>
</>}
    </div>
  )
}

export default dynamic (() => Promise.resolve(page), {ssr: false})
