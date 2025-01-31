import React from 'react'
import {Typography } from '@mui/material';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
const contentbar = ({name, date, file}) => {
  return (
    <div className='h-14 shadow-lg grid grid-cols-3 px-5 rounded-lg w-full  bg-white justify-center items-center'>
    <Typography className='col-span-1 text-lg'>{date}</Typography>
    <Typography className='col-span-1  text-md font-thin'>{name}</Typography>
    <Link className='col-span-1 flex justify-center gap-x-4' href={`${file}`} legacyBehavior>

    <IconButton className='w-fit'> 
    <CloudDownloadOutlinedIcon color='primary' />

  </IconButton>
      </Link>
    
  </div>  )
}

export default contentbar