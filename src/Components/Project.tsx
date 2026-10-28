import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

import LetrasInclusivasImage from '../assets/Letras_inclusivas_image.jpeg';
import MedTrackImage from '../assets/MedTrack_image.jpeg';

interface ProjectItem {
  title: string;
  summary: string;
  details: string[];
  image: string;
  stack: string[];
  liveUrl?: string;
}

interface ProjectProps {
  isDark?: boolean;
}

const portfolioProjects: ProjectItem[] = [
  {
    title: 'Med Track',
    summary:
      'A patient administration system that centralizes essential information and streamlines the management of medical appointments, prescriptions, and clinical histories.',
    details: [
      'Centralizes administrative patient information.',
      'Supports management of medical appointments and prescriptions.',
      'Keeps patient clinical histories organized and accessible.',
    ],
    image: MedTrackImage,
    stack: ['Java', 'JavaScript'],
  },
  {
    title: 'Letras Inclusivas',
    summary:
      'An inclusive reading tool that converts PDF documents to Braille and Braille to Spanish text, with OCR-assisted recognition and clean reconstruction of structured tables.',
    details: [
      'Bidirectional translator: converts PDF to Braille and Braille to Spanish text.',
      'Reconstructs structured tables and presents them in a clean, readable format.',
      'Provides secure user authentication and personalized reading lists.',
    ],
    image: LetrasInclusivasImage,
    stack: ['Python', 'OpenCV', 'OCR'],
    liveUrl: 'https://oiciruamzz.pythonanywhere.com/?_sm_au_=iVVnSbRpQZ5QLVL7L321jK0f1JH33',
  },
];

const Project = ({ isDark = false }: ProjectProps) => {
  return (
    <Box className="reveal" sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
      <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.8rem', md: '2.3rem' },
            mb: 1.5,
            color: isDark ? '#edf6ff' : 'text.primary',
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.7, color: isDark ? 'rgba(234,244,255,0.78)' : 'text.secondary' }}
        >
          I focus on building practical, clear, and scalable digital experiences that solve real problems while keeping the experience polished and easy to use.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, minmax(0, 1fr))',
          },
          gap: 3,
          width: '100%',
        }}
      >
        {portfolioProjects.map((project) => (
          <Card
            key={project.title}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: 4,
              border: `1px solid ${isDark ? 'rgba(160,201,255,0.14)' : 'rgba(16,66,112,0.12)'}`,
              background: isDark ? '#102638' : '#ffffff',
              boxShadow: isDark ? '0 18px 40px rgba(3, 12, 20, 0.32)' : '0 18px 40px rgba(15, 36, 61, 0.12)',
              transition: 'transform 180ms ease, box-shadow 180ms ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: isDark ? '0 25px 50px rgba(3, 12, 20, 0.38)' : '0 25px 50px rgba(15, 36, 61, 0.18)',
              },
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{
                height: 220,
                objectFit: 'cover',
                backgroundColor: '#dfeaf7',
              }}
            />

            <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 2.5 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, mb: 1.25, color: isDark ? '#edf6ff' : 'text.primary' }}
              >
                {project.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{ lineHeight: 1.7, mb: 1.75, color: isDark ? 'rgba(234,244,255,0.78)' : 'text.secondary' }}
              >
                {project.summary}
              </Typography>

              <Box sx={{ mb: 1.75 }}>
                {project.details.map((detail) => (
                  <Typography
                    key={detail}
                    variant="body2"
                    sx={{
                      color: isDark ? 'rgba(234,244,255,0.7)' : 'text.secondary',
                      lineHeight: 1.6,
                      mb: 0.7,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      '&::before': {
                        content: '"•"',
                        color: isDark ? '#9bd5ff' : 'primary.main',
                        fontSize: '1.25rem',
                        lineHeight: 1.1,
                        mt: '-1px',
                      },
                    }}
                  >
                    {detail}
                  </Typography>
                ))}
              </Box>

              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
                {project.stack.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    size="small"
                    sx={{
                      borderRadius: 2,
                      backgroundColor: isDark ? 'rgba(124,199,255,0.1)' : 'rgba(29,94,151,0.08)',
                      color: isDark ? '#dff1ff' : 'primary.main',
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Stack>

              {project.liveUrl && (
                <Button
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<LaunchIcon fontSize="small" />}
                  sx={{ alignSelf: 'flex-start', mt: 'auto', borderRadius: 2, textTransform: 'none' }}
                >
                  Open project
                </Button>
              )}
            </CardContent>

          </Card>
        ))}
      </Box>
    </Box>
  );
};

export { Project };