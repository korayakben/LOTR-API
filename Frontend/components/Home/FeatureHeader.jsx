import React from 'react'
import "../../public/styles.css"

function FeatureHeader() {
  return (
    <div className='header-container' style={{fontFamily: "serif"}}>
        <div className='upper-title' id="feature-header">
                <span>Features <hr/></span>  
        </div>

        <div className='lower-title'>
            <span>API ENDPOINTS / FEATURES</span>
        </div>

    </div>
  )
}

export default FeatureHeader