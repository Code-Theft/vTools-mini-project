import * as React from 'react';

import Typography from '@mui/material/Typography';
import Title from './Title';



export default function Totalmeet() {
  return (
    <React.Fragment>
      <Title>Total Meetings</Title>
      <Typography component="p" variant="h3">
        5
      </Typography>
      <Typography color="text.secondary"  variant="caption" sx={{ flex: 1 }}>
        upto 25 July 2022
      </Typography>
     
    </React.Fragment>
  );
}
