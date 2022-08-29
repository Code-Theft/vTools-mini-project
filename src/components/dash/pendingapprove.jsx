import * as React from 'react';

import Typography from '@mui/material/Typography';
import Title from './Title';



export default function PendingApprove() {
  return (
    <React.Fragment>
      <Title>Pending Approval</Title>
      <Typography component="p" variant="h3">
        2
      </Typography>
      {/* <Typography color="text.secondary"  variant="caption" sx={{ flex: 1 }}>
        upto 25 July 2022
      </Typography> */}
     
    </React.Fragment>
  );
}
