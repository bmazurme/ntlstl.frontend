import React from 'react';

import { Stack, Avatar, Typography } from '@mui/material';

import { avatarStyle } from './post-header-style';

import { post } from '../../mocks/post';

export default function PostHeader() {
  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <Avatar
        sx={avatarStyle}
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
