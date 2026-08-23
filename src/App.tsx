
import './App.css';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { Aboutme } from './Components/Aboutme'
import {Contact} from './Components/Contact'
import {Technologies} from './Components/Technologies'
import {Project} from './Components/Project'
import  {Footer} from './Components/Footer'
function App() {
  return (
    <div>
        <AppBar position='static' sx={{backgroundColor: '#1d5e97ff'}}>
          <Toolbar>
            <Typography variant='h4' sx={{color: 'white', flexGrow: 1}}> Ronald Dena</Typography>
            <Typography variant='h5' sx={{color: 'white', flexGrow: 9}}> Full stack dev</Typography>
              <Button href="#about-me">
                <Typography variant='h6' sx={{color: 'white'}}> About me </Typography>
              </Button>
              <Button href="#technologies">
                <Typography variant='h6' sx={{color: 'white'}}> Tecnologies </Typography>
              </Button>
              <Button href="#projects">
                <Typography variant='h6' sx={{color: 'white'}}> Projects </Typography>
              </Button>
              <Button href="#contact">
                <Typography variant='h6' sx={{color: 'white'}}> contact </Typography>
              </Button>
              <Button
                href="/cv.pdf"
                download="Ronald-Dena-CV.pdf"
                startIcon={<DownloadIcon />}
                sx={{ color: 'white' }}
              >
                Download CV
              </Button>
          </Toolbar>
        </AppBar>
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
