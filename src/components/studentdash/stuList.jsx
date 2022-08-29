import * as React from 'react';
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';


import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';


import { logout } from "../firebase";

export const mainListItems = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>

        <Link to="/exedash">
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItemButton>



      <ListItemButton>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <Link to="/exeAddEvent">
          <ListItemText primary="Add Event" />
        </Link>



      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <Link to="/exeReport">
          <ListItemText primary="Report Event" />
        </Link>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>

          <AssessmentIcon />
        </ListItemIcon>
        <Link to="/exeAddMinutes">
          <ListItemText primary="Add Minutes" />
        </Link>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <Link to="/" >
          <ListItemText primary="Logout" onClick={() => { logout(); navigate('/') }} />

          {/* <Button href="#" variant="contained"  onClick={logout}  sx={{ my: 1, mx: 1 }}>
             Logout
            </Button> */}
        </Link>

      </ListItemButton>
    </React.Fragment>
  );
}
