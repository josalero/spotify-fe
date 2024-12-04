import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import './login.css'; 
import { useNavigate } from 'react-router-dom';
import { login } from '../util/auth'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();


  const handleSubmit =  async (e) => {
    e.preventDefault();
    

    if (!username || !password) {
      setError('User and Password are required fields.');
      return;
    }

    setError('');  // Reset error message
    setLoading(true);  // Set loading to true during the request

    try {
      // Make POST request to the login API
      const response = await axios.post('https://spotify-be-b07j.onrender.com/public/login', {
        username,
        password
      });
      
      login(response.data.accessToken);

      console.log('Login successful');

      setTimeout(() => {
        navigate('/dashboard');
        setLoading(false);  
      }, 1000)
    

    } catch (err) {
      // Handle login failure
      setError('Invalid username or password.');
      setLoading(false);  
    } 

  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          backgroundColor: '#f4f7fa',
          borderRadius: 2,
          boxShadow: 2 
        }}
      >
        <Typography variant="h6" component="h1" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <Typography color="error" variant="body2" align="center">{error}</Typography>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;