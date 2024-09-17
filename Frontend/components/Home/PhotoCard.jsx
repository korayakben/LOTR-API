import * as React from 'react';
import Button from '@mui/material/Button';
import "../../public/styles.css"
import {images} from "../../src/images"

function PhotoCard() {

  function getImage(){  
    const randomIndex = Math.floor(Math.random()*(images.length));
    return images[randomIndex].img_path;
  }

  return (
    <div className='photo-container'>
        <img src={getImage()} alt="lotr"/>
        <div id="photo-btn"> 
        <Button variant="contained" href="#navbar-bck" id="start-btn" sx={{fontFamily: "serif"}}>Quick Start</Button>
        </div>
    </div>
  )
}

export default PhotoCard