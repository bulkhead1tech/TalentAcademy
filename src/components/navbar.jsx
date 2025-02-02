"use client"
import { Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'
import { AppContext } from './appcontext'
const navbar = () => {
  const {isAdmin} = useContext(AppContext)
  const pathname =usePathname();
  return (
<>
<nav className='h-full px-6 py-3 md:py-0 lg:py-0 lg:bg-blue-600 md:bg-blue-600 bg-yellow-500 shadow-slate-400 drop-shadow-lg overflow- text-white flex flex-col md:flex-row lg:flex-row justify-between items-center'>
  <Link className='font-bold' href={"/"}><Typography className='font-bold text-2xl lg:xl md:xl'>Talent Academy <sup>&copy;</sup></Typography></Link>
  <div className='flex justify-between gap-5 md:gap-10 lg:gap-10  items-center'>
    <Link className={`${pathname === '/home' ? 'font-bold text-yellow-300' : ''}`}  href={"/home"}>Home</Link>
  <Link className={`${pathname === '/content' ? 'font-bold text-yellow-300' : ''}`}  href={"/content"}>Content</Link>
  {isAdmin && (
                    <>
                        <Link className={`${pathname === '/finances' ? 'font-bold text-yellow-300' : ''}`} href={"/finances"}>Finances</Link>
                        <Link className={`${pathname === '/profile' ? 'font-bold text-yellow-300' : ''}`} href={"/profile"}>Profile</Link>
                    </>
                )}
  </div>
</nav>
</>  )
}

export default navbar