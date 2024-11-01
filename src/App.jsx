import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './Components/Navbar'
import Homecontent from './Components/Homecontent'

function App() {


  return (
    <>
      <div className='main-Container'>
        <Navbar />
        <Homecontent />
      </div>
    </>
  )
}

export default App
