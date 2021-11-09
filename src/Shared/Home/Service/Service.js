import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const {name, discription, img} = props.service;
    return (
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, boxShadow: 0, border: 0, m: 2 }}>
                    <CardMedia
                        component="img"
                        style={{width:"auto", height:"80px", margin:"5px auto"}}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                          {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {discription}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    );
};

export default Service;