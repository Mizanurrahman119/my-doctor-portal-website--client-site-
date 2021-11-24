import { Input, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
  


const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');;
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://damp-falls-66437.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSuccess('Doctor added successfully');
                console.log('doctor added successfully');
            }
        })
        .catch(error => {
            console.log('error', error);
        })
    }
    return (
        <div> 
            <form onSubmit={handleSubmit}>
            <TextField 
            onChange={e=> setName(e.target.value)}
            sx={{width:'50%', marginBottom:'10px'}}
            label="Doctor name"
            required 
            type="name" />
            <br />
            <TextField 
            onChange={e=> setEmail(e.target.value)}
            sx={{width:'50%', marginBottom:'10px'}}
            label="Doctor email"
            required
            type="email" />
            <br />
            <Input onChange={e => setImage(e.target.files[0])} sx={{width:'50%', marginBottom:'10px'}} accept="image/*" type="file" />
                  <br />
            <Button variant="contained" type='submit'>
                    Add Doctor
            </Button>
            </form>
            {
                success && <p style={{color: 'green'}}>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;