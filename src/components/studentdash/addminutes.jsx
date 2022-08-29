
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Paper } from '@mui/material';



import { createMinutes} from "../firebase";


import moment from "moment";


const currencies = [
    {
      value: '',
      label: '',
    },
    {
      value: 'Technical',
      label: 'Technical',
    },
    {
      value: 'Non-Technical',
      label: 'Non-Technical',
    },
    {
      value: 'Membership Development',
      label: 'Membership Development',
    },
    {
      value: 'Industry Related',
      label: 'Industry Related',
    },
    {
      value: 'Humanitarian',
      label: 'Humanitarian',
    },
  ];

  const host = [
    {
      value: 'CS',
      label: 'CS',
    },
    {
      value: 'SB',
      label: 'SB',
    },
    {
      value: 'PES',
      label: 'PES',
    },
    {
      value: 'RAS',
      label: 'RAS',
    },
    {
      value: 'WIE',
      label: 'WIE',
    },
  ];



  

export default function AddressForm() {

    const [event_name, setevent_name] = useState("");
    const [event_venue, setevent_venue] = useState("");
    

   //date
    
    const [event_date, setDateValue] = React.useState("");
    const [event_time, setTimeValue] = React.useState("");
    let date = event_date; 
    let time= event_time;    // value from your state
    let formattedDate = moment(date).format('DD/MM/YYYY');
    let formattedTime = moment(time).format('HH:mm');
    const [event_type, setevent_type] = React.useState('');
    const [event_host, setevent_host] = React.useState('');

    const [event_desp, setevent_desp] = useState("");

  
    
 
    const handleDateChange = (newValue) => {
        setDateValue(newValue);
    };
    const handleTimeChange = (newValue) => {
        setTimeValue(newValue);
    };
    const handletypeChange = (event) => {
        setevent_type(event.target.value);
    };
    const handlehostChange = (event) => {
        setevent_host(event.target.value);
    };
    

  return (
    <React.Fragment>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            value={event_name}
            onChange={(e) => setevent_name(e.target.value)}
            label="Meeting Name"

            fullWidth
            autoComplete="given-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Venue"
            name="Venue"
            label="Venue"
            value={event_venue}
            onChange={(e) => setevent_venue(e.target.value)}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>       

        <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <DesktopDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={event_date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                />
            
                
            </Stack>
            </LocalizationProvider>
          
        </Grid>
        <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
             <Stack spacing={3}>
            
        
            <TimePicker
            label="Time"
            value={event_time}
            onChange={handleTimeChange}
            renderInput={(params) => <TextField {...params} />}
            />
            
            </Stack>
            </LocalizationProvider>
          
        </Grid>


       

        

        
       
        <Grid item xs={12}>
                <TextareaAutosize
            aria-label="Minimum height"
            minRows={16}
            placeholder="Add Minutes"
            value={event_desp}
            onChange={(e) => setevent_desp(e.target.value)}
            style={{ width: 1150, backgroundColor: '#f5f5f5',color: '#333' }}
            
            />
        </Grid>  

          

        <Box textAlign="center">
            <Button variant="contained" color="primary"  onClick={() => createMinutes(event_name,event_venue,formattedDate,formattedTime,event_desp,)}>
            Submit2 
            </Button>
        </Box>    
        
        
       
      </Grid>

        
    </React.Fragment>
  );
}