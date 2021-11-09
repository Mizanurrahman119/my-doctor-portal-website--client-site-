import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from "../../../images/doctor.png"
import bg from "../../../images/appointment-bg.png"
import { Button, Typography } from '@mui/material';
const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(47, 48, 64, 0.9)',
    backgroundBlendMode: 'darken, luminosity',

    marginTop: "150px"
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <img style={{width:400, marginTop:"-110px"}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={6} md={6} sx={{
            display:'flex',
            justifyContent:"flex-start",
            textAlign: "left",
            alignItems: 'center'
        }}>
            <Box>
                <Typography sx={{ mb: 4 }} style={{color: "#04AAA6"}} variant="h6">
                    Appointment
                </Typography>
                <Typography style={{color: "#FFFFFF"}} variant="h4">
                    Make an Appointment Today
                </Typography>
                <Typography sx={{ my: 5 }} style={{color: "#EAEAEA", fontSize: 14, fontWeight: 300}} variant="h6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis alias atque, nisi eaque inventore nobis consequatur beatae? Reiciendis, nam.
                </Typography>
                <Button style={{backgroundColor: "#24DEDA"}}>Learn More</Button>
            </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;