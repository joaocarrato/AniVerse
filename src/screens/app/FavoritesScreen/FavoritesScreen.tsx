import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function FavoritesScreen({}: AppTabScreenProps<'FavoritesScreen'>) {
  return (
    <Screen>
      <Text>FavoritesScreen</Text>
    </Screen>
  );
}
