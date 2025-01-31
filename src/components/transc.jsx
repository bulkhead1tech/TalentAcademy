import React from 'react'
import {Typography } from '@mui/material';

const transc = ({name, date, amount, credit}) => {
  return (
    <div className='h-14 shadow-lg grid grid-cols-3 px-5 rounded-lg w-full  bg-white justify-center items-center'>
    <Typography className='col-span-1 text-lg'>{date}</Typography>
    <Typography className='col-span-1  text-md font-thin'>{name}</Typography>

    <div className='w-full h-full col-span-1 px-16 flex items-center'>
{credit ? (
<div className='w-full flex justify-start'>
<Typography color='success'>{amount}.00 Cr.</Typography>
</div>
) : (
<div className='w-full flex justify-end'>
<Typography color='error'>{amount}.00 Dr.</Typography>
</div>
)}
</div>
  </div>  )
}

export default transc