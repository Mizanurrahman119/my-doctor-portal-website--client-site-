import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking, date, setBookingSuccess}) => {
    const {name,price, time, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
      <>  
        <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{py:4, my: 1}}>
                <Typography style={{color: "#24DEDA", fontWeight:500}} variant="h5" gutterBottom component= "div">
                    {name}
                </Typography>
                <Typography 
                sx={{fontSize: '16px',fontWeight:'900'}} variant="h6" gutterBottom component= "div">
                   Price: ${price}
                </Typography>
                <Typography variant="h6" gutterBottom component= "div">
                    {time}
                </Typography>
                <Typography variant="caption" display='block' gutterBottom>
                    {space} SPACE AVAILABLE
                </Typography>
                <Button onClick={handleBookingOpen} style={{backgroundColor:"#24DEDA", color:'#f1f1f1f'}}>BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
        <BookingModal date={date} booking={booking} openBooking={openBooking} handleBookingClose={handleBookingClose} setBookingSuccess={setBookingSuccess}></BookingModal>
      </>  
    );
};

export default Booking;