import React from 'react'
import "../../public/styles.css"

function Navbar() {
  return (
    <div className='navbar' id="navbar">
        <div className="nav-title-container">
            <div className='nav-title'>
            <img src="../public/icons/nav-ring.png" alt="ring" style={{width: "35%"}} />
            <span style={{fontSize: "230%", position: "relative", top:"1.7rem", fontWeight: "600"}}>LOTR API</span>
            </div>
        </div>
        <div className="nav-inner-container">
            <div className='nav-inner'>
            <div style={{width: "13%"}}><a href="#">Home</a></div>
            <div style={{width: "22%"}}><a href="#feature-header">Features</a></div>
            <div style={{width: "23%"}}><a href="#requester-header">Requester</a></div>
            <div style={{width: "32%"}}><a href="/docs">Documentation</a></div>
            <div style={{width: "31%"}}><a href="#">External Links</a></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar