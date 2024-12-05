import React from 'react';
import { Avatar, Box } from '@mui/material';

const CoverImage = ({ imageUrl, width, height, imageName }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Avatar
        alt={imageName}
        src={imageUrl} // The URL of the image
        sx={{ width, height }} // Adjust size as needed
      />
    </Box>
  );
};

export default CoverImage;