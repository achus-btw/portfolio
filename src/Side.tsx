import { Paper, Box, Typography, Chip, Divider,Stack} from '@mui/material';
import image from './assets/me.jpeg'
const name = "Aswin Uday"
const label = "Electronics Engineer"
import FolderList from "./MainInfo.tsx"
import { keyframes } from '@mui/system';
const shimmer = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    /* This must match your background-size percentage to loop perfectly */
    background-position: 400% 50%;
  }
`;

const rainbowTextStyle = {
  fontWeight: 'bold',
  background: `linear-gradient(
    90deg,
    #ff0000, #ff4000, #ff8000, #ffbf00, #ffff00, #bfff00, #80ff00, 
    #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #4b0082, #8b00ff,
    #ff0000, /* Pivot Point */
    #8b00ff, #4b0082, #0000ff, #0080ff, #00ffff, #00ff80, #00ff00, 
    #80ff00, #bfff00, #ffff00, #ffbf00, #ff8000, #ff4000, #ff0000
  )`,
  backgroundSize: '400% 100%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: `${shimmer} 20s linear infinite`, // Increased time because the gradient is now twice as long
};
const ProfileCard = ({ bg1, bg2, textColor, highText }) => {
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
      <Divider sx={{ width: '100%', bgcolor: 'rgba(255,255,255,0.2)' }} />

      <FolderList bg={bg1} text={highText} textMuted={'white'} />
    </Paper>
    <Paper
  elevation={3}
  sx={{
    flex: 1,
    bgcolor: 'grey.900', // Assuming a dark bg for better contrast
    mt: 2,
    p: 2,
    borderRadius: 3,
    width: { xs: '100%', md: 250 },
    boxSizing: 'border-box',
  }}
>
  <Typography variant="h6" gutterBottom sx={rainbowTextStyle}>
    displayPortfolio.sh
  </Typography>
  
  <Typography variant="body2" sx={{ ...rainbowTextStyle, opacity: 1, lineHeight: 1.6 }}>
    Synthesizing link arrays... 
    Configuring buffer-stream 0x8F22. 
    Redistributing logic-grid nodes for 
    optimized packet-shunting.<br/> 
    Status: Nominal.
  </Typography>
  
  <Typography variant="caption" display="block" sx={{ ...rainbowTextStyle, mt: 2, fontStyle: 'italic' }}>
    Rendering Load: 0.442rCycles
  </Typography>
    </Paper>

</Stack>
  );
};

export default ProfileCard;

