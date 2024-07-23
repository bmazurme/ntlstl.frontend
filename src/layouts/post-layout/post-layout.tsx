import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Box, Stack, Typography, Divider, Button,
} from '@mui/material';

import CommentsLayout from '../comments-layout';
import PostHeader from '../../components/post-header';
import PostActions from '../../components/post-actions';
import { Item } from '../../components/item';

import { post } from '../../mocks/post';

export default function PostLayout({ comments }: { comments?: boolean; }) {
  const { id } = useParams();

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          <PostHeader />
          <Typography
            variant="h5"
            gutterBottom
          >
            {`h3. Post${id}`}
          </Typography>
          <Box sx={{ paddingTop: 4, paddingBottom: 2 }}>
            <Typography paragraph>
              {post.body}
            </Typography>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ marginBottom: 2 }}
          >
            {post.tags.map((name, i) => (
              <Button
                key={i}
                variant="text"
                size="small"
              >
                {name}
              </Button>
            ))}
          </Stack>
          <Divider />
          <PostActions />
        </Item>
        {comments && <CommentsLayout />}
      </Stack>
    </Box>
  );
}
