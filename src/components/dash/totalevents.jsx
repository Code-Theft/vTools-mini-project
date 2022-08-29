import * as React from 'react';
import { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';
import Title from './Title';




function Totalevents() {



  let temp = localStorage.getItem("Count");
  console.log(temp);








  return (
    <React.Fragment>
      <Title>Total Events</Title>
      <Typography component="p" variant="h3">
        {temp}
      </Typography>
      <Typography color="text.secondary" variant="caption" sx={{ flex: 1 }}>
        upto 25 July 2022gh
      </Typography>

    </React.Fragment>
  );
}

export default function Async() {
  return <Totalevents />;
}

