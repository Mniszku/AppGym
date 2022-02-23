import React from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Button from '@mui/material/Button';


const DayGym = () => { 

    console.log("hello1");
    return ( 
<>
<Button variant="contained" color="primary"  path={"/Home"} sx={{width: 100, height: 100}}>
      <ArrowCircleLeftIcon/>
      </Button>

</>


    )
}

export default DayGym;