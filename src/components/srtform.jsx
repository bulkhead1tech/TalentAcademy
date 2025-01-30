import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {Alert} from "@mui/material";
const useStyles = makeStyles({
  formControl: {
    margin: "1rem 0",
    minWidth: 120,
  },
});

const SRTForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/createsrt", {
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
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <TextField
          label="SRT"
          name="name"
          value={formData}
          onChange={handleChange}
          fullWidth
          className="mb-4"
        />

        <Button
          className="mt-5"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SRTForm;
