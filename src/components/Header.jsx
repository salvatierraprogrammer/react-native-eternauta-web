import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box component="header" sx={{
      backgroundColor: '#e50914',
      padding: '1rem',
      fontSize: '2rem',
      letterSpacing: '2px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
      textAlign: 'center',
    }}>
      🎬 Netflix Original
    </Box>
  );
}
