import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const Technologies: React.FC = () => {
    const technologies = [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'TypeScript',
        'React',
        'SQL',
        'Java',
        'AWS',
        'Docker',
        'Rest API',
        'jest testing',
    ];

    const colorMap: Record<string, string> = {
        HTML: '#e34f26',
        CSS: '#1572B6',
        JavaScript: '#F7DF1E',
        Python: '#3776AB',
        TypeScript: '#3178C6',
        React: '#61DAFB',
        SQL: '#003B57',
        Java: '#cb0c28',
        AWS: '#e38a3c',
        Docker: '#003B57',
        'Rest API': '#637075',
        'jest testing': '#f9a7b9',
    };

    return (
        <Box sx={{ px: 2, py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Technologies
            </Typography>

            <Grid container spacing={6} alignItems="stretch">
                {technologies.map((tech) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={tech}>
                        <Paper
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                p: 2,
                                borderRadius: 2,
                                bgcolor: 'background.paper',
                                border: (theme) => `1px solid ${theme.palette.divider}`,
                                height: 80,
                                width: '100%',
                                transition: 'transform 120ms ease, box-shadow 120ms ease',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: colorMap[tech] || 'grey.300',
                                }}
                            >
                                <CodeIcon sx={{ color: tech === 'JavaScript' ? '#000' : '#fff' }} />
                            </Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{tech}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export { Technologies }