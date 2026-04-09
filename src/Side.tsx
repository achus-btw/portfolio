import { Paper, Box, Typography, Chip, Divider } from '@mui/material';

import image from './assets/me.jpeg'
const name = "Aswin Uday"
const label = "Electronics Engineer"
const ProfileCard = ({ bg1, bg2, textColor, highText }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: bg1,
        p: 3,
        borderRadius: 3,
        flexGrow: 1,
        maxWidth: 250,
        display: "flex",
        gap: 2,
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          bgcolor: bg2,
          borderRadius: 3,
          overflow: 'hidden',
          display: 'flex',
          width: '100%',
          aspectRatio: 1,
        }}
      >
        <Box
          component="img"
          src={image}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            pb: 2
          }}
        />
      </Box>

      <Typography variant='h4' sx={{ color: textColor }}>
        {name}
      </Typography>

      <Chip label={label} sx={{ bgcolor: bg2, color: highText }} />
      <Divider sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.2)' }} />
      <Box sx={{ bgcolor: bg1, width: '100%', textAlign: 'center', borderRadius: 3, p: 2 }}>
      </Box>
    </Paper>
  );
};

export default ProfileCard;

