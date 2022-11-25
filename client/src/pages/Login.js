import { Typography, Box, Paper, Grid, TextField, Button, Alert, AlertTitle } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [backendMessage, setBackendMessage] = useState('')

    // Use History
    const history = useHistory()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const url = 'http://localhost:1234/user/login'
            const payload = {
                email,
                password,
            }
            const result = await axios.post(url, payload)

            localStorage.setItem("token", result.data.token);
            window.location.href = '/admin/dashboard'

        } catch (error) {
            // console.log(error.response.data.message)
            setBackendMessage(

                <div style={{marginBottom: 10}}>
                    <Alert severity="warning" color="error" variant="filled">
                        {error.response.data.message}
                    </Alert>
                </div>
            )
        }
    }


    return (

        <div style={{
            marginTop: 100
        }}>
            <Paper
                sx={{
                    bgcolor: '#dddcdc',
                    height: 500
                }}
                elevation={20}
            >
                <Box px={3} py={2} sx={{ color: 'black' }}>
                    <Typography variant="h5" align="center" margin="dense" sx={{
                        my: 3,
                        fontSize: 20,
                        fontWeight: 600
                    }}>Are you an Admin?</Typography>
                    <Typography variant="h5" align="center" margin="dense" sx={{
                        my: 3,
                        fontSize: 20,
                        fontWeight: 600
                    }}>{backendMessage}</Typography>


                    <form>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    type={'email'}
                                    margin="dense"
                                    sx={{
                                        input: { color: 'black', fontSize: '20px' }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            // width: '100%',
                                            fontSize: '20px',
                                            fontWeight: '500',
                                            color: 'black'
                                        }
                                    }}
                                    onChange={e => setemail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    margin="dense"
                                    sx={{
                                        input: { color: 'black', fontSize: '20px' }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            // width: '100%',
                                            fontSize: '20px',
                                            fontWeight: '500',
                                            color: 'black'
                                        }
                                    }}
                                    onChange={e => setpassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>

                        <Box mt={3} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type={'submit'}
                                onClick={handleLogin}
                                size="large"
                                style={{
                                    marign: 40,
                                }}
                            >
                                Login
                            </Button>
                            {/* <Typography
                                variant={'h5'}
                                onClick={() => {
                                    history.push('/register')
                                }}
                            >
                                Dont have an account?
                            </Typography> */}
                        </Box>
                    </form>
                </Box>
            </Paper>
        </div>

    )
}

export default Login


