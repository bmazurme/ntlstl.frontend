import React, { useContext } from 'react';

import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';

import {
  Logo, MenuButton, ProfileMenu, ThemeButton, NotificationsIconButton,
} from './components';

import { DrawerContext } from '../../context';

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
  const { isOpen } = useContext(DrawerContext);

  return (
    <AppBar position="fixed" open={isOpen}>
      <Toolbar>
        <MenuButton />
        <Logo />
        <NotificationsIconButton />
        <ProfileMenu />
        <ThemeButton />
      </Toolbar>
    </AppBar>
  );
}
