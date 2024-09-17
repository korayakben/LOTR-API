import React from 'react'
import "../../public/styles.css"

function Features(props) {
  return (
    <div className='feature-card' style={{fontFamily: "serif"}}>
        <img src={props.icon} style={{width: "25%"}}/>
        <span>{props.title}</span>
        <div id="description"><span>{props.description}</span></div>
    </div>
  )
}

export default Features