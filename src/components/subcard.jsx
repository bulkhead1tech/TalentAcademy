import React from 'react'
import { Button } from '@mui/material';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const subcard = () => {
  return (
        <React.Fragment>
          <CardContent>
            <Typography variant="h2" gutterBottom sx={{ color: 'text.secondary', fontSize: 16 }}>
    Rules:        </Typography>
            <Typography variant="h5" component="div">
            Picture Perception Test
    
            </Typography>
            <Typography variant="body2">
            A picture will be shown to you for 30 seconds.
          </Typography>
          <Typography variant="body2">
            Identify the characters and make a story around it.
          </Typography>
          <Typography variant="body2">
            Candidates will be given 4 minutes to write their observations of the picture.
          </Typography>
          <Typography variant="body2">
            The story should contain around 120 words.
          </Typography>
          <Typography variant="body2" className="font-bold">
            Best of luck!
          </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.joinindianarmy.nic.in/writereaddata/Portal/Images/pdf/Call_UP_INSTRUCTION_SCS.pdf" size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      
        )
}

export default subcard