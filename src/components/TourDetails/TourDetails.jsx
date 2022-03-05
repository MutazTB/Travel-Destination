
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MyHeader from '../header/Header';
import MyFooter from '../footer/Footer';


export default function TourDetails({data}){
  let {id}= useParams();

  let city = data.filter(city =>city.id == id);
  const [seeMore, setSeeMore]= useState(false);  
  let seeMoreHandle=()=>{
    setSeeMore(!seeMore)
  }

  return(
    <>
    <MyHeader/>
    <article><div>
        <h1>{city[0].name}</h1>
        <p>
        {seeMore ? city[0].info : `${city[0].info.slice(0,100)}.....`}
        <button onClick={()=>seeMoreHandle()}>{seeMore ? "See Less":"See More"}</button>
        </p>
        <img src= {city[0].image} alt="" />       
      </div>
    </article>
    <MyFooter/>
    </>
   
  )
};

