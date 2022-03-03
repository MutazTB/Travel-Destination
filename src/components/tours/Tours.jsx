//import {useState} from 'react';
import React from 'react';
import MyTour from './tour/Tour'
const Tours = ({data}) =>{

    return(
        <>       
        <MyTour data = {data}/>
        </>                
    )
};

export default Tours;