import React from 'react'
import Attend from "@/components/attendform"
import Chart from '@/components/attendchart'

const page = () => {
  return (
    <div className='h-full w-full flex justify-center items-center bg-gray-100 p-4'>
      <div className='w-1/2 h-full flex justify-center items-center'><Attend/></div>
      <div className='w-1/2 h-full flex justify-center items-center p-5'><Chart/>
      </div>

    </div>
  )
}

export default page