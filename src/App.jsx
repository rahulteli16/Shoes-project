import { Routes, Route } from "react-router-dom"
import { Contact, Menu, Route as RouteIcon } from "lucide-react";
import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Nhero from './components/hero'
import Nnavbar from './components/navbar'
import Nfooter from './components/footer'
import Home from './components/home'
import Signin from './pages/Signin'
import Signup from "./pages/Signup";
import ContactNike from "./pages/Contact";
import Videonike from "./pages/Videonike";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./pages/ScrollToTop.jsx"
import Bag from "./pages/bag.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nnavbar />

      <ScrollToTop />
      <main className="pt-20"></main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactNike />} />
        <Route path="/video" element={<Videonike />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>

      <Nfooter />
    </>
  )
}

export default App
