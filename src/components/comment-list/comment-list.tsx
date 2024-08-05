import React from 'react';

import {
  Stack, Typography, Divider, Avatar,
} from '@mui/material';
import { red } from '@mui/material/colors';

export default function CommentList() {
  return (
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
  );
}
