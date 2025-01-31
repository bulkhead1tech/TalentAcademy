"use client"

import React, { useState, useEffect } from 'react'
import { Button, Stack, Box } from '@mui/material'
import Cld from "@/components/topicform"
import dynamic from 'next/dynamic'
import Contentbar from '@/components/content'
const page = () => {
  const[play, setplay] = useState(false)
  const [data, setdata] = useState([])
  useEffect(() => {
    const fetcher=async()=>{ 
      const response =await fetch("/api/createcontent");
      const data = await response.json();
      console.log(data.data)
      setdata(data.data)
    }
    fetcher();
  }, [])
  
  return (
<>
<div className='h-full w-full justify-start flex flex-col  items-center'>
{!play?<>
  <div className='h-[10vh] w-full flex items-center justify-center '>
<Button onClick={()=>setplay(!play)} variant='contained' color='primary'>Upload</Button>

</div>
  
<Box className="overflow-y-scroll py-2" sx={{ width: '90%', alignItems: 'start' }}>
      <Stack spacing={2}>
      {data.map((data)=>(
          <Contentbar key={data._id} name={data.name} date={data.date} file={data.file} />

      ))}                  </Stack>

    </Box>

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
