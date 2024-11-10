import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <div className='main-Container'>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}

export default App
