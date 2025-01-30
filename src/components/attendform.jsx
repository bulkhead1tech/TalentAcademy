"use client"
import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import dynamic from 'next/dynamic';
const useStyles = makeStyles({
  formControl: {
    margin: '1rem 0',
    minWidth: 120,
  },
});

const AttendanceForm = () => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();
  const [formData, setFormData] = useState({
    user: '',
    date: new Date().toISOString().split('T')[0],
  });

useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUsers(data.data);
    }
    fetcher();
  
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 gap-2 rounded-lg shadow-lg w-full max-w-md">
        <label>Attendance:</label>
        <FormControl fullWidth className={`${classes.formControl} mb-4`}>
          <InputLabel className='bg-white p-1' >User</InputLabel>
          <Select
            name="user"
            value={formData.user}
            onChange={handleChange}
          >
            {users.map(user => (
              <MenuItem key={user._id} value={user.name}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default dynamic (() => Promise.resolve(AttendanceForm), {ssr: false})
