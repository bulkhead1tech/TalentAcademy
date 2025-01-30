import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  formControl: {
    margin: '1rem 0',
    minWidth: 120,
  },
});

const TransactionForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0],
    amount: '',
    transactionType: '',
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
    const response = await fetch("api/create_transaction", {
      method:"POST",
     headers:{
       "Content-Type":"application/json",
     },
     body: JSON.stringify({formData}),
      }

  )
  const data = await response.json();
    alert(data.message) 

  };

  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
          className="mb-4"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          fullWidth
          className="mb-4"
        />
        <FormControl fullWidth className={`${classes.formControl} mb-4`}>
          <InputLabel className='bg-white'>Transaction Type</InputLabel>
          <Select
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
          >
            <MenuItem value={true}>Credit</MenuItem>
            <MenuItem value={false}>Debit</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TransactionForm;