import React from 'react';
import { Box, Typography, Grid, Paper, Collapse, useMediaQuery } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

const Technologies: React.FC = () => {
    const [activeTech, setActiveTech] = React.useState<string | null>(null);
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

    const technologies = [
        {
            name: 'HTML',
            experience: 'Comfortable creating semantic structure and accessible page markup.',
        },
        {
            name: 'CSS',
            experience: 'Strong focus on responsive layouts, clean styling, and smooth UI interactions.',
        },
        {
            name: 'JavaScript',
            experience: 'Used to build interactive features and reusable frontend logic.',
        },
        {
            name: 'Python',
            experience: 'Hands-on practice with scripting, automation, and backend utility tasks.',
        },
        {
            name: 'TypeScript',
            experience: 'Applied for type-safe codebases that are easier to maintain and scale.',
        },
        {
            name: 'React',
            experience: 'Experience building reusable components and organizing modern React applications.',
        },
        {
            name: 'SQL',
            experience: 'Regularly used for queries, joins, and structured data handling.',
        },
        {
            name: 'Java',
            experience: 'Background in object-oriented programming and backend service logic.',
        },
        {
            name: 'AWS',
            experience: 'Knowledge of AWS concepts such as compute, storage, and deployment workflows.',
        },
        {
            name: 'Docker',
            experience: 'Knowledge of Docker concepts including images, containers, volumes, and networking basics.',
        },
        {
            name: 'Rest API',
            experience: 'Worked on integrating REST endpoints with clear request and response handling.',
        },
        {
            name: 'jest testing',
            experience: 'Practical experience writing tests to verify behavior and reduce regressions.',
        },
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
        <Box
            sx={{
                px: { xs: 1, sm: 2 },
                py: { xs: 2, md: 3 },
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    fontWeight: 800,
                    mb: { xs: 2.5, md: 3 },
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                }}
            >
                Technologies
            </Typography>

            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} alignItems="stretch">
                {technologies.map((tech) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={tech.name}>
                        <Paper
                            onMouseEnter={() => {
                                if (!isPhone) setActiveTech(tech.name);
                            }}
                            onMouseLeave={() => {
                                if (!isPhone) setActiveTech(null);
                            }}
                            onFocus={() => {
                                if (!isPhone) setActiveTech(tech.name);
                            }}
                            onBlur={() => {
                                if (!isPhone) setActiveTech(null);
                            }}
                            onClick={() => {
                                if (!isPhone) {
                                    setActiveTech((prev) => (prev === tech.name ? null : tech.name));
                                }
                            }}
                            tabIndex={0}
                            aria-expanded={isPhone || activeTech === tech.name}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'stretch',
                                p: { xs: 1.75, sm: 2 },
                                borderRadius: 3,
                                bgcolor: 'background.paper',
                                border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
                                minHeight: 80,
                                width: '100%',
                                cursor: 'pointer',
                                transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 6,
                                    borderColor: 'rgba(29, 94, 151, 0.35)',
                                },
                                '&:focus-visible': {
                                    outline: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
                                    outlineOffset: 2,
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: colorMap[tech.name] || 'grey.300',
                                    }}
                                >
                                    <CodeIcon sx={{ fontSize: 28, color: tech.name === 'JavaScript' ? '#000' : '#fff' }} />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {tech.name}
                                </Typography>
                            </Box>

                            <Collapse in={isPhone || activeTech === tech.name} timeout={220} unmountOnExit={!isPhone}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mt: 1.5,
                                        color: 'text.secondary',
                                        lineHeight: 1.6,
                                        fontSize: '1rem',
                                    }}
                                >
                                    {tech.experience}
                                </Typography>
                            </Collapse>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export { Technologies }