import { useState } from 'react';
import { PaletteMode } from '@mui/material';

export default function useDarkTheme() {
  const currentTheme = localStorage.getItem('ms-theme');
  const condition: PaletteMode = currentTheme === 'dark' ? 'dark' : 'light';
  const [isDark, setIsDark] = useState<PaletteMode>(condition);

  const toggleIsDark = () => {
    setIsDark(isDark === 'light' ? 'dark' : 'light');
    localStorage.setItem('ms-theme', isDark === 'light' ? 'dark' : 'light');
  };

  const providerTheme = { isDark, toggleIsDark };

  return { providerTheme };
}
