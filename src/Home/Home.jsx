import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';
import FormatListNumberedSharpIcon from '@mui/icons-material/FormatListNumberedSharp';
import CustomButton from './../CustomButton/CustomButton';


const Home = () => { 


    return(
        <>
 <Box display="flex" sx={{ width: '100%', marginTop: '8%' }}>
      <Grid display="flex" justify="center" container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
        <CustomButton path={"/MyTraining"} buttonName={'My Training'} icon={<FitnessCenterSharpIcon style={{fontSize: '80px', color: '#aaed37'}}/>} />
        </Grid>
        <Grid item xs={4}>
        <CustomButton path={"/MyDiet"} buttonName={'My Diet'} icon={<MenuBookSharpIcon style={{fontSize: '80px', color: "#cddc39"}} />}/> 
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
        <CustomButton path={"/Timer"} buttonName={'Timer'} icon={<AccessTimeSharpIcon style={{fontSize: '80px', color: "#ff9800"}}/>}/>
        </Grid>
        <Grid item xs={4}>
        <CustomButton path={"/DayGym"} buttonName={'Day Gym'} icon={<FormatListNumberedSharpIcon style={{fontSize: '80px', color: "#f44336"}}/>}/>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
        </>
    )
}
export default Home;