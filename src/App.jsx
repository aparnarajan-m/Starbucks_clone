import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {


  return (
    <>
      <div className='main-Container'>
        <Navbar/>
        <Home/>
      </div>
    </>
  )
}

export default App
