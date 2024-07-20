import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import { logoStyle } from './logo-style';

export default function Logo() {
  const navigate = useNavigate();
  const onHandleNavigate = () => navigate('/');

  return (
    <Box sx={logoStyle}>
      <Button
        variant="text"
        onClick={onHandleNavigate}
      >
        NTLSTL
      </Button>
    </Box>
  );
}
