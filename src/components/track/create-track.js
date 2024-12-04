import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CreateTrack = ({title, label, action}) => {
  const [inputValue, setInputValue] = useState('');
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  // Handle form submission
  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoading(true);
    setFetchedData(null);
    const response = await action(inputValue);

    if (response.error) {
      setError(response.error.message);
      setLoading(false);
      return;
    } 

    setError('');
    setFetchedData(response.data);
    setLoading(false);

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
        <Typography variant="h8" component="h2" gutterBottom>
          {title}
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Enter ISRC"
            variant="outlined"
            fullWidth
            margin="normal"
            value={inputValue}
            onChange={handleInputChange}
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
            {label}
          </Button>
        </form>
      </Box>

      {loading && (
        <Box sx={{ marginTop: 10 }}>
          <Typography variant="h4" align="center">Loading ...</Typography>
        </Box>
        
        )}

      {fetchedData && (
          <Box sx={{ marginTop: 2 }}>

          <TableContainer 
            component={Paper} 
            sx={{
              border: '2px solid #1976d2', // Border around the TableContainer
              boxShadow: 3, // Optional shadow for the container
              marginTop: 4, // Margin on top
            }}
          >
            <Table sx={{ textAlign: "center"}}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", backgroundColor: "lightgray"}}><strong>Field</strong></TableCell>
                  <TableCell sx={{ textAlign: "center", backgroundColor: "lightgray"}}><strong>Value</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={fetchedData.name}>
                    <TableCell>Track Name</TableCell>
                    <TableCell>{fetchedData.name}</TableCell>
                </TableRow>
                <TableRow key={fetchedData.albumName}>
                    <TableCell>Album Name</TableCell>
                    <TableCell>{fetchedData.albumName}</TableCell>
                </TableRow>
                <TableRow key={fetchedData.albumId}>
                    <TableCell>Album Id</TableCell>
                    <TableCell>{fetchedData.albumId}</TableCell>
                </TableRow>
                <TableRow key={fetchedData.artistName}>
                    <TableCell>Artist Name</TableCell>
                    <TableCell>{fetchedData.artistName}</TableCell>
                </TableRow>
                <TableRow key={fetchedData.explicitContentIndicator}>
                    <TableCell>Explicit Content Indicator</TableCell>
                    <TableCell>{fetchedData.explicitContentIndicator? "true" : "false"}</TableCell>
                </TableRow>
                <TableRow key={fetchedData.playbackSeconds}>
                    <TableCell>Playback Seconds</TableCell>
                    <TableCell>{fetchedData.playbackSeconds}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        )}
    </Container>
  );
};

export default CreateTrack;