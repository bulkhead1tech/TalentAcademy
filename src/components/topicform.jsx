import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Cld from './cloudupload';
const useStyles = makeStyles({
  formControl: {
    margin: '1rem 0',
    minWidth: 120,
  },
});

const ContentForm = () => {
  const classes = useStyles();
  const [fileUrl, setFileUrl] = useState('');

  const handleFileUrlChange = (url) => {
      setFileUrl(url);
  };
  const [formData, setFormData] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("/api/createcontent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, fileUrl }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.log(error);
    }  };

  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} encType='multipart/form-data' className="bg-white flex flex-col gap-y-3 p-6 rounded-lg shadow-lg w-full max-w-md">
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Cld onFileUrlChange={handleFileUrlChange}/>
        {fileUrl ===""?<>
        <label  className='text-red-700 ml-2'>No file!</label></>:<><label className='text-green-700 ml-2'>File ready.</label></>}
      <label className='text-sm  text-slate-500'>Do not fill anything below!</label>  <TextField
                label="File URL"
                variant="outlined"
                fullWidth
                name="file"
                value={fileUrl}
                onChange={(e)=>setFileUrl(e.target.value)}
                margin="normal"
            />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContentForm;