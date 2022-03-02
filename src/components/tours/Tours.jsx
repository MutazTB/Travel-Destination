import React from 'react';
const Tours = ({data}) =>{
    return(
        <>
        {
            data.map(tour => {
                return(
                    <div> 
                        <h3>{tour.name}</h3>
                        <img src={tour.image} alt="" />                                                                      
                    </div>
                )
                
            })
        }
        </>                
    )
};

export default Tours;