import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export default function ProfileLayout() {
  const { page } = useParams();
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/');

  return (
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
          h3. Profile
        </Typography>
      </Item>
      <Button onClick={handleNavigate}>click</Button>
    </Stack>
  );
}
