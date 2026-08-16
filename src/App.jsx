import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nhero from './components/hero'
import Nnavbar from './components/navbar'
import Nfooter from './components/footer'
import { Routes , Route } from "react-router-dom"
import { Route as RouteIcon } from "lucide-react";
import Home from './components/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>      
    </Routes>
    </>
  )
}

export default App
