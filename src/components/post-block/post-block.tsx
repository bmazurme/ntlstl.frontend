import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Box, Stack, Typography, Button,
} from '@mui/material';

import PostHeader from '../post-header';
import PostActions from '../post-actions';
import { Item } from '../item';

import { post } from '../../mocks/post';

export default function PostBlock({ id }: { id: number; }) {
  const { page } = useParams();
  const navigate = useNavigate();
  const handleNavigate = (url: string) => navigate(url);

  return (
    <Stack spacing={2} sx={{ marginBottom: 2 }}>
      <Item>
        <PostHeader />
        <Typography
          variant="h5"
          gutterBottom
        >
          {`${post.title} - ${page || '*'} - ${id}`}
        </Typography>
        <Box sx={{ paddingTop: 4, paddingBottom: 2 }}>
          <Typography paragraph>
            {post.body}
          </Typography>
          <Button
            size="small"
            variant="contained"
            onClick={() => handleNavigate(`/post/${id}`)}
          >
            Read more
          </Button>
          <PostActions />
        </Box>
      </Item>
    </Stack>
  );
}
