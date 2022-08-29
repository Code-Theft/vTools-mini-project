import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Janajith D','CS Chairperson','CSE','S6',97063677),
  createData('Devika U','SB Chairperson','IT','S6',97105095),
  createData('Vaishnavi MS','PES SBC Chairperson','EEE','S6',96286948),
  createData('Ranjana M','WiE AG Chairperson','EEE','S6',96389889),
  createData('Mohammed Dilshad M','RAS Chairperson','MECH','S6',97280998),
  createData('Nourin C','SB Secretary','IT','S6',96973899),
  createData('Hemanth','SB Joint Secretary','CSE','S4',97516961),
  createData('Adithya P T','PES SBC Secretary','IT','S6',97114663),
  createData('Fathima Nasrin','WiE AG Secreraty','EC','S6',96287061),
  createData('Safana M E','RAS Secretary','EC','S6',96273696),
  createData('Varsha S S','SB Treasurer','EEE','S6',96285907),
  createData('Krishna C','SB Techinical Coordinator','IT','S6',96973883),
  createData('Nikitha A A','RAS Technical Coordinator','EC','S6',96285928),
  createData('Adithyan P','CS Secretary','CSE','S4',97516397),
  createData('Anil Thomas','SB Vice Chairperson','EEE','S4',97516990),
  createData('Aswathy R','PES SBC Vice Chairperson','EEE','S6',97558386),
  createData('Devanandhana T S','WiE AG Vice Chairperson','CSE','S4',97516395),
  createData('Sanjayan N','CS Vice Chairperson','CSE','S6',97558400),
  createData('Reshma Murali','Membership Development Coordinator','IT','S6',97110428),
  createData('Gopika M J','PES SBC Technical Coordinator','IT','S4',97758550),
  createData('Sreelakshmi PG','LINK Representative','EC','S6',96284761),
  createData('Shegin Ismail','Women in Power','EC','S4',97516794),
  createData('Nandhana Ajithkumar','Electronic and Communication Coordinator','EEE','S4',97516456),
  createData('Ardra S S','Report Lead','IT','S4',96285956),
  createData('Rahul','Web Master','CSE','S4',97516377),
  createData('Swathy Stanley','Women in Computing','IT','S4',97516847),
  createData('Arvin J','CS Technical Coordinator','IT','S4',98261802),
];



export default function Report() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Position</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Semester</TableCell>
            <TableCell align="center">Membership Id</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}