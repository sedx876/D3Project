import React from 'react'
import D3 from '../../images/D3.png'
import '../../styles/home.css'

const Home = () => {
  return (
    <>
      <div id='home'>
        <img src={D3} id='d3'/>
      </div>

      <div id='welcome'>
        <h1>Welcome to D3PlayrPad</h1>
        <p id='welcomePara'>A Place to Keep Track of All Your Important Diablo Game Play 
          Items and Progression
        </p>
      </div>
    </>

    
  )
}

export default Home
