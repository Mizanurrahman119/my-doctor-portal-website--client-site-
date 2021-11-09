import React from 'react';
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png"
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

const bannerBg = {
    background:  `url(${bg})`,
    backgroundColor: 'rgba(47, 48, 64, 0.01)',
    
}
const verticalCenter = {
    display:  'flex',
    alignItems: 'center',
    height: 400,
}
const verticalCardCenter = {
    display:  'flex',
    alignItems: 'center',
    
};

const Banner = () => {
    return (
      <>  
        <Container style={bannerBg} sx={{ flexGrow: 1, mt: 3, boxShadow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter,textAlign:'left', justifyContent:"center", marginBottom: 70}} xs={12} md={6}>
                    <Box>
                        <Typography style={{fontWeight: 600}} variant='h4'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography sx={{ my: 3 }} style={{color: "#515050", fontSize: 14, fontWeight: 300}}   variant="h6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolor veritatis deserunt doloribus dolores eius, voluptatum ipsa. Explicabo,commodi praesentium!
                        </Typography>
                        <Button style={{backgroundColor: "#24DEDA"}}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{...verticalCenter}}>
                    <img style={{width:'350px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>

        {/* bottom card style */}
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid style={{marginTop:-60}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={4}>
                        <Box sx={{ flexGrow: 1}}>
                            <Grid container style={{backgroundColor: "#24DEDA", borderRadius: 10, padding: 20}}>
                                <Grid item xs={3} style={{...verticalCardCenter, textAlign:'center', justifyContent:"center" }}>
                                    <Typography variant='h3'>
                                        <AccessTimeIcon style={{ fontSize:36, paddingRight:10}}></AccessTimeIcon>
                                    </Typography>
                                </Grid>
                                <Grid item xs={9} style={{...verticalCardCenter,textAlign:'left', justifyContent:"center",}}>
                                    <Box>
                                        <Typography style={{ marginBottom:10}} variant="h6">
                                             Opening Hours
                                        </Typography>
                                        <Typography style={{ fontSize:12}}   variant="h6">
                                           Open it 7days and 24hours.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={4} >
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container style={{backgroundColor: "#131010", color: '#ffff', borderRadius: 10, padding: 20}}>
                                <Grid item xs={3} style={{...verticalCardCenter, textAlign:'center', justifyContent:"center"}}>
                                    <Typography variant='h3'>
                                        <RoomIcon style={{ fontSize:36, paddingRight:10}}></RoomIcon>
                                    </Typography>
                                </Grid>
                                <Grid item xs={9} style={{...verticalCardCenter,textAlign:'left', justifyContent:"center",}}>
                                    <Box>
                                        <Typography style={{ marginBottom:10}} variant="h6">
                                             Our Location
                                        </Typography>
                                        <Typography style={{ fontSize:12}}   variant="h6">
                                            Mirpur-2, Dhaka, Bangladesh
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container style={{backgroundColor: "#24DEDA", borderRadius: 10, padding: 20}}>
                                <Grid item xs={3} style={{...verticalCardCenter, textAlign:'center', justifyContent:"center"}}>
                                    <Typography variant='h3'>
                                        <WifiCalling3Icon style={{ fontSize:36, paddingRight:10}}></WifiCalling3Icon>
                                    </Typography>
                                </Grid>
                                <Grid item xs={9} style={{...verticalCardCenter,textAlign:'left', justifyContent:"center"}}>
                                    <Box>
                                        <Typography style={{ marginBottom:10}} variant="h6">
                                             Contact With Us
                                        </Typography>
                                        <Typography style={{ fontSize:12}} variant="h6">
                                           +88 01323456789
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
       </> 
    );
};

export default Banner;