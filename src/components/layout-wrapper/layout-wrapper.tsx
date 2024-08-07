import React, { PropsWithChildren } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import PostInfo from '../post-info';
import { Item } from '../item';

export default function LayoutWrapper({ children, info, title }
  : PropsWithChildren & { info?: boolean; title?: string; }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          {info && <PostInfo />}
          {title && (
            <Typography
              variant="h5"
              gutterBottom
            >
              {title}
            </Typography>
          )}
          {children}
        </Item>
      </Stack>
    </Box>
  );
}
