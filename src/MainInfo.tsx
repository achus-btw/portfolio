import { Stack, Box, Avatar, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import SchoolIcon from '@mui/icons-material/School';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
const FolderList = ({ text, textMuted, bg }) => {
  const items = [
    {
      id: 1,
      label: 'Mail',
      date: 'aswinudayofficial@gmail.com',
      icon: <MailIcon />,
      url: 'mailto:aswinudayofficial@gmail.com'
    },
    {
      id: 2,
      label: 'Github',
      date: 'View Projects',
      icon: <GitHubIcon />,
      url: 'https://github.com/achus-btw?tab=repositories'
    },
    {
      id: 3,
      label: 'Contact',
      date: '8071352419',
      icon: <CallIcon />,
      url: 'tel:+918075352419'
    },
    {
      id: 4,
      label: 'Studying At',
      date: 'CET-College of Engineering Trivandrum',
      icon: <SchoolIcon />,
      url: 'https://www.cet.ac.in'
    },
  ];

  const handleRedirect = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent', p: 2, borderRadius: 2 }}>
      <Stack spacing={2}>
        {items.map((item) => (
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            key={item.id}
            onClick={() => handleRedirect(item.url)}
            sx={{
              bgcolor: bg,
              borderRadius: 3,
              p: 2,
              overflow: 'hidden',
              cursor: 'pointer', // Makes it look clickable
              transition: 'transform 0.2s, opacity 0.2s',
              '&:hover': {
                opacity: 0.8,
                transform: 'scale(1.02)' // Slight pop on hover
              },
              '&:active': {
                transform: 'scale(0.98)' // Press-down effect
              }
            }}
          >
            <Avatar sx={{ bgcolor: 'action.selected', flexShrink: 0 }}>
              {item.icon}
            </Avatar>

            <Box sx={{ minWidth: 0 }}>
              <Typography
                noWrap
                sx={{ color: text, fontWeight: 'medium', display: 'block' }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body2"
                noWrap
                sx={{ color: textMuted, display: 'block' }}
              >
                {item.date}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default FolderList;
