import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import fluoride from "../../../images/fluoride.png"
import Typography from '@mui/material/Typography'
import cavity from "../../../images/cavity.png"
import whitening from "../../../images/whitening.png"

const services = [
    {
        name:'Fluoride Treatment',
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio voluptates cumque culpa quis maxime veritatis eligendi neque blanditiis mollitia, pariatur itaque hic laudantium? Consequatur labore aperiam asperiores a officiis.",
        img: fluoride
    },
    {
        name:'Cavity Filling',
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio voluptates cumque culpa quis maxime veritatis eligendi neque blanditiis mollitia, pariatur itaque hic laudantium? Consequatur labore aperiam asperiores a officiis.",
        img: cavity 
    },
    {
        name:'Teath Whitening',
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio voluptates cumque culpa quis maxime veritatis eligendi neque blanditiis mollitia, pariatur itaque hic laudantium? Consequatur labore aperiam asperiores a officiis.",
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <container>
                <Typography variant="h6" component="div" sx={{ fontWeight: 500, m:2, color: 'success.main' }}>
                    Our Services
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600, m:4 }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name} service={service}></Service>)
                    }
                </Grid>
            </container>
        </Box>
    );
};

export default Services;