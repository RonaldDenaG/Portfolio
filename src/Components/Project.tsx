import {Box, Typography, Card, CardContent, CardActions, Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
export interface repoProps{
    id: number;
    name: string;
    html_url: string;
    description: string;
}


    const Project = ({ githubUsername = 'RonaldDenaG' }: { githubUsername?: string }) => {
        const [repos, setRepos] = useState<repoProps[]>([])
    const[loading, setLoading] = useState(true);
        useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=30&sort=updated`);
                if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);
                const data = await response.json();
                setRepos(data || []);
            } catch (error) {
                console.log('Error fetching repos:', error);
                setRepos([]);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, [githubUsername]);

    if(loading){
        return(
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
                <CircularProgress/>
            </Box>
        )
    }
   return(
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography
            variant="h4"
            gutterBottom
            sx={{
                mb: { xs: 2.5, md: 3 },
                textAlign: 'center',
                fontWeight: 800,
                fontSize: { xs: '1.8rem', md: '2.2rem' },
            }}
        >
            Projects
        </Typography>
        {!repos.length ? (
            <Typography color="text.secondary">No repositories were found.</Typography>
        ) : (
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, minmax(0, 1fr))',
                        lg: 'repeat(3, minmax(0, 1fr))',
                    },
                    gap: 2,
                }}
            >
                {repos.slice(0, 9).map((repo) => (
                    <Card
                        key={repo.id}
                        sx={{
                            borderRadius: 3,
                            boxShadow: '0 10px 24px rgba(10, 39, 68, 0.1)',
                            border: '1px solid rgba(16, 66, 112, 0.12)',
                            transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 18px 32px rgba(10, 39, 68, 0.15)',
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                                {repo.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ minHeight: 62, lineHeight: 1.6 }}>
                                {repo.description || 'No description available'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        )}
    </Box>
   ) 
}

export {Project}

