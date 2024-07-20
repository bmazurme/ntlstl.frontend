import React from 'react';

import {
  Box, Stack, TextField, Divider,
} from '@mui/material';

import Autocomplete from '../autocomplete';
import ButtonGroup from '../button-group';

type PostFormType = { id?: string; saveAction: () => void };

export default function PostForm({ id, saveAction }: PostFormType) {
  console.log(id, saveAction);

  return (
    <>
      <Box sx={{ paddingTop: 4, paddingBottom: 2 }}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginBottom: 2 }}
      >
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
      <Stack
        direction="row"
        spacing={2}
        sx={{ paddingTop: 2 }}
      >
        <Autocomplete />
      </Stack>
      <Divider sx={{ paddingTop: 2 }} />
      <ButtonGroup />
    </>
  );
}
