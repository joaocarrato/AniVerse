import React from 'react';

import {ActivityIndicator, Box, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
}
export function SearchEmpty({loading, error}: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      No anime to be displayed
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          No anime found, did you write the correct name?
        </Text>
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
