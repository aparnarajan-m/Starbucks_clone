import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
// import Footer from './Components/Footer'

function App() {


  return (
    <>
      <div>
        <div className='app-navbar-div'><Navbar/></div>
        <Home />
        {/* <Footer/> */}
      </div>
    </>
  )
}

export default App


