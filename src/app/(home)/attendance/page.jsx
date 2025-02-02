import React from 'react'
import Attend from "@/components/attendform"
import Chart from '@/components/attendchart'

const page = () => {
  return (
    <>
    <div className='h-full w-full flex-col flex lg:flex-row md:flex-row justify-center items-center bg-gray-100 p-4'>
      <div className='lg:w-1/2 lg:h-full md:w-1/2 md:h-full h-1/2 w-full  flex justify-center items-center'><Attend/></div>
      <div className='lg:w-1/2 lg:h-full md:w-1/2 md:h-full h-1/2 w-full flex justify-center items-center p-5'><Chart/>
      </div>

    </div>
    </>
  )
}

export default page