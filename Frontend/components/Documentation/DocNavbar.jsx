import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import "../../public/docStyles.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import MessageIcon from '@mui/icons-material/Message';
import ConstructionIcon from '@mui/icons-material/Construction';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

 export const id_addresses = [
  "home",
  "where-you-are",
  "endpoints",
  "universe",
  "data-by-gender",
  "data-by-ring",
  "random",
  "quotes",
  "tools",
  "tools-by-name",
  "races",
  "races-by-name",
  "races-by-home"
]

function DocNavbar() {

  const [lightOn, setLightOn] = React.useState("none");
  const [nightOn, setNightOn] = React.useState("");

  function colorInnerCard(givenColor){
    const inner_title = document.getElementsByClassName("inner-title");
    const inner_desc = document.getElementsByClassName("inner-desc");

    const length = inner_title.length;  //Both have the same length value

    for(let i=0;i<length;i++){
      inner_title[i].style.color = givenColor;
      inner_desc[i].style.color = givenColor;
    }
  }

  function colorOuterCard(givenColor){
    const upper_title = document.getElementsByClassName("card-title");
    const upper_desc = document.getElementsByClassName("card-desc");

    const length = upper_title.length; // Both have the same length value

    for(let i=0;i<length;i++){
      upper_title[i].style.color = givenColor;
      upper_desc[i].style.color = givenColor;
    }
  }

  function colorAbout(bgColor, textColor, notatedColor){
    const about_div = document.getElementById("about-inner");
    about_div.style.backgroundColor = bgColor;
    about_div.style.color = textColor;
    about_div.style.transition = "1s"
    
    const notated_words = document.getElementsByClassName("notated-word");

    for(let i=0;i<notated_words.length;i++){
      notated_words[i].style.color= notatedColor
    }
  }


  function seeLight(){
    setLightOn("");
    setNightOn("none");
    document.body.style.transition = "1s";
    document.body.style.backgroundColor = "#292929"
    colorOuterCard("#fff");
    colorInnerCard("#fff"); 
    colorAbout("rgb(68, 68, 68)", "#fff", "lightgreen");
  }

  function seeNight(){
    setLightOn("none");
    setNightOn("");
    document.body.style.backgroundColor = "#fff";
    colorOuterCard("#000");
    colorInnerCard("#000");
    colorAbout("rgb(226, 226, 226)", "#000", "green");
  }


  const [address, setAdress] = React.useState("/");

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const icons = [
    <HomeRoundedIcon className='sidebar-icons'/>,
    <HelpCenterIcon className='sidebar-icons'/>,
    <HubRoundedIcon className='sidebar-icons'/>,
    <PublicIcon className='sidebar-icons'/>,
    null,
    null,
    <ShuffleIcon className='sidebar-icons'/>,
    <MessageIcon className='sidebar-icons'/>,
    <ConstructionIcon className='sidebar-icons'/>,
    null,
    <PeopleAltIcon className='sidebar-icons'/>,
    null,
    null
  ];

   

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="custom-scrollbar"
    >
      <List>
        {['Home', 'Where you are', 'Endpoints', 'Universe', "• Get data by gender", "• Get data by ring bearer", "Random", "Quotes", "Tools", "• Get tools by name", "Races", "• Get races by name", "• Get races by home"].map((text, index) => (
          <a href={address} className="listItem" key={index}>
            <ListItem 
              key={index} 
              disablePadding 
              className="listItem" 
              onClick={() => index === 0 ? setAdress("/") : setAdress(`#${id_addresses[index]}`)}
            >
              <ListItemButton>
                <ListItemIcon>
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
      <List>
        {['About'].map((text, index) => (
          <a href={address} className='listItem' key={index}>
            <ListItem 
              key={index} 
              disablePadding 
              className="listItem" 
              onClick={() => setAdress("#about")}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InfoIcon className='sidebar-icons'/> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='doc-nav-container'>
      <div className='toggle-btn'>
        <Button onClick={toggleDrawer('left', true)}><DensityMediumIcon sx={{color:"#fff"}}/></Button>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </div>

      <div className='title-container'>
        <a href="/docs" className='doc-title'>
          LOTR API DOCS
        </a>
      </div>

      <div className='link-buttons-container'>
      <div style={{display: nightOn}}><NightlightIcon onClick={seeLight}/></div>
      <div style={{display: lightOn}}><LightModeIcon onClick={seeNight}/></div>
        <a href="https://www.linkedin.com/in/koray-akben-aaa9aa2a5/" target='_blank'><LinkedInIcon/></a>
        <a href="https://github.com/korayakben?tab=repositories" target='_blank'><GitHubIcon/></a>
      </div>
    </div>
  );
}

export default DocNavbar;
