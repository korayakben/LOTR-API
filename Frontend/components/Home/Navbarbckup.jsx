import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../../public/styles.css";
import ExternalMenu from './ExternalMenu';
import SidebarExt from "./SidebarExt";



const drawerWidth = 240;
const navItems = ['Home', 'Features', 'Requester', 'Documentation', <ExternalMenu/>];
const sidebarItems = ['Home', 'Features', 'Requester', 'Documentation', <SidebarExt/>];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const addresses = [
    "",
    "feature-header",
    "requester-header",
    "docs",
    "links"
  ];
  
  const [address, setAddress] = React.useState("/");
  const [targetBlank, setTargetBlank] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}} id="sidebar-bck">
      <Typography variant="h6" sx={{ my: 2 }}>
      <a href="/" className="title-bck">LOTR API</a>
      </Typography>
      <Divider />
      <List>
        {sidebarItems.map((item, index) => (
          <a href={address}
          key={index}
          target={targetBlank} 
          style={{textDecoration: "none", color:"#000"}} onClick={()=>{
            if (index !== 3) {
              setAddress(`#${addresses[index]}`);
              setTargetBlank("");
            }
            else {
              setAddress(`/docs`);
              setTargetBlank("_blank");
            }
          }}>
            <ListItem key={item} disablePadding className='listItem-bck'>
            <ListItemButton sx={{ textAlign: 'center' }} className='listItem-bck'>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}} className="up-navbar">
      <CssBaseline />
      <AppBar component="nav" id='navbar-bck'> 
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } ,}}
          >
            <div className='menu-icon'>
            <MenuIcon/>
            </div>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <a href="/" className="title-bck">LOTR API</a>
          </Typography>
          <Box className="navbar-bck-container" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <a
              key={index}
              href={address}
              target={targetBlank}
              onClick={() => {
                if (index !== 3) {
                  setAddress(`#${addresses[index]}`);
                  setTargetBlank("");
                } else {
                  setAddress(`/docs`);
                  setTargetBlank("_blank");
                }
              }}
            >
                <Button key={item} sx={{ color: '#fff' }} id="navbar-bck-btn">
                {item}
              </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;





