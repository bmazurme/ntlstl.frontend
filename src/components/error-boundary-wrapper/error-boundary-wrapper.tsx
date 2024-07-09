import React from 'react';
import type { PropsWithChildren } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';

import Content from '../content';

import { textCenter, boxProps, boxSecondaryProps } from './error-boundary-wrapper.style';

type ErrorBoundaryWrapperProps = PropsWithChildren<unknown>;

const commonProps: TypographyProps = {
  variant: 'subtitle1',
  gutterBottom: true,
  sx: { textCenter },
};

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Content
      children={(
        <Box sx={boxProps}>
          <Typography
            textAlign="center"
            variant="h2"
            gutterBottom
          >
            APP-ERROR
          </Typography>
          <Typography {...commonProps}>
            {error.message}
          </Typography>
          <Box sx={boxSecondaryProps}>
            <Typography {...commonProps}>
              Try to
            </Typography>
            <Button
              onClick={resetErrorBoundary}
              variant="text"
            >
              <Typography {...commonProps}>
                Reload app
              </Typography>
            </Button>
            <Typography {...commonProps}>
              or
            </Typography>
            <Button
              onClick={resetErrorBoundary}
              variant="text"
              size="small"
              href="/"
            >
              <Typography {...commonProps}>
                Go to homepage
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
    />
  );
}

export default function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary onReset={() => window.location.reload()} FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
