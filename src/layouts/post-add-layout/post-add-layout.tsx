import React from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Autocomplete from '../../components/autocomplete';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PostAddLayout() {
  const { id } = useParams();

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: red[500], width: 24, height: 24 }} aria-label="recipe">
              R
            </Avatar>
            <Typography variant="subtitle1" gutterBottom>
              {`subtitle1 - ${id}`}
            </Typography>
          </Stack>
          <Typography variant="h5" gutterBottom>
            h3. Post Add
          </Typography>
          <Box sx={{ paddingTop: 4, paddingBottom: 2 }}>
            <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth />
          </Box>
          <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
            <TextField
              id="outlined-multiline-static"
              label="Content"
              multiline
              fullWidth
              rows={4}
              sx={{ marginTop: 2 }}
              defaultValue="Default Value"
            />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ paddingTop: 2 }}>
            <Autocomplete />
            {/* <TextField id="outlined-basic" label="Tags" variant="outlined" fullWidth /> */}
          </Stack>
          <Divider sx={{ paddingTop: 2 }} />
          <Stack direction="row" spacing={2} sx={{ paddingTop: 2 }}>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained">Save</Button>
          </Stack>
        </Item>
      </Stack>
    </Box>
  );
}
