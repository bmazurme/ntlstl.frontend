import React from 'react';

import { Stack, Avatar, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

import { post } from '../../mocks/post';

export default function PostHeader() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: red[500], width: 24, height: 24 }}
        aria-label="recipe"
      >
        R
      </Avatar>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        {`${post.title} -`}
      </Typography>
    </Stack>
  );
}
