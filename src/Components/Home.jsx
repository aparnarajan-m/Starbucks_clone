import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Homecontent from './Homecontent'
import HomehandcraftedSec from './Home-handcraftedSec'

function Home() {
  return (
    <div className='home-Div'>
      <Navbar/>
      <Homecontent/>
      <HomehandcraftedSec/>
    </div>
  )
}

export default Home
