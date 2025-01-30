import React from "react"
import CircularProgress from '@mui/material/CircularProgress';
export default function Loading() {
    // Or a custom loading skeleton component
    return(
        <>
        <div className="h-full w-full  flex justify-center items-center bg-white-600">
            <CircularProgress/>
        </div>
        </>
    )
  }