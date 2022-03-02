import React from 'react';

import MyHeader from '../header/Header'
import MyFooter from '../footer/Footer'
import MyTours from'../tours/Tours'

function Home({data}) {
    return (
      <>
     <MyHeader />
     <MyTours data={data}/>
     <MyFooter />
      </>
    )
  }

  export default Home;