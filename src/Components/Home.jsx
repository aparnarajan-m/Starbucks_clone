import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Homecontent from './Homecontent'
import Homecard from './Homecard'
import HomecoffeeCulture from './HomecoffeeCulture'
import Footer from './Footer'

function Home() {
  return (
    <div className='home-Div'>
      <Navbar/>
      <Homecontent/>
      {/* <Homecard/> */}
      {/* <HomecoffeeCulture/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home
