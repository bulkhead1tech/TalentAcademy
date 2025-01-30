"use client"

import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h2" gutterBottom sx={{ color: 'text.secondary', fontSize: 16 }}>
Rules:        </Typography>
        <Typography variant="h5" component="div">
        Word Association Test

        </Typography>
        <Typography variant="body2">This is a test of your imagination.</Typography>

        <Typography variant="body2">
        A word will be shown to you for 15 seconds.
      </Typography>
      <Typography variant="body2">
        Write the first thing that comes to your mind. 
      </Typography>
  
      <Typography variant="body2">There is no word limit.</Typography>
      <Typography variant="body2" className="font-bold">
        Best of luck!
      </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
const wat = () => {
  return (

<>    <Box className="ml-5" sx={{ minWidth: 275 } }>
    <Card variant="outlined">{card}</Card>
  </Box>
  </>
  )
}

export default wat