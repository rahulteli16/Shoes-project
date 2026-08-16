import React from 'react'
import Nhero from './hero'
import Nnavbar from './navbar'
import Nfooter from './footer'


const Home = () => {
  return (
    <div>
        <Nnavbar/>
        <Nhero/>
        <Nfooter/>
    </div>
  )
}

export default Home