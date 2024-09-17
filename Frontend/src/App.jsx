import React from 'react'
import Home from '../pages/Home'
import Docs from '../pages/Docs'
import NoPageFound from '../components/NoPageFound'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/docs" element={<Docs/>}/>
        <Route path="*" element={<NoPageFound/>}/>
    </Routes>
  )
}

export default App