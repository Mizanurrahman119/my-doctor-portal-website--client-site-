import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shere/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container Spacing={2}>
            <Grid item xs={12} sm={12} md={5}>
                <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;