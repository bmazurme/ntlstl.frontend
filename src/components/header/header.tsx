import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Button, Stack, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  Logo, MenuButton, ProfileMenu, ThemeButton, NotificationsIconButton,
} from './components';

import { DrawerContext } from '../../context';
import { useAppLocation } from '../../hooks';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header() {
  const { pathname } = useAppLocation();
  const { isOpen } = useContext(DrawerContext);
  const navigate = useNavigate();
  const handleNavigate = (url: string) => navigate(url);

  return (
    <AppBar color="default" position="fixed" open={isOpen}>
      <Toolbar>
        <MenuButton />
        <Logo />
        <Stack spacing={1} direction="row">
          <Button
            size="small"
            variant={pathname === '/posts' ? 'contained' : 'text'}
            onClick={() => handleNavigate('/posts')}
          >
            Posts
          </Button>
          <Button
            size="small"
            variant={pathname === '/post/2' ? 'contained' : 'text'}
            onClick={() => handleNavigate('/post/2')}
          >
            Post
          </Button>
          <Button
            size="small"
            variant={pathname === '/post/add' ? 'contained' : 'text'}
            onClick={() => handleNavigate('/post/add')}
          >
            Post add
          </Button>
          <Button
            size="small"
            variant={pathname === '/post/2/edit' ? 'contained' : 'text'}
            onClick={() => handleNavigate('/post/2/edit')}
          >
            Post edit
          </Button>
        </Stack>

        <Stack marginLeft={3} spacing={1} direction="row">
          <NotificationsIconButton />
          <ProfileMenu />
          <ThemeButton />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
