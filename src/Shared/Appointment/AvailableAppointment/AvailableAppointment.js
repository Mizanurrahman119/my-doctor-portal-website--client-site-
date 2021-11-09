import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking'

const bookings = [
    {
        id:1,
        name: 'Teath Orthidonics',
        time:'08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id:2,
        name: 'Cosmetic Dentistry',
        time:'09.00 AM - 10.00 AM',
        space: 9
    },
    {
        id:3,
        name: 'Teath Cleaning',
        time:'10.00 AM - 11.00 AM',
        space: 6
    },
    {
        id:4,
        name: 'Cavity Protection',
        time:'12.00 PM - 01.00 PM',
        space: 8
    },
    {
        id:5,
        name: 'Pediatric Dental',
        time:'01.00 PM - 02.00 PM',
        space: 5
    },
    {
        id:6,
        name: 'Oral Surgery',
        time:'03.00 PM - 04.00 PM',
        space: 10
    },
]

const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container Container>
            <h2 style={{color: "#24DEDA"}}>Available Appointment: {date.toDateString()}</h2>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully !</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking} date={date}
                    setBookingSuccess={setBookingSuccess}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;