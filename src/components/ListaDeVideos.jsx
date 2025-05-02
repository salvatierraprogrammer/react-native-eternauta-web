import { Box, Typography } from '@mui/material';

const episodes = [
  { title: "Capítulo 1: La nevada", videoUrl: "https://youtu.be/ykLTd5aTa88?si=KedvOLmks5bM8xIO" },
  { title: "Capítulo 2: El refugio", videoUrl: "https://youtu.be/ykLTd5aTa88?si=KedvOLmks5bM8xIO" },
  { title: "Capítulo 3: El combate", videoUrl: "https://youtu.be/ykLTd5aTa88?si=KedvOLmks5bM8xIO" },
  { title: "Capítulo 4: La resistencia", videoUrl: "https://youtu.be/ykLTd5aTa88?si=KedvOLmks5bM8xIO" },
  { title: "Capítulo 5: El viaje", videoUrl: "https://youtu.be/ykLTd5aTa88?si=KedvOLmks5bM8xIO" },
  { title: "Capítulo 6: El regreso", videoUrl: "https://youtu.be/ykLTd5aTa88?si=KedvOLmks5bM8xIO" },
];

function getEmbedUrl(url) {
  const shortUrlMatch = url.match(/youtu\.be\/([^\?&]+)/);
  const longUrlMatch = url.match(/youtube\.com\/watch\?v=([^\?&]+)/);
  const embedUrlMatch = url.match(/youtube\.com\/embed\/([^\?&]+)/);

  if (embedUrlMatch) return url;
  if (shortUrlMatch) return `https://www.youtube.com/embed/${shortUrlMatch[1]}`;
  if (longUrlMatch) return `https://www.youtube.com/embed/${longUrlMatch[1]}`;
  
  return "";
}

export default function ListaDeVideos() {
  return (
    <Box className="episodes-grid">
      {episodes.map((ep, idx) => (
        <Box key={idx} className="episode">
          <Typography variant="h6">{ep.title}</Typography>
          <iframe
            width="100%"
            height="315"
            src={getEmbedUrl(ep.videoUrl)}
            frameBorder="0"
            allowFullScreen
            title={ep.title}
          />
        </Box>
      ))}
    </Box>
  );
}
