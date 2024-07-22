import React from 'react';

import { Button, Stack } from '@mui/material';

export default function ButtonGroup() {
  return (
    <Stack direction="row" spacing={2} sx={{ paddingTop: 2 }}>
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained">Save</Button>
    </Stack>
  );
}
