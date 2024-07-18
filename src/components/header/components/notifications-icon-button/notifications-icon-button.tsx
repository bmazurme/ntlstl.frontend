import React from 'react';

import { IconButton } from '@mui/material';

import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NotificationsIconButton() {
  return (
    <IconButton
      size="small"
      aria-label="notifications icon button"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="primary"
    >
      <NotificationsIcon />
    </IconButton>
  );
}
