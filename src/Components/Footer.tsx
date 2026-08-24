import {Box, Container, Stack} from "@mui/material";
import { Typography } from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                mt: { xs: 4, md: 6 },
                textAlign: 'center',
                background: 'linear-gradient(90deg, #10335a 0%, #1b578d 100%)',
                color: 'white',
            }}
        >
            <Typography variant="body2" sx={{ opacity: 0.95, mb: 1.25 }}>
                © {new Date().getFullYear()} Ronald Dena
            </Typography>
            <Container maxWidth="sm">
                <Stack direction="row" spacing={1.25} justifyContent="center" alignItems="center" sx={{ mb: 0.5 }}>
                    <EmailIcon fontSize ="small"/>
                    <Typography variant = "body1"> ronalddenag@gmail.com </Typography>
                </Stack>
                <Stack direction="row" spacing={1.25} justifyContent="center" alignItems="center" sx={{ mb: 0.5 }}>
                    <PhoneIcon fontSize ="small"/>
                    <Typography variant = "body1"> +52 8118465890 </Typography>
                </Stack>
                <Stack direction="row" spacing={1.25} justifyContent="center" alignItems="center">
                    <LinkedInIcon fontSize ="small"/>
                    <a
                        href="https://www.linkedin.com/in/ronald-dena-a1bb0b29b"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#d6edff' }}
                    >
                        <Typography variant = "body1"> LinkedIn </Typography>
                    </a>
                </Stack>
            </Container>
        </Box>
    );
}

export {Footer}