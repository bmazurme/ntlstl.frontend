import React, { useState, MouseEvent } from 'react';

import {
  Menu, MenuItem, IconButton, Divider, ListItemIcon,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AccountCircle, Logout as LogoutIcon, Person as PersonIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function ProfileMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onHandleNavigate = (url: string) => {
    setAnchorEl(null);
    navigate(url);
  };

  return (
    <>
      <IconButton
        size="small"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="primary"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => onHandleNavigate('/post/add')}>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          Add post
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => onHandleNavigate('/profile/1')}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
    </>
  );
}
