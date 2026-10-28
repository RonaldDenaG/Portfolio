
import './App.css';
import { AppBar, Box, Button, CssBaseline, createTheme, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, ThemeProvider, Toolbar, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useMemo, useState } from 'react';
import { Aboutme } from './Components/Aboutme';
import { Contact } from './Components/Contact';
import { ExperienceTimeline } from './Components/ExperienceTimeline';
import { Footer } from './Components/Footer';
import { Presentation } from './Components/Presentation';
import { Project } from './Components/Project';
import { Technologies } from './Components/Technologies';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const theme = useMemo(() => createTheme({ palette: { mode: isDark ? 'dark' : 'light' } }), [isDark]);

  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    document.body.dataset.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <AppBar
          position="sticky"
          sx={{
            top: 0,
            background: isDark ? 'rgba(8,24,39,0.88)' : 'rgba(20,77,125,0.94)',
            backdropFilter: 'blur(16px)',
            borderBottom: isDark ? '1px solid rgba(160,201,255,0.14)' : '1px solid rgba(255,255,255,0.18)',
            boxShadow: '0 8px 28px rgba(8,29,51,0.12)',
          }}
        >
          <Toolbar sx={{
            width: '100%',
            maxWidth: 1280,
            mx: 'auto',
            flexWrap: 'wrap',
            gap: { xs: 0.5, md: 1 },
            justifyContent: 'space-between',
            py: { xs: 1, sm: 1.25 },
            maxWidth: 1440,
            width: '100%',
            mx: 'auto',
            px: { xs: 1.5, sm: 3 },
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 1.5 },
              mr: { md: 'auto' },
              flexGrow: { xs: 1, md: 0 },
              justifyContent: 'flex-start',
              minWidth: 0,
            }}>
              <Typography component="a" href="#home" variant="h5" sx={{ color: 'white', textDecoration: 'none', fontWeight: 800, letterSpacing: '-0.04em', fontSize: { xs: '1.2rem', sm: '1.55rem' }, whiteSpace: 'nowrap' }}>Ronald Dena</Typography>
              <Box sx={{ width: 1, height: 26, bgcolor: 'rgba(255,255,255,0.35)', display: { xs: 'none', sm: 'block' } }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.82)', fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.9rem' }, whiteSpace: 'nowrap' }}>Full stack developer</Typography>
            </Box>
            <Box sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 0.25, md: 0.5 },
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}>
              <Button href="#about-me" sx={{ color: 'white', minWidth: 'auto', px: 1.25, borderRadius: 2, transition: 'background-color 180ms ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.14)' } }}>
                About me
              </Button>
              <Button href="#experience" sx={{ color: 'white', minWidth: 'auto', px: 1.25, borderRadius: 2, transition: 'background-color 180ms ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.14)' } }}>
                Experience
              </Button>
              <Button href="#technologies" sx={{ color: 'white', minWidth: 'auto', px: 1.25, borderRadius: 2, transition: 'background-color 180ms ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.14)' } }}>
                Technologies
              </Button>
              <Button href="#projects" sx={{ color: 'white', minWidth: 'auto', px: 1.25, borderRadius: 2, transition: 'background-color 180ms ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.14)' } }}>
                Projects
              </Button>
              <Button href="#contact" sx={{ color: 'white', minWidth: 'auto', px: 1.25, borderRadius: 2, transition: 'background-color 180ms ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.14)' } }}>
                Contact
              </Button>
              <Button
                href="/Ronald_Dena_Resume.pdf"
                download="Ronald_Dena_Resume.pdf"
                startIcon={<DownloadIcon />}
                sx={{ color: 'white', px: 1.5, ml: 0.5, border: '1px solid rgba(255,255,255,0.45)', borderRadius: 2, whiteSpace: 'nowrap', transition: 'background-color 180ms ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.14)', borderColor: 'white' } }}
              >
                Download CV
              </Button>
            </Box>
            <IconButton
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setIsDark((current) => !current)}
              sx={{ color: 'white' }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'white' }}
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
              <ListItemButton component="a" href="#home" onClick={closeDrawer}>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton component="a" href="#about-me" onClick={closeDrawer}>
                <ListItemText primary="About me" />
              </ListItemButton>
              <ListItemButton component="a" href="#experience" onClick={closeDrawer}>
                <ListItemText primary="Experience" />
              </ListItemButton>
              <ListItemButton component="a" href="#technologies" onClick={closeDrawer}>
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
        <main>
          <Presentation isDark={isDark} />
          <Box component="section" id="about-me" sx={{ px: 2, py: { xs: 3, md: 5 } }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
              <Aboutme isDark={isDark} />
            </Box>
          </Box>
          <Box component="section" id="experience" sx={{ px: 2, py: { xs: 3, md: 5 } }}>
            <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
              <ExperienceTimeline isDark={isDark} />
            </Box>
          </Box>
          <Box component="section" id="technologies" sx={{ px: 2, py: { xs: 3, md: 5 } }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
              <Technologies />
            </Box>
          </Box>
          <Box component="section" id="projects" sx={{ px: 2, py: { xs: 3, md: 5 } }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
              <Project isDark={isDark} />
            </Box>
          </Box>
          <Box component="section" id="contact" sx={{ px: 2, py: { xs: 3, md: 5 } }}>
            <Contact />
          </Box>
        </main>
        <Footer isDark={isDark} />
      </Box>
    </ThemeProvider>
  );

}

export default App;
