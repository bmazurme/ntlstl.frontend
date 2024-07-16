import React, { useContext } from 'react';

import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

import ThemeContext from '../../../../context/theme-context';

export default function ThemeButton() {
  const { isDark, toggleIsDark } = useContext(ThemeContext);

  return (
    <IconButton
      size="small"
      color="primary"
      aria-label="theme mode"
      onClick={toggleIsDark}
    >
      {isDark === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
    </IconButton>
  );
}
