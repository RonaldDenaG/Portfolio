import { Box, Button, Container, Stack, Typography } from '@mui/material';

interface PresentationProps {
  isDark?: boolean;
}

export const Presentation = ({ isDark = false }: PresentationProps) => (
  <Box
    component="section"
    id="home"
    className="presentation"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: { xs: 'auto', md: 'calc(100vh - 64px)' },
      py: { xs: 8, md: 10 },
    }}
  >
    <Container maxWidth="lg" sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <Stack spacing={2.5} className="presentation-content" sx={{ width: '100%', maxWidth: 820, mx: 'auto', textAlign: 'center', alignItems: 'center' }}>
          <Typography
            variant="overline"
            sx={{
              px: 2,
              py: 0.75,
              borderRadius: 99,
              color: isDark ? '#9bd5ff' : 'primary.main',
              backgroundColor: isDark ? 'rgba(124,199,255,0.1)' : 'rgba(29,94,151,0.08)',
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            FULL STACK DEVELOPER
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4.25rem' },
              lineHeight: 1.1,
              fontWeight: 800,
              color: isDark ? '#edf6ff' : 'text.primary',
              letterSpacing: { xs: '-0.04em', md: '-0.055em' },
            }}
          >
            Hi, I&apos;m Ronald Dena.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mx: 'auto',
              maxWidth: 720,
              fontSize: { xs: '1.15rem', md: '1.4rem' },
              lineHeight: 1.7,
              color: isDark ? 'rgba(234,244,255,0.8)' : 'text.secondary',
            }}
          >
            I build practical, reliable software with Java, Spring Boot, React, and SQL.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.8,
              color: isDark ? 'rgba(234,244,255,0.72)' : 'text.secondary',
            }}
          >
            I enjoy turning real-world problems into clear digital experiences that are useful, maintainable, and easy to grow.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            justifyContent="center"
            sx={{ pt: 1, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button href="#projects" variant="contained" size="large" sx={{ borderRadius: 3, px: 3, py: 1.25, textTransform: 'none', transition: 'transform 180ms ease, box-shadow 180ms ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: 5 } }}>
              View my projects
            </Button>
            <Button href="#contact" variant="outlined" size="large" sx={{ borderRadius: 3, px: 3, py: 1.25, textTransform: 'none', transition: 'transform 180ms ease, background-color 180ms ease', '&:hover': { transform: 'translateY(-3px)' } }}>
              Get in touch
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
);
