import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../Images/login.jpg'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Components/Hooks/useAuth';


const Learner = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user,registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name,loginData.age,loginData.number,loginData.address,loginData.nid, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography style={{ color:'#85311b'}} variant="body1" gutterBottom>Resister As Learner</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Full Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your age"
                            name="age"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Phone Number"
                            name="number"
                            onBlur={handleOnBlur}
                            variant="standard" />
                             
                             <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Address"
                            name="address"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <br/>
                            <Button style={{ backgroundColor:'#85311b', color:"#ffffff",margin:"5px"}}
                            variant="contained"
                            component="label"
                            >
                            Upload your Profile Picture
                            <input
                            name="Profile"
                                type="file"
                                hidden
                            />
                            </Button> 
                            <Button style={{ backgroundColor:'transparent', color:"#85311b",border:"1px solid #85311b"}}
                            variant="contained"
                            component="label"
                            >
                            Upload your NID Picture
                            <input
                            name="Nid"
                                type="file"
                                hidden
                            />
                            </Button>
                            <br />
                            <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Vehicle Type(car/bike)"
                            name="vehicle"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button style={{ background:'#85311b'}} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button style={{ color:'#85311b'}} variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Learner;