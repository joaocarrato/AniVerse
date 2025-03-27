import React from 'react';

import {Screen, Text} from '@components';
import {AppStackScreenProps} from '@routes';

export function DetailsScreen({}: AppStackScreenProps<'DetailsScreen'>) {
  return (
    <Screen>
      <Text>DetailsScreen</Text>
    </Screen>
  );
}
