import './App.css';
import '@fontsource/roboto/500.css';
import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const [nums,setNums] = useState(100);

  const countUp = () => {
    setNums(nums+1);
  };

  return (
    <div class='App'>
      <Typography variant="h2" m={2}>{nums}</Typography>
      <Button onClick={countUp} variant="contained">Plus</Button>
    </div>

  );
};

export default App;
