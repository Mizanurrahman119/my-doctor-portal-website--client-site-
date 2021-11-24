import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, image} = doctor;
    return (
        <Grid item xs={12} md={4} sm={6}>
            <img style={{width:'150px', height: '150px', borderRadius: '50%', backgroundColor: 'gray'}} src={`data:image/png;base64,${image}`} alt="" />
            <h3>Doctor: {name}</h3>
        </Grid>
    );
};

export default Doctor;