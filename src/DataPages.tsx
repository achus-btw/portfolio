import BorderGlow from './comp/BorderGlow';
import { Stack, Paper, Typography, Box, Button, Grid } from '@mui/material';
import { useState } from 'react';
import "./Gen.css"
const DataPage = ({ bg1, bg2, textColor, highText }) => {
  const [state, setState] = useState(0);
  const items = [
    "hello",
    "hi",
    "incredible",
    "moshi moshi",
    "konohawa"
  ]
  const pages = [
    {
      id: 0,
      'title': "About Me",
      'data': (
        <>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <Typography sx={{ color: textColor, width: { xs: "100%", md: "70%" } }}>
              I am an Electronics and Communication Engineering student at the College of Engineering,
              Trivandrum, with a deep-seated interest in the intersection of low-level hardware and high-performance software.<br />
              <br />My work primarily focuses on embedded systems, digital signal processing, and robotics, ranging from
              designing custom STM32-based flight controllers to building 8-bit CPU simulators from scratch.<br />
              A dedicated Linux power user and Neovim enthusiast, I enjoy optimizing development environments and exploring the
              intricacies of kernel configurations. I am currently bridging the gap between theory and application by developing
              indigenous technology for defense research, with a specific focus on autonomous flight dynamics and mesh communication
              systems.<br /><br />
            </Typography>
            <Box sx={{ width: { xs: "100%", md: '40%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
          <Typography variant='h5' sx={{ color: highText, width: { xs: "100%", md: "70%" }, mt: 2 }}>
            Fields I Dabble In
          </Typography>
          <Grid container spacing={2}>
            {items.map((item, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ display: 'flex' }}>
                {item}
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
        <Typography sx={{ color: textColor }}>go back</Typography>
      )
    },
    {
      id: 2,
      'title': "video",
      'data': (
        <Box sx={{ width: '100%', position: 'relative', pt: '56.25%' }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&modestbranding=1"
            title="YouTube video player"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </Box>
      )
    }
  ]
  return (
    <Paper

      elevation={3}
      sx={{
        bgcolor: bg1,
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        flexGrow: 3,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{ gap: 2 }}
      >
        <Typography variant='h3' sx={{ color: highText }}>
          {pages[state].title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction={'row'}
          sx={{
            width: { xs: "100%", md: "50%" },
            maxHeight: 60,
            height: 'fit-content',
            alignSelf: 'center',
            bgcolor: highText,
            borderRadius: 4,
            overflowX: 'auto'
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
                py: 1.5,
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
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
