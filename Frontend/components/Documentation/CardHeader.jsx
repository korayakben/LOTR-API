import React, { useEffect, useState } from 'react'
import "../../public/docStyles.css"

function CardHeader(props) {

  return (
    <div id={props.id}>
        <div className='card-title'>{props.title}</div>
        <div className='card-desc'>{props.desc}</div>
    </div>
  )
}

export default CardHeader