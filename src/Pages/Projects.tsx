import { Box, Paper, Typography, Stack, Chip } from '@mui/material';
import { useEffect, useState } from 'react';

const data = [
  {
    name: "8 bit cpu simulator",
    link: "https://github.com/achus-btw/cpuSimBasic8Bit.git",
    status: "completed",
    desc: "a cycle accurate 8 bit simulator in python with accurate instructions and example programs",
    fields: ["cpu archetecture", "python", "simulation"]
  },
  {
    name: "shader based rendered and hot reloader",
    link: "https://github.com/achus-btw/shaderPlaygroundTemplate.git",
    status: "completed",
    desc: "a c++ Based application to test and iterate fullscreenShaders easily",
    fields: ["c++", "graphics pipelines", "gpGpu"]
  },
  {
    name: "A micro drone with fully custom stm32 flight controler ",
    link: "https://github.com/achus-btw/stmDroneRepo.git",
    status: "WIP",
    desc: "this a an attempt at making a drone system from scratch including the flight controll logic drivers",
    fields: ["embedded programming", "robotic", "control systems"]
  },
  {
    name: "fully custom os",
    link: "https://github.com/achus-btw/basicCustomOs.git",
    status: "WIP",
    desc: "building a fully custom operating system from the ground up to learn systems programming and barebone system development",
    fields: ["c programming", "assembly", "low level systems", "systems programming"]
  }
];

export default function Projects({ bg1, textColor, highText }) {
  const muted = "rgb(200,200,200)";

  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Box sx={{
        columnCount: { xs: 1, sm: 2, md: 3 },
        columnGap: 2,
        '& > *': { breakInside: 'avoid', marginBottom: 2 }
      }}>
        {data.map((item, index) => (
          <Paper
            key={index}
            component="a"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              flexDirection: "column",
              p: 2,
              alignItems: 'flex-start',
              backgroundColor: bg1,
              color: textColor,
              textDecoration: 'none',
              cursor: 'pointer',
              border: `1px solid ${highText}22`,
              transition: '0.3s',
              '&:hover': {
                border: `1px solid ${highText}`,
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Stack direction={'row'} sx={{ gap: 2, }}>

              <Typography variant='h6' sx={{ color: textColor }}>
                {item.name}
              </Typography>
              <Chip label={item.status} sx={{ bgcolor: item.status == "completed" ? 'lightgreen' : highText, color: textColor }} />
            </Stack>

            <Typography variant='body2' sx={{ color: muted, mt: 0.5 }}>
              {item.desc}
            </Typography>

            <Box sx={{
              width: "10%",
              height: '5px',
              bgcolor: highText || 'white',
              mt: 2,
              mb: 1,
              borderRadius: 5
            }} />

            <Typography
              variant='caption'
              sx={{
                color: 'primary.main',
                fontFamily: 'monospace',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: '100%'
              }}
            >
              {item.link.replace('https://', '')}
            </Typography>
            <Stack
              direction="row"
              sx={{
                gap: 2,
                pt: 2,
                flexWrap: 'wrap'
              }}
            >
              {item.fields.map((f, i) => (
                <Chip
                  key={i}
                  variant='outlined'
                  sx={{
                    color: textColor,
                    '&:hover': { color: highText, transition: '0.5s' }
                  }}
                  label={f}
                />
              ))}
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
