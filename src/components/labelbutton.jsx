import React from 'react'

const labelbutton = () => {
  return (
    <div>                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileInput">
    Upload File
  </label>
  <input
    id="fileInput"
    type="file"
    multiple
    
    className="hidden"
  />
  <label
    htmlFor="fileInput"
    className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Choose File
  </label></div>
  )
}

export default labelbutton