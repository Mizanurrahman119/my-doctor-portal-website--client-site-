import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from "../../../images/login.png"

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const  value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    // google sign in handler
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField sx={{width:'75%', m: 1}}
                name="email"
                onBlur={handleOnChange} id="standard-basic" label="Your Email" variant="standard" />
                <TextField sx={{width:'75%', m: 1}}
                name="password" onBlur={handleOnChange} id="standard-basic" label="Your Password" type="password" variant="standard" />
                <Button sx={{width:'30%', m: 1}} style={{backgroundColor: "#24DEDA", color:'#f1f1f1f'}} type="submit" variant="contained">Login</Button>
                <br />
                <NavLink style={{textDecoration:"none"}} to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                {isLoading && <CircularProgress/>} 
                {user?.email && <Alert severity="success">User Login Successfully !</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                </form>
                <p>--------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:"100%"}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;