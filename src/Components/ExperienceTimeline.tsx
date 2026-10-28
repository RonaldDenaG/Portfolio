import { Box, Paper, Stack, Typography } from '@mui/material';

interface ExperienceTimelineProps {
  isDark?: boolean;
}

const experience = [
  {
    period: 'July 2025 — Present',
    role: 'Full Stack Developer',
    company: 'John Deere',
    description:
      'Develop and maintain production enterprise applications using Java, Spring Boot, React, and SQL. Collaborate with cross-functional teams to implement new features, resolve defects, and deliver scalable solutions that support business operations and user needs.',
  },
  {
    period: 'January 2024 —  july 2025',
    role: 'Bilingual Customer Service Executive',
    company: 'Banorte',
    description:
      'Resolved account issues for a bilingual, international client base in a financial services setting, working under time pressure and handling sensitive information with care.',
  },
];

export const ExperienceTimeline = ({ isDark = false }: ExperienceTimelineProps) => {
  return (
    <Box className="reveal" sx={{ width: '100%' }}>
      <Box sx={{ textAlign: 'center', maxWidth: 780, mx: 'auto', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.9rem', md: '2.4rem' },
            color: isDark ? '#edf6ff' : 'text.primary',
          }}
        >
            Experience
        </Typography>
      </Box>

      <Stack spacing={2.5} sx={{ position: 'relative' }}>
        {experience.map((item) => (
          <Paper
            key={item.period}
            elevation={0}
            sx={{
              position: 'relative',
              p: { xs: 2.25, md: 3 },
              borderRadius: 4,
              border: `1px solid ${isDark ? 'rgba(160,201,255,0.14)' : 'rgba(16,66,112,0.12)'}`,
              background: isDark ? 'rgba(16, 38, 56, 0.9)' : 'rgba(255,255,255,0.9)',
              boxShadow: isDark ? '0 18px 36px rgba(3, 12, 20, 0.28)' : '0 16px 32px rgba(15, 36, 61, 0.08)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 18,
                top: 28,
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #9fe3ff 0%, #3d9ae8 100%)',
                boxShadow: '0 0 18px rgba(61, 154, 232, 0.9)',
              }}
            />

            <Box sx={{ pl: 4 }}>
              <Typography
                variant="caption"
                sx={{
                  color: isDark ? '#93d4ff' : 'primary.main',
                  fontWeight: 800,
                  letterSpacing: 1.2,
                  textTransform: 'uppercase',
                }}
              >
                {item.period}
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 800, mt: 1, mb: 0.4 }}>
                {item.role}
              </Typography>

              <Typography variant="body1" sx={{ color: isDark ? '#d5ebff' : 'text.secondary', fontWeight: 600, mb: 1 }}>
                {item.company}
              </Typography>

              <Typography variant="body1" sx={{ color: isDark ? 'rgba(234,244,255,0.78)' : 'text.secondary', lineHeight: 1.7 }}>
                {item.description}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};