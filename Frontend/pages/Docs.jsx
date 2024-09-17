import React from 'react'
import DocNavbar from '../components/Documentation/DocNavbar'
import DocCards from '../components/Documentation/DocCards'
import About from '../components/Documentation/About'
import Footer from "../components/Home/Footer"

function Docs() {
  return (
    <div>
      <DocNavbar/>
      <DocCards/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Docs