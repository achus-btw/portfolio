import { Stack, Paper, Typography, Box, Button, } from '@mui/material';
import { useState } from 'react';
import "./Gen.css"
import About from './Pages/About.tsx'
import Projects from './Pages/Projects.tsx'
const DataPage = ({ bg1, textColor, highText }) => {
  const [state, setState] = useState(0);

  const pages = [
    {
      id: 0,
      'title': "About Me",
      'data': (<About highText={highText} textColor={textColor} bg1={bg1} />)
    },
    {
      id: 1,
      'title': "Projects",
      'data': (<Projects highText={highText} textColor={textColor} bg1={bg1} />)
    },
    {
      id: 2,
      'title': "video",
      'data': (

        <Typography sx={{ color: textColor }}>back</Typography>
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
