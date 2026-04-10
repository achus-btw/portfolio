import { Paper, Box, Typography, Chip, Divider, Stack } from '@mui/material';
import image from './assets/me.jpeg'
const name = "Aswin Uday"
const label = "Electronics Engineering"
import FolderList from "./MainInfo.tsx"
import { useEffect, useRef } from "react";

const ProfileCard = ({ bg1, bg2, textColor, highText }) => {
  const canvasRef = useRef(null);




  return (
    <Stack >
      <Paper
        elevation={3}
        sx={{
          bgcolor: bg1,
          p: 3,
          borderRadius: 3,
          width: { xs: '100%', md: 250 },
          boxSizing: 'border-box',
          flexShrink: 0,
          display: "flex",
          gap: 2,
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden'
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
            sx={{
              width: "100%",
              height: "100%",
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.7) 150%)',
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
                pointerEvents: 'none',
              },
              '&:hover::after': {
                opacity: 1,
              },
              '&:hover img': {
                transform: 'scale(1.1)',
              }
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
                transition: 'transform 0.3s ease-in-out',
              }}
            />
          </Box>
        </Box>

        <Typography variant='h4' sx={{ color: textColor }}>
          {name}
        </Typography>
        <Chip label={label} sx={{ bgcolor: bg2, color: highText }} />
        <Chip label={"UnderGrad"} sx={{ bgcolor: bg2, color: highText }} />
        <Divider sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.2)' }} />

        <FolderList bg={bg1} text={highText} textMuted={'white'} />
      </Paper>
      <Paper
        elevation={3}
        sx={{
          flex: 1,
          bgcolor: 'grey.900',
          mt: 2,
          borderRadius: 3,
          width: { xs: '100%', md: 250 },
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >


        <canvas ref={canvasRef} style={{ background: "black", height: '100%', width: '100%' }} id='sideCanvas' />


      </Paper>

    </Stack>
  );
};

export default ProfileCard;

