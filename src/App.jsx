import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Homecontent from '../Homecontent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-Container'>
        <Navbar />
        <Homecontent/>
      </div>
    </>
  )
}

export default App
