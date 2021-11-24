import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


const Appointments = ({date}) => {
    const {user, token} = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `https://damp-falls-66437.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
          headers: {
            'authorization' : `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[date, user.email, token])

    return (
        <div sx={{width:'90%'}}>
            <h2>Appointments: {appointments.length}</h2>
            <TableContainer component={Paper}>
      <Table aria-label="Appointments table">
        <TableHead sx={{backgroundColor: '#03C17A'}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Services</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.serviceName}</TableCell>
              <TableCell align="center">
                {
                row.payment ? 'paid' : 
                <Link to={`/dashboard/payment/${row._id}`} style={{textDecoration: 'none'}}><button style={{backgroundColor: 'fuchsia', border: 'none', padding: "3px 10px", color: 'yellow'}}>Pay</button></Link>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;