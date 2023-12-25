import React, { useState, useEffect } from 'react';
import { Grid, Box, Button } from '@mui/material';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9'];

const itemWidth = 150;

const TafsirOptions = () => {
  const [maxItemsPerRow, setMaxItemsPerRow] = useState(Math.floor(window.innerWidth / itemWidth));

  useEffect(() => {
    const handleResize = () => {
      setMaxItemsPerRow(Math.floor(window.innerWidth / itemWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const rows = []; 
  let rowItems = [];
  
  // Split the options into rows of a certain maximum width
  options.forEach((option, index) => {
    rowItems.push(
      <Grid item key={index}>
        <Button variant="contained">{option}</Button>
      </Grid>
    );
    if ((index + 1) % maxItemsPerRow === 0 || index === options.length - 1) {
      rows.push(
        <>
        <Grid container spacing={2} key={index} sx={{justifyContent: 'center'}}>
          {rowItems}
        </Grid>
        <br/>
        </>
      );
      rowItems = [];
    }
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ width: '100%', justifyContent: 'center', maxWidth: maxItemsPerRow * itemWidth }}>
        {rows}
      </Box>
    </Box>
  );
};

export default TafsirOptions;
