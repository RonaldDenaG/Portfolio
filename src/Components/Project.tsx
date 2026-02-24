import {Box, Typography, Card, CardContent, CardActions, Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
export interface repoProps{
    id: number;
    name: string;
    html_url: string;
    description: string;
}


    const Project = () => {
        const [repos, setRepos] = useState<repoProps[]>([])
    const[loading, setLoading] = useState(true);
        useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('');
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.log('Error fetching repos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    if(loading){
        return(
            <Box>
                <CircularProgress/>
            </Box>
        )
    }
   return(
    <Box>
            <Typography variant="h4" gutterBottom>Projects</Typography>
            {loading ? (
                <Typography>Loading...</Typography>
            ) :  (
                <Box sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: 2,
                        pb: 2,
                        '&::-webkit-scrollbar': {
                            height: 8,
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            borderRadius: 4,
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            borderRadius: 4,
                        },
                    }}>
                    {repos.map(repo => (
                              <Card key={repo.id} sx={{ minWidth: 300, maxWidth: 350, flexShrink: 0, borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>{repo.name}</Typography>
                <Typography variant="body2" color="text.secondary">{repo.description || 'No description available'}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</Button>
            </CardActions>
        </Card>
                        
                    ))}
               
                    </Box>
            )}
        </Box>
   ) 
}

export {Project}

