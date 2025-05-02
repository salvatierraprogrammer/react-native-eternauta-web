import { Box, Typography } from '@mui/material';
import ListaDeVideos from '../components/ListaDeVideos';
import SnowEffect from '../components/SnowEffect';
import eternautaImg from '../assets/eternautatrans.png';

export default function Home() {
  return (
    <>
      <SnowEffect />
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: 2,
          py: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" component="h1" sx={{ color: 'white', mb: 2 }}>
            El Eternauta
          </Typography>
          <Typography variant="body1" sx={{ color: '#ccc', mb: 2, maxWidth: 700 }}>
            La icónica historieta argentina llega a Netflix con una adaptación épica que mezcla ciencia ficción, resistencia y esperanza.
          </Typography>
          <Typography variant="h6" sx={{ color: '#e50914', animation: 'blink 1.5s infinite' }}>
            🌨️ Estreno mundial: 30 de Abril de 2025 🌍
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={eternautaImg} alt="El Eternauta" style={{ maxWidth: 300, filter: 'drop-shadow(0 0 10px #e50914)' }} />
        </Box>
      </Box>

      <ListaDeVideos />
    </>
  );
}
