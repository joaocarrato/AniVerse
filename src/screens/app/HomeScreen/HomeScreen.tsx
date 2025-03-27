import React from 'react';

import {Screen} from '@components';

import {HomeHeader} from './components/HomeHeader';
import {HomeSectionTitle} from './components/HomeSectionTitle';

export function HomeScreen() {
  return (
    <Screen scrollable>
      <HomeHeader />

      <HomeSectionTitle
        title="Top Hits Anime"
        marginTop="s24"
        marginBottom="s12"
      />
    </Screen>
  );
}
