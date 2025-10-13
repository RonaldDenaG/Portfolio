import { Box, Button, Typography } from '@mui/material';
import React, {useState} from 'react';
import kemalito from '../assets/kemalito.jpg'
import kemonito from '../assets/kemonito.jpg'
import {ArrowBack, ArrowForward} from '@mui/icons-material';

interface PhotoSliderProps {
    photos: string[];
}

 const PhotoSlider = ({photos}: {photos: string []}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    }
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }
    
    return (
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={prevSlide}><ArrowBack/></Button>
        <Box sx={{width:'100%', height: 'auto', borderRadius: '10px', justifyContent: 'center', alignItems: 'center'}}>
            <img src={photos[currentIndex]} alt={'Slide ${currentIndex}'} style={{width: '100%', 
                maxWidth: '400px', height: 'auto', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '10px',
            }}/>
        </Box>
        <Button onClick={nextSlide}><ArrowForward/></Button>

      </Box>
        )
    }

export const Aboutme = () => {
    return(
        <Box sx={{mt: '2', mb: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', p: 2}}>
            <Typography variant="h4">
                About me
            </Typography>
            <PhotoSlider photos = {[kemalito, kemonito] }></PhotoSlider>
            <Typography variant="h4">
                This is Ronald, Im 20 years
            </Typography>
        </Box>
    ) 
}
