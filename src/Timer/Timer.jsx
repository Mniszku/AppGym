import { useState, useEffect} from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from 'react-router-dom';



const Timer = () => {
  const navigate = useNavigate();
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
      <>
      <Button  onClick={() => navigate('/')} variant="contained" color="primary" sx={{width: 100, height: 100}}>
      <ArrowCircleLeftIcon/>
      </Button>
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
          <Button variant="outlined" color="primary" onClick={() => setRunning(true)}>Start</Button>
          </Grid>
          <Grid item xs={12}>
          <Button variant="outlined" color="primary" onClick={() => setRunning(false)}>Stop</Button>
          </Grid>
          <Grid item xs={12}>
          <Button variant="outlined" color="primary" onClick={() => setTime(0)}>Reset</Button> 
          </Grid>
          </Grid>  
    
      
    </Card>
    </Grid>
    <Grid item xs={5}></Grid>
    </Grid>
    </>
    );
  };
  export default Timer;