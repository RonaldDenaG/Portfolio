import { Box, Button, Paper, Typography } from '@mui/material';
import React, {useState} from 'react';
import Ronald1 from '../assets/foto_mia.jpeg';
import JohnDeere from '../assets/foto_JohnDeere.jpeg';
import Atenas from '../assets/foto_atenas.jpeg';
import Diego from '../assets/foto_diego.jpeg';   

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 0.5, sm: 1.5 } }}>
            <Button onClick={prevSlide} aria-label="Previous photo" sx={{ minWidth: 0, p: 1, borderRadius: '50%' }}>
                <ArrowBackIosNewIcon fontSize="small" />
            </Button>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 640,
                    height: 'auto',
                    borderRadius: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <img
                    src={currentPhoto.src}
                    alt={currentPhoto.caption || `Slide ${currentIndex}`}
                    style={{
                        width: '100%',
                        maxWidth: '540px',
                        height: 'auto',
                        aspectRatio: '4/3',
                        objectFit: 'cover',
                        borderRadius: '14px',
                        boxShadow: '0 16px 36px rgba(9, 34, 59, 0.18)',
                    }}
                />
                <Typography variant="h6" sx={{ mt: 1.5, textAlign: 'center', fontWeight: 700 }}>
                    {currentPhoto.caption}
                </Typography>
            </Box>
            <Button onClick={nextSlide} aria-label="Next photo" sx={{ minWidth: 0, p: 1, borderRadius: '50%' }}>
                <ArrowForwardIosIcon fontSize="small" />
            </Button>
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
        <Paper
            elevation={0}
            sx={{
                mt: { xs: 1, md: 2 },
                mb: 2,
                p: { xs: 2.5, sm: 3.5, md: 4 },
                borderRadius: 4,
                border: '1px solid rgba(16, 66, 112, 0.14)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(245,250,255,0.95) 100%)',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2.5 }}>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.85rem', md: '2.3rem' }, fontWeight: 800, textAlign: 'center' }}>
                    About me
                </Typography>
                <PhotoSlider photos={photos} />
                <Typography variant="h6" sx={{ mt: 1, textAlign: 'center', maxWidth: 700, color: 'text.secondary', lineHeight: 1.6 }}>
                    Hi there! I&apos;m Ronald Dena, a fullstack developer focused on building practical and reliable digital solutions.
                </Typography>
            </Box>
        </Paper>
    );
}
