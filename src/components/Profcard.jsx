import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const ProfCard = ({ name, qualifications, age, phone, email, address, college }) => {
  return (
    <Card className='rounded-lg h-full overflow-y-scroll no-scrollbar' sx={{ maxWidth: 300, minHeight: 250}}>
      <CardActionArea className='p-2'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Age: {age}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary'} }>
           Phone: {phone}
          </Typography>
          
          <Typography variant="body2" sx={{ color: 'text.secondary'} }>
          Email: {email}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Address: {address}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary'} }>
          Qualifications: {qualifications}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            College: {college}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProfCard;