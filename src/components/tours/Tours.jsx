import React from 'react'
import MyTours from './tour/Tour'

let Tour =({data})=>{
     return(
    <>
    {
    data.map((city,index) =>{
        
        return(
       <MyTours key={index} city={city} />
        )       
    })
}
    </>
)
};

export default Tour;