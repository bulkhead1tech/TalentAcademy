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
        Situation Reaction Test

        </Typography>

        <Typography variant="body2">
        A set of situation will be shown to you.
      </Typography>
      <Typography variant="body2">
        Write how would act in those siuations. 
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
const srt = () => {
  return (

<>    <Box className="ml-5" sx={{ minWidth: 275 } }>
    <Card variant="outlined">{card}</Card>
  </Box>
  </>
  )
}

export default srt