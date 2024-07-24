import React from 'react';

import {
  Box, Typography, Button, TextField,
} from '@mui/material';

export default function CommentForm() {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
      >
        h6 Comment
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        sx={{ width: '100%', marginTop: 2 }}
        defaultValue="Default Value"
      />
      <Box sx={{ paddingTop: 2 }}>
        <Button variant="contained">Submit</Button>
      </Box>
    </>
  );
}
