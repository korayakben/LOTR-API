import React from 'react'
import "../public/styles.css"

function NoPageFound() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontSize: "150%"}}>
        <h1 style={{fontSize: "300%"}}>404</h1>
        <p id="NoPageP">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" style={{textDecoration: "none"}} id="NoPageA">Go back to the homepage</a>
      </div>
  )
}

export default NoPageFound