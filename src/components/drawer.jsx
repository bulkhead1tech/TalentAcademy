"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { usePathname } from 'next/navigation';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import { Typography } from '@mui/material';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <div className={` ${isOpen ? 'w-full fixed lg:static md:static h-full lg:h-full md:h-full sm:w-full lg:w-1/4 md:w-1/4' : 'h-full lg:h-full md:h-full w-1/6 lg:w-16 md:w-16'} bg-white shadow-lg z-10 transition-width duration-300 overflow-hidden`}>
      <div className={`flex justify-end p-2 ${isOpen ? "":"px-auto"} `}>
        {isOpen ? (
          <ArrowBackIosNewIcon className='cursor-pointer' onClick={toggleDrawer} />
        ) : (
          <ArrowForwardIosIcon className='cursor-pointer' onClick={toggleDrawer} />
        )}
      </div>
      {isOpen ? (
        <div className='flex flex-col items-center p-1 mt-36 text-lg font-medium'>
          <Link className={`w-full p-3 ${isActive('/home') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg`} href={"/home"}>
            <div className='flex items-center'>
              <InsertPhotoOutlinedIcon  className='mr-2' fontSize='large' />
              <Typography>Picture Perception Test</Typography>
            </div>
          </Link>
          <Link className={`w-full flex items-center p-3 ${isActive('/wat') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg`} href={"/wat"}> <AssignmentOutlinedIcon  className='mr-2' fontSize='large' />
          <Typography>Word Association Test</Typography></Link>
          <Link className={`w-full flex items-center p-3 ${isActive('/srt') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg`} href={"/srt"}> <SportsMartialArtsOutlinedIcon  className='mr-2' fontSize='large' />
          <Typography>Situation Reaction Test</Typography></Link>
          <Link className={`w-full flex items-center p-3 ${isActive('/gd') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg`} href={"/gd"}> <Diversity2OutlinedIcon  className='mr-2' fontSize='large' />
          <Typography>Group Dicussion</Typography></Link>
          <Link className={`w-full flex items-center p-3 ${isActive('/attendance') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg`} href={"/attendance"}> <SaveAsOutlinedIcon  className='mr-2' fontSize='large' />
          <Typography>Attendance</Typography></Link>
        </div>
      ) : (
        <div className='md:flex  lg:flex lg:flex-col md:flex-col hidden  items-center p-1 mt-36 text-lg font-medium'>
          <Link className={`w-full p-3 ${isActive('/home') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg text-center`} href={"/home"}>              <InsertPhotoOutlinedIcon  className='mr-2' fontSize='large' />
          </Link>
          <Link className={`w-full p-3 ${isActive('/wat') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg text-center`} href={"/wat"}><AssignmentOutlinedIcon  className='mr-2' fontSize='large' /></Link>
          <Link className={`w-full p-3 ${isActive('/srt') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg text-center`} href={"/srt"}><SportsMartialArtsOutlinedIcon  className='mr-2' fontSize='large' /></Link>
          <Link className={`w-full p-3 ${isActive('/gd') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg text-center`} href={"/gd"}><Diversity2OutlinedIcon  className='mr-2' fontSize='large' /></Link>
          <Link className={`w-full p-3 ${isActive('/attendance') ? 'bg-gray-300' : ''} hover:bg-gray-200 rounded-lg text-center`} href={"/attendance"}><SaveAsOutlinedIcon  className='mr-2' fontSize='large' /></Link>
        </div>
      )}
    </div>
  );
}

export default Drawer;