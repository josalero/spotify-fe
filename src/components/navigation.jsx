import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h7" sx={{ flexGrow: 1 }}>
         Spotify Code Test
        </Typography>

        <Button color="inherit" component={Link} to="/create-track">
          Create Track
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;