import React from 'react'
import "../../public/docStyles.css"

function InnerCard(props) {
  return (
    <div className='inner-card-container' id={props.id}>
        <div className='inner-title'>{props.title}</div>
        <div className='inner-desc'>{props.desc}</div>
    </div>
  )
}

export default InnerCard