"use client"

import React, { useState } from 'react'
import { Button } from '@mui/material'
import Cld from "@/components/topicform"
import dynamic from 'next/dynamic'
const page = () => {
  const[play, setplay] = useState(false)
  return (
<>
<div className='h-full w-full justify-center flex flex-col  items-center'>
{!play?<>
  <div className='h-[10vh] w-full flex items-center justify-center '>
<Button onClick={()=>setplay(!play)} variant='contained' color='primary'>Upload</Button>

</div>
<div className='h-full w-full flex flwx-col p-5'>
  

</div>

</>:<>
<div className='h-[10vh] w-full flex items-center justify-center '>
<Button onClick={()=>setplay(!play)} variant='contained' color='primary'>Back</Button>

</div>
<Cld />

</>}

</div>

</>  )
}

export default dynamic (() => Promise.resolve(page), {ssr: false})
