import BorderGlow from './comp/BorderGlow';
import { Stack, Paper, Typography, Box, Button, Grid } from '@mui/material';
import { useState } from 'react';
import "./Gen.css"
// Example for MainInfo.tsx
interface MainInfoProps {
  text: string;
  textMuted: string;
  highText?: string; // Use ? if it's optional
  textColor?: string;
  bg1?: string;
}

const MainInfo({ text, textMuted }: MainInfoProps) => {
  const [state, setState] = useState(0);
  const items = [
    "hello",
    "hi",
    "incredible"
  ]
  const pages = [
    {
      id: 0,
      'title': "About Me",
      'data': (
        <>
          <Stack direction={"row"}>
            <Typography sx={{ color: textColor, width: "70%" }}>
              I am an Electronics and Communication Engineering student at the College of Engineering,
              Trivandrum, with a deep-seated interest in the intersection of low-level hardware and high-performance software.<br />
              <br />My work primarily focuses on embedded systems, digital signal processing, and robotics, ranging from
              designing custom STM32-based flight controllers to building 8-bit CPU simulators from scratch.<br />
              A dedicated Linux power user and Neovim enthusiast, I enjoy optimizing development environments and exploring the
              intricacies of kernel configurations. I am currently bridging the gap between theory and application by developing
              indigenous technology for defense research, with a specific focus on autonomous flight dynamics and mesh communication
              systems.<br /><br />
            </Typography>
            <Box sx={{ width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center', // Centers the text lines
                }}
              >
                Innovating<br />Rebuilding<br />Exploring New Frontiers
              </Typography>
            </Box>
          </Stack>
          <Typography variant='h5' sx={{ color: highText, width: "70%" }}>
            Fields I Dabble In
          </Typography>
          <Grid container spacing={2}>
            {items.map((item, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ display: 'flex' }} // Forces the Grid cell to behave like a flex container
              >
                <BorderGlow
                  className="full-width-glow" // Use a class to target the width
                  style={{ width: '100%' }}    // Pass width directly to the cardRef div
                >
                  <Box
                    sx={{
                      width: '100%',
                      minHeight: 100,
                      display: "flex",
                      justifyContent: 'center',
                      alignItems: "center",
                      p: 2,
                      boxSizing: 'border-box'
                    }}
                  >
                    <Typography sx={{ color: textColor, textAlign: 'center' }}>
                      {item}
                    </Typography>
                  </Box>
                </BorderGlow>
              </Grid>
            ))}
          </Grid>
        </>
      )
    },
    {
      id: 1,
      'title': "Resume",
      'data': (
        <Typography>go back</Typography>
      )
    },
    {
      id: 2,
      'title': "video",
      'data': (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&modestbranding=1"
          title="YouTube video player"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
        </iframe>
      )
    }
  ]
  return (
    <Paper

      elevation={3}
      sx={{
        bgcolor: bg1,
        p: 3,
        borderRadius: 3,
        flexGrow: 3,
      }}
    >
      <Stack
        direction={'row'}
        sx={{ gap: 2 }}
      >
        <Typography variant='h3' sx={{ color: highText }}>
          {pages[state].title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction={'row'}
          sx={{
            width: "50%",
            maxHeight: 60,
            height: 'fit-content',
            alignSelf: 'center',
            bgcolor: highText,
            borderRadius: 4
          }}
          divider={
            <Box
              sx={{
                width: '2px',
                bgcolor: 'rgba(255,255,255,0.4)',
                alignSelf: 'center',
                height: '30px',
                my: 1
              }}
            />
          }
        >
          {pages.map((item) => (
            <Button
              key={item.id}
              sx={{
                color: 'white',
                flex: 1,
                py: 1.5
              }}
              onClick={() => { setState(item.id) }}
            >
              {item.title}
            </Button>
          ))}
        </Stack>
      </Stack>
      <Box sx={{ width: "10%", height: '5px', bgcolor: 'white', mt: 3, mb: 3, borderRadius: 5 }} />
      {pages[state].data}



    </Paper>
  )
}
export default DataPage;
