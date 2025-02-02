"use client"
import * as React from 'react';
import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import ProfCard from "../../../components/Profcard" 
import { Pagination } from '@mui/material';
import UserForm from '@/components/UserForm';
import {Button} from '@mui/material';
import dynamic from 'next/dynamic';
const page = () => {
  const [play, setplay]= useState(false);
  const [user, setuser]= useState([]);
  const [search, setsearch] = useState("")

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("/api/user", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({search})

      });
      const data = await response.json();
      setuser(data.data);
    }
    fetcher();
  
  }, [search])
  
  const handleinput =(e)=>{
    setsearch(e.target.value)
  }
  

  return (
    <div className='h-full w-full flex flex-col justify-start overflow-y-scroll items-center bg-slate-100'> 
     {!play?<>    <div className='h-16 bg-slate-100 mt-2 gap-5 px-10 w-full flex justify-end items-center'>
    <Button onClick={()=> setplay(!play)}  variant='contained' color='primary'>Upload</Button>
    <TextField id="outlined-basic" value={search} onInput={handleinput} color='primary' size='small' label="Search." variant="outlined" className=' mr-10' />
    </div>
       <div className="h-fit w-full p-10 gap-5 grid grid-cols-4 grid-rows-2 overflow-y-scroll no-scrollbar" >
      {user.length == 0?<>
        <h1>No user found...</h1>

        
      </> :<>
      {user.map((i)=>(
        <ProfCard key={i._id} name={i.name} qualifications={i.qualifications} age={i.age} phone={i.phone} email={i.email} address={i.address} college={i.college}/>
      ))}
      </> }
      


           
    </div>

     
     </>:<>
     <div className='h-16 w-full py-2 flex items-center justify-center'>
      <Button variant='contained' onClick={()=>setplay(!play)}>Back</Button>
     </div>
     <UserForm />
     </>}
    </div>
  )
}

export default dynamic (() => Promise.resolve(page), {ssr: false})
