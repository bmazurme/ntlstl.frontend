import React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonGroup() {
  return (
    <Stack direction="row" spacing={2} sx={{ paddingTop: 2 }}>
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained">Save</Button>
    </Stack>
  );
}
