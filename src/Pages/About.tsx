import { Flight, Palette, Memory, DeveloperBoard, SettingsInputComponent, Terminal, Radar, Speed } from '@mui/icons-material';
import { Stack, Paper, Typography, Box, Button, Grid } from '@mui/material';
export default function About({ bg1,  textColor, highText }) {
const items = [
  {
    id: 0,
    title: "Simulation And Modelling",
    icon: (<Flight sx={{ color: highText }} />),
    desc: "i've modelled multiple pysical systems in software for further understanding the concept and also sitl testing"
  },
  {
    id: 1,
    title: "Shader Programming",
    icon: (<Palette sx={{ color: highText }} />),
    desc: "developed basic graphic shader"
  },
  {
    id: 2,
    title: "Cpu Archetecture",
    icon: (<Memory sx={{ color: highText }} />),
    desc: "made a basic 8 bit cycle accurate cpu simulator to study computational hardware"
  },
  {
    id: 3,
    title: "Embedded Systems",
    icon: (<DeveloperBoard sx={{ color: highText }} />),
    desc: "is delving into the field of embedded programming using the stm family of chips"
  },
  {
    id: 4,
    title: "Digital Signal Processing",
    icon: (<SettingsInputComponent sx={{ color: highText }} />),
    desc: "Implementing real-time filters and FFT algorithms to analyze and manipulate sensor data streams."
  },
  {
    id: 5,
    title: "Linux Kernel & Driver Dev",
    icon: (<Terminal sx={{ color: highText }} />),
    desc: "Exploring low-level system architecture through custom kernel modules and hardware abstraction layers on Fedora Rawhide."
  },
  {
    id: 6,
    title: "RF & Communication Systems",
    icon: (<Radar sx={{ color: highText }} />),
    desc: "Studying modulation techniques and software-defined radio (SDR) for robust defense communication protocols."
  },
  {
    id: 7,
    title: "Parallel & GPGPU Computing",
    icon: (<Speed sx={{ color: highText }} />),
    desc: "Optimizing heavy computational workloads using OpenCL or CUDA to accelerate physical simulations."
  }
]
  return (
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
          systems.
          <br /><br />
        </Typography>
        <Box sx={{ width: { xs: "100%", md: '40%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              background: 'linear-gradient(45deg, #FE6B8B 25%, #FF8E53 50%, blue 75%, #FF8E53 100%)',
              backgroundSize: '200% auto',
              backgroundPosition: 'left center',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',

              transition: "all 0.5s ease-in-out",

              '&:hover': {
                backgroundPosition: 'right center',
                transform: 'scale(1.05) rotateZ(2deg)',
              }
            }}
          >
            Innovating<br />Rebuilding<br />Exploring New Frontiers
          </Typography>
        </Box>
      </Stack>
      <Typography variant='h5' sx={{ color: highText, width: { xs: "100%", md: "70%" }, mt: 2 }}>
        Fields I Dabble In
      </Typography>
      <Box sx={{ width: "10%", height: '2px', bgcolor: textColor, mt: 3, mb: 3, borderRadius: 5 }} />
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: 'flex' }}
          >
            <Box
              sx={{
                bgcolor: bg1,
                p: 2,
                borderRadius: 2,
                flexGrow: 1,
                width: '100%',
                transition: "transform 0.5s, opacity 0.5s",
                '&:hover': {
                  opacity: 0.8,
                  transform: 'scale(1.02) rotateZ(0.1deg)'
                },

              }}
            >
              <Stack direction="row" sx={{ alignItems: 'center', gap: 2 }}>
                {item.icon}
                <Box>
                  <Typography variant="h6" sx={{ color: textColor }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: textColor }}>{item.desc}</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

