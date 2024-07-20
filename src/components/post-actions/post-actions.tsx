import React from 'react';

import { Stack, IconButton } from '@mui/material';
import { Favorite as FavoriteIcon, Share as ShareIcon, ModeComment as ModeCommentIcon } from '@mui/icons-material';

export default function PostActions() {
  return (
    <Stack direction="row" spacing={2} sx={{ paddingTop: 2 }}>
      <IconButton aria-label="add to favorites">
        <ModeCommentIcon />
      </IconButton>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </Stack>
  );
}
