import React, { useState } from "react";
import MealList from "./MealList";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function MyDiet() {
  const navigate = useNavigate();
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
      <>
    <Button  onClick={() => navigate('/')} variant="contained" color="primary"  path={"/Home"} sx={{width: 100, height: 100}}>
    <ArrowCircleLeftIcon/>
    </Button>

    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <Button onClick={getMealData} variant="contained" color="primary" >Get Daily Meal Plan</Button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
    </>
  );
}

export default MyDiet;
