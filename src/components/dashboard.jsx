import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { jwtDecode } from 'jwt-decode';

const Dashboard = () => {
    const [name, setName] = useState(null);

    useEffect(() => {
      const token = localStorage.getItem('authToken'); 
  
      if (token) {
        // Decode the token
        const decoded = jwtDecode(token);
        setName(decoded.name);
      }
    }, []);  

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Welcome {name ? (
          <strong>{name}</strong>
      ) : (
        <p>Loading user information...</p>
      )}
      </Typography>
    </div>
  );
};

export default Dashboard;