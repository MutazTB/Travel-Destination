

import {Routes, Route } from "react-router-dom";

import React from 'react';
import MyHome from './components/home/Home'
import MyTourDetails from './components/TourDetails/TourDetails'
import data from './data/data.json'


function App() {
  return (
    <Routes>    
    <Route exact path="/" element={<MyHome  data={data} />} />
    <Route path={"/city/:id"} element={<MyTourDetails  data={data} />} />
   </Routes>
  )
}
export default App;
