import { useState } from 'react'
import './App.css'
import './Side.tsx'
import { Paper, Button, Container, Box, Typography, Chip } from '@mui/material';
import ProfileCard from './Side.tsx';
function App() {
  const [count, setCount] = useState(0)
  const bgCol1 = 'rgba(255,255,255,0.05)'
  const bgCol2 = 'rgba(255,255,255,0.05)'
  const mainText = "#fff"
  const superText = "#ff6a00"

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          p: 3,
          bgcolor: "rgb(10,20,30)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          gap: 2

        }}
      >
        <ProfileCard bg1={bgCol1} bg2={bgCol2} textColor={mainText} highText={superText} />
        <Paper

          elevation={3}
          sx={{
            bgcolor: bgCol1,
            p: 3,
            borderRadius: 3,
            flexGrow: 3,
          }}
        >
          <Button onClick={() => { setCount(count + 1) }}>{count}</Button>
        </Paper>

      </Container>
    </>
  );
}

export default App
