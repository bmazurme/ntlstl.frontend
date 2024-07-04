import React, { useMemo } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import MainPage from './pages/main';

import { ThemeContext, DrawerContext } from './context';
import { useDarkTheme, useDrawer } from './hooks';

import { getDesignTokens } from './utils/get-design-tokens';

export default function MiniDrawer() {
  const { providerTheme } = useDarkTheme();
  const { providerDrawer } = useDrawer();
  const theme = useMemo(
    () => createTheme(getDesignTokens(providerTheme.isDark)),
    [providerTheme.isDark],
  );

  return (
    <ThemeContext.Provider value={providerTheme}>
      <DrawerContext.Provider value={providerDrawer}>
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </DrawerContext.Provider>
    </ThemeContext.Provider>
  );
}
