import React from 'react';

import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';

import Logo from '../logo';
import MenuButton from '../menu-button';
import ProfileMenu from '../profile-menu';
import ThemeButton from '../theme-button';
import NotificationsIconButton from '../notifications-icon-button';

type HeaderType = { open: boolean; handleDrawerOpen: () => void; };

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

export default function Header({ open, handleDrawerOpen }: HeaderType) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <MenuButton
          handleDrawerOpen={handleDrawerOpen}
          open={open}
        />
        <Logo />
        <NotificationsIconButton />
        <ProfileMenu />
        <ThemeButton />
      </Toolbar>
    </AppBar>
  );
}
