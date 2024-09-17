import React from 'react'
import "../../public/styles.css"

function Footer() {
  return (
    <div className='footer-container' style={{fontFamily: "serif"}}>

        <div className='footer-title'>
            © Copyright <span style={{color:"gold"}}>Lord of the Rings API</span>. All Rights Reserved.
        </div>

         <div className='footer'>
            <div className='top-footer'>
            <span style={{fontWeight: "600", color:"gold"}}>LOTR API</span> is a non-official API and not endorsed by Middle-earth Enterprises in any way.
            </div>

            <div className='lower-footer'>
              <div>
              Middle-earth Enterprises, The Lord of the Rings, and all associated properties are trademarks or registered trademarks of The Saul Zaentz Company.
              </div>
            </div>

            <div className='korayakben-div'>Created by <span id="korayakben">Koray Akben</span></div>
         </div>

    </div>
  )
}

export default Footer