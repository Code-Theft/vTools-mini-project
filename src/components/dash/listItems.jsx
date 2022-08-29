import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../firebase';
import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>

        <Link to="/dashboard">
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItemButton>

      {/* <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Schedule Events" />
    </ListItemButton> */}


      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <Link to="/adminreport">
          <ListItemText primary="Reports" />
        </Link>

        {/* <Link to="/">
            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Reports
            </Button>
        </Link> */}

      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <Link to="/adminminutes">
          <ListItemText primary="Minutes" />
        </Link>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <Link to="/adminexe">
          <ListItemText primary="Present Execom" />
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

