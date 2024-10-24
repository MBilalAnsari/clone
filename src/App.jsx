import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'


function App() {


  return (
      <div className='App'>
        <Navbar/>
        <Home/>
      </div>
  )
}

export default App
