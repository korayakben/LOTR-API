import React from 'react'
import Navbar from '../components/Home/Navbar'
import PhotoCard from '../components/Home/PhotoCard'
import FeatureHeader from '../components/Home/FeatureHeader'
import FeatureCards from '../components/Home/FeatureCards'
import Requester from '../components/Home/Requester'
import Footer from '../components/Home/Footer'
import DrawerAppBar from '../components/Home/Navbarbckup'

function Home() {
  return (
    <div>
    <PhotoCard/>
    <DrawerAppBar/>
    <FeatureHeader/>
    <div className='features-container'>
    <FeatureCards/>
    </div>
    <Requester/>
    <Footer/>
  </div>
  )
}

export default Home