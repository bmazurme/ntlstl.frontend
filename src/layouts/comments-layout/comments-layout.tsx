import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CommentsLayout() {
  return (
    <Item sx={{ paddingTop: 2, paddingBottom: 2 }}>
      <Typography variant="h6" gutterBottom>
        h6 Comment
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        sx={{ width: '100%', marginTop: 2 }}
        defaultValue="Default Value"
      />
      <Box sx={{ paddingTop: 2 }}>
        <Button variant="contained">Submit</Button>
      </Box>
      <Stack spacing={2}>
        <Stack sx={{ paddingTop: 4 }}>
          <Divider />
        </Stack>
        <Avatar
          sx={{ bgcolor: red[500], width: 24, height: 24 }}
          aria-label="recipe"
        >
          R
        </Avatar>
        <Typography paragraph>jjjjjj</Typography>
      </Stack>
    </Item>
  );
}
