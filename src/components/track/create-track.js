import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CreateTrack = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue); // Save the input value after form submission
    setInputValue(''); // Clear the input field after submission
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
          Create Track by ISRC
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
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Create
          </Button>
        </form>
      </Box>

      {submittedValue && (
          <Box sx={{ marginTop: 2 }}>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Field</strong></TableCell>
                  <TableCell><strong>Value</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={submittedValue}>
                    <TableCell>Track Name</TableCell>
                    <TableCell>{submittedValue}</TableCell>
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