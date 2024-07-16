import { createContext } from 'react';

import { PaletteMode } from '@mui/material';

type ThemeType = {
  isDark: PaletteMode,
  toggleIsDark: () => void,
};

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
// @ts-ignore
const ThemeContext = createContext<ThemeType>({ isDark: false, toggleIsDark: 'light' });

export default ThemeContext;
