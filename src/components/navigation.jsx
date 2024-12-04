import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem('authToken');
    navigate('/'); 
  };
  const isAuthenticated = localStorage.getItem('authToken') !== null;

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h7" sx={{ flexGrow: 1 }}>
         Spotify Code Test
        </Typography>

        {isAuthenticated && (
          <Button color="inherit" component={Link} to="/create-track">
            Create Track
          </Button>
        )}
        {isAuthenticated && (
          <Button color="inherit" component={Link} to="/search-track">
            Search Track
          </Button>
        )}
        {isAuthenticated && (
          <Button color="inherit" component={Link} onClick={handleLogout} to="/">
            Logout
          </Button>
        )}
        



      </Toolbar>
    </AppBar>
  );
};

export default Navigation;