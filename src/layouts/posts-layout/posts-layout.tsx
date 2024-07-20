import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import Pagination from '../../components/pagination';
import PostHeader from '../../components/post-header';
import PostActions from '../../components/post-actions';

import { post } from '../../mocks/post';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export default function PostLayout() {
  const { page } = useParams();
  const navigate = useNavigate();
  const handleNavigate = (url: string) => navigate(url);

  return (
    <>
      <Stack spacing={2}>
        <Item>
          <PostHeader />
          <Typography variant="h5" gutterBottom>
            {`${post.title} - ${page || '*'}`}
          </Typography>
          <Box sx={{ paddingTop: 4, paddingBottom: 2 }}>
            <Typography paragraph>
              {post.body}
            </Typography>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleNavigate('/post/2')}
            >
              Read more
            </Button>
            <PostActions />
          </Box>
        </Item>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{ padding: 2, justifyContent: 'center' }}
      >
        <Pagination />
      </Stack>
    </>
  );
}
