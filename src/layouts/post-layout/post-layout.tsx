import React from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import CommentsLayout from '../comments-layout';
import PostHeader from '../../components/post-header';
import PostActions from '../../components/post-actions';

import { post } from '../../mocks/post';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PostLayout() {
  const { id } = useParams();

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          <PostHeader />
          <Typography variant="h5" gutterBottom>
            {`h3. Post${id}}`}
          </Typography>
          <Box sx={{ paddingTop: 4, paddingBottom: 2 }}>
            <Typography paragraph>
              {post.body}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
            {post.tags.map((name, i) => <Button key={i} variant="text" size="small">{name}</Button>)}
          </Stack>
          <Divider />
          <PostActions />
        </Item>
        <CommentsLayout />
      </Stack>
    </Box>
  );
}
