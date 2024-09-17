import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../public/styles.css"

function ExternalMenu() {
  function handleMouseOver(){
    const button = document.getElementById("dropdown-basic");
    button.style.color = "gold";
    button.style.transition = "1s";
  }
  
  function handleMouseOut(){
    const button = document.getElementById("dropdown-basic");
    button.style.color = "#fff";
    button.style.transition = "1s";
  }
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: 'transparent', color: '#fff'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <span>
          EXTERNAL LINKS
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu id="dropdown-inner">
        <Dropdown.Item href="https://www.linkedin.com/in/koray-akben-aaa9aa2a5/" target="_blank">LinkedIn</Dropdown.Item>
        <Dropdown.Item href="https://github.com/korayakben?tab=repositories" target="_blank">Github</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ExternalMenu;
