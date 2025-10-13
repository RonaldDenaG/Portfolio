
import './App.css';
import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import {Aboutme} from './Components/Aboutme'
import {Contact} from './Components/Contact'
import {Projects} from './Components/Project'
import  {Footer} from './Components/Footer'
function App() {
  return (
    <div>
        <AppBar position='static' color='error'>
          <Toolbar>
            <Typography variant='h4' sx={{color: 'black', flexGrow: 1}}> Ronald Dena</Typography>
              <Button>
                <Typography variant='h6' sx={{color: 'black'}}> About me </Typography>
              </Button>
              <Button>
                <Typography variant='h6' sx={{color: 'black'}}> contact </Typography>
              </Button>
          </Toolbar>
        </AppBar>
    <Aboutme/>
    <Projects/>
    <Footer/>
    </div>
  );

}

export default App;
