import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Timer = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
      <Grid display="flex" justify="center" container spacing={2}>
         <Grid item xs={5}></Grid>
         <Grid item xs={2}>
      <Card display="flex" sx={{ width: '100%', marginTop: '80%', maxWidth: 345 }}>
      <Grid sx={{ marginTop: '15%'}} container direction="column" alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
     
          <Typography variant="h6">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          {("0" + ((time / 10) % 100)).slice(-2)}</Typography>
          </Grid>  
          </Grid>  
        <Grid sx={{ marginTop: '20%', marginBottom: '10%'}} container direction="column" alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={() => setRunning(true)}>Start</Button>
          </Grid>
          <Grid item xs={12}>
          <Button variant="outlined" onClick={() => setRunning(false)}>Stop</Button>
          </Grid>
          <Grid item xs={12}>
          <Button variant="outlined" onClick={() => setTime(0)}>Reset</Button> 
          </Grid>
          </Grid>  
    
      
    </Card>
    </Grid>
    <Grid item xs={5}></Grid>
    </Grid>
    
    );
  };
  export default Timer;