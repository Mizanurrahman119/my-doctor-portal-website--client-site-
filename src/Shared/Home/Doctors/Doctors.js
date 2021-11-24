import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://damp-falls-66437.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])

    return (
        <div>
            <h1>Our Doctors</h1>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor key={doctor.key} doctor = {doctor}></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;