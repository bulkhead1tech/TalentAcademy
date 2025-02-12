"use client"
import React from "react";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Subcard from "@/components/subcard";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Soundplay from "@/components/soundplayer";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import dynamic from "next/dynamic";
function App() {
  const [image, setImage] = useState([]);
  const [show, setshow] = useState(false);
  const[index, setindex]=useState(0)
  const [count, setcount] = useState(0)
   
  useEffect(() => {
    if(show){
    const timeout =  setTimeout(() => {
        document.getElementById("blank").style.filter="brightness(0)"
      }, 30*1000);
      return () => {
        clearTimeout(timeout)
      }
    }
  
    
  }, [index, show])
  
  
  useEffect(() => {
    if (show) {
      const interval = setInterval(() => {
        document.getElementById("blank").style.filter="brightness(1)"

        setindex((prevIndex) => {
          if (prevIndex >= image.length - 1) {
            clearInterval(interval);
            setshow(false)
            return prevIndex;
          }
          return prevIndex + 1;
        });
        Soundplay();
      }, 3.5*60*1000);

      return () => {
        clearInterval(interval);
        setTimeout(() => {
          setImage([])
          setindex(0)
        }, 1000);
        
      };
    }
  }, [show, image.length]);
  
  const fetcher =async()=>{
    const response = await fetch("/api/tat",{
      method: "POST",
      headers:{
          "Content-Type": "application/json",
      },
      body: JSON.stringify({count:count})
    })
    const data = await response.json();
    const array =await Promise.all(data.data.map(async(i)=>{
      const img = await fetch(i.URL)
      const pixels = await img.blob();
      return pixels;
    }))
    setImage((prev) => [...prev, ...array]);
    

  }
  const handlefiles = (e) => {
    const files = Array.from(e.target.files);
    setImage((prev) => [...prev, ...files]);
  };
  const mode = () => {
    setshow(!show);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  
  return (
    <>
      <div className="h-full w-full flex flex-col lg:flex-row md:flex-row p-5 justify-center items-center bg-white">
      
        {show ? <>
              <div>
                {image.length!=0?<>
                  <img id="blank" height={100} width={100} className="absolute h-screen sm:h-full w-screen z-20 top-0 left-0" src={URL.createObjectURL(image[index])} />

                </>:<>
                
                <h1 className="text-5xl font-bold self-center">No image found!!!</h1>
                <Button className=" mt-20" onClick={()=>(setshow(false))} variant="outlined">{"<<<"}Back</Button>              </>}
            </div></>
           : <>
            <div className="h-full w-full flex flex-col lg:flex-row md:flex-row gap-y-3 justify-center items-center bg-white">
             <form onSubmit={handlesubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileInput">
                  Upload File
                </label>
                <input
                  id="fileInput"
                  type="file"
                  multiple
                  onInput={handlefiles}
                  className="hidden"
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Choose File
                </label>
              </div>
              <input type="number" onInput={(e)=>setcount(e.target.value)
              } className="border-2 border-solid border-black rounded-lg p-1 mb-3 w-16" placeholder="0" />
              {image.length!=0?<><label className="ml-2 text-sm text-green-600">Images fetched...</label></>:<>
                <label className="ml-2 text-sm text-red-600">No image!</label></>}
              <div className="flex items-center justify-between">
              
              <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700"
                      variant="contained"
                      color="success"
                      size="medium"
                      onClick={fetcher}
                      endIcon={<ImportExportIcon/>}

                    >
                      Fetch
                    </Button>
                <Button variant="contained" endIcon={<PlayCircleIcon />} onClick={mode}>
  Play
</Button>
              </div></form>
            <Box className="ml-5" sx={{ minWidth: 275 } }>
      <Card variant="outlined"><Subcard/></Card>
    </Box>

            </div>
    
            
          </>}
      </div>
    </>
  );
}

export default dynamic (() => Promise.resolve(App), {ssr: false})
