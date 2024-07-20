import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import MainPage from './pages/main-page';
import ProfilePage from './pages/profile-page';
import PostsPage from './pages/posts-page';
import PostPage from './pages/post-page';
import PostAddPage from './pages/post-add-page';
import PostEditPage from './pages/post-edit-page';
import NotFoundPage from './pages/not-found-page';

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
          <Routes>
            <Route path="/" element={(<MainPage />)} />
            <Route path="/profile/:id" element={(<ProfilePage />)} />
            <Route path="/posts" element={(<PostsPage />)} />
            <Route path="/posts/:page" element={(<PostsPage />)} />
            <Route path="/post/add" element={(<PostAddPage />)} />
            <Route path="/post/:id" element={(<PostPage />)} />
            <Route path="/post/:id/edit" element={(<PostEditPage />)} />
            <Route path="*" element={(<NotFoundPage />)} />
          </Routes>
        </ThemeProvider>
      </DrawerContext.Provider>
    </ThemeContext.Provider>
  );
}
