import { useState } from 'react';
import { PaletteMode } from '@mui/material';

export default function useDarkTheme() {
  const currentTheme = localStorage.getItem('ms-theme');
  const condition: PaletteMode = currentTheme === 'dark' ? 'dark' : 'light';
  const [isDark, setIsDark] = useState<PaletteMode>(condition);
  const providerTheme = { isDark, setIsDark };

  return { providerTheme };
}
