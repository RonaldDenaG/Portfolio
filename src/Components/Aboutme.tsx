import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
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
    isDark?: boolean;
}

const PhotoSlider = ({ photos, isDark = false }: PhotoSliderProps) => {
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
            <Button onClick={prevSlide} aria-label="Previous photo" sx={{ minWidth: 0, p: 1, borderRadius: '50%', color: isDark ? '#dfeeff' : 'inherit' }}>
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
                    alt={currentPhoto.caption || `Slide ${currentIndex + 1}`}
                    style={{
                        width: '100%',
                        maxWidth: '540px',
                        height: 'auto',
                        aspectRatio: '4/3',
                        objectFit: 'cover',
                        borderRadius: '14px',
                        boxShadow: isDark ? '0 16px 36px rgba(7, 20, 30, 0.4)' : '0 16px 36px rgba(9, 34, 59, 0.18)',
                    }}
                />
                <Typography variant="h6" sx={{ mt: 1.5, textAlign: 'center', fontWeight: 700, color: isDark ? '#edf6ff' : 'text.primary' }}>
                    {currentPhoto.caption}
                </Typography>
            </Box>
            <Button onClick={nextSlide} aria-label="Next photo" sx={{ minWidth: 0, p: 1, borderRadius: '50%', color: isDark ? '#dfeeff' : 'inherit' }}>
                <ArrowForwardIosIcon fontSize="small" />
            </Button>
        </Box>
    );
};

interface AboutmeProps {
    isDark?: boolean;
}

export const Aboutme = ({ isDark = false }: AboutmeProps) => {
    const photos = [
        { src: Ronald1, caption: 'me :)' },
        { src: JohnDeere, caption: 'my current job' },
        { src: Diego, caption: 'my little brother <3' },
        { src: Atenas, caption: 'my dog atenas :)' },
    ];

    return (
        <Paper
            elevation={0}
            className="reveal"
            sx={{
                mt: { xs: 1, md: 2 },
                mb: 2,
                p: { xs: 2.5, sm: 3.5, md: 4, lg: 5 },
                borderRadius: 4,
                border: `1px solid ${isDark ? 'rgba(160,201,255,0.14)' : 'rgba(16, 66, 112, 0.14)'}`,
                background: isDark
                    ? 'linear-gradient(180deg, rgba(15, 30, 45, 0.95) 0%, rgba(12, 24, 35, 0.95) 100%)'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(245,250,255,0.95) 100%)',
                boxShadow: isDark ? '0 20px 40px rgba(4, 12, 20, 0.32)' : '0 18px 32px rgba(15, 36, 61, 0.08)',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: '1.85rem', md: '2.3rem' },
                        fontWeight: 800,
                        textAlign: 'center',
                        color: isDark ? '#edf6ff' : 'text.primary',
                    }}
                >
                    About me
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' }, gap: 3, alignItems: 'center', width: '100%' }}>
                    <Box sx={{ order: { xs: 2, md: 1 } }}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, mb: 1.5, color: isDark ? '#edf6ff' : 'text.primary' }}
                        >
                            brief introduction of myself.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: isDark ? 'rgba(234,244,255,0.8)' : 'text.secondary',
                                lineHeight: 1.8,
                                mb: 1.5,
                            }}
                        >
                            I&apos;m Ronald Dena, a full stack developer focused on solving real problems with simple, reliable digital products. I enjoy turning messy ideas into structured systems that feel intuitive for users and maintainable for teams.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: isDark ? 'rgba(234,244,255,0.8)' : 'text.secondary',
                                lineHeight: 1.8,
                            }}
                        >
                            My work sits between engineering and product thinking: building user-centered interfaces, designing backend logic that scales, and making sure the experience remains practical, clear, and easy to evolve over time.
                        </Typography>
                    </Box>

                    <Box sx={{ order: { xs: 1, md: 2 } }}>
                        <PhotoSlider photos={photos} isDark={isDark} />
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};