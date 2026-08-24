
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
  const navButtonSx = {
    color: 'white',
    borderRadius: 999,
    minWidth: { xs: 'auto', sm: 64 },
    px: { xs: 1, sm: 2 },
    transition: 'transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      backgroundColor: 'rgba(255,255,255,0.16)',
      boxShadow: '0 6px 14px rgba(6, 23, 40, 0.18)',
    },
    '&:focus-visible': {
      outline: '2px solid rgba(255,255,255,0.7)',
      outlineOffset: 2,
    },
  };
  const menuButtonSx = {
    display: { xs: 'inline-flex', sm: 'none' },
    color: 'white',
    borderRadius: 2,
    transition: 'transform 180ms ease, background-color 180ms ease',
    '&:hover': {
      transform: 'rotate(90deg) scale(1.05)',
      backgroundColor: 'rgba(255,255,255,0.16)',
    },
  };
  const drawerItemSx = {
    borderRadius: 2,
    mx: 0.8,
    my: 0.2,
    transition: 'transform 180ms ease, background-color 180ms ease',
    '&:hover': {
      transform: 'translateX(4px)',
      backgroundColor: 'rgba(16,66,112,0.08)',
    },
  };
  const sectionSx = {
    scrollMarginTop: { xs: 84, sm: 96 },
    width: '100%',
    maxWidth: 1180,
    mx: 'auto',
    px: { xs: 2, sm: 3, md: 4 },
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
        <AppBar
          position='sticky'
          elevation={0}
          sx={{
            background: 'linear-gradient(90deg, rgba(16,66,112,0.95) 0%, rgba(29,94,151,0.95) 100%)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <Toolbar sx={{
            width: '100%',
            maxWidth: 1280,
            mx: 'auto',
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
              <Typography
                variant='h4'
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  letterSpacing: '0.01em',
                  fontSize: { xs: '1.4rem', sm: '2rem' },
                }}
              >
                Ronald Dena
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: { xs: '0.92rem', sm: '1.15rem' },
                  fontWeight: 600,
                }}
              >
                Full stack dev
              </Typography>
            </Box>
            <Box sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 0.5, sm: 1 },
              width: { xs: 'auto', sm: 'auto' },
              display: { xs: 'none', sm: 'flex' },
            }}>
              <Button href="#about-me" sx={navButtonSx}>
                About me
              </Button>
              <Button href="#technologies" sx={navButtonSx}>
                Technologies
              </Button>
              <Button href="#projects" sx={navButtonSx}>
                Projects
              </Button>
              <Button href="#contact" sx={navButtonSx}>
                Contact
              </Button>
              <Button
                href="/Ronald_Dena_CV.pdf"
                download="Ronald_Dena_C.pdf"
                startIcon={<DownloadIcon />}
                sx={navButtonSx}
              >
                Download CV
              </Button>
            </Box>
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={menuButtonSx}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer} PaperProps={{ sx: { width: 280, bgcolor: '#f7fbff' } }}>
          <Box sx={{ width: '100%' }} role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <IconButton aria-label="Close navigation menu" onClick={closeDrawer}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <List>
              <ListItemButton component="a" href="#about-me" onClick={closeDrawer} sx={drawerItemSx}>
                <ListItemText primary="About me" />
              </ListItemButton>
              <ListItemButton component="a" href="#technologies" onClick={closeDrawer} sx={drawerItemSx}>
                <ListItemText primary="Technologies" />
              </ListItemButton>
              <ListItemButton component="a" href="#projects" onClick={closeDrawer} sx={drawerItemSx}>
                <ListItemText primary="Projects" />
              </ListItemButton>
              <ListItemButton component="a" href="#contact" onClick={closeDrawer} sx={drawerItemSx}>
                <ListItemText primary="Contact" />
              </ListItemButton>
              <ListItemButton component="a" href="/Ronald_Dena_CV.pdf" download="Ronald_Dena_CV.pdf" onClick={closeDrawer} sx={drawerItemSx}>
                <DownloadIcon sx={{ mr: 1 }} />
                <ListItemText primary="Download CV" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
    <Box id="about-me" sx={{ ...sectionSx, pt: { xs: 4, md: 6 } }}>
      <Aboutme />
    </Box>
    <Box id="technologies" sx={{ ...sectionSx, pt: { xs: 3, md: 5 } }}>
      <Technologies />
    </Box>
    <Box id="projects" sx={{ ...sectionSx, pt: { xs: 3, md: 5 } }}>
      <Project githubUsername="RonaldDenaG" />
    </Box>
    <Box id="contact" sx={{ ...sectionSx, pt: { xs: 3, md: 5 }, pb: { xs: 5, md: 7 } }}>
      <Contact />
    </Box>
    <Footer />
    </Box>
  );

}

export default App;
