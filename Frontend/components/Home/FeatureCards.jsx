import React from 'react'
import Features from './Features'
import {featureList} from "../../src/featureList"

function FeatureCards() {
  return (
    
        featureList.map((element, index)=>{
            return(
                <Features key={index} icon={element.icon} title={element.title} description={element.description} />
            )
        })
    
  )
}

export default FeatureCards