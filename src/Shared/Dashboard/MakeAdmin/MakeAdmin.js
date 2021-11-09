import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();


    const handleOnBlur = e => {
        setEmail(e.target.value);
        // e.preventDefault();
    };

    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://damp-falls-66437.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type' : 'application/Json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount) {
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault();
    };

    return (
        <div>
            <h3>make admin </h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                sx={{width:'50%'}}
                label="Email"
                type='email'
                onBlur={handleOnBlur} placeholder="Your email" multiline/>
                <br /> <br />
                <Button style={{backgroundColor: "#24DEDA", color:'#f1f1f1f'}} type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Maked Admin request Successfully !</Alert>}
        </div>
    );
};

export default MakeAdmin;