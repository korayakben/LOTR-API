import React from 'react'
import "../../public/styles.css"

function SidebarExt() {
  return (
    <div>
    <div>External Links</div>
        <div className='sidebar-inner'>
            <div className='sidebar-a-container'>
                <a className='sidebar-a' href="https://www.linkedin.com/in/koray-akben-aaa9aa2a5/"><div>• LinkedIn</div></a>
                <a className='sidebar-a'  href="https://github.com/korayakben?tab=repositories"><div>• Github</div></a>
            </div>
        </div>
    </div>
  )
}

export default SidebarExt