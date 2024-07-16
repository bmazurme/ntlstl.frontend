import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PostLayout() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: red[500], width: 24, height: 24 }} aria-label="recipe">
              R
            </Avatar>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1
            </Typography>
          </Stack>
          <Typography variant="h5" gutterBottom>
            h3. Post
          </Typography>
          <Box sx={{ paddingTop: 4, paddingBottom: 4 }}>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
            <Button variant="text" size="small">Text</Button>
            <Button variant="text" size="small">Text</Button>
            <Button variant="text" size="small">Text</Button>
          </Stack>
          <Divider />
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
        </Item>
        <Item>
          <Typography variant="h6" gutterBottom>
            h6 Comment
          </Typography>
        </Item>
      </Stack>
    </Box>
  );
}
