import React from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Card from '@mui/material/Card';
import CalendarPicker from '@mui/lab/CalendarPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TodayIcon from '@mui/icons-material/Today';
import { styled } from '@mui/material';

const CustomCalendarPicker = styled(CalendarPicker)({

})

const DayGym = () => { 
    const navigate = useNavigate();
    const [date, setDate] = React.useState(new Date());
    const [trainingDay, setTrainingDay] = React.useState([]);
    const [note, setNote] = React.useState();
  

 const removeTraining = (index) =>{
  
 const trainingDayCopy = [...trainingDay]; 

 
trainingDayCopy.splice(index, 1) 

setTrainingDay(trainingDayCopy);
  

}   

const generateTrainingListItems = () => {
  console.log(trainingDay)
    return trainingDay.map((value, index) =>
    <ListItem key={index}
    secondaryAction={
      <IconButton onClick={() => removeTraining(index)} edge="end" aria-label="delete">
        <DeleteIcon  style={{fontSize: '25px', color: "#f44336"}}/>
      </IconButton>
    }
  >
    <ListItemAvatar>
      <Avatar>
        <TodayIcon color="primary"/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={value.date.toLocaleDateString() || ''}
      secondary={value.note || ''}
    />
  </ListItem>
    );
  }
  

const handleButtonClick = (e) => { 

setTrainingDay((prev) => [...prev, {date: date, note: note}])
setNote([]);
}

    return ( 
<>
<Box sx={{ flexGrow: 1, maxWidth: 300 }}>
<Button  onClick={() => navigate('/')} variant="contained" color="primary" sx={{width: 100, height: 100}}>
      <ArrowCircleLeftIcon/>
      </Button>
      <List dense={false}>
              {generateTrainingListItems()}
            </List>
      </Box>
      <Grid sx={{ marginTop: '3%'}} container direction="column" alignItems="center" justifyContent="center" spacing={2}>
      <Card display="flex" sx={{ width: '100%', maxWidth: '40%' }}> 
      <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CustomCalendarPicker date={date} onChange={(newDate) => setDate(newDate)} sx={{paddingRight: '60px'}}/>
      </LocalizationProvider>
    </Grid> 
    <Grid item xs={2}>
    <TextareaAutosize  value={note} onChange={(e)=> setNote(e.target.value)}
      aria-label="minimum height"
      minRows={3}
      placeholder="Change day and add note"
      style={{ width: 775, height: 210 }}
    />
    </Grid>
    </Card>
</Grid>


<Grid item xs={12} sx={{marginTop: '3%'}}>
<Button onClick={handleButtonClick} variant="contained" color="primary" >Save Note</Button>
</Grid>
</>


    )
}

export default DayGym;