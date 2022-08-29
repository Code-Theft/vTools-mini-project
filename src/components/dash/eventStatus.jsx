import * as React from 'react';
import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';





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
  updateDoc,
  doc,
  snapshotEqual,
  onSnapshot,
  orderBy,
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


const permitReport = async (evntid) => {
  try {

    const washingtonRef = doc(db, "Events", evntid);
    await updateDoc(washingtonRef, {
      approval: "true",

    });
    console.log("Document successfully updated!");


  }
  catch (err) {
    console.error(err);
    alert(err.message);
  }
};


function EventStatus() {

  const [allTasks, setAllTasks] = useState([]);



  useEffect(() => {



    const colRef = collection(db, 'Events');
    getDocs(colRef)
    // const q = query(colRef, where("approval", "==", "false"));
    const q = query(colRef , orderBy("date", "desc"));

    onSnapshot(q, (snapshot) => {
      const tasks = [];
      snapshot.forEach((doc) => {
        tasks.push({
          id: doc.id,
          ...doc.data()
          
        });
        
      });
      
      let count = Object.keys(tasks).length
      localStorage.setItem('Count', count);
      console.log(count)

      setAllTasks(tasks);
    })
    


  }, []);
  

 
  






  return (


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Event Name</TableCell>
            <TableCell >Host </TableCell>
            <TableCell >Date </TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {allTasks.map(row => (
            <TableRow
              key={row.name}
            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>

              <TableCell >{row.host}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.time}</TableCell>
              <TableCell >
                {row.approval === "false" ? <Button variant="outlined" onClick={() => permitReport(row.id)}>Approve</Button> : "Approved"}
                
              </TableCell>



            </TableRow>        
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  );
}

export default function Async()
{
  return <EventStatus />;
}
