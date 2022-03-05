import React from "react"
import MyHeader from "../header/Header"
import MyTour from "../tours/Tours"
import MyFooter from "../footer/Footer"




function Home({data}){
    return(
        <>
        <MyHeader/>
        <MyTour data={data} />
        <MyFooter />
        </>
    )
};

export default Home;