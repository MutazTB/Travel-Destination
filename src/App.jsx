import React from 'react';
import MyHome from './components/home/Home'
import data from './data/data.json'


function App() {
  return (
    <>
   <MyHome data={data} />   
    </>
  )
}
export default App;