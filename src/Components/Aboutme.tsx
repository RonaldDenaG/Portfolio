import { Box, Button, Typography } from '@mui/material';
import React, {useState} from 'react';
import Ronald1 from '../assets/foto_mia.jpeg';
import JohnDeere from '../assets/foto_JohnDeere.jpeg';
import Atenas from '../assets/foto_atenas.jpeg';
import Diego from '../assets/foto_diego.jpeg';   

import {ArrowBack, ArrowForward} from '@mui/icons-material';


interface Photo {
    src: string;
    caption: string;
}

interface PhotoSliderProps {
    photos: Photo[];
}

const PhotoSlider = ({ photos }: PhotoSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const currentPhoto = photos[currentIndex];

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button onClick={prevSlide}><ArrowBack /></Button>
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <img
                    src={currentPhoto.src}
                    alt={currentPhoto.caption || `Slide ${currentIndex}`}
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        aspectRatio: '4/3',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                />
                <Typography variant="subtitle1" sx={{ mt: 1, textAlign: 'center' }}>
                    {currentPhoto.caption}
                </Typography>
            </Box>
            <Button onClick={nextSlide}><ArrowForward /></Button>
        </Box>
    );
}

export const Aboutme = () => {
    const photos = [
        { src: Ronald1, caption: 'me :) ' },
        { src: JohnDeere, caption: 'my current job' },
        { src: Diego, caption: 'My little brother <3' },
        { src: Atenas, caption: 'My dog atenas :)' },
    ];
    return (
        <Box sx={{ mt: '2', mb: '2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', p: 2 }}>
            <Typography variant="h4">
                About me
            </Typography>
            <PhotoSlider photos={photos} />
            <Typography variant="h6" sx={{ mt: 2, textAlign: 'center', maxWidth: '600px' }}>
                Hi there! I'm Ronald Dena, a fullstack developer with a passion for creating innovative solutions.
            </Typography>
        </Box>
    );
}
