import * as React from 'react';
import { useParams, Link } from 'react-router-dom';

import { Stack, Pagination, PaginationItem } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

export default function PaginationCustom() {
  const { page } = useParams();

  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        page={Number(page) || 1}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            to={`/posts${item.page === 1 ? '' : `/${item.page}`}`}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
