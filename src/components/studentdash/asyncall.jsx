import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './stuList';


// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  snapshotEqual,
  onSnapshot,
} from "firebase/firestore";

//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { getDatabase } from "firebase/database";
const firebaseConfig = {
 //hehe
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase();



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24,),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];






function DashboardContent() {
 
    const [allTasks, setAllTasks] = useState([]);
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
       
        
        const colRef = collection(db, 'Events');
        getDocs(colRef)
        // const q = query(colRef, where("approval", "==", "false"));

        onSnapshot(colRef, (snapshot) => {
            const tasks = [];
            snapshot.forEach((doc) => { 
                tasks.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setAllTasks(tasks);
        })
       
        
        
      }, []);

     


  

  return (
   
              
                                <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Event Name</TableCell>
                              <TableCell align="right">Added Date </TableCell>
                              <TableCell align="right">Added By</TableCell>
                              <TableCell align="right">View</TableCell>
                              
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {allTasks.map( row=> ( 
                              <TableRow
                                // key={row.name}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.host}</TableCell>
                                <TableCell align="right">{row.approval}</TableCell>
                                
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>

              
  );
}

export default function Async() {
  return <DashboardContent />;
}
