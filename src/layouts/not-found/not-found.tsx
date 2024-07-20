import React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: '60vh',
}));

export default function NotFoundLayout() {
  return (
    <Stack
      sx={{
        width: '100%', justifyContent: 'center', alignItems: 'center',
      }}
    >
      <Item>
        <Typography variant="h1" gutterBottom>
          404
        </Typography>
        {/* <Divider /> */}
        <Typography variant="h2" gutterBottom>
          Page not found
        </Typography>
        <Button>
          Go to main page
        </Button>

      </Item>
    </Stack>
  );
}
