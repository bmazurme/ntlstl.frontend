import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';

export default function Logo() {
  const navigate = useNavigate();
  const onHandleNavigate = () => navigate('/');

  return (
    <Box
      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    >
      <Button onClick={onHandleNavigate} variant="text">NTLSTL</Button>
    </Box>

  );
}
