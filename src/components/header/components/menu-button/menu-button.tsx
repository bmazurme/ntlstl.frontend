import React, { useContext } from 'react';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { DrawerContext } from '../../../../context';

export default function MenuButton() {
  const { isOpen, setIsOpen } = useContext(DrawerContext);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={onToggle}
      edge="start"
      sx={{
        marginRight: 5,
        ...(isOpen && { display: 'none' }),
      }}
    >
      <MenuIcon />
    </IconButton>
  );
}
