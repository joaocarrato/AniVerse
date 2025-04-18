import React from 'react';

import {ActivityIndicator, Box, Text} from '@components';

type Props = {
  isError: boolean;
  isLoading: boolean;
};

export function HomeEmptyList({isError, isLoading}: Props) {
  if (isError) {
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Error finding animes</Text>
    </Box>;
  }

  if (isLoading) {
    <Box flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator />
    </Box>;
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>No anime available</Text>
    </Box>
  );
}
