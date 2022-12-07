import React from "react"
import { useState } from "react";
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const CountClick = () => {
    const [nums,setNums] = useState(100);

    const countUp = () => {
      setNums(nums+1);
    };
    
    return(
        <div class='App'>
            <Typography variant="h2" m={2}>{nums}</Typography>
            <Button onClick={countUp} variant="contained">Plus</Button>
        </div>       
    )
}

export default CountClick;