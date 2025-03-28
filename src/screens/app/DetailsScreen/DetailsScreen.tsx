import React from 'react';

import {useGetAnimeId} from '@domain';

import {Screen, Text} from '@components';
import {AppStackScreenProps} from '@routes';

import {DetailsHeader} from './components/DetailsHeader';
import {DetailsInfo} from './components/DetailsInfo';

export function DetailsScreen({route}: AppStackScreenProps<'DetailsScreen'>) {
  const animeId = route.params.id;
  const {anime} = useGetAnimeId(animeId);

  if (!anime) {
    return null;
  }

  return (
    <Screen
      canGoBack
      title={anime?.titles.title}
      iconName="bookmark"
      scrollable>
      <DetailsHeader anime={anime} />

      <DetailsInfo anime={anime} />

      <Text my="s24" preset="paragraphSmall">
        {anime.synopsis}
      </Text>

      <Text>{anime.background}</Text>

      <Text preset="headingSmall">Episodes</Text>
    </Screen>
  );
}
