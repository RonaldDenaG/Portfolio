import React from 'react';
import { Box, Typography, Grid, Paper, Tooltip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

interface Technology {
    name: string;
    description: string;
}

const Technologies: React.FC = () => {
    const technologies: Technology[] = [
        { name: 'HTML', description: 'Build clear, semantic page structures as the foundation for accessible interfaces.' },
        { name: 'CSS', description: 'Style responsive layouts and polished interfaces across screen sizes.' },
        { name: 'JavaScript', description: 'Add interactive behavior and application logic to web experiences.' },
        { name: 'Python', description: 'A versatile language for scripting, data work, and backend development.' },
        { name: 'TypeScript', description: 'Add type safety to React code to make components easier to maintain.' },
        { name: 'React', description: 'Build reusable user interfaces; used in production applications and this portfolio.' },
        { name: 'SQL', description: 'Work with application data in production software and operational workflows.' },
        { name: 'Java', description: 'Develop and maintain enterprise applications with Java and Spring Boot.' },
        { name: 'AWS', description: 'Cloud services for hosting, deploying, and supporting software applications.' },
        { name: 'Docker', description: 'Package applications and their dependencies in portable containers.' },
        { name: 'Rest API', description: 'Connect frontend experiences with backend services through REST endpoints.' },
        { name: 'jest testing', description: 'Test JavaScript and React behavior to help keep changes reliable.' },
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
            <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.8rem', md: '2.3rem' },
            mb: 1.5,
            color: 'text.primary',
          }}
        >
          Tech stack
        </Typography>

      </Box>

            <Grid container spacing={{ xs: 2, md: 2.5 }} alignItems="stretch">
                {technologies.map((technology) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={technology.name}>
                        <Tooltip
                            arrow
                            placement="top"
                            enterTouchDelay={0}
                            title={<Typography variant="body2" sx={{ maxWidth: 240, lineHeight: 1.6 }}>{technology.description}</Typography>}
                        >
                            <Paper
                                tabIndex={0}
                                aria-label={`${technology.name}: ${technology.description}`}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 2,
                                    borderRadius: 3,
                                    bgcolor: 'background.paper',
                                    border: (theme) => `1px solid ${theme.palette.divider}`,
                                    height: 80,
                                    width: '100%',
                                    cursor: 'help',
                                    transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
                                    '&:hover, &:focus-visible': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 5,
                                        borderColor: 'primary.main',
                                        outline: 'none',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        flexShrink: 0,
                                        borderRadius: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: colorMap[technology.name] || 'grey.300',
                                    }}
                                >
                                    <CodeIcon sx={{ color: technology.name === 'JavaScript' ? '#000' : '#fff' }} />
                                </Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{technology.name}</Typography>
                            </Paper>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export { Technologies }