
import  React from 'react';
import {  BrowserRouter , Routes, Route } from "react-router-dom";
import MyTraining from './MyTraining/MyTraining';
import Home from './Home/Home';
import MyDiet from './MyDiet/MyDiet';
import Timer from './Timer/Timer';
import DayGym from './DayGym/DayGym';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route path="/MyTraining" element={<MyTraining/>} />
        <Route path="/MyDiet" element={<MyDiet/>} />
        <Route path="/Timer" element={<Timer/>}/>
        <Route path="/DayGym" element={<DayGym/>} />
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
