import './App.css'
import './Side.tsx'
import { Box } from '@mui/material';
import ProfileCard from './Side.tsx';
import DataPage from "./DataPages.tsx"
function App() {
  const bgCol1 = 'rgba(255,255,255,0.05)'
  const bgCol2 = 'rgba(255,255,255,0.05)'
  const mainText = "#fff"
  const superText = "#ff6a00"

  return (
    <>
      <Box
        sx={{
          p: { xs: 2, md: 3 },
          bgcolor: "rgb(10,20,30)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          width: '100%',
          boxSizing: 'border-box',
          overflowX: 'hidden'
        }}
      >
        <ProfileCard bg1={bgCol1} bg2={bgCol2} textColor={mainText} highText={superText} />
        <DataPage bg1={bgCol1} bg2={bgCol2} textColor={mainText} highText={superText} />


      </Box>
    </>
  );
}

export default App

