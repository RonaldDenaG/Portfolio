
import './App.css';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, IconButton, List, ListItemButton, ListItemText, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Aboutme } from './Components/Aboutme'
import {Contact} from './Components/Contact'
import {Technologies} from './Components/Technologies'
import {Project} from './Components/Project'
import  {Footer} from './Components/Footer'
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div>
        <AppBar position='static' sx={{backgroundColor: '#1d5e97ff'}}>
          <Toolbar sx={{
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center',
            py: { xs: 1.5, sm: 1 },
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 2 },
              mr: { sm: 'auto' },
              flexGrow: 1,
              justifyContent: { xs: 'flex-start', sm: 'flex-start' },
            }}>
              <Typography variant='h4' sx={{color: 'white', fontSize: { xs: '1.6rem', sm: '2.125rem' }}}> Ronald Dena</Typography>
              <Typography variant='h5' sx={{color: 'white', fontSize: { xs: '1rem', sm: '1.5rem' }}}> Full stack dev</Typography>
            </Box>
            <Box sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 0.5, sm: 1 },
              width: { xs: 'auto', sm: 'auto' },
              display: { xs: 'none', sm: 'flex' },
            }}>
              <Button href="#about-me" sx={{ color: 'white', minWidth: { xs: 'auto', sm: 64 }, px: { xs: 1, sm: 2 } }}>
                About me
              </Button>
              <Button href="#technologies" sx={{ color: 'white', minWidth: { xs: 'auto', sm: 64 }, px: { xs: 1, sm: 2 } }}>
                Technologies
              </Button>
              <Button href="#projects" sx={{ color: 'white', minWidth: { xs: 'auto', sm: 64 }, px: { xs: 1, sm: 2 } }}>
                Projects
              </Button>
              <Button href="#contact" sx={{ color: 'white', minWidth: { xs: 'auto', sm: 64 }, px: { xs: 1, sm: 2 } }}>
                Contact
              </Button>
              <Button
                href="/Ronald_Dena_CV.pdf"
                download="Ronald_Dena_C.pdf"
                startIcon={<DownloadIcon />}
                sx={{ color: 'white', px: { xs: 1, sm: 2 } }}
              >
                Download CV
              </Button>
            </Box>
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'inline-flex', sm: 'none' }, color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
          <Box sx={{ width: 260 }} role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <IconButton aria-label="Close navigation menu" onClick={closeDrawer}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <List>
              <ListItemButton component="a" href="#about-me" onClick={closeDrawer}>
                <ListItemText primary="About me" />
              </ListItemButton>
              <ListItemButton component="a" href="#technologies" onClick={closeDrawer}>
                <ListItemText primary="Technologies" />
              </ListItemButton>
              <ListItemButton component="a" href="#projects" onClick={closeDrawer}>
                <ListItemText primary="Projects" />
              </ListItemButton>
              <ListItemButton component="a" href="#contact" onClick={closeDrawer}>
                <ListItemText primary="Contact" />
              </ListItemButton>
              <ListItemButton component="a" href="/Ronald_Dena_CV.pdf" download="Ronald_Dena_CV.pdf" onClick={closeDrawer}>
                <DownloadIcon sx={{ mr: 1 }} />
                <ListItemText primary="Download CV" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
    <Box id="about-me">
      <Aboutme/>
    </Box>
    <Box id="technologies">
      <Technologies/>
    </Box>
    <Box id="projects">
      <Project githubUsername="RonaldDenaG" />
    </Box>
        <Box id="contact">
      <Contact/>
    </Box>
    <Footer/>
    </div>
  );

}

export default App;
