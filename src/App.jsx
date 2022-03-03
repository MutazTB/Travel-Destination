import {Routes, Route } from "react-router-dom";

import React from 'react';
import MyHome from './components/home/Home'
//import MyTours from'./components/tours/Tours'
import MyTourDetails from './components/TourDetails/TourDetails'
import data from './data/data.json'


function App() {
  return (
    <Routes>    
    <Route exact path="/" element={<MyHome />} />
    <Route path={"/tour/:name"} element={<MyTourDetails data ={data} />} />
    {/* <Route index element={<div>Default Page Content</div>} />    */}
   </Routes>
  )
}
export default App;