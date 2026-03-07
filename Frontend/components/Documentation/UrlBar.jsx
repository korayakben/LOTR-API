import React from 'react'
import "../../public/docStyles.css"

function UrlBar(props) {
  return (
    <div className='url-bar'>
        <span>http://lotrapi.com/api/v1/{props.endpoint}</span>
    </div>
  )
}

export default UrlBar
