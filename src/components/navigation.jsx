import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout, isAuthenticated } from '../util/auth'

const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    logout();
    setTimeout(() => {
      navigate('/'); 
    }, 1000)

  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h7" sx={{ flexGrow: 1 }}>
         Spotify Code Test
        </Typography>

        {isAuthenticated() && (
          <Button color="inherit" component={Link} to="/create-track">
            Create Track
          </Button>
        )}
        {isAuthenticated() && (
          <Button color="inherit" component={Link} to="/search-track">
            Search Track
          </Button>
        )}
        {isAuthenticated() && (
          <Button color="inherit" component={Link} onClick={handleLogout} to="/">
            Logout
          </Button>
        )}
        
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;