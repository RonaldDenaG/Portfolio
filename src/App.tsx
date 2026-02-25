
import './App.css';
import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import {Aboutme} from './Components/Aboutme'
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
              <Button>
                <Typography variant='h6' sx={{color: 'white'}}> About me </Typography>
              </Button>
              <Button>
                <Typography variant='h6' sx={{color: 'white'}}> contact </Typography>
              </Button>
              <Button>
                <Typography variant='h6' sx={{color: 'white'}}> Tecnologies </Typography>
              </Button>
              <Button>
                <Typography variant='h6' sx={{color: 'white'}}> Projects </Typography>
              </Button>
          </Toolbar>
        </AppBar>
    <Aboutme/>
    <Technologies/>
    <Project githubUsername="RonaldDenaG" />
    <Footer/>
    </div>
  );

}

export default App;
