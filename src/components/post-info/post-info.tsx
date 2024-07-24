import React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

export default function PostInfo() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: red[500], width: 24, height: 24 }} aria-label="recipe">
        R
      </Avatar>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1
      </Typography>
    </Stack>
  );
}
