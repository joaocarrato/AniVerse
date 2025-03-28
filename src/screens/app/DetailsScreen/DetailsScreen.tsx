import React, {useRef} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Episodes, useGetAnimeId, useGetEpisodeId} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {Screen, Text} from '@components';
import {AppStackScreenProps} from '@routes';

import {DetailsHeader} from './components/DetailsHeader';
import {DetailsInfo} from './components/DetailsInfo';
import {EpisodesCard} from './components/EpisodesCard';

export function DetailsScreen({route}: AppStackScreenProps<'DetailsScreen'>) {
  const animeId = route.params.id;
  const {anime} = useGetAnimeId(animeId);
  const {episodes} = useGetEpisodeId(animeId);

  const flatListRef = useRef<FlatList<Episodes>>(null);

  useScrollToTop(flatListRef);

  if (!anime) {
    return null;
  }

  if (!episodes) {
    return null;
  }

  function renderItem({item}: ListRenderItemInfo<Episodes>) {
    return (
      <EpisodesCard trailerUrl={anime?.trailer.imageUrl} episodes={item} />
    );
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

      <Text preset="headingSmall" my="s12">
        Episodes
      </Text>

      <FlatList
        ref={flatListRef}
        horizontal
        data={episodes.data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}
