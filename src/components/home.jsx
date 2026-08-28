import React from 'react'
import Nhero from './hero'
import Videonike from '../pages/Videonike'
import ContactNike from '../pages/Contact'
import FAQ from "../pages/FAQ";


const Home = () => {
  return (
    <div>
      <Nhero />
      <Videonike /> 
      <FAQ />
      <ContactNike />
    </div>
  )
}

export default Home