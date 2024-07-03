import React, { useMemo } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import ThemeContext from './context/theme-context';
import useDarkTheme from './hooks/use-dark-theme';

import MainPage from './pages/main';

import { getDesignTokens } from './utils/get-design-tokens';

export default function MiniDrawer() {
  const { providerValue } = useDarkTheme();
  const theme = useMemo(
    () => createTheme(getDesignTokens(providerValue.isDark)),
    [providerValue.isDark],
  );
  return (
    <ThemeContext.Provider value={providerValue}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
