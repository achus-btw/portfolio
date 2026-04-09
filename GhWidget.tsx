
import GitHubCalendar from 'react-github-calendar';
import { Box, Typography } from '@mui/material';

const GitHubGraph = ({ bg, text }) => {
  return (
    <Box sx={{ bgcolor: bg, p: 3, borderRadius: 2, color: text }}>
      <Typography variant="h6" sx={{ mb: 2 }}>My Contributions</Typography>
      
      <GitHubCalendar 
        username="achus-btw" 
        colorScheme="dark" 
      />
    </Box>
  );
};

export default GitHubGraph;
