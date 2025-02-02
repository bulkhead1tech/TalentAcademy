"use client"
import React from 'react'
import SRT from '@/components/srt'
import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useState } from 'react';
import Form from '@/components/srtform'
import { useEffect } from 'react';
import Soundplay from '@/components/soundplayer';
import { saveAs } from 'file-saver';
import DownloadIcon from '@mui/icons-material/Download';
import ImportExportIcon from '@mui/icons-material/ImportExport';
const page = () => {
const [Upload, setUpload] = useState(false);
const [play, setplay] = useState(false);
  const [data, setdata] = useState([]);

const [count, setcount]= useState(0);
  const [index, seti] = useState(0);

const countch =(e)=>{
  setcount(e.target.value)
}


 const download = () => {
    const file = new Blob([data.map((data)=>(data.srt)).join('\n')], { type: 'text/plain;charset=utf-8' });
    saveAs(file, 'srt.txt');
  };

const valuepost=async (e) => {
  e.preventDefault();
 try {
  const response = await fetch("/api/srt", {
    method: "POST",
    headers:{
     "Content-Type": "application/json",
    },
    body: JSON.stringify({details: count}),

    
  })
  const data = await response.json();
  setdata(data.data);
 
 } catch (error) {
   console.log(error)
 } 
}

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        seti((prevIndex) => {
          if (prevIndex >= data.length - 1) {
            clearInterval(interval);
            setplay(false)
            return prevIndex;
          }
          return prevIndex + 1;
        });
        Soundplay();
      }, 25*1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [play, data.length]);
const handleform = () => {
  setUpload(!Upload)
}

  return (
 
    <div className='h-full w-full p-5 flex flex-col justify-center items-center'>
    
   {!play?<>
  <div className='h-16 flex justify-end items-center '>
  <Button size='small' color='success' variant='contained' onClick={handleform} >Upload new </Button>
  {data.length!=0?<>
              <Button
              className="ml-4"
              size="small"
              color="success"
              variant="contained"
              onClick={download}
              endIcon={<DownloadIcon/>}
            >File</Button>

            </>:<></>}
</div>
<div className='h-full w-full flex flex-col md:flex-row lg:flex-row justify-center items-center'>


  {Upload ? <Form/>:<>  <div className="lg:h-full lg:w-1/2 md:h-full md:w-1/2 h-1/2 w-full    items-center justify-center flex flex-col">
    <div className=" py-5 px-8 rounded-lg shadow-lg shadow-slate-300">
                 <form
                    onSubmit={valuepost}
                    className="flex justify-center gap-5 items-center py-5"
                  >
                    <label>Fetch data:</label>
                    <input
                      type="number"
                      value={count}
                      onChange={countch}
                      className="border-black border-solid rounded-lg border-2 p-1 bg-white w-16 ml-2"
                    />
                    <Button
                      type="submit"
                     color="success"
                      variant="contained"
                      size="medium"
                      onClick={valuepost}
                      endIcon={<ImportExportIcon/>}

                    >
                      Fetch
                    </Button>{" "}
                  </form>
                  <Button
                    onClick={() => setplay(!play)}
                    className="self-end"
                    variant="contained"
                    size="large"
                    endIcon={<PlayCircleIcon />}
                  >
                    Play
                  </Button>
                 </div>
                </div>

  <SRT/></>}
  
 </div> </>:<>
 <div className='h-16 flex justify-end items-center '>
  <Button size='small' color='secondary' variant='contained' onClick={()=>setplay(!play)} >{"<<<Back"} </Button>
</div>

   <div className='h-full w-full flex justify-center items-center p-11 text-3xl'>
   {data.length!=0 ? <h1 className="text-black font-bold text-3xl mb-40">
            {data[index].srt}
            </h1> :<h1 className="text-black font-bold text-3xl mb-40">
            {"null"}
            </h1> }

   </div>
 
 </>
  }
    


  </div>
  )
}

export default page