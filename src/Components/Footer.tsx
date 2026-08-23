import {Box, Container, Stack} from "@mui/material";
import { Typography } from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
        <Box component="footer" sx = {{ py: 2, textAlign: 'center', backgroundColor: '#f5f5f5', marginTop:'auto'}}>
          © {new Date().getFullYear()} Ronald Dena
            <Container maxWidth="sm">
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <EmailIcon fontSize ="small"/>
                    <Typography variant = "body1"> ronalddenag@gmail.com </Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <PhoneIcon fontSize ="small"/>
                    <Typography variant = "body1"> +52 8118465890 </Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <LinkedInIcon fontSize ="small"/>
                    <a href="https://www.linkedin.com/in/ronald-dena-a1bb0b29b" target="_blank" rel="noopener noreferrer">
                        <Typography variant = "body1"> LinkedIn </Typography>
                    </a>
                </Stack>
            </Container>
        </Box>
    );
}

export {Footer}