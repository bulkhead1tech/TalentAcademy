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
<nav className='h-14 px-6 bg-blue-600 shadow-slate-400 drop-shadow-lg text-white flex justify-between items-center'>
  <Link href={"/"}><Typography className='font-bold ml-12'>Talent Academy <sup>&copy;</sup></Typography></Link>
  <div className='flex justify-between gap-10 items-center'>
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