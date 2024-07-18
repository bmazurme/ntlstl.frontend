import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import Pagination from '../../components/pagination';

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
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: red[500], width: 24, height: 24 }} aria-label="recipe">
              R
            </Avatar>
            <Typography variant="subtitle1" gutterBottom>
              {`subtitle1 - ${page}`}
            </Typography>
          </Stack>
          <Typography variant="h5" gutterBottom>
            h3. Post
          </Typography>
          <Box sx={{ paddingTop: 4, paddingBottom: 2 }}>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleNavigate('/post/2')}
            >
              Read more
            </Button>
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
