import React from 'react';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type HeaderType = { open: boolean; handleDrawerOpen: () => void; };

export default function MenuButton({ open, handleDrawerOpen }: HeaderType) {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{
        marginRight: 5,
        ...(open && { display: 'none' }),
      }}
    >
      <MenuIcon />
    </IconButton>
  );
}
